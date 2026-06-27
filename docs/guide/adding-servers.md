---
slug: /guide/adding-servers
sidebar_label: Adding Servers
---

# Adding a Server

## Step 1: Click Add Server

From the dashboard, click **Add Server** and enter:
- **Name** — a friendly label (e.g., "Production Web")
- **IP Address** — your server's public IP
- **SSH Key** (optional) — paste your existing public key, or let srvly generate one

## Step 2: Run the Connect Command

After creation, you'll see a one-liner to run on your server:

```bash
curl -sL https://YOUR_DOMAIN/connect.sh | bash -s -- 'SSH_PUBLIC_KEY'
```

This command installs the SSH key, Docker, UFW, and Fail2Ban — all in one go.

## Step 3: Test the Connection

Click **Test Connection** from the server detail page. srvly will attempt an SSH connection and report the server's OS, RAM, disk, and uptime.

## Step 4: You're Connected!

Your server appears in the dashboard with live health data. You can now deploy apps, view logs, restart services, and more.