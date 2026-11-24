# Responsive Layouts & Viewport Blueprint Specifications

This document defines the responsive layout wireframes, multi-device grid behaviors, and ergonomic adaptations across all four primary viewport tiers for Sri Harsha's engineering portfolio.

---

## 1. Breakpoint Taxonomy & Column System

```
┌─────────────┬────────────────┬──────────┬────────┬────────┬─────────────────────────────┐
│ Tier        │ Range (px)     │ Columns  │ Gutter │ Margin │ Device Archetype            │
├─────────────┼────────────────┼──────────┼────────┼────────┼─────────────────────────────┤
│ Mobile      │ 360px – 480px  │ 4 Cols   │ 16px   │ 20px   │ iPhone 13/14/15, Galaxy S23 │
│ Tablet      │ 481px – 768px  │ 8 Cols   │ 24px   │ 32px   │ iPad Mini, Foldables, Tablets│
│ Desktop     │ 769px – 1280px │ 12 Cols  │ 32px   │ 48px   │ MacBooks, Laptops, 1080p    │
│ Ultra-wide  │ 1281px – 1920px│ 12 Cols  │ 32px   │ Fluid  │ 1440p / 4K Pro Displays     │
└─────────────┴────────────────┴──────────┴────────┴────────┴─────────────────────────────┘
```

---

## 2. Global Wireframes & Layout Schematics

### 2.1 Navigation & Header Responsive Wireframe

#### Desktop Header (Floating Dynamic Island):
```text
+------------------------------------------------------------------------------------+
|  [SH Monogram]    About   Skills   Projects   Experience   Achievements     [Resume ↗]  |
+------------------------------------------------------------------------------------+
  - Centered floating bar, max-width: 880px, padding: 12px 24px, backdrop-blur: 16px
```

#### Mobile Header:
```text
+------------------------------------------------------------------------------------+
|  [SH Monogram]                                                           [Menu ☰]  |
+------------------------------------------------------------------------------------+
  - Fixed full-width top bar, height: 64px, padding: 0 20px, touch target: 48x48px
```

---

### 2.2 Hero Section Responsive Wireframe

#### Desktop Layout (12 Columns — Split 7 / 5):
```text
+------------------------------------------------------------------------------------+
| COL 1 - 7: Content Block                           COL 8 - 12: Interactive Visual  |
|                                                                                    |
| [● Open to AI/ML & Engineering Roles]              +-----------------------------+ |
|                                                    | SatQuery AI Telemetry Card  | |
| Hi, I'm Sri Harsha.                                | > Multimodal Input: Active  | |
| I build intelligent AI systems                     | > Vision Backbone: Ingested | |
| and ship production-ready software.                | > Latency: 142ms            | |
|                                                    | [Satellite Tile Rendering]  | |
| Third-year B.Tech CSE (AI & ML) at LPU (8.51 CGPA).+-----------------------------+ |
|                                                                                    |
| [Explore Featured Work]  [Download Resume]                                         |
|                                                                                    |
| 8.51 CGPA   |   100+ LeetCode   |   Oracle AI Certified   |   Top 16% Hackathon   |
+------------------------------------------------------------------------------------+
```

#### Mobile Layout (4 Columns — Stacked):
```text
+------------------------------------------------------------------------------------+
| [● Open to AI/ML & Engineering Roles]                                              |
|                                                                                    |
| Hi, I'm Sri Harsha.                                                                |
| I build intelligent AI systems and ship                                            |
| production-ready software.                                                         |
|                                                                                    |
| Third-year B.Tech CSE (AI & ML) at LPU (8.51 CGPA).                                |
|                                                                                    |
| [Explore Featured Work - Full Width]                                               |
| [Download Resume - Full Width]                                                     |
|                                                                                    |
| +--------------------------------------------------------------------------------+ |
| | Interactive Telemetry Card (Optimized Height: 240px)                           | |
| +--------------------------------------------------------------------------------+ |
|                                                                                    |
| [ 8.51 CGPA ]   [ 100+ LeetCode ]   [ Oracle Cert ]   [ Top 16% Hack ]             |
+------------------------------------------------------------------------------------+
```

---

### 2.3 Featured Projects Responsive Wireframe

#### Desktop Layout (Alternating 2-Column Cards):
```text
+------------------------------------------------------------------------------------+
| Project 1 (SatQuery AI)                                                            |
| +-----------------------------------------+  +-----------------------------------+ |
| | Visual Architecture & Interface Preview |  | Multimodal AI / Remote Sensing    | |
| | [High-Resolution Satellite Interface]   |  | SatQuery AI                       | |
| |                                         |  | Natural language visual assistant | |
| |                                         |  | for remote sensing observations.  | |
| |                                         |  |                                   | |
| |                                         |  | [Python] [OpenCV] [Flask] [React] | |
| |                                         |  | [View Case Study] [Live Demo ↗]   | |
| +-----------------------------------------+  +-----------------------------------+ |
|                                                                                    |
| Project 2 (ResumeMatch AI)                                                         |
| +-----------------------------------+  +-----------------------------------------+ |
| | Applied NLP / Generative AI       |  | Visual Interface Preview                | |
| | ResumeMatch AI                    |  | [Candidate Telemetry & Match Scoring]   | |
| | Intelligent ATS alignment engine  |  |                                         | |
| | with disparity analysis scoring.  |  |                                         | |
| | [NLP] [React] [Scikit-learn]      |  |                                         | |
| | [View Case Study] [Live Demo ↗]   |  +-----------------------------------------+ |
| +-----------------------------------+                                              |
+------------------------------------------------------------------------------------+
```

