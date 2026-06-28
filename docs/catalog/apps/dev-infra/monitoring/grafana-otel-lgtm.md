---
title: "Grafana OTEL LGTM"
sidebar_position: 70
tags: [dev-infra, monitoring, observability, opentelemetry, grafana, prometheus]
---

# Grafana OTEL LGTM

> Grafana OTEL LGTM is an all-in-one OpenTelemetry backend bundled into a single Docker image. It includes the OpenTelemetry Collector, Prometheus for metrics, Grafana Loki for logs, Grafana Tempo for traces, Grafana Pyroscope for application profiles, and Grafana for unified visualization. The collector automatically routes telemetry signals to the correct backend — metrics to Prometheus, logs to Loki, traces to Tempo, and profiles to Pyroscope. It works out of the box with OpenTelemetry's default settings, so applications instrumented with any OpenTelemetry SDK can send data immediately. Optional eBPF auto-instrumentation (OBI) can generate traces and RED metrics for HTTP/gRPC services with zero code changes.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Monitoring & Logging |
| **Default Port** | 3000 |
| **Docker Image** | `grafana/otel-lgtm:0.27.0` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://grafana.com/)
- 📚 [Documentation](https://hub.docker.com/r/grafana/otel-lgtm)
- 💻 [GitHub](https://github.com/grafana/docker-otel-lgtm)
