---
slug: /api/domains
sidebar_label: Domains & SSL
---

# Domains & SSL

`POST /api/domains/enable-ssl`

Enables Let's Encrypt SSL for a domain pointing to an application.

## Request Body

```json
{
  "serverId": "uuid",
  "domain": "app.example.com",
  "appName": "my-app",
  "port": 8080
}
```

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `serverId` | string (UUID) | ID of the server hosting the app |
| `domain` | string | Domain name to configure (e.g., `app.example.com`) |
| `appName` | string | Name of the application |
| `port` | integer | Port the application is listening on |

## How It Works

1. srvly creates or updates a Caddy reverse-proxy entry for the domain
2. Caddy automatically provisions a Let's Encrypt TLS certificate
3. HTTP traffic on port 80 is redirected to HTTPS on port 443
4. The certificate renews automatically

## Prerequisites

- The domain's DNS must point to your server's IP address **before** calling this endpoint
- Ports 80 and 443 must be accessible from the internet
- The target application must already be running on the specified port

## Response

```json
{
  "success": true,
  "message": "SSL enabled for app.example.com"
}
```
