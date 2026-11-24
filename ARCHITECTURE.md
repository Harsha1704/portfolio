# Technical Architecture & Implementation Documentation

This document records the foundational frontend engineering architecture, technology selections, design token mappings, component hierarchies, and testing outcomes established in **Phase 3** for Sri Harsha's engineering portfolio.

---

## 1. Technology Evaluation & Dependency Justification

```
┌───────────────────────────┬───────────────┬──────────────────────────────────────────────────────────────┐
│ Package / Tool            │ Version       │ Strategic Architectural Justification                        │
├───────────────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ next                      │ 16.4.6        │ App Router architecture, Partial Prerendering (PPR), Turbopack│
│                           │               │ compiler, static case study generation (`generateStaticParams`)│
│ react / react-dom         │ 19.3.0        │ Concurrent rendering, zero-cascading `useSyncExternalStore`  │
│ typescript                │ ^5.0          │ Strict type checking across data layers, components & models │
│ tailwindcss               │ 4.3.3         │ Native `@theme` CSS custom properties, utility architecture   │
│ framer-motion             │ ^14.14.0      │ Declarative GPU-accelerated motion with reduced-motion support│
│ lucide-react              │ ^1.78.0       │ Minimalist, modern tree-shakeable SVG icon collection        │
│ clsx + tailwind-merge     │ Latest        │ Safe conditional class composition via unified `cn()` utility │
│ Vercel                    │ Deployment    │ Zero-config edge deployment, instant preview branch CI/CD    │
└───────────────────────────┴───────────────┴──────────────────────────────────────────────────────────────┘
```

### Why No Unnecessary Packages?
* **Zero UI Component Bloat:** Rather than bundling bloated third-party component libraries that introduce inflexible styling and hydration penalties, all UI primitives (`Button`, `Badge`, `Card`, `Container`, `Section`) are built directly on native semantic HTML and Tailwind tokens.
* **No Redundant State Library:** The portfolio relies on React primitives and clean URL/hash anchors; no external Redux or Zustand stores are needed, minimizing bundle size and execution overhead.

---

## 2. Directory Architecture & File Structure

```
c:\Users\Harsha\Desktop\portfolio\
├── app/
│   ├── favicon.ico
│   ├── globals.css                       # Design system CSS tokens & @theme definitions
│   ├── layout.tsx                        # Master HTML root, Inter & JetBrains Mono font loading
│   ├── page.tsx                          # Single-page master foundation & section anchors
│   └── projects/
│       └── [slug]/
│           └── page.tsx                  # Dedicated dynamic case study route (SSG via generateStaticParams)
├── components/
│   ├── animations/
│   │   ├── MotionWrapper.tsx             # Framer motion wrapper respecting prefers-reduced-motion
│   │   └── RevealOnScroll.tsx            # Intersection-observer scroll reveal
│   ├── layout/
│   │   ├── Navbar.tsx                    # Floating glassmorphic island with active scroll-spy & drawer
│   │   └── Footer.tsx                    # Editorial brand footer & external links
│   ├── projects/
│   │   ├── ProjectCard.tsx               # Reusable data-driven project showcase card
│   │   └── ProjectDetailView.tsx         # Comprehensive case study layout (Problem, Features, Stack, Hurdles)
│   └── ui/
│       ├── Badge.tsx                     # Status badge (Live, Dev, Research, Blue)
│       ├── Button.tsx                    # Button system (Primary, Secondary, Outline, Ghost, Copy)
│       ├── Card.tsx                      # Base elevation card with hover elevation
│       ├── Container.tsx                 # Responsive max-width container (7xl / 1280px)
│       └── Section.tsx                   # Semantic section wrapper with typography header
├── data/
│   ├── achievements.ts                   # LeetCode 100+, HackerRank 4-Star, CODE STORM Hackathon
│   ├── certifications.ts                 # Oracle AI Database, React.js (Tech Veda), Front End Dev
│   ├── experience.ts                     # Edufiy Tech Solutions AI/ML Internship details
│   ├── profile.ts                        # Master biographical data, CGPA, career objective, metrics
│   ├── projects.ts                       # SatQuery AI, ResumeMatch AI, 3D Bharat, MoodMate, TrafficShield
│   └── skills.ts                         # 6 categorized skill clusters with proficiency tiers
├── hooks/
│   ├── useReducedMotion.ts               # SSR-safe useSyncExternalStore reduced motion detector
│   └── useScrollSpy.ts                   # Active section ID tracker on viewport scroll
├── lib/
│   └── utils.ts                          # clsx + twMerge utility function `cn()`
├── types/
│   └── index.ts                          # Strict TypeScript interfaces for all data structures
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

---

## 3. Design Token Implementation

Design tokens approved in Phase 2 are implemented natively in `app/globals.css` via CSS custom properties and mapped directly into Tailwind CSS v4's `@theme` directive:

* **Canvas Surfaces:**
  * `--surface-page`: `#ffffff` (Pure paper background)
  * `--surface-subtle`: `#f8fafc` (Alternate section banding)
  * `--surface-elevated`: `#f1f5f9` (Inset blocks & chips)
* **Cobalt Blue Engine:**
  * `--blue-50`: `#eff6ff`
  * `--blue-100`: `#dbeafe`
  * `--blue-200`: `#bfdbfe`
  * `--blue-600`: `#2563eb` (Primary brand accent)
  * `--blue-700`: `#1d4ed8` (Active / pressed state)
* **Status Badges:**
  * Live Deployed: `--status-live` (`#10b981`), `--status-live-bg` (`#ecfdf5`)
  * In Development: `--status-dev` (`#f59e0b`), `--status-dev-bg` (`#fffbeb`)
  * Research: `--status-res` (`#6366f1`), `--status-res-bg` (`#eef2ff`)
* **Typography:**
  * Primary Sans: `Inter` loaded via `next/font/google` (`--font-sans`)
  * Technical Monospace: `JetBrains Mono` loaded via `next/font/google` (`--font-mono`)

---

## 4. Build, Verification & Testing Report

| Test Suite / Step | Command Executed | Result | Details |
| :--- | :--- | :--- | :--- |
| **Production Build** | `npm run build` | **PASSED (0 Errors)** | 10 static & partial prerendered routes generated in 741ms. |
| **TypeScript Typecheck** | `npx tsc --noEmit` | **PASSED (0 Errors)** | All interfaces, props, and dynamic route params strictly typed. |
| **ESLint Validation** | `npm run lint` | **PASSED (0 Errors, 0 Warnings)** | Clean codebase adhering to Next.js & React 19 rules. |
| **Development Server** | `npm run dev` | **RUNNING** | Active at `http://localhost:3000`. |
| **Visual Rendering Verification** | Browser Subagent Inspection | **VERIFIED** | Navigated `http://localhost:3000` and `http://localhost:3000/projects/satquery-ai`; confirmed high-fidelity rendering of typography, hero narrative, project cards, and case studies. |
