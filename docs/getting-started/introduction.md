---
slug: /getting-started/introduction
sidebar_label: Introduction
---

# What is srvly?

**srvly** is an open-source VPS management platform that gives you a unified dashboard for all your servers. Connect your VPS instances, deploy applications through your AI agent, and monitor everything in real time.

## How it works

1. **Sign in** with your GitHub account
2. **Add a server** — enter its IP address and srvly generates an SSH key
3. **Connect** — run a one-liner on your server to authorize the key
4. **Deploy** — use the integrated AI agent prompt or the API to install apps
5. **Monitor** — keep an eye on CPU, RAM, disk, health, and logs

## Key concepts

| Concept | Description |
|---|---|
| **Server** | A VPS or dedicated machine you connect to srvly |
| **SSH Key** | Each server gets its own key pair; you can also provide your own |
| **Agent** | Your AI assistant (Hermes, OpenCLAW, etc.) that talks to the srvly API |
| **Installation** | A deployed application recorded via the API |
| **Catalog** | 900+ open-source apps available for one-click deployment |

## The two sides of srvly

srvly has two deployment options:

### 🏠 Self-hosted

You run srvly yourself on your own server. Full control, unlimited servers, completely free.

```
docker compose -f infra/docker-compose.yml up -d --build
```

### ☁️ srvly.app (hosted)

A managed instance running at [console.srvly.app](https://console.srvly.app). Free tier limited to 1 server, paid plans coming for more.

---

Next: [Quick Start](/getting-started/quick-start)
