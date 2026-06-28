---
title: "Uptrace"
sidebar_position: 90
tags: [dev-infra, monitoring, apm, opentelemetry, observability]
---

# Uptrace

> Uptrace is an open-source APM platform for traces, metrics, and logs using OpenTelemetry, with ClickHouse storage and PostgreSQL metadata. This template follows the official example/docker compose stack (Uptrace, ClickHouse, Postgres, Redis, OTel Collector, Vector, Grafana, Prometheus, Alertmanager, Mailpit). The Vector image uses timberio/vector:0.28.X-alpine to match that upstream example (legacy Docker Hub namespace); migrate to distroless/vector only when you intentionally diverge from upstream.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Monitoring & Logging |
| **Default Port** | 80 |
| **Docker Image** | `uptrace/uptrace:2.1.0-beta.5` |
| **Dependencies** | Docker, Postgres |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://uptrace.dev)
- 📚 [Documentation](https://uptrace.dev/get)
- 💻 [GitHub](https://github.com/uptrace/uptrace)
