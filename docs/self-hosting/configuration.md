---
slug: /self-hosting/configuration
sidebar_label: Configuration
---

# Configuration

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `POSTGRES_PASSWORD` | PostgreSQL password | ✅ |
| `AUTH_SECRET` | NextAuth encryption secret | ✅ |
| `NEXT_PUBLIC_BASE_URL` | Your srvly domain URL | ✅ |
| `NEXT_PUBLIC_APP_URL` | Same as BASE_URL | ✅ |
| `NEXTAUTH_URL` | Same as BASE_URL | ✅ |
| `AUTH_TRUST_HOST` | Set to `true` for production | ✅ |
| `GITHUB_CLIENT_ID` | GitHub OAuth App client ID | ✅ |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App client secret | ✅ |
| `SSH_KEY_PATH` | Path for generated SSH keys | ✅ |
| `REDIS_URL` | Redis connection for BullMQ job queue | ❌ (recommended) |
| `SSH_ENCRYPTION_KEY` | AES-256-GCM key for SSH encryption (fallback: `AUTH_SECRET`) | ❌ |

## GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/applications/new)
2. Create a new OAuth App:
   - **Application name**: `srvly`
   - **Homepage URL**: `https://YOUR_DOMAIN`
   - **Authorization callback URL**: `https://YOUR_DOMAIN/api/auth/callback/github`
3. Copy the **Client ID** and generate a **Client Secret**
4. Add them to your `.env` file