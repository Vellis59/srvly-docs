---
title: "MySQL Backup"
sidebar_position: 34
tags: [dev-infra, database, databases, backup]
---

# MySQL Backup

> The mysql-backup-s3 app is a powerful tool designed to backup your MySQL databases to your AWS S3 bucket. It supports periodic backups, allowing you to schedule backup times in cron format, ensuring your data is always safe and up-to-date. The app also supports multi-files, meaning you can have one file per database if you choose to. The app requires your AWS access key, AWS secret key, and AWS S3 bucket path. It also requires your MySQL host, user, and password. You can customize the path prefix in your bucket, the AWS S3 bucket region, and the AWS Endpoint URL. The app also allows you to add extra mysqldump options without overriding the default ones. With the mysql-backup-s3 app, you can ensure your MySQL databases are always backed up and secure in your AWS S3 bucket.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Dev & Infrastructure |
| **Subcategory** | Databases |
| **Default Port** | 80 |
| **Docker Image** | `easypanel/mysql-backup-s3` |
| **Dependencies** | Docker, Mysql |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 📚 [Documentation](https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3)
- 💻 [GitHub](https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3)
