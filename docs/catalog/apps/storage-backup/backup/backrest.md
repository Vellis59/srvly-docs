---
title: "Backrest"
sidebar_position: 6
tags: [storage-backup, backup, restore, data-protection, self-hosted]
---

# Backrest

> Backrest is a web UI and orchestrator for restic backups. It supports scheduling, browsing snapshots, restores, notifications, and any restic-backed storage (S3, B2, rclone remotes, local, etc.). This template keeps the standard data/config/cache/tmp/rclone volumes and optionally bind-mounts host paths at /userdata and /repos like the upstream Docker Compose examples.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Storage & Backup |
| **Subcategory** | Backup & Restore |
| **Default Port** | 9898 |
| **Docker Image** | `ghcr.io/garethgeorge/backrest:v1.13.0` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://garethgeorge.github.io/backrest/)
- 📚 [Documentation](https://hub.docker.com/r/garethgeorge/backrest)
- 💻 [GitHub](https://github.com/garethgeorge/backrest)
