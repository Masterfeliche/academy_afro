"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { mainNav } from "@/data/site";
import { Link } from "@/i18n/navigation";

import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = mainNav.filter((item) => item.key !== "home");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary text-sm font-black text-white shadow-card">
            AE
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-[0.08em] text-brand-frost">
              AFROEURO
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
              {t("brandSubtitle")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              className="rounded-full px-3 py-2 text-sm font-medium text-brand-ink/80 transition hover:bg-brand-surface hover:text-brand-frost"
            >
              {t(item.key)}
            </Link>
          ))}
          <LocaleSwitcher />
          <Link
            href="/registration"
            prefetch
            className="ml-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
          >
            {t("cta")}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface text-brand-frost shadow-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-border bg-brand-base lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-brand-ink hover:bg-brand-surface"
                  onClick={() => setOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                href="/registration"
                prefetch
                className="mt-2 rounded-2xl bg-brand-primary py-3 text-center text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t("cta")}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
