window.BENCHMARK_DATA = {
  "lastUpdate": 1740706501308,
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
      }
    ]
  }
}