---
slug: /api/authentication
sidebar_label: Authentication
---

# API Authentication

All API requests require a **Bearer token** in the `Authorization` header:

```http
Authorization: Bearer *** Token
The token is generated in the srvly dashboard under **Settings → API Tokens**. Each user account can have its own token.

## Where to Find Your Token

1. Open the srvly dashboard
2. Go to **Settings**
3. Copy the token from the **API Token** section

## Usage Examples

```bash
# List installations on a server
curl -H "Authorization: Bearer *** Info

| Endpoint | Auth Required |
|----------|--------------|
| `GET /api/deploy` | No (returns a public shell script) |
| All other API endpoints | Yes (Bearer token) |

## Token Security

- Treat your token like a password — never share it publicly or commit it to Git
- Tokens are stored securely and can be regenerated from the dashboard if compromised
- Each token is tied to your user account and grants full API access
