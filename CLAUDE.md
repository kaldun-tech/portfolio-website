# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for a protocol engineer targeting hiring managers at blockchain/distributed systems companies (Hedera Hashgraph, Lightning Labs, Coinbase, Kraken, and protocol startups).

**Tech Stack:** Astro 5, Tailwind CSS, TypeScript
**Deployment:** Vercel
**Live Site:** https://taras-smereka.com

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
npm run format       # Format with Prettier
```

## Directory Structure

```
portfolio-website/
├── src/
│   ├── components/     # Astro components (Header, Footer, ProjectCard, etc.)
│   ├── data/           # TypeScript data files (projects.ts)
│   ├── layouts/        # Layout.astro (base template)
│   ├── pages/          # index.astro, portfolio.astro
│   └── styles/         # global.css (Tailwind)
├── public/             # Static assets (images, favicon)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## Messaging Framework (StoryBrand)

Follow the StoryBrand framework: the **hiring manager is the hero**, not the portfolio owner.

### Target Audience

Engineering managers and technical leads at blockchain protocol companies who need to hire senior engineers they can trust to ship production code.

### Their Problems

| Level | Problem |
|-------|---------|
| External | Open protocol engineering roles to fill |
| Internal | "What if we hire someone who interviews well but can't ship? What if they don't *really* understand distributed systems?" |
| Philosophical | "Great protocol engineers are rare. We need someone who gets it." |

### Positioning (Guide Role)

- **Empathy:** Understands building mission-critical infrastructure (9 years SCADA/power grids)
- **Authority:** Merged PRs to Hedera with measurable impact (5.6x performance improvement)

### Content Guidelines

1. **Lead with their needs**, not credentials ("Building reliable protocol infrastructure?" vs "I am a...")
2. **Quantify results** - numbers are authority signals (5.6x improvement, 30-50% gas reduction)
3. **Frame skills as solutions to their problems**, not a feature list
4. **Clear CTAs** - Direct: "Schedule a Call" / Transitional: "View Portfolio"
5. **Show stakes** - What happens if they hire the wrong person (bugs in consensus, security vulnerabilities)
6. **Paint success** - Shipped improvements, reliable systems, faster team velocity

### Tone

- Technical and credible, not salesy
- Confident but not arrogant
- Concise - respect their time
- Focus on distributed systems, protocol engineering, production reliability

## Design

- **Primary:** #1863DC (brand-blue)
- **Dark accent:** #154AB8 (brand-blue-dark)
- **Background:** #F4F4F4 / white
- **Font:** Inter
- Light theme only, clean/minimal aesthetic

## Key Pages

- **/** - Main landing page with hero, experience, projects, CTA
- **/portfolio** - Detailed project showcase

## Important Notes

- Keep messaging customer-centric (hiring manager as hero)
- Prioritize quantified achievements over generic skill lists
- All projects should demonstrate production-readiness and measurable impact
- Ensure responsive design and proper SEO metadata
