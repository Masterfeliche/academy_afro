import createMiddleware from "next-intl/middleware";

import { routing } from "../i18n/routing";

export default createMiddleware(routing);

/**
 * Single matcher from next-intl docs — must match `/` and all app routes, excluding
 * API, Next internals, and static files. Extra patterns can prevent `/` from matching in dev.
 */
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
