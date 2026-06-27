---
slug: /self-hosting/requirements
sidebar_label: Requirements
---

# Requirements

## Minimum

- **Server** — 1 vCPU, 2 GB RAM, 20 GB SSD
- **OS** — Ubuntu 24.04 LTS (or any modern Linux)
- **Docker** — 24+ with Docker Compose v2
- **Domain** — pointed to your server IP
- **Ports** — 22 (SSH), 80 (HTTP), 443 (HTTPS) open

## Recommended

- **Server** — 2 vCPU, 4 GB RAM, 40 GB SSD
- **Docker Compose** — the stack: Postgres + Next.js + Caddy

## Software stack

| Service | Image | Purpose |
|---|---|---|
| Postgres | `postgres:16-alpine` | Database |
| srvly platform | Custom build | Dashboard + API |
| Caddy | `caddy:2-alpine` | Reverse proxy + auto TLS |

## Network

- A **public IP** for the srvly dashboard
- Outbound SSH access to your managed servers
- Inbound 80/443 for the web UI