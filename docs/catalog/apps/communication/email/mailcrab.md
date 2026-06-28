---
title: "MailCrab"
sidebar_position: 13
tags: [communication, email]
---

# MailCrab

> MailCrab is an email test server designed for development purposes. It is an accept-all SMTP server that provides a web interface for viewing and inspecting all incoming emails. You can view formatted mail, download attachments, view headers, or view the complete raw mail contents. The app runs on all amd64 and arm64 platforms using docker. The backend server and the frontend of the app are both written in Rust. The backend receives email over an unencrypted connection on a configurable port, and all email is stored in memory while the application is running. The frontend initially performs a call to receive all existing email metadata and then subscribes for new messages using the websocket connection. When opening a message, the endpoint is used to retrieve the complete message body and raw email. The backend also accepts a few commands over the websocket, to mark a message as opened, to delete a single message or delete all messages.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Communication |
| **Subcategory** | Email |
| **Default Port** | 1025 |
| **Docker Image** | `marlonb/mailcrab:v1.6.5` |
| **Dependencies** | Docker |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 💻 [GitHub](https://github.com/tweedegolf/mailcrab)
