window.BENCHMARK_DATA = {
  "lastUpdate": 1742001782140,
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
        "date": 1741051567940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14892,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2732 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65988,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18180,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3204 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19088,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3088 kB"
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
        "date": 1741051583943,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137713282,
            "range": "± 5649933",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82126566,
            "range": "± 1275140",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110916271,
            "range": "± 1656610",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118198264,
            "range": "± 1415597",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131821960,
            "range": "± 8599596",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133053469,
            "range": "± 825115",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82000911,
            "range": "± 2457143",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84119057,
            "range": "± 941168",
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
        "date": 1741137815869,
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
            "value": 65604,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 17920,
            "unit": "kB",
            "extra": "shim: 14720 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19012,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3140 kB"
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
        "date": 1741137932002,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137791586,
            "range": "± 2268932",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82405375,
            "range": "± 1757830",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113393814,
            "range": "± 1284321",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119841252,
            "range": "± 2115968",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132456692,
            "range": "± 2844678",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 135121841,
            "range": "± 7680914",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83369419,
            "range": "± 3163975",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84926166,
            "range": "± 1063739",
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
        "date": 1741224246535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14632,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18176,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19136,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3008 kB"
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
        "date": 1741224340358,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134913777,
            "range": "± 4685670",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80922268,
            "range": "± 1186484",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114073574,
            "range": "± 1378948",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121974277,
            "range": "± 1531807",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132482014,
            "range": "± 2147219",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133083280,
            "range": "± 1218289",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80219901,
            "range": "± 2544521",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82584090,
            "range": "± 1230671",
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
        "date": 1741310661220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14504,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3204 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19140,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3012 kB"
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
        "date": 1741310849142,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137415929,
            "range": "± 2701331",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82687181,
            "range": "± 2828796",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112775465,
            "range": "± 1622423",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121195698,
            "range": "± 3252167",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132592928,
            "range": "± 3484320",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132638089,
            "range": "± 1444150",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81152573,
            "range": "± 3193209",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82279022,
            "range": "± 1017286",
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
        "date": 1741396121383,
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
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18564,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3076 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19012,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3012 kB"
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
        "date": 1741396210098,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136168167,
            "range": "± 3875648",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80656212,
            "range": "± 1029955",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110961993,
            "range": "± 1674730",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118370045,
            "range": "± 2100710",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132769168,
            "range": "± 2780402",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133787484,
            "range": "± 2046167",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80761817,
            "range": "± 2057136",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84102170,
            "range": "± 1493915",
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
        "date": 1741482808569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14888,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65476,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18304,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19136,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3136 kB"
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
        "date": 1741482916553,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136910032,
            "range": "± 3171245",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81218411,
            "range": "± 1258343",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112292156,
            "range": "± 1684583",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119251376,
            "range": "± 1323283",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132612028,
            "range": "± 3025112",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133737214,
            "range": "± 1360215",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82010314,
            "range": "± 2050983",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83201598,
            "range": "± 962645",
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
        "date": 1741569115758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15272,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66116,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18304,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18756,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3140 kB"
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
        "date": 1741569374219,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134219984,
            "range": "± 5501235",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79342660,
            "range": "± 801379",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109833969,
            "range": "± 700577",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118572189,
            "range": "± 1296177",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 128147480,
            "range": "± 3742961",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131895818,
            "range": "± 1140684",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81124694,
            "range": "± 2378568",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82709671,
            "range": "± 1263978",
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
        "date": 1741656267327,
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
            "value": 65604,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3332 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19064,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3064 kB"
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
        "date": 1741656363118,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140543423,
            "range": "± 3985851",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81688372,
            "range": "± 1172335",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112196685,
            "range": "± 1370106",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120289615,
            "range": "± 1358108",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132643980,
            "range": "± 4004948",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134803572,
            "range": "± 1825579",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81933857,
            "range": "± 3129241",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84197101,
            "range": "± 986625",
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
        "date": 1741742670740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14632,
            "unit": "kB",
            "extra": "shim: 11904 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65220,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18436,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3204 kB"
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
        "date": 1741742770456,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 141237219,
            "range": "± 2449873",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84303860,
            "range": "± 1158416",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 117786093,
            "range": "± 1777029",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 126345733,
            "range": "± 2002533",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134136265,
            "range": "± 2435982",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136479284,
            "range": "± 3052528",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84547122,
            "range": "± 2120903",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86118348,
            "range": "± 826565",
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
        "date": 1741829117868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15144,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2856 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65860,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18304,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19264,
            "unit": "kB",
            "extra": "shim: 16128 kB\nzygote: 3136 kB"
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
        "date": 1741829193327,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138732411,
            "range": "± 4402696",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81800191,
            "range": "± 837886",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113698513,
            "range": "± 1249346",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121952170,
            "range": "± 1927722",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131274260,
            "range": "± 4070903",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134564272,
            "range": "± 1651496",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82685870,
            "range": "± 1962053",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 86246119,
            "range": "± 1378374",
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
        "date": 1741915396092,
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
            "value": 66116,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18184,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3336 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19136,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3264 kB"
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
        "date": 1741915504169,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135872089,
            "range": "± 2239466",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79573642,
            "range": "± 1438081",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109208369,
            "range": "± 2166027",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118083230,
            "range": "± 1300294",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 128160923,
            "range": "± 2793809",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131822897,
            "range": "± 1851936",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80030837,
            "range": "± 1799190",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81216795,
            "range": "± 1219175",
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
        "date": 1742001781741,
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
            "value": 65604,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18180,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3204 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 18880,
            "unit": "kB",
            "extra": "shim: 15744 kB\nzygote: 3136 kB"
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
        "date": 1741051423343,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20872.4026,
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
        "date": 1741137832534,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19409.5768,
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
        "date": 1741224240748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19119.5378,
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
        "date": 1741310729158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20129.4947,
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
        "date": 1741396185639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19503.672,
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
        "date": 1741482809607,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 21020.9174,
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
        "date": 1741569155227,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20303.1413,
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
        "date": 1741656277732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19232.2476,
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
        "date": 1741742685463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20334.9053,
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
        "date": 1741829125244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20762.4724,
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
        "date": 1741915451860,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20719.6015,
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
        "date": 1741051425651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
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
        "date": 1741137834761,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
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
        "date": 1741224241893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.8999999999999995,
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
        "date": 1741310730729,
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
        "date": 1741396188086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
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
        "date": 1741482810759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.2,
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
        "date": 1741569156857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.5,
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
        "date": 1741656280204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.7,
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
        "date": 1741742687875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.5,
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
        "date": 1741829126439,
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
        "date": 1741915453583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.3,
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
        "date": 1740965610085,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.89974913154152,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 646ms 462us 253ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.21082539400181,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 616ms 50us 977ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.701452746206735,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 20ms 488us 673ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.033860417061357,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 516ms 514us 871ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.633852730167156,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 297ms 156us 195ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.346768475106128,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 952ms 437us 780ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.281160580124755,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 294ms 624us 590ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.98015259785645,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 863ms 473us 992ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.20552224362478,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 122ms 408us 594ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.60230256299033,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 227ms 110us 367ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.04355763494867,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 330ms 314us 931ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.195740947698315,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 744ms 628us"
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
        "date": 1741052035066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.444838720769376,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 438ms 295us 947ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.85474293314991,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 890ms 312us 918ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.742537518118283,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 830ms 927us 937ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.9849502507784,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 733ms 621us 618ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.22878094185628,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 860ms 938us 626ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.921952879713505,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 420ms 278us 550ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.562691916144162,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 731ms 675us 554ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.44438260495723,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 716ms 554us 843ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.10659945402546,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 483ms 366us"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.94758791358689,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 523ms 91us 533ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.23958300221314,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 577ms 935us 829ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.997386923598226,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 510ms 208us 997ns"
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
        "date": 1741138350886,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.975238056669596,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 239ms 931us 117ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.170103690084474,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 647ms 142us 197ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.57654647683437,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 603ms 355us 506ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.957029887437772,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 858ms 193us 607ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.134725484859054,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 222ms 818us 895ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.35034213804723,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 948ms 557us 728ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.34837697572035,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 915ms 474us 879ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.63535280792769,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 656ms 815us 936ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.21217364819421,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 624ms 322us 171ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.92526118915663,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 170ms 847us 19ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.128874093122295,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 607us 992ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.349242620008887,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 164ms 912us 849ns"
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
        "date": 1741224799187,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.79052071660318,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 942ms 794us 775ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.11249350488592,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 691ms 247us 625ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.835356292659839,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 406ms 537us 482ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.025835427067989,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 552ms 39us 975ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.483695120674064,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 678ms 266us 291ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.998186305756192,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 335ms 348us 671ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.55629257840694,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 766ms 481us 80ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.04951773903014,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 528ms 631us 961ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.48242519425492,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 741ms 706us 153ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.57077506093036,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 232ms 628us 608ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.22198844208192,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 644ms 723us 985ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.17817768563429,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 811ms 658us 855ns"
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
        "date": 1741311191825,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.5470127387619,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 30ms 577us 532ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.59315142255803,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 95ms 292us 494ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.79052370470017,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 610ms 858us 139ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.907413992689902,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 80ms 715us 709ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.937018183982936,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 359ms 478us 100ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.65577144258278,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 720ms 249us 90ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.625827468122948,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 390ms 38us 318ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.34331943838938,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 748ms 333us 76ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.77499981975463,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 380ms 68us 118ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.86993138438973,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 356ms 496us 814ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.13887542899147,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 962ms 185us 928ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.967050067453727,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 628ms 976us 284ns"
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
        "date": 1741396613810,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.44768920581897,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 66ms 616us 950ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.06405640428808,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 728ms 439us 330ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.67339446972051,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 150ms 556us 578ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.025529768393875,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 553ms 393us 818ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.90443637223532,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 382ms 136us 122ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.851745529267205,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 413ms 76us 889ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.41666791855806,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 534ms 154us 536ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.98470195734563,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 548ms 569us 452ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.28090583602824,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 774ms 507us 261ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.70371972121046,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 386ms 214us 284ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.273289472541368,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 450ms 390us 942ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.141797227240335,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 950ms 970us 262ns"
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
        "date": 1741483393155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.23127471926035,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 145ms 617us 360ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.023961612165635,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 551ms 881us 454ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.53385975748708,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 804ms 847us 211ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.85223798279765,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 329ms 920us 323ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.14810974759676,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 919ms 270us 100ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.17525658842706,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 275ms 619us 718ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.292304549689518,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 231ms 499us 268ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.54409432175586,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 3ms 714us 206ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.19508102061911,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 627ms 46us 871ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.33781447482293,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 452ms 103us 846ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.118230921979624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 41ms 548us 160ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.930798346781796,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 771ms 493us 194ns"
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
        "date": 1741569640202,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 49.59229074597229,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 20s 164ms 424us 449ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.25414044211379,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 193ms 551us 118ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 13.919819631545142,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 11s 840ms 11us 327ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.571126760271156,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 628ms 872us 458ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.43648385435162,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 28s 219ms 504us 60ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 28.24612475350229,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 35s 403ms 86us 573ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 12.75653515439565,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 18s 391ms 192us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 53.39964135971033,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 726ms 717us 531ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 75.17449651849759,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 302ms 383us 738ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 70.52327516703266,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 179ms 715us 812ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.623574032003967,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 5ms 841us 298ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.55469195701871,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 4s 289ms 283us 437ns"
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
        "date": 1741656772892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.63434154389121,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 999ms 2us 755ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.89342721622176,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 860ms 254us 23ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.717014190798931,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 948ms 565us 316ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.007383979063011,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 633ms 865us 129ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.9175061408989,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 373ms 42us 475ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.331288484712285,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 969ms 255us 510ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.545204316864124,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 826ms 867us 178ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.86900816650634,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 899ms 11us 148ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.27213419686302,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 457ms 623us 184ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.85113348149662,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 359ms 851us 127ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.30968520061768,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 313ms 261us 887ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.213046076424835,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 678ms 724us 361ns"
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
        "date": 1741743167763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.782696226147415,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 945ms 602us 849ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.41949886224366,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 457ms 818us 785ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.960672573984212,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 841ms 914us 697ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.213849928014202,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 729ms 582us 238ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.995538989285926,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 318ms 879us 179ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.44640600312255,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 844ms 599us 126ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.663871966935996,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 185ms 697us 467ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.443092540100565,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 110ms 661us 954ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.57771781199418,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 410ms 378us 789ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.91018195288633,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 173ms 463us 352ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.489019652965506,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 646ms 419us 317ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.384397393166083,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 33ms 675us 881ns"
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
        "date": 1741829607500,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.84874113928136,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 921ms 926us 586ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.511674489622216,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 159ms 753us 500ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.56746866763533,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 646ms 106us 116ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.073818730594661,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 340ms 190us 92ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.778719637693825,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 469ms 928us 298ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.775891895845547,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 584ms 216us 503ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.493519402883381,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 109ms 649us 984ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.22689814886841,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 474ms 300us 239ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.0260770651894,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 341ms 705us 735ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.30706053865879,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 278ms 967us 375ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.283092593471512,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 413ms 395us 168ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.127006167135782,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 7ms 789us 272ns"
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
        "date": 1741915915162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.61129615260089,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 375ms 603us 299ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.75446577461691,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 968ms 534us 233ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.812505403900072,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 510ms 523us 894ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.119121191616166,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 141ms 410us 425ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.71408492281662,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 515ms 292us 683ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.841654487501643,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 510ms 206us 360ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.516333264839824,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 984ms 562us 263ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.43379389138948,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 719ms 879us 13ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.26536574306304,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 458ms 673us 685ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.15596562749555,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 485ms 91us 746ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.26252601972431,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 491ms 62us 261ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.112374924158622,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 64ms 96us 988ns"
          }
        ]
      }
    ]
  }
}