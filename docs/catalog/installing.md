---
slug: /catalog/installing
sidebar_label: Installing
---

# Installing from the Catalog

Click on an app in the catalog to see its detail page with:

- Full description
- Docker Compose template
- Ports, volumes, environment variables
- Alternative apps in the same category

## Agent Integration

On the app detail page, you'll find a pre-built **Agent Prompt** that your AI assistant can use to deploy the app:

```
Install [App Name] on server [server IP]:
- Docker image: [image:tag]
- Port: [port]
- Volume: [volume path]
- Register via srvly API
```

Copy the prompt, paste it to your agent, and let it handle the deployment.