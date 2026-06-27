---
slug: /self-hosting/installation
sidebar_label: Installation
---

# Installation

## One-Command Setup

The simplest way to deploy srvly is with the all-in-one script:

```bash
curl -sL https://YOUR_DOMAIN/connect.sh | bash -s -- 'YOUR_SSH_PUBLIC_KEY'
```

This script will:

1. 🔒 Harden SSH (key-only, no passwords)
2. 🔥 Configure UFW firewall (22/80/443)
3. 🛡️ Install Fail2Ban (3 attempts → 1h ban)
4. 🐳 Install Docker + Compose
5. 📥 Clone the srvly repository
6. 🔑 Set up your SSH key (with hourly cron guard)
7. ⚙️ Generate `.env` and deploy the stack

## Manual Installation

```bash
git clone https://github.com/Vellis59/srvly.git /opt/srvly
cd /opt/srvly

# Configure environment
cp platform/.env.example .env
nano .env  # Fill in your secrets

# Deploy
docker compose -f infra/docker-compose.yml up -d --build
```