---
slug: /api/docker
sidebar_label: Docker Deploy
---

# Docker Deploy

`POST /api/agent/docker/deploy`

Deploy a Docker application on a server. All inputs are validated with Zod schemas.

## Request Body

```json
{
  "serverId": "uuid (required)",
  "name": "string (required, max 100 chars)",
  "image": "string (required, e.g. nginx:latest)",
  "port": "number (optional, default: 3000, range: 1-65535)",
  "domain": "string (optional, valid domain name)",
  "env": { "KEY": "value" },
  "volumes": ["/host/path:/container/path"]
}
```

### Field Details

- **`serverId`** — UUID of the target server (must belong to the authenticated user)
- **`name`** — App name, used for the container name (lowercased, sanitized)
- **`image`** — Docker image reference (now **required** to prevent invalid fallback)
- **`port`** — Container port to expose (default 3000)
- **`domain`** — Optional domain name for automatic reverse proxy configuration
- **`env`** — Environment variables (keys validated, values written via heredoc to prevent shell injection)
- **`volumes`** — Volume mounts in `hostPath:containerPath` format (both paths validated with regex)