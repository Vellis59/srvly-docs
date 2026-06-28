---
title: "SeaweedFS"
sidebar_position: 35
tags: [storage-backup, file-sharing, object-storage, distributed-storage, s3, webdav]
---

# SeaweedFS

> SeaweedFS is a fast, simple, and highly scalable distributed file system for storing and serving billions of files. Starting as an object store with O(1) disk seek performance, it has grown into a full-featured storage platform supporting S3 API, WebDAV, FUSE mount, HDFS, and Hadoop integration. The architecture separates concerns into a master server for volume management, a volume server for blob storage, a filer for directory/file abstraction, an S3 gateway for S3 compatibility, and a WebDAV server for mounted drive access. Features include erasure coding, cloud tiering, cross-datacenter replication, AES-256-GCM encryption, automatic compaction, file TTL, and a built-in admin UI. Licensed under Apache 2.0 with 30k+ GitHub stars.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Storage & Backup |
| **Subcategory** | File Sharing & Sync |
| **Default Port** | 7333 |
| **Docker Image** | `chrislusf/seaweedfs:4.23` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://seaweedfs.com)
- 📚 [Documentation](https://github.com/seaweedfs/seaweedfs/wiki)
- 💻 [GitHub](https://github.com/seaweedfs/seaweedfs)
