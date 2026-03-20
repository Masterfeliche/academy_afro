"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  en: "EN",
  sw: "SW",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, start] = useTransition();

  return (
    <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-frost/80">
      <span className="hidden sm:inline">Lang</span>
      <select
        className="cursor-pointer rounded-full border border-brand-border bg-brand-surface/90 px-3 py-1.5 text-[11px] font-bold text-brand-ink shadow-sm outline-none transition hover:border-brand-accent/50 focus:ring-2 focus:ring-brand-accent/40 disabled:opacity-60"
        value={locale}
        disabled={pending}
        onChange={(e) => {
          const next = e.target.value;
          start(() => {
            router.replace(pathname, { locale: next });
          });
        }}
        aria-label="Language"
      >
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {labels[l] ?? l.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
