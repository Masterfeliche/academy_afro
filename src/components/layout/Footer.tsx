import { academyContact } from "@/data/contact";
import { mainNav, siteConfig } from "@/data/site";
import { shared } from "@/content";
import { LocaleLink } from "@/i18n/LocaleLink";

export function Footer() {
  const nav = mainNav.filter((i) => i.key !== "home");

  const social = [
    { href: siteConfig.social.instagram, label: shared.footer.socialInstagram, short: "IG" },
    { href: siteConfig.social.facebook, label: shared.footer.socialFacebook, short: "FB" },
    { href: siteConfig.social.youtube, label: shared.footer.socialYoutube, short: "YT" },
    { href: siteConfig.social.x, label: shared.footer.socialX, short: "X" },
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-brand-base text-brand-ink/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.12em] text-white">
            {siteConfig.brandName.split(" ")[0]}
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/70">{shared.footer.blurb}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40">{siteConfig.tagline}</p>
          <p className="mt-4 text-[11px] leading-relaxed text-white/45">{shared.footer.legal}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            {shared.footer.quick}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <LocaleLink href={item.href} className="transition hover:text-white">
                  {item.label}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            {shared.footer.contact}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>{academyContact.addressLine1}</li>
            <li>{academyContact.addressLine2}</li>
            <li>
              <a className="hover:text-white" href={academyContact.telHref}>
                {academyContact.primaryPhone}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={`mailto:${academyContact.email}`}>
                {academyContact.email}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-widest">
            {social.map((item) => (
              <a
                key={item.short}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={item.label}
                className="rounded-full border border-white/15 px-3 py-1 text-white/70 transition hover:border-brand-accent hover:text-white"
              >
                {item.short}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {siteConfig.brandName}. {shared.footer.rights}
      </div>
    </footer>
  );
}
