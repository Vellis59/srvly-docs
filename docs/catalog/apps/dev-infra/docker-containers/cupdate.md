---
title: "Cupdate"
sidebar_position: 6
tags: [dev-infra, docker-containers, docker, container-management, update-monitoring, system-administration]
---

# Cupdate

> Cupdate is a self-hosted web application for monitoring and managing Docker container updates. It provides a centralized dashboard to track available updates for your running containers, view container versions, and manage update notifications. By connecting to the Docker daemon via the Docker socket, Cupdate scans all running containers and checks for newer image versions available in container registries. The web interface displays an overview of your container infrastructure with update status, image tags, registry information, and visual indicators for outdated containers. Cupdate features automatic update checking on a configurable schedule, support for multiple container registries, detailed container information with links to documentation and registries, and the ability to manage container logos and metadata. With its lightweight architecture and persistent storage using BoltDB and SQLite, Cupdate offers an efficient solution for staying informed about container updates without requiring complex automation or CI/CD pipelines. Perfect for home lab administrators managing multiple Docker containers, DevOps teams maintaining staging environments, system administrators tracking container versions across servers, or anyone who wants visibility into their Docker infrastructure's update status without manually checking each container.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Docker & Containers |
| **Default Port** | 8080 |
| **Docker Image** | `ghcr.io/alexgustafsson/cupdate:0.24.5` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://alexgustafsson.github.io/cupdate)
- 💻 [GitHub](https://github.com/alexgustafsson/cupdate)
