---
slug: /catalog/installing
sidebar_label: Installing
---

# Installing from the Catalog

Deploying applications from the catalog is handled by your **AI agent** — no manual commands needed.

## How It Works

1. **Browse** the catalog and find an app you want to deploy
2. **Ask your AI agent** to install it (e.g., "Deploy AFFiNE on my server")
3. The agent determines the server, pulls the Docker image, configures networking and SSL, and registers the installation via the srvly API

## What the Agent Handles

- Pulling the correct Docker image
- Port mapping and firewall configuration
- Setting up a domain and SSL certificate (Caddy / Nginx)
- Volume mounts for persistent data
- Environment variables (when provided)
- Registering the installation for monitoring

## Prerequisites

Before deploying an app, make sure:

- A **server** is connected to your srvly account
- The server has **Docker** installed (handled automatically during server setup)
- The server meets the app's **OS requirements** (typically Ubuntu 22.04, Ubuntu 24.04, or Debian 12)

## App Requirements

Each app page in the catalog lists the information the agent needs to deploy it:

- **Docker Image** — the container image to pull
- **Default Port** — the port the app listens on
- **Dependencies** — additional services required (e.g., PostgreSQL, Redis)

If an app requires additional configuration (like a database or specific environment variables), mention it when asking your agent.
