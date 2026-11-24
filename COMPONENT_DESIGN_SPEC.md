# Component Design Specifications & Engineering Tokens

This document details the exact visual states, dimensions, padding, typography, tokens, and interactions for every UI component in Sri Harsha's engineering portfolio.

---

## 1. Button System

The button architecture consists of 5 purposeful variants designed with tactile micro-interactions and explicit accessibility states.

### 1.1 Button Variants & Visual Specifications

```
┌──────────────────┬──────────────────────┬──────────────────────┬──────────────────────┐
│ Variant          │ Base Background      │ Border               │ Text Color           │
├──────────────────┼──────────────────────┼──────────────────────┼──────────────────────┤
│ Primary Solid    │ #2563EB (--blue-600) │ None                 │ #FFFFFF              │
│ Secondary Tint   │ #EFF6FF (--blue-50)  │ 1px solid #DBEAFE    │ #1D4ED8 (--blue-700) │
│ Outline Minimal  │ #FFFFFF              │ 1px solid #E2E8F0    │ #0F172A (--slate-900)│
│ Ghost Subtle     │ Transparent          │ None                 │ #475569 (--slate-600)│
│ Copy-Pill Action │ #F8FAFC (--slate-50) │ 1px solid #E2E8F0    │ #1E293B (--slate-800)│
└──────────────────┴──────────────────────┴──────────────────────┴──────────────────────┘
```

### 1.2 State Machine Matrix (Primary Solid Button Example)
* **Default:** Background: `#2563EB`, Shadow: `0 1px 2px 0 rgba(37, 99, 235, 0.2)`, Radius: `10px`, Padding: `12px 24px`, Font: `Inter Medium 15px`.
* **Hover:** Background: `#1D4ED8` (`--blue-700`), Transform: `translateY(-1.5px)`, Shadow: `0 8px 20px -4px rgba(37, 99, 235, 0.35)`.
* **Active / Pressed:** Background: `#1E40AF`, Transform: `scale(0.985)`, Transition: `80ms ease-out`.
* **Focus Visible:** Outline: `2px solid #2563EB`, Offset: `2px`, Outline Radius: `12px`.
* **Loading State:** Background: `#2563EB`, Pointer Events: `none`, Content: Replaced by centered 18px SVG spinning indicator (`border-2 border-white/30 border-t-white`).
* **Disabled:** Opacity: `0.45`, Background: `#94A3B8`, Cursor: `not-allowed`.

---

## 2. Navigation Components

### 2.1 Floating Glassmorphic Header (Desktop)
* **Container:** Fixed positioning at `top: 20px`, centered horizontally (`left: 50%`, `transform: translateX(-50%)`).
* **Dimensions:** Max Width: `880px`, Height: `56px`, Padding: `0 20px`.
* **Surface:** `rgba(255, 255, 255, 0.82)` with `backdrop-filter: blur(16px)`, Border: `1px solid rgba(226, 232, 240, 0.85)`, Shadow: `0 10px 30px -10px rgba(15, 23, 42, 0.08)`.
* **Border Radius:** `9999px` (Pill shape).
* **Links:** Text: `14px Medium #475569`, Hover: `#0F172A`. Active state features a sliding pill background (`#EFF6FF`, text `#1D4ED8`).
* **Resume CTA:** Compact right-aligned button (`height: 36px`, `padding: 0 16px`, `radius: 9999px`, font `13px SemiBold`).

### 2.2 Mobile Navigation Overlay
* **Trigger:** Accessible hamburger button on right corner (`48x48px` bounding box).
* **Overlay:** Fullscreen drawer animating from top (`transform: translateY(-100%)` to `0` with cubic-bezier `(0.16, 1, 0.3, 1)`).
* **Surface:** `#FFFFFF` with large editorial navigation links (`24px SemiBold`), spaced at `24px` intervals with immediate tap response.

---

## 3. Card Architectures

