# Product Requirements Document (PRD): SEOtriks Public Web Experience

**Document Version:** 1.0.0  
**Status:** Approved / In Production  
**Primary Brand Statement:** *SEO made actionable.*  
**Supporting Tagline:** *Find what matters. Know what to fix. See what improved.*  
**Target Form Factors:** Desktop (1440px primary), Tablet (768–1024px), Mobile (375–430px)

---

## 1. Executive Summary & Vision

### 1.1 Product Overview
SEOtriks is an AI-assisted technical search optimization and algorithmic defense platform engineered for modern web teams, agencies, and high-growth e-commerce sites. Unlike legacy SEO tools that export 200-page unstructured audit PDFs and tens of thousands of unranked CSV rows, SEOtriks functions as an **Action Engine**. It automatically continuously crawls web architecture, clusters algorithmic drift, and outputs deterministic, prioritized remediation code (JSON-LD schemas, edge redirect recipes, automated GitHub pull requests).

### 1.2 Core Objectives
- **Zero-Friction Comprehension:** Ensure visitors grasp within 5 seconds: What SEOtriks is, how it differs from traditional crawlers, who it is built for, and how to start immediately.
- **Conversion-Led Architecture:** Drive high-intent visitors toward the **14-Day Free Trial** or **Live Engineering Demos** via cohesive global navigation and contextual micro-CTAs.
- **High-Fidelity Visual Storytelling:** Bridge the gap between marketing copy and technical credibility using realistic UI mockups, real-time Search Signal topologies, interactive terminal previews, and verified benchmarks.

---

## 2. Brand Identity & Design System Standards

### 2.1 Color Palette Architecture
The website adheres to a strict five-tier hierarchical blue spectrum balanced by deep contrast neutrals and functional semantic indicators:

| Token Name | Hex Code | Primary Usage & Weighting |
| :--- | :--- | :--- |
| **Ice Blue** | `#F0FAFF` | Large canvas backgrounds, alternating sections, hero glow accents, form surrounds |
| **Cloud Blue** | `#D5EBFB` | Secondary containers, feature card cards, subtle hover states, node backgrounds |
| **Soft Blue** | `#B6CDF6` | Structural borders, card outlines, vector paths, secondary data visualizers |
| **Medium Blue** | `#7BA3ED` | Interactive secondary buttons, sparkline nodes, badges, chart curves |
| **Primary SEOtriks Blue** | `#4583E8` | Primary CTAs, active navigation indicators, key highlights, growth plan badge |
| **Deep Navy** | `#0B1F3A` | Primary headings, dark feature modules, global footer, high-contrast text |
| **Primary Text** | `#14213D` | Body typography, high-readability paragraphs |
| **Secondary Text** | `#64748B` | Subheadings, metadata, captions, technical descriptions |
| **Success** | `#10B981` | Verified status, health scores, live uptime indicators |
| **Warning** | `#F59E0B` | Medium priority issues, crawl warnings |
| **Critical** | `#EF4444` | High-impact canonical errors, noindex drops, 404 spikes |

### 2.2 Typography & Spacing
- **Font Family:** `Plus Jakarta Sans`, accompanied by clean system fallbacks (`Inter`, sans-serif), with `Fira Code` / monospace for code and terminal blocks.
- **Corner Radii:** Consistent 8px (`rounded-lg`) for buttons, form inputs, and badges; 16px (`rounded-2xl`) for elevated cards and product previews.
- **Visual Motif ("Search Signals"):** Flowing vector curves, crawler paths, connected graph clusters, and telemetry nodes representing algorithmic clarity.

---

## 3. Site Architecture & Page-Level Functional Specs

The platform web architecture encompasses **6 standalone primary pages** plus **1 long-form article template**:

```
SEOtriks Web Architecture
├── / (Home — Product Overview & Action Engine)
├── /about (Mission, Narrative & Distributed Engineering)
├── /services (12 Core SEO Capabilities & Remediation Studio)
├── /blog (Research Editorial & Algorithmic Analysis)
│   └── /blog/[slug] (Long-Form Article & Anatomy Template)
├── /contact (Technical Dispatch, Global Hubs & Mini-Audits)
└── /pricing (Predictable Tier Matrix & Enterprise Architecture)
```

---

