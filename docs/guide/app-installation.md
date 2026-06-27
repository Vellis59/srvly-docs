---
slug: /guide/app-installation
sidebar_label: App Installation
---

# Installing Apps

srvly doesn't install apps directly. Instead, it provides your AI agent with the information needed to deploy applications via SSH.

## The Workflow

1. Browse the **Catalog** and find an app you want
2. Copy the **Agent Prompt** — a pre-built prompt for your AI assistant
3. Paste it into your AI agent's chat
4. The agent checks port availability, pulls the Docker image, configures the app, and registers the installation via the srvly API

## Agent Prompts

Each app has a contextual prompt that tells the agent:
- The Docker image and tags
- Ports, volumes, and environment variables
- Domain/SSL configuration
- Where to register the installation in srvly

## Retry Logic

If an installation fails:
1. The agent cleans up (removes failed containers, deletes partial records)
2. Picks a free port
3. Retries the installation
4. Reports the result back