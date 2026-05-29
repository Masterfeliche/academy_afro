import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { shared } from "@/content";
import { mainNav, siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/LocaleLink";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = mainNav.filter((item) => item.key !== "home");

  const linkClass = (href: string, base: string) => {
    const active = isActive(pathname, href);
    return `${base} ${active ? "bg-brand-surface text-brand-frost ring-1 ring-brand-accent/40" : ""}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <LocaleLink href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary text-sm font-black text-white shadow-card">
            AE
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-[0.08em] text-brand-frost">
              {siteConfig.brandName.split(" ")[0]}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
              {shared.nav.brandSubtitle}
            </p>
          </div>
        </LocaleLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={shared.a11y.mainNav}>
          {links.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={linkClass(
                item.href,
                "rounded-full px-3 py-2 text-sm font-medium text-brand-ink/80 transition hover:bg-brand-surface hover:text-brand-frost",
              )}
            >
              {item.label}
            </LocaleLink>
          ))}
          <LocaleLink
            href="/registration"
            className="ml-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
          >
            {shared.nav.cta}
          </LocaleLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface text-brand-frost shadow-sm"
            aria-label={open ? shared.a11y.closeMenu : shared.a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            className="border-t border-brand-border bg-brand-base lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((item) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={linkClass(
                    item.href,
                    "rounded-2xl px-4 py-3 text-base font-semibold text-brand-ink hover:bg-brand-surface",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </LocaleLink>
              ))}
              <LocaleLink
                href="/registration"
                className="mt-2 rounded-2xl bg-brand-primary py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {shared.nav.cta}
              </LocaleLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
