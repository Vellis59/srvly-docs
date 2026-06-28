---
slug: /guide/app-installation
sidebar_label: App Installation
---

# Installing Apps

srvly doesn't install apps directly. Instead, your **AI agent** handles the deployment automatically using the information available in the app catalog.

## The Workflow

1. **Browse** the catalog and find an application you want to deploy
2. **Ask your AI agent** to install it (e.g., "Deploy Outline Wiki on my server")
3. The agent pulls the Docker image, configures networking and SSL, and registers the installation via the srvly API

## What the Agent Does

- Checks port availability on the target server
- Pulls the correct Docker image
- Maps ports and configures the firewall
- Sets up a domain with automatic SSL (Caddy)
- Mounts volumes for persistent data
- Registers the installation so it appears in your dashboard

## If It Fails

The agent automatically:
1. Cleans up any failed containers and partial records
2. Picks an alternative port if needed
3. Retries the installation
4. Reports the result

## App Requirements

Each app page in the [catalog](/catalog/overview) lists:
- **Docker image** and version
- **Default port**
- **Dependencies** (PostgreSQL, Redis, etc.)
- **Supported OS** versions
- **Links** to official documentation and source code
