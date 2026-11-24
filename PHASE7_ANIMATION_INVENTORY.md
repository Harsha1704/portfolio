# PHASE 7 — ANIMATION & INTERACTION INVENTORY

**Author:** Sri Harsha Portfolio Engineering Team  
**Date:** November 24, 2026  
**Status:** Complete & Fully Cataloged  
**Standard Easing Tokens:**
- `--ease-out-editorial`: `cubic-bezier(0.16, 1.0, 0.3, 1.0)` (Natural deceleration for entrances)
- `--ease-spring-gentle`: `stiffness: 380, damping: 30` (Nav active pill slide)
- `--ease-spring-snappy`: `stiffness: 400, damping: 25` (Monogram & button micro-interactions)
- `--ease-spring-damped`: `stiffness: 45, damping: 25` (Ambient cursor tracking)

---

## 1. Master Animation & Interaction Inventory

| ID | Name | Component & File | Trigger | Animated Properties | Duration / Curve | Reduced Motion Behavior | Compositor Target |
|---|---|---|---|---|---|---|---|
| `ANI-01` | **Route Page Entrance** | `Template` (`app/template.tsx`) | Route Navigation | `opacity`, `translateY` (6px -> 0) | `280ms` • `--ease-out-editorial` | Instant render (`opacity: 1, y: 0`) | GPU Layer |
| `ANI-02` | **Active Nav Pill Sliding** | `Navbar` (`components/layout/Navbar.tsx`) | Route Change / Link Click | `layoutId` (position & width) | Spring (`stiffness: 380, damping: 30`) | Static active class (no sliding) | GPU Layer |
| `ANI-03` | **Monogram Micro-Spring** | `Navbar` (`components/layout/Navbar.tsx`) | Hover / Click on `SH` logo | `scale` (`1.0 -> 1.08 -> 0.94`) | Spring (`stiffness: 400, damping: 25`) | Disabled (CSS hover color only) | GPU Layer |
| `ANI-04` | **Mobile Drawer Slide & Fade** | `Navbar` (`components/layout/Navbar.tsx`) | Hamburger Button Click | `opacity`, `translateY` (-12px -> 0) | `220ms` • `--ease-out-editorial` | Instant cut (`opacity: 1, y: 0`) | GPU Layer |
| `ANI-05` | **Mobile Directory Stagger** | `Navbar` (`components/layout/Navbar.tsx`) | Drawer Open | `opacity`, `translateX` (-8px -> 0) | `200ms` • Stagger delay `0.03s * idx` | Rendered without stagger or offset | GPU Layer |
| `ANI-06` | **Ambient Radial Mesh Tracking** | `HeroSection` (`components/sections/HeroSection.tsx`) | Mouse Move (Desktop) | `translateX`, `translateY` (±14px) | Inertial Spring (`stiffness: 45, damping: 25`) | Fixed center positioning | GPU Layer |
| `ANI-07` | **Availability Radar Beacon** | `HeroSection` (`components/sections/HeroSection.tsx`) | Continuous (Mount) | `scale` (`1.0 -> 2.0`), `opacity` (`0.75 -> 0`) | `2000ms` • CSS `@keyframes ping` | Fixed solid dot (no pulse) | GPU Layer |
| `ANI-08` | **Hero Content Stagger** | `HeroSection` (`components/sections/HeroSection.tsx`) | Viewport Entry / Mount | `opacity`, `translateY` (24px -> 0) | `500ms` • Stagger delays `0.04s - 0.24s` | Instant static placement | GPU Layer |
| `ANI-09` | **Terminal Card Chrome Glow** | `HeroSection` (`components/sections/HeroSection.tsx`) | Hover on Code Telemetry | `borderColor`, `boxShadow` | `300ms` • Standard CSS ease | Standard border transition | Composite |
| `ANI-10` | **Card Elevation & Lift** | `ProjectCard` (`components/projects/ProjectCard.tsx`) | Mouse Enter / Hover | `translateY` (-4px), `boxShadow` | `300ms` • CSS `cubic-bezier(0.25, 0.1, 0.25, 1)` | Zero translateY, subtle border only | GPU Layer |
| `ANI-11` | **Directional Arrow Micro-Shift** | `ProjectCard` (`components/projects/ProjectCard.tsx`) | Hover on Project Demo Link | `translateX` (2px), `translateY` (-2px) | `200ms` • Standard CSS ease | Static icon | GPU Layer |
| `ANI-12` | **Category Filter Button Press** | `ProjectsSection` (`components/sections/ProjectsSection.tsx`)| Click / Tap Filter Pill | `scale` (`0.96` on tap) | Spring tap release | Static button click | GPU Layer |
| `ANI-13` | **Architecture Layer Stagger** | `ArchitectureDiagram` (`components/projects/ArchitectureDiagram.tsx`)| Scroll Viewport Entry | `opacity`, `translateY` (16px -> 0) | `450ms` • Stagger delay `0.08s * index` | Static layer rendering | GPU Layer |
| `ANI-14` | **Wireframe Lightbox Modal** | `ScreenshotGallery` (`components/projects/ScreenshotGallery.tsx`)| Click Wireframe Preview Card | `opacity` (`0 -> 1`), `scale` (`0.95 -> 1.0`) | `240ms` • `--ease-out-editorial` | Instant modal presentation | GPU Layer |
| `ANI-15` | **Copy Channel Micro-Interaction** | `ContactSection` (`components/sections/ContactSection.tsx`)| Click "Copy Reference" Button | `scale` (`0.94`), state swap to emerald pill | `2200ms` feedback timeout | Static state change without spring | GPU Layer |
| `ANI-16` | **Case Study Section Reveals** | `ProjectDetailView` (`components/projects/ProjectDetailView.tsx`)| Scroll Viewport Entry | `opacity`, `translateY` (24px -> 0) | `500ms` • Viewport margin `-10% 0px` | Instant static rendering | GPU Layer |
| `ANI-17` | **Button Tactile Press** | `Button` (`components/ui/Button.tsx`) | Button Click / Active Press | `scale` (`0.985`), `translateY` (0) | `100ms` • Instant active curve | Standard active state | GPU Layer |

---

## 2. Animation Techniques & Implementation Principles

### 1. Compositor-Only Principle
Every single animation in Sri Harsha's portfolio animates either `transform` (using `translate3d`, `translateX`, `translateY`, `scale`) or `opacity`. No layout recalculations (`reflow`) or paint triggers are invoked during runtime animations.

### 2. Once-Per-Session Viewport Triggers
Scroll animations utilize `viewport={{ once: true, margin: "-10% 0px" }}` in Framer Motion. This guarantees that elements animate smoothly as the user reads down the page, but **never repeatedly animate** when the user scrolls back up, avoiding reader fatigue.

### 3. Progressive Enhancement & Fallback
All interactive elements retain full functionality even if JavaScript animations fail or are disabled. Forms, buttons, external links, modals, and route navigations operate natively without dependency on animation frame completion.
