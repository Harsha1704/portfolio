# Sri Harsha — AI/ML & Full-Stack Engineering Portfolio

> Production-ready, multi-page software engineering portfolio of **Sri Harsha** — B.Tech Computer Science & Engineering (AI & ML) at Lovely Professional University (8.51 CGPA).

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Overview

This portfolio is an enterprise-grade, multi-page application architected with Next.js App Router, React 19, TypeScript, and Tailwind CSS. It highlights applied machine learning engineering, vision-language systems, algorithm performance, and full-stack software development.

### Core Credentials
- **Academic Distinction:** B.Tech CSE (AI & ML) @ Lovely Professional University (**8.51 CGPA**).
- **Algorithmic Problem Solving:** **250+ solved problems** across LeetCode, GeeksforGeeks, Codeforces & HackerRank.
- **Industry Certification:** Oracle Certified Associate — MySQL Database.
- **Hackathon Achievement:** Rank 8 among 50 teams at CODE STORM Hackathon.
- **Industry Experience:** AI/ML Intern at Edufiy Tech Solutions.

---

## Featured Engineering Projects

| Project | Domain | Architecture & Technologies | Live Status | Source Repository |
|---|---|---|---|---|
| **SatQuery AI** | Multimodal AI | Interactive vision-language assistant for remote sensing imagery, OpenCV multi-scale tiling | Local Research Prototype | [GitHub](https://github.com/Harsha1704/Satquery_ai) |
| **ResumeMatch AI** | Applied NLP | Logistic Regression category classifier, TF-IDF feature extraction, weighted requirement matcher | [Live Frontend](https://frontend-mu-rust-l6t4ywn0qf.vercel.app) · [Backend API](https://resumematch-ai-api-atil.onrender.com) | [GitHub](https://github.com/Harsha1704/ResumeMatch_AI) |
| **TrafficShield** | Cybersecurity & Systems | Unidirectional IP network anomaly detection, hybrid XGBoost + Isolation Forest, React 19 SOC console | [Live Deployment](https://trafficshield.vercel.app) | [GitHub](https://github.com/Harsha1704/trafficshield) |
| **MoodMate** | Computer Vision | 4-block CNN facial emotion recognition on FER2013, 15-frame majority voting, audio valence recommender | Local Webcam Application | [GitHub](https://github.com/Harsha1704/MoodMate) |
| **3D Bharat** | 3D & Digital Heritage | Digital preservation platform, React 19 Leaflet map, Python FastAPI, PostgreSQL 17 | Local Web Application | [GitHub](https://github.com/Harsha1704/3D_Bharat) |

---

## Application Architecture

- **Multi-Page App Router:** Dedicated routes for `/about`, `/skills`, `/projects`, `/experience`, `/education`, `/achievements`, `/certifications`, and `/contact`, with dynamic case-study routes (`/projects/[slug]`).
- **Responsive Layouts:** Handcrafted fluid designs adapting seamlessly across Desktop (1440px), Tablet (768px), and Mobile (375px) viewports with zero horizontal overflow.
- **Accessibility & Performance:** Semantic HTML5 landmarks, WAI-ARIA dialog attributes, keyboard focus trapping on mobile drawer, and `prefers-reduced-motion` compliance.
- **SEO & Search Governance:** Automated OpenGraph social card generation, dynamic sitemap (`/sitemap.xml`), and safe non-production crawler guards (`noindex, nofollow` fallback).

---

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Harsha1704/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start local development server with Turbopack
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification

```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Run ESLint validation
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## Deployment on Vercel

The application is pre-configured for Vercel deployment with [vercel.json](vercel.json).

1. Push your code to GitHub.
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. The Next.js framework preset is detected automatically.
4. Deploy a preview to test before pushing to production.

---

## Professional Links & Profiles

- **GitHub:** [@Harsha1704](https://github.com/Harsha1704)
- **LinkedIn:** [sriharsha-jilla](https://linkedin.com/in/sriharsha-jilla/)
- **Resume (PDF):** Available directly via `/Sri_Harsha_Resume.pdf`

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
