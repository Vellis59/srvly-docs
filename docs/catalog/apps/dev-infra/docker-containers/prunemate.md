---
title: "PruneMate"
sidebar_position: 3
tags: [dev-infra, docker-containers, docker, devops, system-administration, cleanup]
---

# PruneMate

> PruneMate is a self-hosted Docker cleanup and management tool that provides a web-based interface for pruning unused Docker resources from your system. It helps you reclaim disk space by identifying and removing unused containers, images, volumes, networks, and build cache. With its intuitive dashboard, you can easily monitor Docker resource usage, schedule automatic cleanup tasks, and manually trigger pruning operations without using command-line tools. PruneMate connects directly to your Docker daemon via the Docker socket, allowing it to safely analyze and clean up orphaned resources that accumulate over time. The application features configurable cleanup schedules, selective pruning options to choose which resource types to clean, detailed logging of all cleanup operations, and real-time statistics showing disk space recovered. With timezone support and customizable time format settings, you can schedule cleanup operations to run during off-peak hours. Perfect for developers and system administrators who manage Docker environments and want to automate the cleanup of unused resources, homelab enthusiasts running multiple containers who need to manage disk space efficiently, CI/CD environments where frequent image builds create significant cleanup overhead, or anyone looking for a simple web interface to manage Docker resource cleanup without remembering complex docker system prune commands.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Docker & Containers |
| **Default Port** | 8080 |
| **Docker Image** | `anoniemerd/prunemate:1.3.3` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://prunemate.org)
- 📚 [Documentation](https://prunemate.org/documentation.html)
- 💻 [GitHub](https://github.com/anoniemerd/PruneMate)
