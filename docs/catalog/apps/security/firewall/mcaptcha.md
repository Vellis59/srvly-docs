---
title: "mCaptcha"
sidebar_position: 46
tags: [security, firewall, privacy, captcha]
---

# mCaptcha

> mCaptcha is a proof-of-work based captcha system that prioritizes user privacy and offers a fully automated experience. Unlike traditional captcha systems, mCaptcha does not track or profile users, ensuring a privacy-focused user experience. It is designed to be robust and accurate, not relying on IP addresses for rate-limiting, making it suitable for users behind NATs. The user experience is silent and seamless, eliminating the need for annoying image-based captchas. mCaptcha uses a proof-of-work solution to fiercely defend your site, making it more expensive for attackers to target your site than for you to respond to their requests. It is a libre software, with client libraries licensed under proprietary-friendly free software licenses. mCaptcha is also compatible with reCAPTCHA and hCaptcha, making it a convenient drop-in replacement. The core functionality of mCaptcha is to use a SHA256 based proof-of-work system to rate limit users, providing a token upon successful validation that users can then submit with their request or form submission to the target website.

## Quick Info

| Field | Value |
|-------|-------|
| **Category** | Security |
| **Subcategory** | Firewall & Security |
| **Default Port** | 80 |
| **Docker Image** | `mcaptcha/mcaptcha:v0.1.0` |
| **Dependencies** | Docker, Postgres |
| **OS Support** | Ubuntu 22.04, Ubuntu 24.04, Debian 12 |

## Links

- 🌐 [Website](https://mcaptcha.org)
- 📚 [Documentation](https://mcaptcha.org/docs)
- 💻 [GitHub](https://github.com/mcaptcha/mcaptcha)