### 3.1 Page 1: Home (`/`)
* **Objective:** Establish instant credibility, demonstrate the live product UI, and convert traffic through a risk-free 14-day trial.
* **Core Modules:**
  1. **Hero Section:**
     - Title: *"Stop guessing. Start fixing what matters."*
     - Subtitle: High-clarity value proposition highlighting automated action plans and prioritized SERP defense.
     - Primary CTAs: `Start Free Today` (Primary Blue) and `See How It Works` (Secondary Glass).
     - Hero Visual: **SEOtriks Action Plan Mockup** — Featuring domain switcher, Health Index score (94/100), Crawl Velocity sparklines, and an **Automated Priority Queue** with one-click fix buttons.
  2. **Social Proof & Logo Strip:** Muted brand vectors from enterprise customers (Veloce, StackWave, DevPulse, CloudIndex).
  3. **3 Core Benefit Pillars:**
     - *Complexity to Clarity* (triage 10,000+ crawl issues to top 3 actions).
     - *24/7 SEO Defense Guard* (instant edge alert on noindex/canonical tampering).
     - *Growth Opportunity Radar* (algorithmic keyword decay vs. intent opportunities).
  4. **Services Bento Grid:** Interactive cards for Continuous Spider, SERP Radar, Content Decay, and Instant Schema Injection.
  5. **SEO Agent Showcase:** Dark terminal interface showing autonomous git diff PR generation (`Create Pull Request` / `Copy Snippet`).
  6. **Paradigm Shift Matrix:** Direct comparison between "Legacy Dashboards" (analysis paralysis) vs. "SEOtriks Action Engine" (3x faster resolution velocity).
  7. **Customer Testimonials & Global Footer.**

---

### 3.2 Page 2: About (`/about`)
* **Objective:** Articulate the founding thesis, unpack the "anti-PDF" philosophy, and humanize the distributed engineering team.
* **Core Modules:**
  1. **Narrative Hero:** *"SEO shouldn't require a dashboard full of confusion."*
  2. **Core Process Model:** Three-stage visual diagram: **Complexity → Filtered AI Synthesis → Actionable Execution**.
  3. **Genesis Story & Quantitative Proof:** Highlighting industry reality (84% of audit recommendations are ignored) and reducing mitigation time from 14 days to 12 minutes.
  4. **Engineering Pillars:**
     - *Priority Engine* (revenue-weighted algorithmic triage).
     - *Change Verification Pipeline* (staging edge sandbox crawls).
     - *AI Visibility Tracker* (multimodal LLM citation monitoring across ChatGPT, Gemini, Perplexity).
  5. **Leadership Profiles:** Real engineering and data science leadership portraits (Elena Rostova, Marcus Vance, Dr. Kenji Takahashi).

---

### 3.3 Page 3: Services (`/services`)
* **Objective:** Serve as a comprehensive technical catalog of all 12 platform capabilities with varied visual hierarchy.
* **The 12 Core Capabilities:**
  1. *Technical SEO Audits* (Deep-crawl headless rendering).
  2. *AI SEO Recommendations* (Code-ready pull requests).
  3. *SEO Priority Engine* (Algorithmic triage scoring).
  4. *SEO Guard* (24/7 real-time sentinel and automated rollback alerts).
  5. *Search Performance* (Search Console API velocity integration).
  6. *Content Health* (Decay analysis and intent clustering).
  7. *Smart Content Refresh* (Algorithmic brief generator).
  8. *SEO Opportunities* (Internal linking and strike-zone positions).
  9. *Competitor Radar* (Programmatic competitor sitemap surveillance).
  10. *AI Visibility (GEO)* (Generative search citation tracking).
  11. *Change Verification* (CI/CD post-deploy crawler checks).
  12. *SEO Reporting* (Executive multi-client white-label reports).
* **Remediation Studio ("Fix It For Me"):** Code editor preview demonstrating auto-synthesized Schema JSON-LD and Cloudflare regex edge rules.
* **Ecosystem Compatibility Matrix:** Jamstack, headless, WordPress VIP, Shopify Plus, and Next.js / Nuxt frameworks.

---

