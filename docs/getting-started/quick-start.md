---
slug: /getting-started/quick-start
sidebar_label: Quick Start
---

# Quick Start

Get srvly running on your own server in 5 minutes.

## Prerequisites

- A Linux VPS (Ubuntu 24.04 LTS recommended)
- A domain pointing to your server's IP
- A [GitHub OAuth App](https://github.com/settings/applications/new)
- Docker and Docker Compose

## Step 1: Clone and configure

```bash
git clone https://github.com/Vellis59/srvly.git /opt/srvly
cd /opt/srvly
cp platform/.env.example .env
```

Edit `.env` with your values:

```bash
# Generate secrets
openssl rand -base64 32  # for AUTH_SECRET

# Fill in your GitHub OAuth credentials
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

## Step 2: Start the stack

```bash
docker compose -f infra/docker-compose.yml up -d --build
```

## Step 3: Configure your domain

Edit `infra/Caddyfile` and replace `YOUR_DOMAIN` with your actual domain:

```caddyfile
your-domain.com {
    reverse_proxy platform:3000
}
```

Then restart:

```bash
docker compose -f infra/docker-compose.yml up -d caddy
```

## Step 4: Sign in

Open `https://your-domain.com` in your browser and sign in with GitHub.

---

Next: [Features](/getting-started/features)
