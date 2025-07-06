# 🌐 Personal Web Server for Automated Web Applications

A production-grade web server configured to host personal web apps, improve daily task automation, and deepen full-stack and hardware development expertise. Built with React, Next.js, Node.js, TypeScript, TailwindCSS, and ESLint, and secured using Cloudflare ZeroTrust for public internet access. Hosted on a Raspberry Pi 5 for low-power, high-capability deployment.

---

## 🔍 Problem Statement

I needed a reliable, scalable, and secure web server to host personal web apps that automate routine tasks and boost productivity. I also wanted to challenge myself by integrating both full-stack development tools and hands-on hardware configuration.

---

## 🎯 Project Goals

- Host personal web applications publicly and securely
- Automate daily routines for improved efficiency
- Learn a modern, production-ready full-stack toolchain
- Explore real-world deployment using physical hardware (Raspberry Pi 5)
- Enhance knowledge in system administration and network security

---

## 🛠️ Technologies Used

### 💻 Software Stack
- **Frontend:**
  - React — UI component library
  - Next.js — React framework with SSR/ISR
  - TailwindCSS — Utility-first CSS framework
- **Backend:**
  - Node.js — JavaScript runtime for backend scripting
  - TypeScript — Static type checking for JavaScript
- **Tooling:**
  - ESLint — JavaScript code linter
  - WebStorm — IDE by JetBrains for remote development
- **Deployment & Security:**
  - Cloudflare ZeroTrust — Public access tunnel and security layer
  - SSH — Secure shell connection to remote Pi
  - Ubuntu Server (Custom) — OS installed on Raspberry Pi 5

### 🧠 Hardware Stack
- **Raspberry Pi 5** — Compact ARM-based server:
  - Supports machine learning acceleration (NPU)
  - Integrated camera port capable of high FPS video transmission
  - Custom OS installation with server optimizations

---

## 🧩 Design Decisions

- Chose **Raspberry Pi 5** to build real deployment experience with limited resources
- Used **Next.js** for efficient file-based routing and optimized SSR
- Enabled secure access through **Cloudflare ZeroTrust**, eliminating the need for port forwarding
- Managed code quality with **ESLint** and type safety via **TypeScript**
- Connected to the Raspberry Pi via **SSH** directly from WebStorm for seamless development and deployment

---

## 🔐 Architecture Overview

```plaintext
+----------------+        +--------------------+        +---------------------+
|   Web Client   |<------>| Cloudflare Tunnel  |<------>| Raspberry Pi 5 (Pi) |
|  (Browser)     |        | (ZeroTrust Access) |        |  Node + React Stack |
+----------------+        +--------------------+        |  Tailwind + TS + OS |
                                                         +---------------------+
