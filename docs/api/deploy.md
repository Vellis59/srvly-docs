---
slug: /api/deploy
sidebar_label: Deploy Script
---

# Deploy Script

`GET /api/deploy`

Returns a shell script that:

1. Hardens SSH (key-only auth)
2. Configures UFW firewall
3. Installs Fail2Ban
4. Installs Docker
5. Clones and deploys srvly

## Usage

```bash
curl -sL https://YOUR_DOMAIN/api/deploy | bash
```