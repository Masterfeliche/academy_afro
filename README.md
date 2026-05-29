# AFROEURO Soccer Academy

English-only marketing site for **AFROEURO Soccer Academy** — React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host.

## Project layout

```
src/
  app/           App shell + routes
  pages/         One file per route
  components/    Reusable UI
  data/          Fees, coaches, contact, images
  locales/       en.json (all copy)
  i18n/          Translation helpers
  styles/        globals.css + Tailwind
public/images/   Academy photos
```

## Edit content

| What | Where |
|------|--------|
| Page titles & SEO | `src/locales/en.json` → `meta.*` |
| Coach names & bios | `src/locales/en.json` → `coach.*` |
| Fees | `src/data/fees.ts` |
| Social links | `src/data/site.ts` |
| Photos | `src/data/site-images.ts` |
