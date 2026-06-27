---
slug: /api/overview
sidebar_label: Overview
---

# API Reference

srvly exposes both **tRPC** (internal) and **REST** (agent-facing) endpoints.

## REST Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/deploy` | GET | Download the all-in-one deployment script |
| `/api/agent/servers` | GET | List servers accessible to the agent |
| `/api/agent/docker/deploy` | POST | Deploy a Docker app on a server |
| `/api/agent/install/register` | POST | Register an app installation |
| `/api/agent/install` | GET | List installations on a server |
| `/api/agent/install/exec` | POST | Run commands on a server (host or container mode) |
| `/api/agent/install/logs` | POST | Fetch Docker container logs |
| `/api/agent/proxy/configure` | POST | Configure Caddy reverse proxy |
| `/api/domains/enable-ssl` | POST | Enable SSL for a domain |
| `/api/dispatch` | POST | Execute SSH commands on a server |

## Base URL

All endpoints are relative to your srvly instance:

```
https://YOUR_DOMAIN/api/...
```