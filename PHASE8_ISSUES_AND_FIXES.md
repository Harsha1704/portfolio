# PHASE 8 — ISSUES IDENTIFIED & REMEDIATION LOG

**Author:** Sri Harsha Portfolio Engineering Team  
**Date:** November 24, 2026  
**Status:** All Identified Deficiencies Remediated & Verified  

---

## 1. Executive Summary

During Phase 8 (Final Quality Assurance, Accessibility, Performance, SEO & Security Verification), the application underwent forensic multi-viewport testing, DOM landmark queries, automated accessibility audits (WCAG 2.2 Level AA), laboratory performance measurements, and source-code accuracy reviews.

A total of **12 architectural, accessibility, SEO, and content integrity issues** were diagnosed, remediated, and verified.

---

## 2. Issues & Remediations Log

### Issue 1: Nested `<main>` Landmarks
- **Category:** Semantic HTML & WCAG 1.3.1 (Level A)
- **Files Affected:** `app/projects/[slug]/page.tsx`, `app/not-found.tsx`
- **Root Cause:** Duplication of main landmark container between `app/template.tsx` (`<motion.main>`) and inner page wrappers.
- **Remediation:** Replaced inner `<main>` tags with semantic `<div>` containers.
- **Verification:** Verified via DOM query: exactly **1 `<main>` landmark exists** across all 14 routes.

### Issue 2: Heading Hierarchy Gap on Dedicated Sub-Pages
- **Category:** WCAG 2.4.6 Headings & Labels (Level AA)
- **Files Affected:** `components/ui/Section.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`, `ExperienceSection.tsx`, `EducationSection.tsx`, `AchievementsSection.tsx`, `CertificationsSection.tsx`, `ContactSection.tsx`
- **Root Cause:** `Section.tsx` previously hardcoded section titles as `<h2>`, leaving sub-pages without an initial `<h1>`.
- **Remediation:** Added `titleAs?: "h1" | "h2"` prop to `Section.tsx` and configured all dedicated sub-pages with `titleAs="h1"`.
- **Verification:** Automated tests confirm every page starts with an `<h1>` followed sequentially by `<h2>` and `<h3>`.

### Issue 3: Incomplete Modal Focus Management & Keyboard Accessibility
- **Category:** WCAG 2.1.2 (Level A), WCAG 2.4.3 (Level A), WCAG 4.1.2 (Level A)
- **File Affected:** `components/projects/ScreenshotGallery.tsx`
- **Root Cause:** Wireframe cards were non-focusable `<div>` elements; opening modal lacked focus placement and focus trapping; dismissing modal did not return focus to the invoking element.
- **Remediation:**
  - Converted cards into semantic `<button type="button" aria-haspopup="dialog" ...>` elements.
  - Tracked triggering element via `useRef`.
  - Added programmatic auto-focus on close button upon opening.
  - Implemented Tab/Shift+Tab keyboard focus trap.
  - Restored focus to trigger button upon Escape dismissal or close button click.
  - Added `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby`.
- **Verification:** Verified via browser subagent: focus strictly trapped inside modal; focus restored to invoking wireframe button.

### Issue 4: Mobile Drawer Focus Management & Escape Dismissal
- **Category:** WCAG 2.1.2 (Level A), WCAG 2.4.3 (Level A)
- **File Affected:** `components/layout/Navbar.tsx`
- **Root Cause:** Mobile navigation drawer lacked explicit dialog semantics and keyboard focus cycle containment.
- **Remediation:**
  - Added `role="dialog"`, `aria-modal="true"`, `aria-label="Mobile Navigation Menu"`.
  - Added auto-focus to first navigation link on open.
  - Implemented Tab key focus trap inside drawer.
  - Restored focus to hamburger trigger button upon Escape dismissal.
- **Verification:** Verified via browser subagent on 390px mobile viewport.

### Issue 5: Exposure of Placeholder Email Address in Copy Interaction
- **Category:** Candidate Privacy & Truthfulness
- **File Affected:** `components/sections/ContactSection.tsx`
- **Root Cause:** Fallback copy handler copied `"contact.sriharsha@placeholder.dev"` when email was unverified.
- **Remediation:**
  - Completely removed placeholder email from clipboard logic and JSX.
  - Displayed `Status: Pending Candidate Confirmation` with an amber `Pending Activation` pill.
  - Disabled copy button until an approved candidate email is verified in `data/profile.ts`.
