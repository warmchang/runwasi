use std::cell::OnceCell;
use std::collections::HashMap;
use std::fs::File;
use std::io::Read;
use std::os::unix::prelude::PermissionsExt;
use std::path::PathBuf;
use std::sync::Arc;

use anyhow::{Context, Result, bail};
use containerd_shimkit::AmbientRuntime;
use libcontainer::workload::default::DefaultExecutor;
use libcontainer::workload::{
    Executor as LibcontainerExecutor, ExecutorError as LibcontainerExecutorError,
    ExecutorSetEnvsError, ExecutorValidationError,
};
use oci_spec::runtime::Spec;

use crate::sandbox::Sandbox;
use crate::sandbox::context::{RuntimeContext, Source, WasiContext, WasmLayer};
use crate::sandbox::path::PathResolve;
use crate::shim::Shim;

#[derive(Clone)]
enum ExecutorType<S: Shim> {
    Wasm(S::Sandbox),
    Linux,
    CantHandle,
}

pub(crate) struct Executor<S: Shim>(Arc<InnerExecutor<S>>);

impl<S: Shim> Clone for Executor<S> {
    fn clone(&self) -> Self {
        Self(self.0.clone())
    }
}

pub(crate) struct InnerExecutor<S: Shim> {
    ty: OnceCell<ExecutorType<S>>,
    wasm_layers: Vec<WasmLayer>,
}

impl<S: Shim> LibcontainerExecutor for Executor<S> {
    #[cfg_attr(feature = "tracing", tracing::instrument(skip(self), level = "Debug"))]
    fn validate(&self, spec: &Spec) -> Result<(), ExecutorValidationError> {
        // We can handle linux container. We delegate wasm container to the engine.
        match self.ty(spec) {
            ExecutorType::CantHandle => Err(ExecutorValidationError::CantHandle(S::name())),
            _ => Ok(()),
        }
    }

    #[cfg_attr(feature = "tracing", tracing::instrument(skip(self), level = "Debug"))]
    fn exec(&self, spec: &Spec) -> Result<(), LibcontainerExecutorError> {
        // If it looks like a linux container, run it as a linux container.
        // Otherwise, run it as a wasm container
        match self.ty(spec) {
            ExecutorType::CantHandle => Err(LibcontainerExecutorError::CantHandle(S::name())),
            ExecutorType::Linux => {
                log::info!("executing linux container");
                DefaultExecutor {}.exec(spec)
            }
            ExecutorType::Wasm(container) => {
                let ctx = self.ctx(spec);
                log::info!("calling start function");
                match container.run_wasi(&ctx).block_on() {
                    Ok(code) => std::process::exit(code),
                    Err(err) => {
                        log::info!("error running start function: {err}");
                        std::process::exit(137)
                    }
                };
            }
        }
    }

    // This is an no-op for the Wasm `Executor`. Instead of youki's libcontainer setting the envs
    // in the shim process, the shim will manage the envs itself. The expectation is that the shim will
    // call `RuntimeContext::envs()` to get the container's envs and set them in the `Engine::run_wasi`
    // function. This way, the shim can decide how to pass the envs to the WASI context.
    //
    // See the following issues for more context:
    // https://github.com/containerd/runwasi/issues/619
    // https://github.com/containers/youki/issues/2815
    fn setup_envs(
        &self,
        _: HashMap<String, String>,
    ) -> std::result::Result<(), ExecutorSetEnvsError> {
        Ok(())
    }
}

impl<S: Shim> Executor<S> {
    pub fn new(wasm_layers: Vec<WasmLayer>) -> Self {
        Self(Arc::new(InnerExecutor {
            ty: Default::default(),
            wasm_layers,
        }))
    }

    fn ctx<'a>(&'a self, spec: &'a Spec) -> WasiContext<'a> {
        let wasm_layers = &self.0.wasm_layers;
        WasiContext { spec, wasm_layers }
    }

    fn ty(&self, spec: &Spec) -> &ExecutorType<S> {
        self.0.ty.get_or_init(|| {
            let ctx = &self.ctx(spec);
            match is_linux_container(ctx) {
                Ok(_) => ExecutorType::Linux,
                Err(err) => {
                    log::debug!("error checking if linux container: {err}. Fallback to wasm container");
                    let container = S::Sandbox::default();
                    match container.can_handle(ctx).block_on() {
                        Ok(_) => ExecutorType::Wasm(container),
                        Err(err) => {
                            // log an error and return
                            log::error!("error checking if wasm container: {err}. Note: arg0 must be a path to a Wasm file");
                            ExecutorType::CantHandle
                        }
                    }
                }
            }
        })
    }
}

fn is_linux_container(ctx: &impl RuntimeContext) -> Result<()> {
    if let Source::Oci(_) = ctx.entrypoint().source {
        bail!("the entry point contains wasm layers")
    };

    let executable = ctx
        .entrypoint()
        .arg0
        .context("no entrypoint provided")?
        .resolve_in_path()
        .find_map(|p| -> Option<PathBuf> {
            let mode = p.metadata().ok()?.permissions().mode();
            (mode & 0o001 != 0).then_some(p)
        })
        .context("entrypoint not found")?;

    // check the shebang and ELF magic number
    // https://en.wikipedia.org/wiki/Executable_and_Linkable_Format#File_header
    let mut buffer = [0; 4];
    File::open(executable)?.read_exact(&mut buffer)?;

    match buffer {
        [0x7f, 0x45, 0x4c, 0x46] => Ok(()), // ELF magic number
        [0x23, 0x21, ..] => Ok(()),         // shebang
        _ => bail!("not a valid script or elf file"),
    }
}
