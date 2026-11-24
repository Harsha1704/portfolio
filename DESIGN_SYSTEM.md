# Design System Specification: Sri Harsha Personal Brand & Portfolio

**Design Vision:** Hybrid Premium Minimalism — A fusion of editorial publication typography, high-end digital product design, purposeful micro-interactions, clean white/light surfaces, and sophisticated electric blue architectural accents.

---

## 1. Design Principles & Brand Philosophy

1. **Editorial Restraint & Mathematical Precision:**  
   Whitespace is treated as an active structural element, not passive empty space. Grid alignments and typography hierarchies follow strict mathematical ratios inspired by Swiss International Style and modern digital product design leaders (e.g., Linear, Stripe, Apple Developer).
2. **Dual-Domain Storytelling:**  
   The visual language reflects Sri Harsha's dual competency: deep mathematical machine learning (monospaced telemetry, dataflow indicators, neural node motifs) balanced with refined human-centered product engineering (clean sans-serif typography, generous touch targets, fluid interactions).
3. **Purposeful Motion & High Responsiveness:**  
   Animations exist only to orient user attention, communicate spatial relationships, and provide tactile feedback. Zero superfluous visual clutter or sluggish decorative physics.
4. **Accessible by Architecture:**  
   All color pairs strictly adhere to WCAG 2.1 AA/AAA contrast guidelines. Focus rings, semantic HTML landmarks, and reduced-motion fallbacks are built into foundational design tokens.

---

## 2. Color Palette & Token Architecture

The portfolio utilizes a luminous light-mode primary aesthetic anchored by **Architectural Slate** neutrals, **Pure Paper** canvas surfaces, and **Electric Cobalt / Deep Navy** chromatic accents. A mirrored dark mode token set is defined for system preference switching.

### 2.1 Chromatic Accent Palette (Sophisticated Blue Engine)
```
┌─────────────────┬───────────┬────────────────────────────────────────────────────────┐
│ Token Name      │ Hex Value │ Purpose / Context                                      │
├─────────────────┼───────────┼────────────────────────────────────────────────────────┤
│ --blue-50       │ #EFF6FF   │ Ultra-subtle card highlights, badge background tints   │
│ --blue-100      │ #DBEAFE   │ Hover backgrounds, secondary pill borders              │
│ --blue-200      │ #BFDBFE   │ Active states, subtle divider accents                  │
│ --blue-500      │ #3B82F6   │ Primary interactive accent (light/dark transition)     │
│ --blue-600      │ #2563EB   │ Primary interactive brand accent (Buttons, Focus rings)│
│ --blue-700      │ #1D4ED8   │ Pressed button state, active navigation indicator      │
│ --blue-900      │ #1E3A8A   │ Deep cobalt text accents, high-contrast headings       │
│ --blue-950      │ #0F172A   │ Midnight navy for deep structural framing              │
└─────────────────┴───────────┴────────────────────────────────────────────────────────┘
```

### 2.2 Neutral Canvas & Surface System (Light Mode Primary)
```
┌─────────────────┬───────────┬────────────────────────────────────────────────────────┐
│ Token Name      │ Hex Value │ UI Layer Application                                   │
├─────────────────┼───────────┼────────────────────────────────────────────────────────┤
│ --surface-page  │ #FFFFFF   │ Primary page background (Pure crisp paper)             │
│ --surface-subtle│ #F8FAFC   │ Alternate section bands, input fill backgrounds        │
│ --surface-card  │ #FFFFFF   │ Elevated component cards and floating modals           │
│ --surface-elevated│ #F1F5F9 │ Inset panels, code blocks, hovered item fills          │
│ --border-subtle │ #E2E8F0   │ Hairline dividers, card outlines (1px border-slate-200)│
│ --border-hover  │ #CBD5E1   │ Hovered card borders and active input states           │
│ --text-primary  │ #0F172A   │ Slate-900: High-contrast headings and primary copy     │
│ --text-secondary│ #475569   │ Slate-600: Body paragraphs, metadata, subtitles        │
│ --text-tertiary │ #94A3B8   │ Slate-400: Micro-copy, timestamps, inactive icons      │
└─────────────────┴───────────┴────────────────────────────────────────────────────────┘
```

### 2.3 Semantic Status & Telemetry Tokens
* **Success / Live Deployed:** `--emerald-500: #10B981` (Tints: `--emerald-50: #ECFDF5`, `--emerald-700: #047857`)
* **In Development / Warning:** `--amber-500: #F59E0B` (Tints: `--amber-50: #FFFBEB`, `--amber-700: #B45309`)
* **Research / Experimental:** `--indigo-500: #6366F1` (Tints: `--indigo-50: #EEF2FF`, `--indigo-700: #4338CA`)

### 2.4 Subtle Gradient Signatures
* **Brand Hero Glow (Radial):**  
  `radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%)`
* **Card Surface Shimmer (Linear):**  
  `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)`
* **Interactive Button Accent:**  
  `linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)`

---

## 3. Typography Scale & Hierarchy

The typography stack relies on two complementary typefaces:
* **Primary Sans-Serif:** **Inter** or **Plus Jakarta Sans** (clean, geometric, exceptionally legible at small sizes, beautiful ligatures).
* **Technical Monospace:** **JetBrains Mono** (used for metric badges, code chips, latency telemetry, and system metadata).

