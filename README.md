# Zebra Trades Website

Black & White Prices. Lots of Colours.

A Next.js 16 (App Router) + Tailwind CSS v4 marketing site for Zebra Trades, a home improvement company serving Cheshunt, Hertfordshire and the surrounding area.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services overview (all 9 services)
- `/handyman` — Handyman packages, pricing categories & FAQ
- `/contact` — Contact form & details

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Before going live — placeholders to update

These live in `data/site.ts`:

- `phoneDisplay` / `phoneHref` — currently a placeholder (`01992 XXX XXX`); the `tel:` link is non-functional until set.
- `email` — currently `info@zebratrades.co.uk`; confirm this is the real address/domain.
- `hours` — opening hours are estimated placeholders.

No customer testimonials or specific per-task prices for the Carpentry & Repairs / TV & Smart Home / Garden & Outdoor / Home Maintenance categories on the Handyman page have been invented — only the three package prices supplied (Minimum Visit, Half Day, Full Day) are used as real pricing, with example job types listed underneath each category.

The contact form (`components/ContactForm.tsx`) is front-end only — it doesn't send anywhere yet. Wire it up to an API route or a form/email service before relying on it for enquiries.

## Fonts

Big Shoulders, Work Sans and IBM Plex Mono are self-hosted under `assets/fonts/` (Google Fonts, OFL-licensed — licence files included) and loaded via `next/font/local`.

## Deployment

The whole site is statically generated (`output: "export"` in `next.config.ts`). Running `npm run build` produces a self-contained `out/` folder of plain HTML/CSS/JS that can be hosted anywhere, including Cloudflare Pages — see the build instructions for details.