#### Mobile Layout (Vertical Card Stack):
```text
+------------------------------------------------------------------------------------+
| +--------------------------------------------------------------------------------+ |
| | Project Preview Thumbnail (Aspect Ratio: 16:9)                                 | |
| +--------------------------------------------------------------------------------+ |
| | SatQuery AI                                                  [Status: Prototype]| |
| | Multimodal AI / Remote Sensing                                                 | |
| | Natural language visual assistant for remote sensing imagery analysis.         | |
| | Tags: [Python] [OpenCV] [Flask] [React]                                        | |
| | [Read Case Study - Full Width]                                                 | |
| +--------------------------------------------------------------------------------+ |
+------------------------------------------------------------------------------------+
```

---

### 2.4 Technical Skills Matrix Responsive Wireframe

#### Desktop (3 x 2 Grid of Functional Clusters):
```text
+------------------------------------------------------------------------------------+
| [Cluster 1: AI & ML]            [Cluster 2: GenAI & LLMs]      [Cluster 3: Frontend]|
| • Python, TensorFlow, Keras     • Gemini & OpenAI APIs         • React.js, JS ES6+  |
| • OpenCV, Scikit-learn, NLP     • Hugging Face, Prompt Eng     • HTML5, CSS3, Grid  |
|                                                                                    |
| [Cluster 4: Backend & APIs]     [Cluster 5: Data & Storage]    [Cluster 6: CS & Dev]|
| • Flask, Node.js, REST APIs     • SQL, PostgreSQL, MySQL       • DSA (100+ LeetCode)|
| • Microservices, WebSockets     • Oracle AI Database Found.    • Git, Vercel, Jira  |
+------------------------------------------------------------------------------------+
```

#### Mobile (Horizontal Swipeable Pill Filter + Stacked Cards):
```text
+------------------------------------------------------------------------------------+
| [All (Active)]  [AI/ML]  [GenAI]  [Frontend]  [Backend]  [Data]  (Scroll →)        |
|                                                                                    |
| +--------------------------------------------------------------------------------+ |
| | AI & Machine Learning                                                          | |
| | [Python - Proficient]   [OpenCV - Proficient]   [TensorFlow - Working]         | |
| | [Scikit-learn - Proficient]   [NLP - Working Knowledge]                        | |
| +--------------------------------------------------------------------------------+ |
+------------------------------------------------------------------------------------+
```

---

### 2.5 Experience & Timeline Responsive Wireframe

#### Desktop:
```text
+------------------------------------------------------------------------------------+
| Jan 2025 - Mar 2025  ●─── AI/ML Intern @ Edufiy Tech Solutions                     |
|                           • Engineered data preprocessing and model evaluation.    |
|                           • Integrated machine learning inference endpoints.       |
|                           • Tags: [Python] [Scikit-learn] [Flask] [Agile]          |
+------------------------------------------------------------------------------------+
```

#### Mobile:
```text
+------------------------------------------------------------------------------------+
| ● Jan 2025 – Mar 2025                                                              |
|   AI/ML Intern @ Edufiy Tech Solutions                                             |
|   • Engineered data preprocessing and model evaluation pipelines.                  |
|   • Integrated inference endpoints with Python web services.                       |
|   • Tags: [Python] [Scikit-learn] [Flask]                                          |
+------------------------------------------------------------------------------------+
```

---

### 2.6 Competitive Coding & Achievements Wireframe

#### Desktop (3-Column Asymmetric Cards):
```text
+------------------------+  +------------------------+  +------------------------+
| LeetCode Excellence    |  | HackerRank Credentials |  | CODE STORM Hackathon   |
| 100+                   |  | Rank 1,716 / 3,062     |  | Rank 8 / 50 Teams      |
| Problems Solved        |  | Orchestrate Contest    |  | Rapid Prototyping      |
| [Arrays] [Trees] [DP]  |  | ★★★★ Problem Solving   |  | Collaborative Sprint   |
| [View LeetCode ↗]      |  | ★★★★ Python | Java | C++| [View Project Details] |
+------------------------+  +------------------------+  +------------------------+
```

#### Mobile:
```text
+------------------------------------------------------------------------------------+
| +--------------------------------------------------------------------------------+ |
| | LeetCode: 100+ Problems Solved                                                 | |
| +--------------------------------------------------------------------------------+ |
| | HackerRank: 4-Star Badges (Problem Solving, Python, Java, C++)                  | |
| +--------------------------------------------------------------------------------+ |
| | CODE STORM Hackathon: 8th Rank out of 50 Teams                                 | |
| +--------------------------------------------------------------------------------+ |
+------------------------------------------------------------------------------------+
```

---

## 3. Ergonomics, Touch Targets & Cumulative Layout Shift (CLS)

1. **Touch Target Sizing:**
   * Mobile buttons, navigation triggers, and link tags are sized with a minimum touch area of **48px x 48px** with at least **8px** separation to prevent accidental taps.
2. **Thumb Zone Architecture (Mobile):**
   * Primary action buttons (Resume download, Contact, Project Details) are located within the natural thumb sweep zone (lower 60% of the mobile viewport).
3. **Zero Cumulative Layout Shift (CLS = 0):**
   * Explicit aspect ratio boxes (`aspect-ratio: 16 / 9`) are set on all project preview images and telemetry diagrams.
   * Font definitions include `font-display: swap` paired with fallback font metrics to prevent text reflow.
   * Skeletons match exact final container dimensions.
