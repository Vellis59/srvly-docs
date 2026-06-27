---
slug: /self-hosting/reverse-proxy
sidebar_label: Reverse Proxy
---

# Reverse Proxy

srvly uses **Caddy** as its reverse proxy, which automatically provisions Let's Encrypt TLS certificates.

## Caddyfile Template

```caddyfile
# infra/Caddyfile
YOUR_DOMAIN {
    reverse_proxy platform:3000
}
```

## Custom Domains

For TLS challenge: Let's Encrypt needs port 80/443 to be publicly accessible. Make sure your domain resolves to the server's IP and ports are open in the firewall.

## Cloudflare

If you use Cloudflare as a DNS proxy:

1. Set SSL/TLS mode to **Flexible** or **Full (strict)** with an Origin Certificate
2. If using Flexible, configure Caddy to listen on HTTP only:

```caddyfile
http://YOUR_DOMAIN {
    reverse_proxy platform:3000
}
```