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
| `/api/agent/docker/deploy` | POST | Deploy a Docker app on a server |
| `/api/agent/install/register` | POST | Register an app installation |
| `/api/domains/enable-ssl` | POST | Enable SSL for a domain |
| `/api/dispatch` | POST | Execute a command on a server |

## Base URL

All endpoints are relative to your srvly instance:

```
https://YOUR_DOMAIN/api/...
```