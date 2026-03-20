/**
 * Edge routing notes: the middleware matcher is defined as a static array in
 * `src/middleware.ts` (Next.js does not allow spreading a shared array into `config.matcher`).
 *
 * Patterns:
 * - `/` — rewrite root to the default locale
 * - `/(en|sw)/:path*` — prefixed locales
 * - catch-all excluding api, _next, static files
 */
