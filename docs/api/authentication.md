---
slug: /api/authentication
sidebar_label: Authentication
---

# API Authentication

API requests require a **Bearer token** in the `Authorization` header:

```http
Authorization: Bearer <server_token>
```

## Getting a Token

Each server has its own token visible on the server detail page in the dashboard.

## Token Security

- Tokens are derived from your GitHub user ID and a server secret
- Tokens are stable — regenerating only happens when you explicitly request it
- Never share your token publicly