### 3.1 Type Scale (Fluid Typography Equation)
```
┌──────────────┬─────────────┬────────────┬─────────────┬───────────────────────────────┐
│ Scale Token  │ Size (Rem)  │ Size (Px)  │ Line Height │ Font Weight / Tracking        │
├──────────────┼─────────────┼────────────┼─────────────┼───────────────────────────────┤
│ Display-1    │ 3.5 - 4.5   │ 56 - 72px  │ 1.05        │ 800 (Bold) / -0.03em          │
│ Heading-1    │ 2.5 - 3.25  │ 40 - 52px  │ 1.15        │ 700 (Bold) / -0.025em         │
│ Heading-2    │ 1.875 - 2.25│ 30 - 36px  │ 1.25        │ 600 (SemiBold) / -0.02em      │
│ Heading-3    │ 1.375 - 1.5 │ 22 - 24px  │ 1.35        │ 600 (SemiBold) / -0.015em     │
│ Subtitle-Lg  │ 1.125 - 1.25│ 18 - 20px  │ 1.50        │ 500 (Medium) / -0.01em        │
│ Body-Base    │ 1.00        │ 16px       │ 1.65        │ 400 (Regular) / normal        │
│ Body-Sm      │ 0.875       │ 14px       │ 1.60        │ 400 (Regular) / normal        │
│ Caption / Tag│ 0.75        │ 12px       │ 1.40        │ 500 (Medium) / +0.02em        │
│ Mono-Telemetry│ 0.8125      │ 13px       │ 1.50        │ 500 (JetBrains Mono) / 0.00em │
└──────────────┴─────────────┴────────────┴─────────────┴───────────────────────────────┘
```

---

## 4. Spacing System & Layout Grid

### 4.1 8-Point Baseline Spacing Scale
All layout margins, paddings, and component dimensions adhere to a strict 8px rhythm (with a 4px half-step for micro-elements):
* `--space-1`: 4px (Micro padding, badge vertical spacing)
* `--space-2`: 8px (Chip padding, compact gap)
* `--space-3`: 12px (Input padding, button small vertical)
* `--space-4`: 16px (Card inner padding, standard element gap)
* `--space-6`: 24px (Standard card padding, medium flex gap)
* `--space-8`: 32px (Sub-section margin, grid gap)
* `--space-12`: 48px (Major component separation)
* `--space-16`: 64px (Section separation on tablet/mobile)
* `--space-24`: 96px (Standard section padding on desktop)
* `--space-32`: 128px (Hero and landmark section breathing room)

### 4.2 Layout Grid System
* **Max Container Width:** `1280px` (Ultra-wide breakout allowed for hero subtle graphics at `1440px`).
* **Desktop Grid (1024px+):** 12 Columns | Gutter: `32px` | Outer Margin: `48px` fluid.
* **Tablet Grid (768px - 1023px):** 8 Columns | Gutter: `24px` | Outer Margin: `32px`.
* **Mobile Grid (< 768px):** 4 Columns | Gutter: `16px` | Outer Margin: `20px`.

---

## 5. Elevation, Depth & Border Tokens

Rather than heavy drop shadows from traditional web templates, elevation in this system is achieved via **subtle multi-layered ambient occlusions** and **hairline translucent borders**.

```css
/* Elevation 0: Flat on canvas */
--shadow-flat: none;

/* Elevation 1: Baseline interactive cards */
--shadow-card: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03);
--border-card: 1px solid rgba(226, 232, 240, 0.8);

/* Elevation 2: Hovered cards / Floating Navigation Bar */
--shadow-hover: 0 12px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 10px -4px rgba(37, 99, 235, 0.04);
--border-card-hover: 1px solid rgba(191, 219, 254, 0.9);

/* Elevation 3: Modals, Slide-over Drawers & Flyouts */
--shadow-modal: 0 25px 50px -12px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(15, 23, 42, 0.05);

/* Blue Ambient Glow Token */
--glow-blue: 0 0 40px -8px rgba(37, 99, 235, 0.15);
```

### 5.1 Corner Radii
* `--radius-sm`: 6px (Micro badges, code tags)
* `--radius-md`: 10px (Buttons, input fields, pill badges)
* `--radius-lg`: 16px (Standard content cards, image wrappers)
* `--radius-xl`: 24px (Hero containers, modal dialogs)
* `--radius-full`: 9999px (Pill buttons, avatar badges, status indicators)

---

## 6. Interactive States Specification

* **Default State:** Crisp, clear borders (`--border-subtle`), high contrast text, calm presence.
* **Hover State:** Elevation shifts to `--shadow-hover`, border tint shifts to `--blue-200` (`#BFDBFE`), subtle vertical translate `-2px` with a 200ms cubic-bezier transition.
* **Active / Pressed State:** Subtle scale `0.985`, border accent shifts to `--blue-600`.
* **Focus Visible:** Accessible 2px double outline (`2px solid #2563EB` with `2px offset`).
* **Disabled State:** Opacity `0.45`, cursor `not-allowed`, no transform or shadow transitions.
* **Loading State:** Subtle shimmering skeleton pulse (`#F1F5F9` to `#E2E8F0` at 1.5s wave).
