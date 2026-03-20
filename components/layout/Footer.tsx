import { getTranslations } from "next-intl/server";

import { mainNav, siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations();

  const nav = mainNav.filter((i) => i.key !== "home");

  return (
    <footer className="border-t border-white/10 bg-brand-base text-brand-ink/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.12em] text-white">
            AFROEURO
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/70">{t("footer.blurb")}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40">
            {t("site.tagline")}
          </p>
          <p className="mt-4 text-[11px] leading-relaxed text-white/45">{t("footer.legal")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            {t("footer.quick")}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            {t("footer.contact")}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>{siteConfig.addressLine1}</li>
            <li>{siteConfig.addressLine2}</li>
            <li>
              <a className="hover:text-white" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest">
            <a
              href={siteConfig.social.instagram}
              className="rounded-full border border-white/15 px-3 py-1 text-white/70 transition hover:border-brand-accent hover:text-white"
            >
              IG
            </a>
            <a
              href={siteConfig.social.facebook}
              className="rounded-full border border-white/15 px-3 py-1 text-white/70 transition hover:border-brand-accent hover:text-white"
            >
              FB
            </a>
            <a
              href={siteConfig.social.youtube}
              className="rounded-full border border-white/15 px-3 py-1 text-white/70 transition hover:border-brand-accent hover:text-white"
            >
              YT
            </a>
            <a
              href={siteConfig.social.x}
              className="rounded-full border border-white/15 px-3 py-1 text-white/70 transition hover:border-brand-accent hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} AFROEURO Soccer Academy. {t("footer.rights")}
      </div>
    </footer>
  );
}
