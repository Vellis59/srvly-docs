---
slug: /api/docker
sidebar_label: Docker Deploy
---

# Docker Deploy

`POST /api/agent/docker/deploy`

Deploy a Docker application on a server.

## Request Body

```json
{
  "serverId": "uuid",
  "image": "lscr.io/linuxserver/nginx:latest",
  "containerName": "my-app",
  "ports": [{ "host": 8080, "container": 80 }],
  "volumes": [{ "host": "/opt/app/config", "container": "/config" }],
  "env": { "TZ": "Europe/Paris" },
  "network": "bridge",
  "restartPolicy": "unless-stopped"
}
```