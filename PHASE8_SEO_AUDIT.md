# PHASE 8 — SEARCH ENGINE OPTIMIZATION & SOCIAL METADATA AUDIT

**Auditor:** Sri Harsha Portfolio SEO & Technical Architecture Team  
**Date:** November 24, 2026  
**Status:** 100% Validated & Configured for Production Indexing  
**Engine:** Next.js 16 App Router Metadata API & `next/og`  

---

## 1. Executive Summary

This audit evaluates technical search engine optimization (SEO), social media preview generation (Open Graph / Twitter Cards), static sitemap architecture, crawler directives (`robots.txt`), and structured data markup (JSON-LD) for Sri Harsha’s engineering portfolio.

**Key Accomplishments & Security Safeguards:**
- **No Unconfirmed Production Domains:** Canonical URLs and public sitemap URLs are only published when `NEXT_PUBLIC_SITE_URL` is explicitly defined. Unverified placeholder domains (`https://sriharsha.dev`) are strictly omitted in production environments, falling back to safe local configurations during testing.
- **Genuine Sitemap `lastmod` Dates:** The sitemap consumes fixed milestone modification dates (`2026-11-24` for core pages, `2026-11-23` for case studies) rather than dynamically forging the current timestamp on every request.
- **Accurate Project Descriptions:**
  - **TrafficShield:** Explicitly framed as an architectural proposal and scoping exploration. No claims of implemented real-time surveillance, violation detection, or lane compliance.
  - **3D Bharat:** Accurately reflects its implemented 2D SVG interactive geographic monument exploration interface, with 3D/WebGL rendering documented as planned on the future development roadmap.
- **Dynamic Asset Generation:** `next/og` renders branded, lightweight Open Graph cards (`1200×630px`) and SVG/PNG application icons (`32×32px` and `180×180px`) on demand.

---

## 2. Meta Tag Audit Across All Routes

| Route | Resolved `<title>` | `<meta name="description">` Excerpt | Canonical Handling |
|---|---|---|---|
| `/` | `Sri Harsha \| Aspiring ML Engineer & Full-Stack Developer` | Professional engineering portfolio of Sri Harsha — B.Tech CSE (AI & ML) at Lovely Professional University (8.51 CGPA)... | Emitted only when `NEXT_PUBLIC_SITE_URL` configured |
| `/about` | `About \| Sri Harsha` | Learn about Sri Harsha — B.Tech Computer Science & Engineering (AI & ML) at Lovely Professional University (8.51 CGPA)... | Inherited from base configuration |
| `/skills` | `Skills \| Sri Harsha` | Explore Sri Harsha's technical skills matrix categorized across 8 core domains... | Inherited from base configuration |
| `/projects` | `Projects \| Sri Harsha` | Explore Sri Harsha's engineering projects: SatQuery AI, ResumeMatch AI, 3D Bharat, MoodMate, and TrafficShield... | Inherited from base configuration |
| `/projects/satquery-ai` | `SatQuery AI — Case Study \| Sri Harsha` | An interactive vision-language assistant for satellite imagery analysis... | Inherited from base configuration |
| `/projects/resumematch-ai`| `ResumeMatch AI — Case Study \| Sri Harsha` | An automated resume-job matching and career intelligence platform... | Inherited from base configuration |
| `/projects/3d-bharat` | `3D Bharat — Case Study \| Sri Harsha` | An interactive digital heritage exploration platform... featuring an implemented 2D SVG monument exploration interface... WebGL/Three.js planned... | Inherited from base configuration |
| `/projects/moodmate` | `MoodMate — Case Study \| Sri Harsha` | Real-time facial expression recognition and music recommendation engine... | Inherited from base configuration |
| `/projects/trafficshield` | `TrafficShield — Case Study \| Sri Harsha` | An architectural proposal and conceptual framework in technical scoping... No real-time surveillance or compliance systems currently implemented... | Inherited from base configuration |
| `/experience` | `Experience \| Sri Harsha` | Professional industry experience of Sri Harsha — AI/ML Intern at Edufiy Tech Solutions (January 2025 – March 2025)... | Inherited from base configuration |
| `/education` | `Education \| Sri Harsha` | Academic background of Sri Harsha — Lovely Professional University B.Tech CSE (AI & ML) with 8.51 CGPA... | Inherited from base configuration |
| `/achievements` | `Achievements \| Sri Harsha` | Competitive programming milestones and hackathon finishes: 100+ LeetCode problems, HackerRank Orchestrate... | Inherited from base configuration |
| `/certifications` | `Certifications \| Sri Harsha` | Verified technical accreditations: Oracle AI Database Certified Foundations Associate, React.js... | Inherited from base configuration |
| `/contact` | `Contact \| Sri Harsha` | Get in touch with Sri Harsha for AI/ML engineering opportunities, full-stack software development roles... | Inherited from base configuration |

---

## 3. Sitemap & Crawler Directives

### A. Sitemap (`/sitemap.xml`)
Implemented in `app/sitemap.ts` using Next.js `MetadataRoute.Sitemap`.
- **Domain Configuration:** Consumes `process.env.NEXT_PUBLIC_SITE_URL` (falls back to `http://localhost:3000` during development).
- **Verified Content Modification Timestamps:**
  - Core Top-Level Routes: `2026-11-24T00:00:00.000Z`
  - Project Case Studies: `2026-11-23T00:00:00.000Z`
- **Output:** Prerendered statically at build time (`○ /sitemap.xml`).

### B. Robots Directives (`/robots.txt`)
Implemented in `app/robots.ts` using Next.js `MetadataRoute.Robots`.
- When `NEXT_PUBLIC_SITE_URL` is set: Allows crawling of all routes and provides canonical `/sitemap.xml` URL.
- When `NEXT_PUBLIC_SITE_URL` is unset: Allows local dev testing without linking to an unverified production domain sitemap.

---

## 4. OpenGraph & Application Icons

1. **OpenGraph Social Preview Card (`app/opengraph-image.tsx`):**
   - Size: `1200 × 630 px`
   - Dynamically resolves domain label from `process.env.NEXT_PUBLIC_SITE_URL` or defaults to `"Engineering Portfolio"`.
2. **Dynamic Icons:**
   - Standard Favicon (`app/icon.tsx`): 32×32px PNG circular monogram.
   - Apple Touch Icon (`app/apple-icon.tsx`): 180×180px PNG rounded-rect icon.

---

## 5. Schema.org JSON-LD Structured Data

Embedded in `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Sri Harsha",
      "jobTitle": "Aspiring Machine Learning Engineer & Full-Stack Developer",
      "description": "B.Tech Computer Science & Engineering (AI & ML) student at Lovely Professional University (8.51 CGPA). Building multimodal AI systems and resilient full-stack web applications.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Lovely Professional University"
      },
      "knowsAbout": [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Generative AI",
        "React.js",
        "Python",
        "Next.js"
      ]
    },
    {
      "@type": "WebSite",
      "name": "Sri Harsha Engineering Portfolio",
      "description": "Professional engineering portfolio and technical case studies by Sri Harsha."
    }
  ]
}
```
