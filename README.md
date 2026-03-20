# AFROEURO Soccer Academy — Frontend

Production-quality multilingual marketing site for **AFROEURO Soccer Academy**, built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide React**, and **next-intl**. Hero, gallery, programs, and page imagery use **local academy photos** in `public/pics/` (see `data/pics.ts` and `lib/unsplash.ts`).

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English is the default locale (`localePrefix: "as-needed"`). Swahili uses the `/sw` prefix.

## Production build

```bash
npm run build
npm start
```

## Environment variables

Optional: copy `.env.example` to `.env.local` if you add server-side integrations later. Gallery and marketing imagery are served from `public/pics/` by default.

## Project layout

| Area | Location |
|------|----------|
| App Router pages & layouts | `src/app/` (e.g. `src/app/[locale]/…`) |
| Shared UI | `components/` (e.g. `components/home/`, `components/programs/ProgramsContent.tsx`) |
| Copy / i18n | `messages/en.json`, `messages/sw.json` |
| Routing & navigation (next-intl) | `i18n/routing.ts`, `i18n/navigation.ts`, `i18n/request.ts` |
| Edge routing notes | `proxy.ts` (matcher lives in `src/middleware.ts`) |
| Structured content | `data/*.ts` — fees (`fees.ts`), bank (`bankDetails.ts`), site/contact placeholders (`site.ts`), partnerships (`partnerships.ts`), stats strip (`stats.ts`) |
| TZS formatting | `lib/money.ts` (`formatTzs`) |
| Academy imagery | `data/pics.ts`, `lib/unsplash.ts` (`AcademyImage` in `types/unsplash.ts`) |
| Static assets | `public/` |

> **Note:** The App directory lives under `src/app/` so Next.js type generation resolves routes correctly on this toolchain.

## Editing content

- **Fees, bank details, nav metadata, stats:** `data/fees.ts`, `data/bankDetails.ts`, `data/site.ts`, `data/stats.ts`
- **Coach roster (names/roles/bios):** `messages/*.json` under `coach.*` (IDs in `data/coaches.ts`)
- **Programs copy:** `messages/*.json` under `programs.cards.*` (IDs in `data/programs.ts`)
- **Translations:** Edit `messages/en.json` and `messages/sw.json` — keys must stay aligned across locales

## Academy photos

Add or replace files under `public/pics/` and update `data/pics.ts` (`ACADEMY_PICTURE_FILES`) so new images appear in hero, strips, gallery, and program sections.

## Coach & staff photos

Coach cards use rotated academy images from `public/pics/` via `getCoachPlaceholderImages()`. Swap in named portraits in `src/app/[locale]/coaches/page.tsx` (and the home preview) when you have official headshots.

## Commands summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Windows / dependency note

If `next build` fails with a missing `is-number` module under `to-regex-range`, a direct `devDependency` on `is-number` is included to stabilize hoisting. After a clean install, you can try removing it from `package.json` if your environment no longer needs it.
