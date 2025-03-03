window.BENCHMARK_DATA = {
  "lastUpdate": 1740965450679,
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
        "date": 1740792569273,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135242771,
            "range": "± 1528386",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82234835,
            "range": "± 1880738",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110888119,
            "range": "± 1389143",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119135026,
            "range": "± 1431705",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130300565,
            "range": "± 3096278",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132517800,
            "range": "± 1030400",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80806378,
            "range": "± 2203029",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81924394,
            "range": "± 886963",
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
        "date": 1740878822867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15016,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66116,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3204 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19268,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3268 kB"
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
        "date": 1740878918370,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137662972,
            "range": "± 3419202",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81161521,
            "range": "± 1009508",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110320020,
            "range": "± 2191302",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117708984,
            "range": "± 685543",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132017443,
            "range": "± 3442657",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132526492,
            "range": "± 3040273",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80647616,
            "range": "± 2610937",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82519865,
            "range": "± 864569",
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
        "date": 1740965087944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14888,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65308,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12316 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18176,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18936,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3192 kB"
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
        "date": 1740965450282,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137734874,
            "range": "± 4225385",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80677131,
            "range": "± 769160",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111378584,
            "range": "± 1723618",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118346440,
            "range": "± 2821013",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129662282,
            "range": "± 2647474",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132649990,
            "range": "± 2032882",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81378978,
            "range": "± 1949736",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83277206,
            "range": "± 1131726",
            "unit": "ns/iter"
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
        "date": 1740878820834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20540.2927,
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
        "date": 1740965087948,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 18896.6732,
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
        "date": 1740878822020,
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
        "date": 1740965089138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8999999999999995,
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
        "date": 1740792985976,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.10711926441079,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 191ms 235us 557ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.5065470812074,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 163ms 819us 977ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.759247476036926,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 754ms 131us 884ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.068330725577052,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 364ms 351us 713ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.56029189087659,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 623ms 861us 255ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.42507925653337,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 984ms 615us 344ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.547929628187259,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 812ms 16us 112ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.32198791435551,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 755ms 55us 122ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.45474746723964,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 746ms 201us 247ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.87916019032569,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 721ms 343us 624ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.41702871620019,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 912ms 362us 236ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.124992946551163,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 15ms 531us 3ns"
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
        "date": 1740879390721,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.398868608344905,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 84ms 381us 525ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.433499887694815,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 447ms 267us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.911047265326582,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 64ms 370us 611ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.2256006526776,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 678ms 853us 847ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.59562325204682,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 25s 909ms 673us 578ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.60062977511349,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 783ms 65us 9ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.730431593236467,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 830ms 922us 554ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.96896850432025,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 553ms 415us 943ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.41226471733175,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 283ms 161us 554ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 77.35334241255761,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 927ms 689us 597ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.541428348540315,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 454ms 271us 477ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.25095241213321,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 534ms 854us 982ns"
          }
        ]
      }
    ]
  }
}