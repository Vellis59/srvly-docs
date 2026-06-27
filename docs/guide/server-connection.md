---
slug: /guide/server-connection
sidebar_label: Server Connection
---

# Server Connection

## How SSH Works

Each server you add gets its own SSH key pair (unless you provide your own):

- **Private key** — stored encrypted in the srvly database
- **Public key** — displayed in the connect command, installed on your target server

## Custom SSH Key

If you have an existing SSH key pair, paste the **public key** when adding the server. srvly will use it alongside its own key.

## Cron Guard

srvly installs an hourly cron job on your target server that checks if the SSH key is still authorized. If someone removes the key, it's re-added automatically. This prevents accidental lockout.

## Connection Check

srvly periodically pings each server to verify connectivity. The dashboard shows the last successful check time and any errors.