# Personal Web Server for Automated Web + Hardware Applications

# Full-Stack Web-Controlled GPIO System with FastAPI and React

### Description

- A production-ready, low-power full-stack web server deployed on a Raspberry Pi 5
- The system hosts personal web applications and provides remote control over real-world hardware via GPIO
- It combines a Next.js frontend with a FastAPI backend and utilizes Cloudflare ZeroTrust for secure public access

---

## NOTICE

- Please read through this `README.md` to better understand the project's source code and setup instructions
- Also, make sure to review the contents of the `License/` directory
- Your attention to these details is appreciated — enjoy exploring the project!

---

## Problem Statement

- I needed a secure, energy-efficient server to host full-stack web applications and enable remote control over embedded hardware (e.g., LEDs, motors) via GPIO
- The solution had to support both frontend automation and backend hardware interfacing with production-grade deployment

---

## Project Goals

### Build a cloud-accessible personal web server with real-time GPIO control

- Enable users to interact with physical hardware (e.g., motors, LEDs) via a secure web interface using Cloudflare tunneling and authentication

### Explore full-stack development and embedded system deployment on constrained hardware

- Combine Next.js, FastAPI, and GPIO programming to deepen practical skills in software, hardware, and network security

---

## Tools, Materials & Resources

### FastAPI, Uvicorn, and Python

- FastAPI for async backend control; Uvicorn for ASGI server deployment; Python to control GPIO and PWM logic

### Raspberry Pi 5 + lgpio Library

- Used as the host platform; GPIO managed through the `lgpio` library for responsive PWM signaling

### React, Next.js, TailwindCSS, and TypeScript

- Full-featured frontend stack with responsive design, modular routing, and type-safe logic

---

## Design Decision

### FastAPI with Uvicorn for web-based GPIO control

- Chosen for speed, simplicity, and async support — ideal for controlling time-sensitive GPIO output remotely

### Secure tunneling with Cloudflare ZeroTrust

- Provides safe public access without exposing network ports directly or compromising the LAN

### Component-based UI with Next.js and Tailwind

- Enables fast frontend development, SSR/ISR capabilities, and consistent styling with minimal overhead

---

## Features

### Web-Controlled PWM Hardware Interface

- Remotely adjust GPIO output using a REST API to control duty cycle, frequency, and device states

### Real-Time Communication Between Frontend and Hardware

- Uses fetch-based interactions between the Next.js frontend and FastAPI backend for seamless command execution

### Cloudflare Tunnel + ZeroTrust Security

- The site is protected and globally accessible using Cloudflare Tunnel with authentication policies

---

## Block Diagram

```plaintext
+----------------+        +--------------------+        +-------------------------+        +------------------------+
|   Web Client   |<------>| Cloudflare Tunnel  |<------>| Raspberry Pi 5 (Server) |<------>| Breadboard or Hardware |
|  (Browser UI)  |        | (ZeroTrust Access) |        |                         |        |    (Web Controlled)    |
+----------------+        +--------------------+        | Next.js + FastAPI       |        +------------------------+
                                                        | PWM control via GPIO    |
                                                        +-------------------------+
```

---

## Functional Overview

- The Next.js frontend serves a UI for hardware control inputs
- Backend API (FastAPI + Uvicorn) handles hardware interaction requests
- GPIO state is controlled in real-time via Python `lgpio` library
- Cloudflare ZeroTrust enables secure global access to the private Pi server

---

## Challenges & Solutions

### GPIO control via REST API without latency

- Resolved using Python’s `lgpio` with FastAPI’s async event loop and direct pin control on the Pi

### Secure remote access without exposing SSH or port forwarding

- Achieved through Cloudflare Tunnel and ZeroTrust device/user authentication

---

## Lessons Learned

### Full-Stack DevOps Deployment

- Configured complete local-to-cloud deployment pipelines using FastAPI, Uvicorn, and Cloudflare Tunnel

### Embedded + Web Systems Integration

- Gained insight into combining frontend interactivity with low-level GPIO control logic

---

## Project Structure

```plaintext
root/
├── License/
│   ├── LICENSE.md
│   │
│   └── NOTICE.md
│
├── .gitattributes
│
├── .gitignore
│
├── README.md
│
├── public/
│   ├── file.svg
│   │
│   ├── globe.svg
│   │
│   ├── next.svg
│   │
│   ├── vercel.svg
│   │
│   └── window.svg
│
├── src/
│   ├── app/
│   │   ├── engineer/
│   │   │
│   │   ├── mechanic/
│   │   │
│   │   ├── pwm/
│   │   │
│   │   ├── telemetry/
│   │   │
│   │   ├── trainer/
│   │   │
│   │   ├── favicon.ico
│   │   │
│   │   ├── globals.css
│   │   │
│   │   ├── layout.tsx
│   │   │
│   │   ├── page.original.tsx
│   │   │
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── card.tsx
│   │   │   │
│   │   │   ├── progress.tsx
│   │   │   │
│   │   │   └── slider.tsx
│   │   │
│   │   └── controls.tsx
│   │
│   │
│   └── lib/
│       ├── system.ts
│       │
│       └── utils.ts
│
├── components.json
│
├── eslint.config.mjs
│
├── main.py
│
├── next.config.ts
│
├── nucleosuite.fastapi
│
├── nucleosuite.npm
│
├── package-lock.json
│
├── package.json
│
├── postcss.config.mjs
│
├── test.py
│
└── tsconfig.json

```

---

## Future Enhancements

- Implement WebSocket support for real-time status updates
- Extend PWM capabilities to support multi-channel simultaneous output
- Build a mobile-optimized interface for touchscreen GPIO control
- Log hardware usage data and implement analytics for I/O behavior
