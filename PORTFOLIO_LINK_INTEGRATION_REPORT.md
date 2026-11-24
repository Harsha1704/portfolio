# Portfolio Link & Profile Integration Report

**Date:** November 24, 2026  
**Status:** Verification & Remediation Complete  
**System:** Multi-Page Next.js Engineering Portfolio  
**Candidate:** Jilla Lakshmi Narayana Sri Harsha (Sri Harsha)  

---

## 1. Executive Summary

This report documents the comprehensive integration of verified GitHub repositories, CV credentials, professional social links, and live deployment statuses across Sri Harsha's multi-page portfolio.

All unverified placeholder URLs, generic usernames, and disabled states have been eliminated. Strict candidate privacy protections have been preserved by ensuring phone numbers and personal emails are never published to public frontends without consent.

---

## 2. Before / After Link & Profile Mapping

| Feature / Location | Previous State (Before) | Current Verified State (After) | Source of Truth |
|---|---|---|---|
| **SatQuery AI Repo** | `https://github.com/placeholder/satquery-ai` / generic | `https://github.com/Harsha1704/Satquery_ai` | User instructions & Local `D:\projects\SatQuery-AI` git remote |
| **SatQuery AI Live** | `null` | `null` ("Demo not currently available") | Local research prototype |
| **ResumeMatch AI Repo** | `https://github.com/placeholder/resumematch-ai` / generic | `https://github.com/Harsha1704/ResumeMatch_AI` | User instructions & Local `D:\projects\SkillSync` package |
| **ResumeMatch AI Live** | `null` | `null` ("Demo not currently available") | Local Flask & Docker service |
| **3D Bharat Repo** | `https://github.com/placeholder/3d-bharat` / generic | `https://github.com/Harsha1704/3D_Bharat` | User instructions & Local `D:\projects\3D_Bharat` git remote |
| **3D Bharat Live** | `null` | `null` ("Demo not currently available") | Local React 19 + FastAPI app |
| **MoodMate Repo** | `https://github.com/placeholder/moodmate` / generic | `https://github.com/Harsha1704/MoodMate` | User instructions & Local `D:\projects\MoodMate\code` |
| **MoodMate Live** | `null` | `null` ("Demo not currently available") | Local OpenCV & Flask webcam app |
| **TrafficShield Repo** | Missing or placeholder | `https://github.com/Harsha1704/trafficshield` | User instructions & Local `D:\projects\trafficshield` git remote |
| **TrafficShield Live** | Missing or unverified | `https://trafficshield.vercel.app` (Verified HTTP 200) | `vercel.json`, `config/settings.py` & live curl probe |
| **Hero GitHub Link** | Placeholder div with "pending confirmation" tooltip | Active link to `https://github.com/Harsha1704` | Verified GitHub handle |
| **Hero LinkedIn Link** | Placeholder div with "pending confirmation" tooltip | Active link to `https://linkedin.com/in/sriharsha-jilla/` | Verified LinkedIn profile |
| **Hero CV / Resume** | None | Direct download link to `/resume.pdf` | Uploaded `resume.pdf` in `public/resume.pdf` |
| **Footer Links** | "GitHub, LinkedIn, LeetCode... handles pending confirmation" | Active links to GitHub, LinkedIn, and Resume (PDF) | Verified online handles & CV |
| **Contact Online Status**| "URL Pending Confirmation" badges | "Connected" external links for LinkedIn & GitHub | Verified candidate accounts |
| **Problem Solving Stat** | "100+ LeetCode" | "250+ Solved across LeetCode, GFG, Codeforces & HackerRank" | Verified from uploaded CV |
| **Candidate Education** | Estimated enrollment dates | Exact CV periods: Aug 2024 – Present (LPU), Jun 2023 – Mar 2024 (Intermediate), Jun 2021 – Mar 2022 (Matriculation) | Uploaded CV (`resume.pdf`) |
| **Candidate Phone** | Excluded | Excluded (Personal phone kept strictly private) | Privacy rule |
| **Candidate Email** | Excluded | Excluded (Personal email kept strictly private) | Privacy rule |

---

## 3. UI Component Modifications Summary

### 3.1 `data/projects.ts`
- Updated all five projects with exact repository links:
  - `SatQuery AI`: `https://github.com/Harsha1704/Satquery_ai`
  - `ResumeMatch AI`: `https://github.com/Harsha1704/ResumeMatch_AI`
  - `3D Bharat`: `https://github.com/Harsha1704/3D_Bharat`
  - `MoodMate`: `https://github.com/Harsha1704/MoodMate`
  - `TrafficShield`: `https://github.com/Harsha1704/trafficshield`
- Configured `liveUrl: "https://trafficshield.vercel.app"` for TrafficShield.
- Configured `liveUrl: null` for the other four projects.
- Updated TrafficShield technical dossier to reflect its true unidirectional IP network anomaly detection architecture.

### 3.2 `data/profile.ts` & `data/education.ts`
- Verified LPU enrollment dates: `Aug 2024 – Present`.
- Verified Narayana Junior College dates: `Jun 2023 – Mar 2024` (94.9%).
- Verified Sri Chaitanya Techno School dates: `Jun 2021 – Mar 2022` (92.67%).
- Updated metrics: `250+ Solved` across LeetCode, GFG & HackerRank.
- Maintained `email: null` and `emailVerified: false` to protect candidate privacy.

### 3.3 `components/projects/ProjectCard.tsx`
- Integrated `GithubIcon` from `@/components/ui/Icons`.
- If `project.liveUrl` exists (TrafficShield), renders dual buttons: `Live Demo` and `GitHub`.
- If `!project.liveUrl`, renders `GitHub Repository` as the primary action and adds a clean, neutral `Demo not currently available` label.

### 3.4 `components/projects/CaseStudyHero.tsx`
- For live projects (TrafficShield): renders `Launch Live Application` (primary) and `View Source Repository`.
- For local projects: renders `GitHub Repository` (primary) and an informational badge `Demo not currently available`.

### 3.5 `components/sections/HeroSection.tsx`
- Added `CV / Resume` download button linked to `/resume.pdf` with download attribute.
- Replaced disabled placeholder divs with active external links to GitHub (`@Harsha1704`) and LinkedIn (`in/sriharsha-jilla`).

### 3.6 `components/sections/ContactSection.tsx`
- Converted "URL Pending Confirmation" placeholders into active external links to LinkedIn and GitHub with "Connected" badges.
- Updated problem solving display to `250+ Solved • 4-Star Badges`.
- Kept the direct inquiry form in transparent demo mode.

### 3.7 `components/layout/Footer.tsx`
- Replaced static "handles pending confirmation" disclaimer with active links to GitHub, LinkedIn, and the CV PDF.

---

## 4. Verification & Link Integrity Checklist

- [x] **Zero Broken Links:** All 5 repository links point to active, valid repositories under `github.com/Harsha1704`.
- [x] **Zero Fabricated Demos:** TrafficShield is the sole live deployment, tested and verified at `https://trafficshield.vercel.app`.
- [x] **Zero False Placeholders:** No `placeholder.dev` or generic template URLs exist in public components.
- [x] **Candidate Privacy Respected:** Phone number and personal Gmail address are not exposed in public contact sections.
- [x] **CV Integration Complete:** `public/resume.pdf` is present and linked directly from the hero and footer sections.
- [x] **Strict Typings & Linting:** Application compiles with zero TypeScript errors and passes all linting rules.
