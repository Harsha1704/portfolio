# Animation Guidelines & Purposeful Motion Choreography

This document outlines the motion philosophy, timing curves, interactive micro-animations, and accessibility safeguards for Sri Harsha's engineering portfolio.

---

## 1. Motion Philosophy: Purpose Over Decoration

In this portfolio, animations are **functional engineering components**, not decorative gimmicks. Every animation must satisfy at least one of three objectives:
1. **Direct Focus:** Guide the hiring manager’s eye toward primary credentials, key architecture diagrams, or active actions.
2. **Clarify Spatial Relationships:** Smoothly indicate where a modal came from, how a drawer opened, or how tabs transition without disorienting the reader.
3. **Provide Tactile Feedback:** Confirm user input immediately upon hover, click, copy, or form submission.

### Performance Mandate:
* All animated properties must be restricted strictly to GPU-accelerated compositing: `transform` and `opacity`.
* No animation of layout-triggering properties (`width`, `height`, `margin`, `padding`, `top`, `left`).
* Frame budget: 60 FPS guaranteed on mobile devices; 120 FPS on high-refresh Pro displays.

---

## 2. Motion Easing Tokens & Curves

```css
/* Standard Natural Ease (For general transitions, reveals, fades) */
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1.0);

/* Decelerate / Out Curve (For entrances, modal openings, drawer reveals) */
--ease-out-editorial: cubic-bezier(0.16, 1.0, 0.3, 1.0);

/* Accelerate / In Curve (For quick exits, modal dismissals) */
--ease-in-editorial: cubic-bezier(0.7, 0.0, 0.84, 0.0);

/* Subtle Elastic Spring (For micro-interactions, badge hover, copy feedback) */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1.0);
```

### Duration Scale Tokens:
* `--duration-instant`: `100ms` (Active click feedback, toggle switches)
* `--duration-micro`: `180ms` (Button hover, chip highlights, tooltip fades)
* `--duration-medium`: `320ms` (Card elevation, tab switches, dropdown reveals)
* `--duration-expressive`: `500ms` (Modal and drawer slide-overs, hero section entrance)

---

## 3. Scroll-Triggered Reveal Choreography

To present an editorial flow as the user scrolls, sections employ a subtle staggered reveal:

```css
/* Reveal Keyframe Blueprint */
@keyframes editorialReveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-on-scroll {
  animation: editorialReveal 500ms var(--ease-out-editorial) forwards;
}

/* Stagger Delay Ladder */
.stagger-1 { animation-delay: 60ms; }
.stagger-2 { animation-delay: 120ms; }
.stagger-3 { animation-delay: 180ms; }
.stagger-4 { animation-delay: 240ms; }
```

* **Trigger Threshold:** Triggered when the element crosses `15%` into the viewport (`IntersectionObserver` with `rootMargin: "0px 0px -10% 0px"`).
* **Rule:** Scroll reveals fire only **once** per session. Re-animating elements when scrolling up creates reader fatigue and is strictly prohibited.

---

## 4. Micro-Interactions Specification

### 4.1 Card Elevation & Tilt
* **Trigger:** Mouse enters a Featured Project Card or Achievement Card.
* **Physics:**
  * Card translates vertically: `translateY(-3px)`.
  * Box shadow scales from `--shadow-card` to `--shadow-hover`.
  * Transition duration: `220ms var(--ease-standard)`.
  * Subtle 1.5-degree perspective tilt enabled on desktop mouse move (optional enhancement with low overhead).

### 4.2 Magnetic Button Hover
* For primary CTA buttons (`Explore Featured Work`, `Download Resume`), the button gently drifts toward cursor coordinates within a `12px` radius using a dampening spring curve, resetting smoothly on mouse leave.

### 4.3 Copy-to-Clipboard Confirmation
* **Click Action:** Clicking the email address triggers an instant micro-pulse:
  * Scale: `0.96` for 80ms, then springs to `1.04` before settling at `1.0`.
  * Text swaps from `harsha@example.com` to `Copied to Clipboard! ✓` in an emerald accent pill.

---

## 5. Subtle Ambient Background Motion

To prevent the clean white canvas from feeling static while preserving strict minimalism:
* **Radial Mesh Accent:** A soft, high-diffusion radial gradient at the top of the hero section:
  ```css
  background: radial-gradient(
    circle at 50% 0%,
    rgba(37, 99, 235, 0.07) 0%,
    rgba(255, 255, 255, 0) 65%
  );
  ```
* **Interactive Cursor Tracking (Desktop Only):** The focal origin of the radial gradient drifts slightly (maximum `15px` displacement) following mouse coordinates with heavy dampening (`inertia: 0.05`), producing an organic, physical feel without distracting the user.

---

## 6. Accessibility & Reduced-Motion Mode

The portfolio enforces strict accessibility compliance for users with vestibular sensitivities or motion-triggered discomfort.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .reveal-on-scroll {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Fallback Behavior:
* When `prefers-reduced-motion` is active, all layout transforms, translate offsets, and magnetic drifts are deactivated instantly.
* Informational transitions (e.g., Tab switching, Modal opening) resolve via instantaneous opacity cut (`opacity: 1`), ensuring zero disorientation while preserving complete functional capability.
