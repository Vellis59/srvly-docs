---
title: "Postgres Backup"
sidebar_position: 42
tags: [dev-infra, database, databases, backup]
---

# Postgres Backup

> The postgres-backup-s3 app is a powerful tool designed to backup your PostgreSQL databases to Amazon S3. It supports periodic backups, allowing you to schedule automatic backups at your convenience. This ensures that your data is always safe and can be restored whenever needed. The app also offers the option to backup all available databases at once, creating a single archive with a timestamp for easy identification. For added security, the app provides an encryption feature. By setting an encryption password, your backup can be encrypted and only decrypted with the correct password. This app is perfect for those who want to ensure their PostgreSQL databases are securely backed up in a reliable and efficient manner.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Databases |
| **Default Port** | 80 |
| **Docker Image** | `easypanel/postgres-backup-s3` |
| **Dependencies** | Docker, Postgres |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 📚 [Documentation](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)
- 💻 [GitHub](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)
