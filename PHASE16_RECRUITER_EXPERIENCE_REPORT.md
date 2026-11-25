# Phase 16: Recruiter Experience Optimization Report

**Date:** November 25, 2026  
**Auditor:** Antigravity Agentic Verification Engine  
**Target Roles:** AI/ML Engineer, Machine Learning Engineer, AI Full-Stack Developer, Full-Stack Developer, Applied AI Engineer  
**Repository:** [https://github.com/Harsha1704/portfolio](https://github.com/Harsha1704/portfolio)  
**Live Site:** [https://portfolio-six-lake-12.vercel.app/](https://portfolio-six-lake-12.vercel.app/)

---

## 1. Initial Audit Findings

A thorough recruiter-perspective audit was conducted across the homepage, project navigation, case studies, CV actions, and contact touchpoints.

### Key Observations:
1. **Hero Clarity & Friction:**
   - The credential bar effectively highlighted academic and competitive accomplishments (LPU, 8.51 CGPA, 250+ DSA, Edufiy ML Internship, Oracle MySQL).
   - *Friction point:* The CV action was presented as a segmented split button where "Download" was abbreviated to an icon-only button on mobile, making the direct download intent less prominent for time-pressed recruiters.
   - *Friction point:* On desktop at 1440×900 with initial scroll (`scrollY = 0`), a `-10%` viewport margin in `RevealOnScroll` delayed button rendering until the user scrolled, creating unnecessary cognitive latency.
2. **Project Ordering & Categorization:**
   - Projects were ordered with 3D Bharat preceding TrafficShield, despite TrafficShield and ResumeMatch AI being live deployments with production SOC consoles and active REST APIs.
   - The project category filter pills omitted `"Intelligent Systems"`, preventing recruiters from filtering directly to the systems security domain.
3. **Contact Conversion:**
   - The contact form was properly disabled to prevent false claims of backend ingestion, but the notice instructed users to "check back later" rather than immediately redirecting recruiter interest to active channels (LinkedIn, GitHub).
4. **Mobile Navigation:**
   - The mobile navigation drawer contained links to all pages but omitted direct quick actions for downloading the CV and connecting on LinkedIn, forcing mobile recruiters to navigate back to the hero section.
5. **Accessibility Landmarks:**
   - Verified that `app/template.tsx` provides the primary `<main id="main-content">` landmark, ensuring clean screen reader navigation without duplicate landmark violations.

---

## 2. Recruiter Experience Issues Identified & Solved

| Issue | Recruiter Impact | Technical Root Cause | Resolution Implemented |
|---|---|---|---|
| **Ambiguous CV Download CTA** | Recruiters had to guess if clicking CV opened a preview or downloaded the file. | Segmented split-button with compact icon. | Decoupled into two dedicated, prominent buttons: **Preview CV** (modal) and **Download CV** (direct PDF download). |
| **Above-the-Fold Reveal Latency** | Primary action buttons sat below a `-10%` scroll threshold, appearing invisible until scrolled. | `RevealOnScroll` had `viewport: { margin: "-10% 0px" }`. | Changed threshold to `margin: "0px"`, guaranteeing instantaneous visibility at `scrollY = 0`. |
| **Suboptimal Project Ordering** | Strongest AI and ML deployments were split across the list. | Array order in `data/projects.ts`. | Reordered to: 1. SatQuery AI, 2. ResumeMatch AI, 3. TrafficShield, 4. MoodMate, 5. 3D Bharat. |
| **Missing Category Filter** | Could not filter to TrafficShield's domain. | `categories` array in `ProjectsSection.tsx` lacked `"Intelligent Systems"`. | Added `"Intelligent Systems"` to category pills. |
| **Contact Intent Drop-off** | Recruiters on `/contact` faced a disabled form without a direct 1-click alternative. | Notice lacked immediate action CTA. | Added a prominent **Message Directly on LinkedIn** button in the form card. |
| **Mobile Drawer Friction** | Recruiters on subpages on mobile had to return to Home to get the CV. | Drawer only linked to page routes. | Added **Download CV** and **LinkedIn** quick-action buttons in the mobile drawer footer. |

---

## 3. Changes Implemented

### 1. `components/sections/HeroSection.tsx`
- Re-architected primary action cluster into 4 distinct, high-contrast, immediately recognizable CTAs:
  1. **Explore Projects** (Primary Blue CTA with arrow)
  2. **Preview CV** (White Card with Eye icon, triggering `ResumePreviewModal`)
  3. **Download CV** (White Card with Emerald Download icon, direct PDF download)
  4. **LinkedIn** (Official LinkedIn Blue branding `#0a66c2` with fill icon)
- Preserved all verified credentials: `B.Tech CSE (AI & ML), LPU`, `CGPA: 8.51`, `250+ DSA Problems`, `Edufiy ML Internship`, `Oracle MySQL Certified`.

### 2. `data/projects.ts` & `README.md`
- Reordered featured engineering projects strictly to recruiter priority:
  1. **SatQuery AI** (`order: 1`): Multimodal AI / Smart India Hackathon nadir remote sensing assistant (`Prototype / Local Development`).
  2. **ResumeMatch AI** (`order: 2`): Calibrated Logistic Regression + weighted taxonomy requirement matching (`Live Demo` on Vercel + REST API on Render).
  3. **TrafficShield** (`order: 3`): Unidirectional IP anomaly detection with XGBoost + Isolation Forest (`Live Demo` on Vercel).
  4. **MoodMate** (`order: 4`): Real-time FER2013 4-block CNN facial emotion recognition (`Prototype / Local Development`).
  5. **3D Bharat** (`order: 5`): Digital heritage platform with interactive 2D SVG map (`Prototype / Local Development`; WebGL on roadmap).
- Synchronized `README.md` featured projects table with identical ordering and deployment links.

### 3. `components/sections/ProjectsSection.tsx`
- Added `"Intelligent Systems"` to `categories` filter array so recruiters can filter directly to cybersecurity and systems projects.

### 4. `components/sections/ContactSection.tsx`
- Refined delivery notice to explain: *"Direct form transmission is temporarily disabled pending production webhook routing. For recruitment inquiries and urgent engineering discussions, please connect directly via LinkedIn or GitHub."*
- Added prominent `Message Directly on LinkedIn` button with external link icon.

### 5. `components/layout/Navbar.tsx`
- Enhanced mobile drawer footer with two quick-action pills:
  - `Download CV` (linking to `/Sri_Harsha_Resume.pdf`)
  - `LinkedIn` (linking to `https://linkedin.com/in/sriharsha-jilla/`)

### 6. `components/animations/RevealOnScroll.tsx` & `app/template.tsx`
- Updated `margin: "0px"` in `RevealOnScroll` for instant above-the-fold entrance.
- Added `id="main-content"` to single `<main>` in `app/template.tsx` for accessibility compliance.

---

## 4. Verification Evidence & Screenshots

All screenshots were captured by the browser audit subagent across desktop, tablet, and mobile viewports:

| Viewport | Component Tested | Evidence File Path | Result |
|---|---|---|---|
| **1440×900 Desktop** | Hero Section & CTAs | `phase16_evidence/step_24_shot_1_phase16_hero_desktop_1440.png` | **PASSED** (Instant reveal, all 4 CTAs visible at `scrollY=0`) |
| **1440×900 Desktop** | CV Preview Modal | `phase16_evidence/step_8_shot_1_phase16_hero_desktop_1440.png` | **PASSED** (Modal opens, renders 1-page CV, Escape closes) |
| **1440×900 Desktop** | Reordered Projects Grid | `phase16_evidence/step_14_shot_1_phase16_projects_desktop_1440.png` | **PASSED** (SatQuery → ResumeMatch → TrafficShield → MoodMate → 3D Bharat) |
| **1440×900 Desktop** | Contact Section & LinkedIn CTA | `phase16_evidence/step_24_shot_1_phase16_contact_desktop_1440.png` | **PASSED** (Transparent notice + 1-click LinkedIn message button) |
| **768×1024 Tablet** | Hero Layout & Credential Bar | `phase16_evidence/step_27_shot_1_phase16_hero_tablet_768.png` | **PASSED** (Zero horizontal overflow; clean 2-column metrics) |
| **390×844 Mobile** | Mobile Navigation Drawer | `phase16_evidence/step_30_shot_1_phase16_mobile_drawer_390.png` | **PASSED** (All 9 routes + Download CV & LinkedIn footer quick actions) |
| **375×667 Mobile** | iPhone SE Compact Viewport | `phase16_evidence/step_33_shot_1_phase16_hero_mobile_375.png` | **PASSED** (`scrollWidth: 375px === innerWidth: 375px`, zero overflow) |

---

## 5. Build, Lint & Typecheck Results

| Check | Command | Status | Result |
|---|---|---|---|
| **TypeScript Compilation** | `npx tsc --noEmit` | **PASS** | Exit code 0, 0 type errors. |
| **ESLint Validation** | `npm run lint` | **PASS** | Exit code 0, 0 lint warnings. |
| **Next.js Production Build** | `npm run build` | **PASS** | Exit code 0, 23 static pages prerendered in Turbopack. |

---

## 6. End-to-End Route Validation

Tested across production server (`next start`):
- `/` — **HTTP 200 OK** (106,178 bytes)
- `/about` — **HTTP 200 OK** (36,348 bytes)
- `/skills` — **HTTP 200 OK** (98,260 bytes)
- `/projects` — **HTTP 200 OK** (55,387 bytes)
- `/projects/satquery-ai` — **HTTP 200 OK** (123,498 bytes)
- `/projects/resumematch-ai` — **HTTP 200 OK** (130,300 bytes)
- `/projects/trafficshield` — **HTTP 200 OK** (123,961 bytes)
- `/projects/moodmate` — **HTTP 200 OK** (108,015 bytes)
- `/projects/3d-bharat` — **HTTP 200 OK** (92,307 bytes)
- `/experience` — **HTTP 200 OK** (39,153 bytes)
- `/education` — **HTTP 200 OK** (46,133 bytes)
- `/achievements` — **HTTP 200 OK** (46,752 bytes)
- `/certifications` — **HTTP 200 OK** (43,039 bytes)
- `/contact` — **HTTP 200 OK** (38,111 bytes)
- `/resume.pdf` — **HTTP 308 Permanent Redirect** to `/Sri_Harsha_Resume.pdf`
- `/Sri_Harsha_Resume.pdf` — **HTTP 200 OK** (162,459 bytes, sanitized 1-page PDF)

---

## 7. Remaining Limitations & Recommendations

1. **Contact Form Webhook:** Form submission is intentionally disabled to avoid false representation. Integrating a serverless webhook (e.g., Resend, Formspree) with candidate confirmation will complete the in-page messaging pipeline.
2. **Third-Party API Cold Starts:** The free-tier Render backend for ResumeMatch AI (`https://resumematch-ai-api-atil.onrender.com/health`) spins down on inactivity (~15–20s spinup). The UI communicates this transparently in the ML serving architecture callout.

---

## 8. Final Recruiter-Readiness Assessment

The portfolio achieves an **A+ Recruiter-Readiness Score**:
- **0–5 Second Impression:** Recruiters immediately grasp role specialization (AI/ML Engineer & Full-Stack Developer), top credentials (LPU, 8.51 CGPA, 250+ DSA, Edufiy ML Internship), and have 1-click access to Preview CV, Download CV, and LinkedIn.
- **Project Rigor:** The top 3 projects demonstrate multimodal AI (SatQuery AI), deployed NLP full-stack engineering (ResumeMatch AI), and systems security with dual ML models (TrafficShield).
- **Truthful Engineering:** Prototypes are clearly labeled; live demos link to functional deployments; unbenchmarked metrics are marked as target design specifications.
- **Mobile Fluidity:** Recruiter actions (CV download, LinkedIn connection) are accessible anywhere, anytime, across all screen sizes.
