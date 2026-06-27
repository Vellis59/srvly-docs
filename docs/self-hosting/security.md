---
slug: /self-hosting/security
sidebar_label: Security
---

## Security

## Hardening Script

The `connect.sh` script (or `infra/secure-deploy.sh`) performs these hardening steps:

1. **UFW Firewall**
   - Default deny incoming
   - Allow SSH (22), HTTP (80), HTTPS (443)
   - Rate limiting on SSH

2. **SSH Hardening**
   - `PermitRootLogin prohibit-password` — key-only root access
   - `PasswordAuthentication no` — no password logins
   - Key-only authentication enforced

3. **🔒 SSH Keys Encrypted at Rest**
   - Private keys are encrypted with AES-256-GCM before being written to PostgreSQL
   - Key derived from `SSH_ENCRYPTION_KEY` env var (or `AUTH_SECRET` as fallback)
   - Backward compatible — existing plaintext keys work without migration
   - Decrypted on-the-fly in memory just before SSH connection

4. **Fail2Ban**
   - SSH jail: 3 failed attempts → 1-hour ban
   - Persistent across restarts

5. **Cron Guard**
   - Hourly cron job at `/etc/cron.hourly/srvly-key-guard`
   - Re-checks and re-adds the srvly SSH key if removed
   - Prevents accidental lockout

## API Security

- **Input validation** — All REST endpoints validated with Zod schemas (types, bounds, regex pattern checks)
- **RCE prevention** — Environment variables use heredoc + `--env-file` instead of inline shell interpolation
- **Host validation** — IP/hostname format verified before SSH connection
- **Auth required** — All agent endpoints require Bearer token authentication

## AI Agent Safety

When using AI agents through srvly, the agent prompt includes strict safety rules:
- Agents **cannot** modify SSH configuration
- Agents **cannot** change firewall rules
- Agents **cannot** run system upgrades
- Agents **cannot** access sensitive files
- Agents must **verify** domain/port availability before deploying