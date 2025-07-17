# 🌐 Personal Web Server for Automated Web + Hardware Applications

A production-grade web server and GPIO control system configured to host personal web apps, automate daily tasks, and control real-world hardware. Built with React, Next.js, Node.js, TypeScript, TailwindCSS, and ESLint on the frontend, and **Python + FastAPI + GPIO + Uvicorn** on the backend. Publicly accessible via **Cloudflare ZeroTrust**, and deployed on a Raspberry Pi 5 for low-power, high-efficiency use.

---

## 🔍 Problem Statement

I needed a reliable and secure web server to:
- Host personal web applications publicly
- Automate daily routines
- Interact with physical hardware (e.g., GPIO control)
- Deepen my full-stack and embedded systems expertise

---

## 🎯 Project Goals

- Host full-stack applications and make them publicly accessible
- Integrate software automation with **real-time GPIO hardware control**
- Explore scalable deployment on limited hardware (Raspberry Pi 5)
- Enhance DevOps, system administration, and IoT skills
- Build and expose a **Pulse Width Modulator control interface** over the web

---

## 🛠️ Technologies Used

### 💻 Web & Backend Stack

- **Frontend:**
  - React — UI component library
  - Next.js — Full-stack React framework (SSR/ISR)
  - TailwindCSS — Utility-first CSS framework

- **Backend (Web & Hardware Control):**
  - **Python** — Backend language for controlling GPIO
  - **FastAPI** — High-performance web API framework
  - **Uvicorn** — ASGI server to run FastAPI app
  - **lgpio** — Library for controlling PWM and GPIO on Raspberry Pi
  - **Raspberry Pi pin factory** — Native GPIO interface

- **Tooling:**
  - Node.js & TypeScript — Server-side scripting and type safety
  - ESLint — Code quality management
  - WebStorm — Remote Python/Node.js development IDE

- **Deployment & Security:**
  - Cloudflare ZeroTrust — Public access tunnel and security layer
  - SSH — Secure remote connection to the Pi
  - Ubuntu Server — Custom OS installed on Raspberry Pi 5

---

## 🔌 Hardware Integration: PWM Over Web

- A **PWM signal generator** was built using Python and the Raspberry Pi’s GPIO interface.
- Controlled via a RESTful web API exposed by **FastAPI**, hosted on the Pi.
- Hosted using **Uvicorn** for asynchronous performance.
- The web frontend communicates with the backend to send PWM values (e.g., duty cycle, frequency).
- Accessible from the public internet through **Cloudflare Tunnel**, with ZeroTrust authentication.

> ✅ Result: Users can control PWM output (e.g., LED brightness, motor speed) directly from a web interface anywhere in the world.

---

## 🔍 Pulse Width Modulators vs. Oscillators — What's the Difference?

To understand how this project controls hardware using GPIO, it’s important to distinguish Pulse Width Modulation (PWM) from other signal generation methods like oscillators or waveform generators.

### ⚙️ Pulse Width Modulator (PWM)

- What It Is:
  PWM generates a digital signal that rapidly switches between ON and OFF at a fixed frequency. The key variable is the duty cycle — the percentage of time the signal is ON during one cycle.
- Purpose in This Project:
  Used to control power delivery to devices (like LEDs, motors, servos) by varying the duty cycle, not the voltage itself.
- Use Cases:
  LED brightness control
  Motor speed regulation
  Servo positioning
  Efficient power delivery in embedded systems
- Example:
  A 1kHz PWM signal with a 25% duty cycle delivers 25% of full power on average.

### 🔄 Oscillator
- What It Is:
  An oscillator creates a continuous waveform (usually sine, square, or triangle) with a fixed amplitude and frequency.
- Key Difference from PWM:
  Oscillators are analog or high-frequency digital signal generators.
  They do not vary duty cycle — the waveform shape and frequency are typically fixed.
  Used for clock generation, modulation, and carrier wave transmission.
- Use Cases:
  Timing circuits and clocks (e.g., quartz oscillators)
  Radio frequency (RF) communication
  Audio signal generation
  Frequency synthesizers
- Example:
  A 10MHz sine wave oscillator would continuously produce a sine wave at 10 million cycles per second, regardless of amplitude control needs.

---

## 🧩 Design Decisions

- Used **FastAPI** for its speed, type annotations, and automatic documentation
- Selected **lgpio** for low-latency PWM control over the Pi’s GPIO pins
- Designed a secure frontend-backend communication model using HTTPS tunnels via Cloudflare
- Used **Next.js** for modular routing and React Server Components
- Enabled hardware-software integration without requiring local network access

---

## 🔐 Architecture Overview

```plaintext
+----------------+        +--------------------+        +-------------------------+        +------------------------+
|   Web Client   |<------>| Cloudflare Tunnel  |<------>| Raspberry Pi 5 (Server) |<------>| Breadboard or Hardware |
|  (Browser UI)  |        | (ZeroTrust Access) |        |                         |        |    (Web Controlled)    |
+----------------+        +--------------------+        | Next.js + FastAPI       |        +------------------------+
                                                        | PWM control via GPIO    |
                                                        +-------------------------+
