window.BENCHMARK_DATA = {
  "lastUpdate": 1740792476411,
  "repoUrl": "https://github.com/warmchang/runwasi",
  "entries": {
    "Criterion.rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740706482136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15144,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65860,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18432,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19008,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3136 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740706683934,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140816772,
            "range": "± 2360508",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84936055,
            "range": "± 1284343",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114528871,
            "range": "± 1813192",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121770802,
            "range": "± 1912775",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133476719,
            "range": "± 2846836",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135399058,
            "range": "± 2203317",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80747737,
            "range": "± 2032418",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84433828,
            "range": "± 847435",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740792471901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15144,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65860,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18176,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18884,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3012 kB"
          }
        ]
      }
    ],
    "HTTP Throughput": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740706499594,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20370.0424,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740792473297,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19795.7662,
            "unit": "req/s"
          }
        ]
      }
    ],
    "HTTP Latency": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740706500968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740792475752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.6,
            "unit": "ms"
          }
        ]
      }
    ],
    "Stress Test Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Jorge Prendes",
            "username": "jprendes",
            "email": "jorge.prendes@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3240088e247f61952fa6b961ff61aa9799ae92be",
          "message": "Merge pull request #876 from z63d/feat/refactor-cgroup-driver\n\nchore: refactor for handling of cgroup driver",
          "timestamp": "2025-02-26T15:35:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/3240088e247f61952fa6b961ff61aa9799ae92be"
        },
        "date": 1740707038758,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.320711347154145,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 872ms 533us 63ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.58425558574703,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 334ms 162us 852ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.689904939617614,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 73ms 959us 914ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.023984081532857,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 560ms 240us 917ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.349925562971386,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 510ms 372us 704ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.368698743434283,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 928ms 641us 706ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.54412850601406,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 832ms 731us 250ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.07059037163243,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 834ms 661us 511ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.15993759305363,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 632ms 652us 708ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.14387331412898,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 487ms 291us 64ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.113985163744477,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 57ms 895us 42ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.212794667503765,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 679ms 680us 802ns"
          }
        ]
      }
    ]
  }
}