### 3.4 Page 4: Blog (`/blog`) & Article Template (`/blog/[slug]`)
* **Objective:** Thought leadership and organic search acquisition driven by empirical research and algorithm reverse-engineering.
* **Core Modules:**
  1. **Visual Search & Taxonomy Bar:** Quick filters for *Technical SEO*, *Content SEO*, *AI Search*, *SEO Guides*, and trending tags (`#Perplexity-Citations`, `#INP-NextJS`).
  2. **Featured Research Study:** Deep-dive benchmark on *Google AI Overviews & Entity SEO* with interactive SERP Graph density monitor.
  3. **Tactical Field Reports Grid:** Structured cards with read durations, author avatars, and micro-diagrams.
  4. **Article Template Anatomy (`/blog/[slug]`):**
     - Sticky progressive reading indicator.
     - Table of Contents sidebar.
     - Executive Key Takeaways box.
     - Empirical Correlation Bar Charts (Citation Rate by Schema Depth).
     - Code block syntax highlighting with instant copy functionality.

---

### 3.5 Page 5: Contact (`/contact`)
* **Objective:** Streamline enterprise inquiries, technical sales, and support dispatch without cognitive friction.
* **Core Modules:**
  1. **Dispatch Form:** Full Name, Work Email, Phone (optional), Reason for Contact dropdown, Website URL (triggers complimentary crawl mini-audit), and Detailed Message.
  2. **Direct Specialist Access:** Profile card for SEO Solutions Specialist with verified response time badge (< 15 mins).
  3. **Direct Contact Vectors:** Email Technical Support, Enterprise Growth Desk, and Live Crawler Chat.
  4. **Global Node Hubs:** Operational telemetry for San Francisco and London engineering clusters.
  5. **Self-Serve Technical Resources:** Direct links to DNS authentication docs, JS rendering guides, and weekly Discord office hours.

---

### 3.6 Page 6: Pricing (`/pricing`)
* **Objective:** Provide crystal-clear, transparent billing options with zero hidden tier traps.
* **Pricing Tiers (Non-Negotiable):**
  - **Free ($0/month):** For solo creators and personal portfolios. 1 site, 500 crawled URLs/mo, weekly crawls, basic priority score.
  - **Starter ($9/month | $90/year):** For small boutique businesses. 3 sites, 5,000 crawled URLs/mo, daily crawls, Core Web Vitals latency monitor, 25 AI recommendations.
  - **Growth ($19/month | $190/year — HIGHLIGHTED / MOST POPULAR):** For scaling SaaS and e-commerce. 10 sites, 50,000 crawled URLs/mo, hourly change crawls, real-time SEO Guard SMS/Webhook alerts, unlimited AI recommendations, AI Search visibility tracking.
  - **Pro ($39/month | $390/year):** For digital marketing agencies and consulting teams. 35 sites, 250,000 crawled URLs/mo, continuous stream crawls, white-label client PDF audit generator, dedicated Slack channel, and Crawl API access tokens.
* **Enterprise Custom Tier:** Dedicated crawler IPs, SSO/SAML, custom ingestion pipelines, and bespoke SLAs.
* **Comprehensive Comparison Matrix:** Side-by-side granular breakdown across Crawling Capacity, AI Optimization, Monitoring, and Collaboration.

---

## 4. Technical Non-Functional Requirements (NFRs)

1. **Performance & Core Web Vitals:**
   - Largest Contentful Paint (LCP) ≤ 1.2s.
   - Interaction to Next Paint (INP) ≤ 100ms.
   - Cumulative Layout Shift (CLS) = 0.
2. **Accessibility (WCAG 2.1 AA):**
   - High-contrast text compliance across all blue tiers (min 4.5:1 ratio for body copy).
   - ARIA labels on all interactive switches, accordions, and code copy buttons.
3. **Responsive Breakpoint Layouts:**
   - Standard Desktop: 1440px grid (max-w-7xl container).
   - Tablet: Reflow bento grids from 3-4 columns down to 2 columns with horizontal scroll cards.
   - Mobile: 1-column stack, sticky bottom action bar, and touch-target sizes ≥ 44x44px.

---

## 5. Implementation Roadmap & Milestones

- [x] **Phase 1: Brand Design System & Tokens** — Color palettes, typography, and reusable Search Signal vectors (`DESIGN_SYSTEM_1`).
- [x] **Phase 2: Core Web Architecture (6 Primary Pages)** — Complete standalone design implementation of `/`, `/about`, `/services`, `/blog`, `/contact`, and `/pricing`.
- [x] **Phase 3: Article Template System** — Structural anatomy definition for `/blog/[slug]`.
- [ ] **Phase 4: Production Export & CI/CD Staging** — Component modularization, Next.js/Tailwind code handoff, and CMS schema binding.