- **Verification:** Verified zero instances of placeholder email in DOM or clipboard.

### Issue 6: Premature Publication of Unconfirmed Production Domain
- **Category:** SEO & Domain Integrity
- **Files Affected:** `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`
- **Root Cause:** `baseUrl` defaulted to `https://sriharsha.dev` even when ownership was unconfirmed.
- **Remediation:**
  - Configured safe fallback `baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"`.
  - Canonical URLs in `metadata.alternates` are only published when `NEXT_PUBLIC_SITE_URL` is configured.
  - Robots policy only links to sitemap when `NEXT_PUBLIC_SITE_URL` is configured.
  - OpenGraph card displays dynamic domain or `"Engineering Portfolio"`.
- **Verification:** Tested build without `NEXT_PUBLIC_SITE_URL`: zero placeholder canonical URLs emitted.

### Issue 7: Dynamic Sitemap Timestamp Re-evaluation
- **Category:** Performance & SEO
- **File Affected:** `app/sitemap.ts`
- **Root Cause:** Used `new Date().toISOString()`, forcing dynamic SSR re-evaluation on every request.
- **Remediation:** Replaced dynamic timestamps with genuine milestone content modification dates (`CORE_PAGES_LASTMOD`, `CASE_STUDIES_LASTMOD`).
- **Verification:** Build prerenders `/sitemap.xml` as a static cached asset (`○ /sitemap.xml`).

### Issue 8: TrafficShield Scope Overstatement in SEO Metadata
- **Category:** Engineering Accuracy & Truthfulness
- **File Affected:** `data/projects.ts`
- **Root Cause:** Metadata implied real-time surveillance and violation detection were already built.
- **Remediation:** Rewrote metadata and summary to clearly state TrafficShield is an architectural proposal and conceptual scoping framework with no implemented models.
- **Verification:** Verified updated metadata across `/projects/trafficshield`.

### Issue 9: 3D Bharat 3D Graphics Claim vs Implemented 2D Map
- **Category:** Engineering Accuracy & Truthfulness
- **File Affected:** `data/projects.ts`
- **Root Cause:** Metadata conflated planned 3D/WebGL rendering with the implemented 2D SVG heritage map.
- **Remediation:** Rewrote summary to highlight the implemented 2D SVG heritage exploration interface while clearly categorizing WebGL/Three.js rendering as planned on the roadmap.
- **Verification:** Verified updated metadata across `/projects/3d-bharat`.

### Issue 10: Academic Dates Discrepancy (August 2024 vs 2023–2027)
- **Category:** Academic Truthfulness
- **Files Affected:** `data/education.ts`, `data/profile.ts`
- **Root Cause:** Earlier records cited "August 2024", which conflicted with third-year standing; subsequent phase inferred "2023–2027" without source documentation.
- **Remediation:** Standardized academic status to `"Third Year Undergraduate (In Progress)"` with an explanatory note that exact matriculation and graduation calendar years are pending candidate confirmation in `MISSING_INFORMATION.md`.
- **Verification:** Both `data/education.ts` and `data/profile.ts` align with `PORTFOLIO_CONTENT.md`.

### Issue 11: Dynamic OpenGraph Image Branding
- **File Affected:** `app/opengraph-image.tsx`
- **Root Cause:** Hardcoded `sriharsha.dev` in footer bar.
- **Remediation:** Updated domain badge to resolve `process.env.NEXT_PUBLIC_SITE_URL` hostname or fallback to `"Engineering Portfolio"`.
- **Verification:** Social image compiles cleanly with dynamic hostname resolution.

### Issue 12: ESLint Unused Variable Warning
- **File Affected:** `app/layout.tsx`
- **Root Cause:** Variable `isProd` was declared but unused.
- **Remediation:** Removed unused variable.
- **Verification:** `npm run lint` exits with **0 errors, 0 warnings**.