### 3.1 Featured Project Card
* **Dimensions:** Fluid 100% width, min-height `440px`.
* **Surface:** `#FFFFFF`, Border: `1px solid #E2E8F0`, Radius: `16px`, Padding: `32px`.
* **Internal Structure:**
  1. *Header Meta:* Domain Tag (`Multimodal AI`, `12px JetBrains Mono #2563EB`) + Status Badge (`Live` / `Prototype`).
  2. *Title & Subtitle:* Heading-2 (`26px Bold #0F172A`) followed by 2-line problem-solution summary (`15px Regular #475569`).
  3. *Technology Chip Row:* Flex wrap row with 8px gap.
  4. *Visual Preview:* 16:9 responsive wrapper with subtle inset shadow and hairline border.
  5. *Footer Actions:* `View Case Study` (Secondary Button) + `Live Demo ↗` (Ghost Button).
* **Hover Interaction:** Card raises by `-3px`, shadow transitions to `--shadow-hover`, border tint shifts to `#BFDBFE`.

### 3.2 Technical Skill Cluster Card
* **Surface:** `#FFFFFF`, Border: `1px solid #E2E8F0`, Radius: `14px`, Padding: `24px`.
* **Header:** Icon container (`36x36px`, `#EFF6FF` background, `#2563EB` SVG icon) + Cluster Title (`16px SemiBold #0F172A`).
* **Body:** Grouped chips with clear tier indicators (e.g., solid text for Proficient, subtle dot for Working Knowledge).

### 3.3 Competitive Achievement Card
* **Surface:** `#F8FAFC` to `#FFFFFF` subtle gradient, Border: `1px solid #E2E8F0`, Radius: `16px`, Padding: `28px`.
* **Metric Display:** Display-1 numerical value (`44px Bold #0F172A`), JetBrains Mono platform subtitle (`LeetCode`, `HackerRank`).
* **Telemetry Bar:** Custom SVG progress tracks visualizing problem-solving coverage.

---

## 4. Badges, Pills & Status Indicators

### 4.1 Deployment Status Badges
```css
/* Live Deployed Badge */
.badge-live {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #ECFDF5; /* emerald-50 */
  color: #047857;            /* emerald-700 */
  border: 1px solid #A7F3D0; /* emerald-200 */
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 9999px;
}
.badge-live::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10B981; /* emerald-500 */
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

/* Prototype / In Development Badge */
.badge-dev {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #FFFBEB; /* amber-50 */
  color: #B45309;            /* amber-700 */
  border: 1px solid #FDE68A; /* amber-200 */
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 9999px;
}
.badge-dev::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #F59E0B; /* amber-500 */
}
```

### 4.2 Technology Chips
* **Dimensions:** Height: `28px`, Padding: `0 10px`, Radius: `6px`.
* **Color:** Background: `#F1F5F9`, Border: `1px solid #E2E8F0`, Text: `#334155` (`12px Medium`).
* **Hover:** Background: `#E2E8F0`, Text: `#0F172A`.

---

## 5. Case Study Modal & Slide-Over Drawer

* **Architecture:** Flyout Drawer animating from the right edge on desktop (`width: min(860px, 92vw)`), or full-screen modal on mobile devices.
* **Backdrop:** `rgba(15, 23, 42, 0.45)` with `backdrop-filter: blur(8px)`.
* **Header Bar:** Sticky top, height `64px`, border bottom `1px solid #E2E8F0`, title `18px SemiBold`, and close button (`Esc` icon with `36x36px` touch target).
* **Segmented Tab Control:**
  * Segment pills: `Overview` | `Architecture` | `Implemented vs. Planned` | `Technical Metrics`.
  * Height: `40px`, background: `#F1F5F9`, active pill: `#FFFFFF` with subtle shadow.
* **Content Body:** Scrollable container with native smooth scrolling, syntax-highlighted code blocks, and crisp SVG Mermaid diagrams.

---

## 6. Form & Input Design Specifications

* **Text Input & Textarea:**
  * Base Height: `48px` (Inputs), Min Height: `120px` (Textarea).
  * Surface: `#F8FAFC`, Border: `1px solid #CBD5E1`, Radius: `10px`, Padding: `0 16px`.
  * Typography: `15px Regular #0F172A`, Placeholder: `#94A3B8`.
  * Focus State: Surface shifts to `#FFFFFF`, Border becomes `2px solid #2563EB`, Shadow: `0 0 0 4px rgba(37, 99, 235, 0.12)`.
  * Error State: Border: `2px solid #EF4444`, Subtext: `12px Regular #DC2626`.
