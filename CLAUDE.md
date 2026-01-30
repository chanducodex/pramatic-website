# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for Pragmatic (Structural Steel Detailing & BIM Services). The project is auto-synced with v0.app and deployed on Vercel.

## Commands

```bash
pnpm dev      # Development server (http://localhost:3000)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint checking
```

Package manager is **pnpm** (pnpm-lock.yaml present).

## Architecture

### Tech Stack
- **Framework:** Next.js 15.2.4 with React 19, App Router
- **Styling:** Tailwind CSS v4 with OKLCH color model, shadcn/ui patterns
- **UI Components:** 25+ Radix UI primitives for accessibility
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Geist (sans/mono), Plus Jakarta Sans, IBM Plex Mono, Lora

### Directory Structure
- `app/` - Next.js app router with file-based routing
  - `layout.tsx` - Root layout with metadata, fonts, Chatling chatbot, Vercel Analytics
  - `page.tsx` - Single-page home with all sections composed
  - `globals.css` - Design tokens and CSS variables
- `components/` - React components (client-side with "use client")
- `lib/utils.ts` - `cn()` helper for Tailwind class merging

### Key Components
Page sections are composed in `app/page.tsx`:
1. `nav.tsx` - Sticky navigation with scroll detection
2. `hero.tsx` - Animated hero with crane SVGs
3. `stats-cards.tsx` - Rotating statistics
4. `services-timeline.tsx` - Services showcase
5. `softwares-section.tsx` - Software expertise marquee
6. `why-choose-us.tsx` - Features grid
7. `testimonials.tsx` - Client testimonials
8. `footer-contact.tsx` - Contact form + footer

### Design System
- Brand colors defined as CSS variables in `globals.css`
  - Primary: `#7c3aed` (purple)
  - Accent: `#8b5cf6` (light purple)
  - Background: `#0b061a` (deep purple)
- Dark mode fully supported via `next-themes`
- Components follow shadcn/ui "New York" style

### Build Configuration
- ESLint and TypeScript errors are **ignored during production builds** (configured in `next.config.mjs`)
- Image optimization disabled for SSG compatibility

## Important Notes

- This project auto-syncs with v0.app - changes can also be made there and deployed to Vercel
- The Chatling chatbot (ID: 9418221527) is embedded in the root layout
- Path alias `@/*` maps to the project root
