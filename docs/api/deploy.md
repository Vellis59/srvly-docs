---
slug: /api/deploy
sidebar_label: Deploy Script
---

# Deploy Script

`GET /api/deploy`

Downloads a shell script that bootstraps a new server for srvly management.

## What It Does

The script automates server hardening and srvly setup in a single run:

1. **SSH hardening** — disables password authentication, enforces key-only access
2. **UFW firewall** — allows ports 22 (SSH), 80 (HTTP), 443 (HTTPS), denies everything else
3. **Fail2Ban** — bans IPs after 3 failed SSH attempts (1h ban duration)
4. **Docker installation** — installs Docker Engine and Compose plugin
5. **srvly deployment** — clones the repository, generates `.env`, starts the stack

## Usage

Run this on a fresh Ubuntu 24.04 server as root:

```bash
curl -sL https://your-domain.com/api/deploy | bash
```

For non-root setups, you may need to prepend `sudo`:

```bash
curl -sL https://your-domain.com/api/deploy | sudo bash
```

## Notes

- The script is **idempotent** — safe to re-run on an already-configured server
- It detects existing Docker and skips reinstallation if already present
- After completion, the server appears in your srvly dashboard
- This endpoint does **not** require authentication (it's a public setup script)
