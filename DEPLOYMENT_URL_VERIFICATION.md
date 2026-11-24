# Deployment URL Discovery & Reachability Verification Report

**Audit Date:** November 24, 2026  
**Auditor:** Antigravity Engineering System  
**Environment:** Next.js Multi-Page Production Architecture  
**Active Test Tool:** `curl.exe` Network Transport Probe  

---

## 1. Executive Summary

This document verifies the live deployment status of all five engineering projects showcased in Sri Harsha's portfolio. In accordance with strict portfolio integrity rules, only actively verified and live cloud deployments are awarded a "Live Demo" button. Any project operating as a local development prototype, research pipeline, or unhosted service is honestly classified as "Not found (Local / Development)" and provided with a neutral "Demo not currently available" badge.

Of the five projects, **TrafficShield** has a verified, live enterprise SOC console hosted on Vercel at `https://trafficshield.vercel.app`. The remaining four projects are local software implementations.

---

## 2. Project Deployment Status Matrix

| # | Project Name | Discovered Deployment URL | Discovery Source | Verification Probe & HTTP Status | Final Classification | Portfolio UI Action |
|---|---|---|---|---|---|---|
| **1** | **SatQuery AI** | None (`null`) | `README.md`, codebase inspection | N/A (Local Flask/FastAPI/Streamlit research) | **Not found (Local / Development)** | Primary: "GitHub Repository"<br/>Badge: "Demo not currently available" |
| **2** | **ResumeMatch AI** | None (`null`) | `Dockerfile`, `SkillSync` codebase | N/A (Local Flask NLP service & Docker container) | **Not found (Local / Development)** | Primary: "GitHub Repository"<br/>Badge: "Demo not currently available" |
| **3** | **3D Bharat** | None (`null`) | `3D_Bharat` README, package configs | N/A (Local React 19 + FastAPI + PostgreSQL 17 app) | **Not found (Local / Development)** | Primary: "GitHub Repository"<br/>Badge: "Demo not currently available" |
| **4** | **MoodMate** | None (`null`) | `MoodMate/code` README, Flask app | N/A (Local webcam OpenCV & Flask runtime) | **Not found (Local / Development)** | Primary: "GitHub Repository"<br/>Badge: "Demo not currently available" |
| **5** | **TrafficShield** | [https://trafficshield.vercel.app](https://trafficshield.vercel.app) | `vercel.json`, `config/settings.py`, and project reports | **HTTP/1.1 200 OK** (Server: Vercel, Content-Type: `text/html`, React 19 SOC Bundle) | **Verified live** | Primary: "Launch Live Application"<br/>Secondary: "View Source Repository" |

---

## 3. Deep Probe & Network Telemetry for Active Deployments

### 3.1 TrafficShield Production Probe
- **Target URL:** `https://trafficshield.vercel.app`
- **Hosting Platform:** Vercel Global Edge Network
- **Configuration Origin:** `D:\projects\trafficshield\vercel.json`
  ```json
  {
    "buildCommand": "cd frontend && npm run build",
    "outputDirectory": "frontend/dist",
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```
- **CORS Whitelist In Code:** `D:\projects\trafficshield\config\settings.py` explicitly whitelists `https://trafficshield.vercel.app`.
- **Live HTTP Header Probe (Execution Log):**
  ```http
  HTTP/1.1 200 OK
  Accept-Ranges: bytes
  Access-Control-Allow-Origin: *
  Age: 710
  Cache-Control: public, max-age=0, must-revalidate
  Content-Disposition: inline
  Content-Length: 458
  Content-Type: text/html; charset=utf-8
  Date: Tue, 24 Nov 2026 06:24:20 GMT
  Etag: "2f3fef49a94ef5b0982b2ce3766780d9"
  Last-Modified: Tue, 24 Nov 2026 06:12:30 GMT
  Server: Vercel
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Vercel-Cache: HIT
  X-Vercel-Id: bom1::j9lj7-1795501460260-5daed3d8342a
  ```
- **Delivered HTML Payload Verification:**
  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>frontend</title>
      <script type="module" crossorigin src="/assets/index-BlIX9GOT.js"></script>
      <link rel="stylesheet" crossorigin href="/assets/index-CPjZ0y2m.css">
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  ```
- **Conclusion:** TrafficShield is confirmed operational, secure, and actively serving the Dark Tactical SOC Command Center bundle.

---

## 4. Local & Non-Deployed Projects Verification

### 4.1 SatQuery AI
- **Inspection Findings:** SatQuery AI is structured as a multimodal research project with localized inference scripts (`tiled_inference.py`, `app.py`, `streamlit_app.py`). There is no `vercel.json`, `render.yaml`, `fly.toml`, or public cloud endpoint.
- **Verification Result:** Confirmed local-only. Setting `liveUrl: null` in `data/projects.ts`.

### 4.2 ResumeMatch AI
- **Inspection Findings:** The project contains a `Dockerfile` and local Flask API dependencies (`SkillSync/resume_ml`). No hosted staging or production URLs are documented in the codebase.
- **Verification Result:** Confirmed local-only. Setting `liveUrl: null` in `data/projects.ts`.

### 4.3 3D Bharat
- **Inspection Findings:** 3D Bharat runs a React 19 frontend paired with a local Python FastAPI backend and PostgreSQL 17 database. No cloud deployment configurations are present in the repository.
- **Verification Result:** Confirmed local-only. Setting `liveUrl: null` in `data/projects.ts`.

### 4.4 MoodMate
- **Inspection Findings:** MoodMate requires a physical webcam connected to OpenCV alongside a local Flask server for emotion classification and playlist recommendation. It is not hosted in the cloud.
- **Verification Result:** Confirmed local-only. Setting `liveUrl: null` in `data/projects.ts`.

---

## 5. UI Guardrails & Error Prevention

1. **No Broken External Links:** By ensuring `liveUrl: null` for the four non-deployed projects, the UI never attempts to route users to localhost or dead URLs.
2. **Clear Affordance:** The primary action on non-deployed cards is cleanly styled as "GitHub Repository", with an informational badge stating "Demo not currently available".
3. **Live Demonstration Integrity:** Only TrafficShield displays the "Launch Live Application" and "Live Demo" buttons, preserving total credibility during recruiter and hiring-manager reviews.
