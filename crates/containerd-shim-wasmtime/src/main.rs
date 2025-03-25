use containerd_shim_wasm::{revision, shim_main, version};
use containerd_shim_wasmtime::WasmtimeEngine;

fn main() {
    shim_main::<WasmtimeEngine>(version!(), revision!(), None);
}
