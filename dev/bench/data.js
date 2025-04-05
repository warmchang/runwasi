window.BENCHMARK_DATA = {
  "lastUpdate": 1743817112897,
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
        "date": 1742001876509,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135239525,
            "range": "± 2361486",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78852354,
            "range": "± 1351085",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 107636368,
            "range": "± 1678822",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 116385963,
            "range": "± 1318266",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 128266316,
            "range": "± 4445630",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130169426,
            "range": "± 1968976",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80944284,
            "range": "± 3256068",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 80385845,
            "range": "± 1700913",
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
        "date": 1742088627651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15248,
            "unit": "kB",
            "extra": "shim: 12544 kB\nzygote: 2704 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65220,
            "unit": "kB",
            "extra": "shim: 52992 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3204 kB"
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
        "date": 1742088850911,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137613010,
            "range": "± 3967240",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82462456,
            "range": "± 1030113",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114625657,
            "range": "± 2717714",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121842976,
            "range": "± 911442",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132108799,
            "range": "± 4345760",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 136002423,
            "range": "± 1504414",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83064459,
            "range": "± 3402746",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85450290,
            "range": "± 1631023",
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
        "date": 1742174894893,
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
            "value": 65732,
            "unit": "kB",
            "extra": "shim: 53376 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18256,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3280 kB"
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
        "date": 1742175052129,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136298881,
            "range": "± 2720117",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82039114,
            "range": "± 628115",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111462454,
            "range": "± 7458332",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121509181,
            "range": "± 2276883",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132726715,
            "range": "± 3315095",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134481860,
            "range": "± 1658826",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82182655,
            "range": "± 2312918",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83700893,
            "range": "± 918345",
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
        "date": 1742261094679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14888,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65876,
            "unit": "kB",
            "extra": "shim: 53504 kB\nzygote: 12372 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18052,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3204 kB"
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
        "date": 1742261222623,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140840063,
            "range": "± 2289706",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 87217514,
            "range": "± 1241632",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 118720677,
            "range": "± 1803348",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 127217136,
            "range": "± 3755095",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 136404038,
            "range": "± 3573852",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 139600850,
            "range": "± 1064879",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84915251,
            "range": "± 3465778",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 88269251,
            "range": "± 1659067",
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
        "date": 1742347538817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14888,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2600 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65348,
            "unit": "kB",
            "extra": "shim: 53120 kB\nzygote: 12228 kB"
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
        "date": 1742347635377,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134820326,
            "range": "± 2593128",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79866940,
            "range": "± 1234625",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110355683,
            "range": "± 2351764",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119738545,
            "range": "± 2450454",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129863694,
            "range": "± 3151179",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131237266,
            "range": "± 1095285",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 79895189,
            "range": "± 3074457",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82205846,
            "range": "± 1455653",
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
        "date": 1742434589764,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15016,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66244,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18488,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3256 kB"
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
        "date": 1742434763470,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136338458,
            "range": "± 4138886",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81299278,
            "range": "± 683127",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112429586,
            "range": "± 996195",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119903796,
            "range": "± 2501715",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132139515,
            "range": "± 3841505",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133551944,
            "range": "± 1291298",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82812606,
            "range": "± 1538723",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83521715,
            "range": "± 1002929",
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
        "date": 1742520417656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15016,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65860,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18180,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3204 kB"
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
        "date": 1742520468281,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135341636,
            "range": "± 3835227",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81303722,
            "range": "± 2233652",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 110363066,
            "range": "± 3190261",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119001361,
            "range": "± 1537210",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132574900,
            "range": "± 3578150",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134877906,
            "range": "± 1544857",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81881590,
            "range": "± 3021067",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84847480,
            "range": "± 880609",
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
        "date": 1742606631004,
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
            "value": 18304,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3200 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19008,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3008 kB"
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
        "date": 1742606748163,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138294648,
            "range": "± 2852468",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81329282,
            "range": "± 2589199",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111855089,
            "range": "± 1483561",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119727525,
            "range": "± 2317416",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131587552,
            "range": "± 2966962",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 132922709,
            "range": "± 1152320",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82737839,
            "range": "± 2236470",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83920405,
            "range": "± 1098611",
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
        "date": 1742693440134,
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
            "value": 66244,
            "unit": "kB",
            "extra": "shim: 53888 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3332 kB"
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
        "date": 1742693533210,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138512969,
            "range": "± 4195531",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78699774,
            "range": "± 1295077",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 107771787,
            "range": "± 1075177",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 116512573,
            "range": "± 1021153",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129833152,
            "range": "± 3319337",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130930389,
            "range": "± 1598671",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80530530,
            "range": "± 1576918",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 80183598,
            "range": "± 816120",
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
        "date": 1742779665235,
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
            "value": 65948,
            "unit": "kB",
            "extra": "shim: 53632 kB\nzygote: 12316 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18304,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3072 kB"
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
        "date": 1742779805878,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136355307,
            "range": "± 2173649",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81326105,
            "range": "± 969203",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111526098,
            "range": "± 1892904",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 118856291,
            "range": "± 1268818",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131128289,
            "range": "± 3394238",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133795810,
            "range": "± 2146808",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81724831,
            "range": "± 1482830",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82504532,
            "range": "± 813983",
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
        "date": 1742866708603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14760,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65092,
            "unit": "kB",
            "extra": "shim: 52864 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18432,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3200 kB"
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
        "date": 1742866770140,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 134596937,
            "range": "± 1428237",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 78771428,
            "range": "± 1253494",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 109252865,
            "range": "± 1267458",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 116320358,
            "range": "± 1587384",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130511481,
            "range": "± 4167633",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131651118,
            "range": "± 1409744",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 80146141,
            "range": "± 3473578",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 80601165,
            "range": "± 957012",
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
        "date": 1742952348672,
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
            "extra": "shim: 52864 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18308,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3204 kB"
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
        "date": 1742952554916,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136702249,
            "range": "± 3253597",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82532645,
            "range": "± 1775051",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113524641,
            "range": "± 1518150",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119886104,
            "range": "± 2145800",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131533929,
            "range": "± 3717022",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134517928,
            "range": "± 1764049",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82020336,
            "range": "± 1572541",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 84222638,
            "range": "± 1191271",
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
        "date": 1743038734326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14764,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2604 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66244,
            "unit": "kB",
            "extra": "shim: 54016 kB\nzygote: 12228 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18184,
            "unit": "kB",
            "extra": "shim: 14976 kB\nzygote: 3208 kB"
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
        "date": 1743038853935,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137939793,
            "range": "± 3455333",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 84196457,
            "range": "± 1226454",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 113252081,
            "range": "± 1297068",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 123339375,
            "range": "± 1973558",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132864428,
            "range": "± 3240970",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 138666683,
            "range": "± 2367275",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83635796,
            "range": "± 2701072",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 85713086,
            "range": "± 1367814",
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
        "date": 1743125135911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14760,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2728 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65604,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12356 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18052,
            "unit": "kB",
            "extra": "shim: 14848 kB\nzygote: 3204 kB"
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
        "date": 1743125249809,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 140226931,
            "range": "± 4629967",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81801820,
            "range": "± 949112",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111929217,
            "range": "± 1748396",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119135632,
            "range": "± 2937845",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133752419,
            "range": "± 3766432",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133985730,
            "range": "± 1973499",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81473047,
            "range": "± 2154583",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83744584,
            "range": "± 1278635",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743212291984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54144 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18620,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3388 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19508,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3508 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743212341967,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136235011,
            "range": "± 2940432",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81045127,
            "range": "± 1758585",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112650071,
            "range": "± 1853086",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119708348,
            "range": "± 1251728",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132387368,
            "range": "± 2936779",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133151607,
            "range": "± 1562021",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81503450,
            "range": "± 3655248",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82941909,
            "range": "± 1441323",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743298770820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15396,
            "unit": "kB",
            "extra": "shim: 12416 kB\nzygote: 2980 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66640,
            "unit": "kB",
            "extra": "shim: 54144 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18688,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19128,
            "unit": "kB",
            "extra": "shim: 15616 kB\nzygote: 3512 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743298886880,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 138949242,
            "range": "± 8088707",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81184992,
            "range": "± 1287231",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112746895,
            "range": "± 906972",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119333601,
            "range": "± 2362823",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 134619398,
            "range": "± 4332628",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 133336651,
            "range": "± 1265667",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 84397539,
            "range": "± 3252273",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82766986,
            "range": "± 663545",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743384616092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65872,
            "unit": "kB",
            "extra": "shim: 53248 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3328 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19380,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743384758056,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 137529302,
            "range": "± 2151090",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 79989317,
            "range": "± 1284492",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 111360259,
            "range": "± 1842124",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 117805587,
            "range": "± 1199403",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 129699965,
            "range": "± 3371523",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131408401,
            "range": "± 1391303",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82619552,
            "range": "± 1684695",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81888507,
            "range": "± 658260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743472577441,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 14884,
            "unit": "kB",
            "extra": "shim: 12032 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66384,
            "unit": "kB",
            "extra": "shim: 53760 kB\nzygote: 12624 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3584 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19380,
            "unit": "kB",
            "extra": "shim: 16000 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743472701339,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136827469,
            "range": "± 2362723",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82000396,
            "range": "± 1099068",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112657549,
            "range": "± 1608364",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 120112625,
            "range": "± 5770500",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 132434833,
            "range": "± 2381333",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134318311,
            "range": "± 1630157",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83477448,
            "range": "± 1899571",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83318986,
            "range": "± 2119887",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743557296984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2724 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66768,
            "unit": "kB",
            "extra": "shim: 54272 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18564,
            "unit": "kB",
            "extra": "shim: 15104 kB\nzygote: 3460 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19640,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3384 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743557375297,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 136896778,
            "range": "± 4081175",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 82472698,
            "range": "± 974086",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 114505687,
            "range": "± 1348465",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 121732856,
            "range": "± 2150027",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 133719513,
            "range": "± 3218765",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 134584435,
            "range": "± 2355616",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 83928479,
            "range": "± 1463858",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 83772985,
            "range": "± 1414529",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743643567188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15140,
            "unit": "kB",
            "extra": "shim: 12288 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66768,
            "unit": "kB",
            "extra": "shim: 54272 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18944,
            "unit": "kB",
            "extra": "shim: 15488 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19252,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743643670014,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 139009425,
            "range": "± 5423515",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 80662506,
            "range": "± 1047761",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112303974,
            "range": "± 1074885",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119226750,
            "range": "± 710416",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 131447441,
            "range": "± 3469030",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 131314235,
            "range": "± 2601836",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 81906637,
            "range": "± 1652554",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 82449638,
            "range": "± 1217048",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743729954492,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 66768,
            "unit": "kB",
            "extra": "shim: 54272 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18564,
            "unit": "kB",
            "extra": "shim: 15232 kB\nzygote: 3332 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19636,
            "unit": "kB",
            "extra": "shim: 16256 kB\nzygote: 3380 kB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743730074332,
        "tool": "cargo",
        "benches": [
          {
            "name": "end-to-end/wasmtime/wasi-demo-app:latest",
            "value": 135291490,
            "range": "± 2593609",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmtime/wasi-demo-oci:latest",
            "value": 81552797,
            "range": "± 1760733",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-app:latest",
            "value": 112269635,
            "range": "± 1143741",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmedge/wasi-demo-oci:latest",
            "value": 119055585,
            "range": "± 1688793",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-app:latest",
            "value": 130322992,
            "range": "± 3514015",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wasmer/wasi-demo-oci:latest",
            "value": 130788667,
            "range": "± 1724048",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-app:latest",
            "value": 82098323,
            "range": "± 2385549",
            "unit": "ns/iter"
          },
          {
            "name": "end-to-end/wamr/wasi-demo-oci:latest",
            "value": 81698209,
            "range": "± 814132",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/warmchang/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743817024815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "wamr/memory-usage",
            "value": 15012,
            "unit": "kB",
            "extra": "shim: 12160 kB\nzygote: 2852 kB"
          },
          {
            "name": "wasmedge/memory-usage",
            "value": 65360,
            "unit": "kB",
            "extra": "shim: 52864 kB\nzygote: 12496 kB"
          },
          {
            "name": "wasmer/memory-usage",
            "value": 18816,
            "unit": "kB",
            "extra": "shim: 15360 kB\nzygote: 3456 kB"
          },
          {
            "name": "wasmtime/memory-usage",
            "value": 19380,
            "unit": "kB",
            "extra": "shim: 15872 kB\nzygote: 3508 kB"
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
        "date": 1742001786039,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19792.2479,
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
        "date": 1742088600672,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20634.1984,
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
        "date": 1742174834052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20482.1137,
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
        "date": 1742261105164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19568.8129,
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
        "date": 1742347613638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20468.8751,
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
        "date": 1742434588225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20526.5258,
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
        "date": 1742520418556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20318.7383,
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
        "date": 1742606648224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20858.9698,
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
        "date": 1742693449387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20014.927,
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
        "date": 1742779722568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20802.4128,
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
        "date": 1742866722747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20571.2405,
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
        "date": 1742952367447,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20214.3611,
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
        "date": 1743038758571,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19533.9664,
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
        "date": 1743125198250,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20426.8983,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743212323967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20671.0488,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743298779271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 22075.3394,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743384656682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20374.0307,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743472565834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20743.1622,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743557271472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 19124.506,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743643616641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20117.1134,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743729972289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20470.8128,
            "unit": "req/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/warmchang/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743817110030,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "HTTP RPS",
            "value": 20244.8193,
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
        "date": 1742001787279,
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
        "date": 1742088601886,
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
        "date": 1742174836556,
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
        "date": 1742261107574,
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
        "date": 1742347615296,
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
        "date": 1742434589736,
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
        "date": 1742520419787,
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
        "date": 1742606649773,
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
        "date": 1742693450638,
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
        "date": 1742779723798,
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
        "date": 1742866724506,
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
        "date": 1742952369039,
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
        "date": 1743038760912,
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
        "date": 1743125199634,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743212326311,
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
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743298781196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743384658206,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743472567480,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743557273799,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743643618025,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743729973628,
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
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5",
          "message": "chore(deps): bump openssl from 0.10.70 to 0.10.72 in the cargo group (#965)\n\nBumps the cargo group with 1 update: [openssl](https://github.com/sfackler/rust-openssl).\n\n\nUpdates `openssl` from 0.10.70 to 0.10.72\n- [Release notes](https://github.com/sfackler/rust-openssl/releases)\n- [Commits](https://github.com/sfackler/rust-openssl/compare/openssl-v0.10.70...openssl-v0.10.72)\n\n---\nupdated-dependencies:\n- dependency-name: openssl\n  dependency-version: 0.10.72\n  dependency-type: indirect\n  dependency-group: cargo\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-04T21:49:47Z",
          "url": "https://github.com/warmchang/runwasi/commit/4ec2e401c7dbaeb25e2192dd8a71f59b1af5a3a5"
        },
        "date": 1743817112275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HTTP p95 Latency",
            "value": 4.4,
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
        "date": 1742002307650,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.385883305450704,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 460ms 597us 652ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.820832602186705,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 916ms 715us 703ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.605064500996939,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 469ms 399us 771ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.943451908236426,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 918ms 942us 567ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.401779430790285,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 471ms 184us 531ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.520675170424887,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 874ms 563us 987ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.38084778197385,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 733ms 680us 279ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.25807510864622,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 775ms 226us 11ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.36492319254718,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 600ms 24us 794ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.24716915528211,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 841ms 372us 772ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.170901283793647,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 839ms 472us 176ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.154479032627222,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 902ms 336us 682ns"
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
        "date": 1742089151092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.84817855061445,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 922ms 128us 17ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.83645005946776,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 904ms 549us 651ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.88120865197386,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 198ms 842us 741ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.237835399391367,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 626ms 119us 51ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.02890185587135,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 5ms 931us 850ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.99412238537078,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 339ms 865us 296ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.53005899719568,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 909ms 507us 727ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.18051789674952,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 187ms 884us 126ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.73158231416289,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 542ms 81us 456ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.0894090062346,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 317ms 457us 325ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.455920137817422,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 768ms 403us 810ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.06732467142832,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 238ms 114us 960ns"
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
        "date": 1742175393259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.268182586373555,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 893ms 299us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.798358915838186,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 736ms 987us 351ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.375203269740704,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 564ms 233us 718ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.775067424215786,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 681ms 586us 235ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 35.96567518293165,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 804ms 288us 253ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.06814559566201,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 401ms 919us 335ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.272294830174227,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 15s 344ms 920us 588ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 54.349206666095,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 399ms 532us 603ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 76.5302781414263,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 66ms 723us 711ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.06405784248238,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 876ms 543us 36ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 15.83637384516168,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 145ms 768us 708ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.798836076964289,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 295ms 801us 990ns"
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
        "date": 1742261605387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.804168493892774,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 683ms 424us 208ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.75092936606397,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 971ms 300us 823ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.930430707200665,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 977ms 304us 246ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.166962192806674,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 932ms 781us 218ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.04006276568424,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 997ms 794us 424ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.402473168936957,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 10ms 744us 411ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.610567698526577,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 472ms 321us 78ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.9947657767679,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 545ms 470us 823ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.91940782231217,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 833ms 773us 99ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.54253394281469,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 597ms 573us 355ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.330896553323615,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 233ms 625us 278ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.242718465003207,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 566ms 48us 944ns"
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
        "date": 1742348126341,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.80674480478944,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 302ms 505us 953ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 33.976814052410425,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 29s 431ms 835us 441ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.474355171736176,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 9s 87ms 706us 370ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.817281665672377,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 488ms 762us 282ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.70131040385057,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 524ms 276us 989ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.011286449311722,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 469ms 343us 569ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.357343998724634,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 865ms 182us 786ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.21139140269964,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 112ms 204us 286ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.74055757083167,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 863ms 298us 531ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 71.3845484449741,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 14s 8ms 633us 826ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.023128023977655,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 409ms 786us 560ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.984953765330012,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 558ms 829us 677ns"
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
        "date": 1742435223714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.79773905313886,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 305ms 861us 960ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 34.84104178961517,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 701ms 782us 399ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.519655272013837,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 872ms 158us 551ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.815810381960123,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 495ms 464us 252ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.50211164511455,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 395ms 675us 344ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.26051922491152,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 34s 175ms 743us 510ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.355165746986053,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 877ms 393us 433ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.32051469774711,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 18s 76ms 476us 791ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 77.71727237183192,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 867ms 152us 558ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.55419239386764,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 595ms 418us 119ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.187985863939378,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 774ms 207us 638ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.923112079402522,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 801ms 793us 708ns"
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
        "date": 1742520874274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.64214470866634,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 364ms 29us 237ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.07579737193884,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 509ms 686us 876ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.692090090279365,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 63ms 835us 292ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.899042486168671,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 118ms 407us 168ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.866585971013,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 408ms 506us 982ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.672203215368697,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 701ms 575us 604ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.476543461352772,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 203ms 3us 379ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.0094989137015,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 540ms 936us 494ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.55595340865817,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 261ms 520us 566ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.0612126661955,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 687ms 153us 53ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.389298193678652,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 15ms 425us 321ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.998421408626289,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 506ms 166us 981ns"
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
        "date": 1742607160572,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.23355054993106,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 144ms 783us 180ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.53487919252372,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 371ms 104us 602ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.779654916124036,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 660ms 578us 388ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.182433479825022,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 865ms 594us 32ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.41589470540678,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 726ms 609us 316ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.426890145646393,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 865ms 665us 706ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.598026795444571,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 540ms 81us 590ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.02800252743112,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 535ms 245us 67ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.17001812552121,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 631ms 44us 222ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.87279911446312,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 355ms 985us 242ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.320110491806442,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 274ms 94us 958ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.152115645647278,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 911ms 394us 268ns"
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
        "date": 1742693962953,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.95073376250829,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 18s 885ms 479us 557ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.381649071556105,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 486ms 384us 634ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.854817170414146,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 318ms 230us 75ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.325375081456789,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 251ms 257us 779ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.54107527938919,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 637ms 489us 538ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.252061366938026,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 55ms 598us 687ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.593692996726048,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 563ms 526us 868ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.16178319955034,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 193ms 420us 576ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.72597284068854,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 236ms 12us 191ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.76850985957324,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 198ms 95us 117ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.453818689542963,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 776ms 165us 27ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.169538481024063,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 844ms 684us 137ns"
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
        "date": 1742780188837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.86650050067272,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 280ms 267us 424ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.74982421618384,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 972ms 165us 512ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.711994725918197,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 971ms 748us 130ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.963519204808513,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 829ms 198us 821ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.79559795378922,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 458ms 107us 667ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.953487728524923,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 385ms 93us 885ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.572031205599371,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 680ms 938us 752ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.21158817238186,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 789ms 926us 108ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.56597645888392,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 568ms 186us 108ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.71977755632625,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 34ms 448us 637ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.37671847749177,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 62ms 294us 96ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.988956547693638,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 543ms 168us 281ns"
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
        "date": 1742867163973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.44917510949544,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 66ms 76us 786ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.69829608028888,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 12ms 541us 488ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.850190670185881,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 339ms 202us 722ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.182529645351742,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 865ms 176us 842ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.43900774230882,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 710ms 109us 597ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.1056607603902,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 216ms 344us 526ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.544905390518396,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 828ms 496us 484ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.023850132405165,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 849ms 540us 823ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.26771078446204,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 615ms 477us 224ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.01140404053055,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 511ms 431us 285ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.422514315079976,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 892ms 15us 730ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.04374636899286,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 329ms 581us 695ns"
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
        "date": 1742952895541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.8345425476235,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 292ms 154us 437ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.66865066301188,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 35ms 823us 655ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.770953090866833,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 700ms 438us 411ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 14.865136058019118,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 271ms 499us 978ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.853436103457604,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 417ms 681us 7ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.582943218820883,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 803ms 262us 664ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.399090396718828,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 631ms 931us 750ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 55.90468120902736,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 887ms 589us 704ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.03471944482925,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 340ms 389us 488ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.9846950088742,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 336ms 54us 776ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.403316336766675,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 963ms 282us 26ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.8561692893882,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 3s 66ms 935us 131ns"
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
        "date": 1743039263818,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.838163661036624,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 290ms 806us 799ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.805300991468414,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 928ms 825us 406ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.646010443959733,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 277ms 979us 442ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.020862636388284,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 574ms 72us 622ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.39484030504037,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 741ms 657us 187ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.07561510516733,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 249ms 527us 782ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.40410100232001,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 604ms 33us 484ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 56.98734538227715,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 547ms 755us 441ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.18106979890135,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 471ms 771us 735ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 73.49006576169097,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 607ms 281us 333ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.121869793931047,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 27ms 544us 744ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 15.976915701966254,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 590ms 303us 326ns"
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
        "date": 1743125655211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.23185056059519,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 145ms 406us 285ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.58160753424815,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 336ms 141us 504ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.83694778529433,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 399ms 307us 86ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.02479318087279,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 556ms 656us 585ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.709498211377635,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 518ms 517us 812ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.450574245784154,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 840ms 103us 176ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.713336491677733,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 921ms 713us 881ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.185051561222544,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 487ms 87us 494ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 79.84959142570642,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 523ms 545us 608ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.41824821890565,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 437ms 564us 360ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.357104729424574,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 135ms 513us 683ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.15313952055549,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 907ms 469us 983ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743212776440,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.47979071536641,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 425ms 98us 395ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.902064816012796,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 853ms 551us 185ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.81479235954021,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 500ms 102us 312ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.253589912361724,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 558ms 337us 791ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.44409755589404,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 11ms 795us 401ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.257998032412434,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 49ms 113us 128ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.758203086050134,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 12s 683ms 910us 373ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.81462175047768,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 2ms 574us 704ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 80.57900559531517,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 410ms 180us 451ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.11183488037288,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 313ms 481us 179ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.61275834999225,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 194ms 699us 696ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.401573800227336,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 969ms 758us 889ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743299303246,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.8382304997293,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 290ms 781us 926ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.83891569336486,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 902ms 629us 883ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.75756678469163,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 761ms 848us 182ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.220741019549132,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 699ms 823us 597ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.347838002386744,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 77ms 89us 403ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.4131481886243,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 880ms 515us 815ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.693779574782514,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 25ms 857us 802ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.42559652914886,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 827ms 765us 448ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.53829617277562,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 264ms 175us 816ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 75.09808700074629,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 315ms 918us 420ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.485505709599163,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 659ms 346us 314ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.35568697254957,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 140ms 813us 81ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jiaxiao Zhou",
            "username": "Mossaka",
            "email": "duibao55328@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8",
          "message": "Merge pull request #960 from Mossaka/rc1\n\ncontainerd-shim-wasm: bump version to 1.0.0-rc.1",
          "timestamp": "2025-03-28T20:58:20Z",
          "url": "https://github.com/warmchang/runwasi/commit/a73e5bcea5a19f88981b97daaa1c4b7d1832b8c8"
        },
        "date": 1743385505032,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.19860278963836,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 531ms 783us 8ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 36.543636042832404,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 364ms 545us 740ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.668213839665512,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 174ms 626us 504ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.01804486700709,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 586ms 563us 621ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.12414158858365,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 230ms 98us 786ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.399755455466067,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 32s 895ms 1us 457ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.614901727048922,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 448ms 932us 651ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 58.440214974635666,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 111ms 504us 474ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.9004698717155,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 674ms 195us 751ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.91329480034027,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 1ms 653us 389ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.315520090570736,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 291ms 334us 536ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.35707859818433,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 135ms 611us 350ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743473142355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.387023513645886,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 846ms 379us 688ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.104415629614024,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 486ms 444us 855ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.564284586762703,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 661ms 113us 702ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.19642327389843,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 804ms 958us 310ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 36.776828886707925,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 27s 191ms 33us 873ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.757025867251123,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 605ms 508us 980ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.436287741951114,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 425ms 318us 898ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.91153415695809,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 267ms 717us 296ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.55724392756865,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 729ms 570us 820ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.46450698383957,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 429ms 216us 690ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.234940565526376,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 595ms 544us 250ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.29353729494639,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 1s 374ms 27us 131ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743557761611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 51.909351234605325,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 264ms 351us 725ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.89985959416287,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 855ms 262us 146ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.882486025788115,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 193ms 75us 19ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.234541778729785,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 640ms 307us 42ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.04449866043192,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 285ms 9us 271ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.986093364173684,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 348ms 792us 317ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.665820296421114,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 175ms 263us 417ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.632930293084215,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 769ms 258us 111ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.52267635832946,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 735ms 174us 683ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 76.15325288081657,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 131ms 415us 431ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.718889770132687,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 59s 812ms 584us 74ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.423709709568108,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 887ms 583us 724ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743644076200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 52.5957237919334,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 12ms 952us 535ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.73273511118524,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 27s 985ms 543us 141ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.800459857131495,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 7s 565ms 468us 212ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.318798348508512,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 5s 279ms 271us 732ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 38.18804552466272,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 186ms 205us 297ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 30.291621331944725,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 12ms 429us 49ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.686011731284497,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 13s 67ms 305us 482ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 59.26498132393608,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 16s 873ms 370us 710ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 81.03551802662379,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 340ms 267us 877ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 74.69566708133652,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 387ms 657us 398ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.522392974525747,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 523ms 920us 569ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.400659114339714,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 973ms 159us 251ns"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6a47341565bd44c04fae8540b41721d504294e9a",
          "message": "chore(deps): bump clap from 4.5.32 to 4.5.34 in the patch group (#961)\n\nBumps the patch group with 1 update: [clap](https://github.com/clap-rs/clap).\n\n\nUpdates `clap` from 4.5.32 to 4.5.34\n- [Release notes](https://github.com/clap-rs/clap/releases)\n- [Changelog](https://github.com/clap-rs/clap/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/clap-rs/clap/compare/clap_complete-v4.5.32...clap_complete-v4.5.34)\n\n---\nupdated-dependencies:\n- dependency-name: clap\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T17:04:37Z",
          "url": "https://github.com/warmchang/runwasi/commit/6a47341565bd44c04fae8540b41721d504294e9a"
        },
        "date": 1743730487423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Stress Test Throughput with containerd service - wamr (app)",
            "value": 50.99778191491686,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 19s 608ms 695us 956ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (app)",
            "value": 35.13678500015832,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 28s 460ms 202us 36ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (app)",
            "value": 14.528955028783532,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 8s 828ms 74us 560ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (app)",
            "value": 15.006248066346926,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 6s 638ms 909us 45ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wamr (oci)",
            "value": 37.71309681218436,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 26s 515ms 987us 403ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmedge (oci)",
            "value": 29.687887956078043,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 33s 683ms 770us 347ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmer (oci)",
            "value": 13.384173556122525,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 1m 14s 715ms 110us 37ns"
          },
          {
            "name": "Stress Test Throughput with containerd service - wasmtime (oci)",
            "value": 57.169281797616996,
            "unit": "tasks/s",
            "extra": "Image: oci\nTasks: 1000\nParallel: 4\nDuration: 17s 491ms 911us 190ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wamr (app)",
            "value": 78.71322211940239,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 12s 704ms 345us 891ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmedge (app)",
            "value": 72.46752765775913,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 13s 799ms 284us 70ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmer (app)",
            "value": 16.42093201042327,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 897ms 883us 224ns"
          },
          {
            "name": "Stress Test Throughput with mock service - wasmtime (app)",
            "value": 16.1251414338715,
            "unit": "tasks/s",
            "extra": "Image: app\nTasks: 1000\nParallel: 4\nDuration: 1m 2s 14ms 959us 937ns"
          }
        ]
      }
    ]
  }
}