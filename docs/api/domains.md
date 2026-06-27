---
slug: /api/domains
sidebar_label: Domains & SSL
---

# Domains & SSL

`POST /api/domains/enable-ssl`

Enable SSL for an application domain.

## Request Body

```json
{
  "serverId": "uuid",
  "domain": "app.example.com",
  "appName": "my-app",
  "port": 8080
}
```