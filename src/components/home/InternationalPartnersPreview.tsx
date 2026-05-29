import { Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

import { ImageStrip } from "@/components/media/ImageStrip";
import { FadeIn } from "@/components/motion/FadeIn";
import { home } from "@/content";
import { images } from "@/data/images";
import { partnerClubs, partnerCountries, tournamentLocations } from "@/data/partnerships";

export function InternationalPartnersPreview() {
  const c = home.partnersPreview;

  return (
    <section className="border-y border-brand-border bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-base/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-frost">
                <Globe2 className="h-3.5 w-3.5 text-brand-accent" aria-hidden />
                {c.eyebrow}
              </div>
              <h2 className="mt-5 font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">{c.subtitle}</p>
            </div>
            <Link
              to="/about"
              className="shrink-0 rounded-full border border-brand-border px-5 py-2.5 text-sm font-semibold text-brand-frost transition hover:border-brand-accent hover:text-brand-accent"
            >
              {c.cta}
            </Link>
          </div>
        </FadeIn>
        <div className="mt-12">
          <FadeIn delay={0.03}>
            <ImageStrip images={images.home.partnersStrip} />
          </FadeIn>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-brand-border bg-brand-base/50 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                {c.clubsTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-medium text-brand-ink">
                {partnerClubs.map((name) => (
                  <li key={name} className="border-b border-brand-border/60 pb-2 last:border-0">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-brand-border bg-brand-base/50 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                {c.regionsTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{c.regionsBody}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {partnerCountries.map((country) => (
                  <li
                    key={country}
                    className="rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-frost shadow-sm"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-brand-border bg-brand-base/50 p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                {c.tournamentsTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{c.tournamentsBody}</p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-brand-ink">
                {tournamentLocations.map((place) => (
                  <li key={place}>• {place}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
