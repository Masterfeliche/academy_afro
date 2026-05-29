import { HeartHandshake, Shield } from "lucide-react";

import { FadeIn } from "@/components/motion/FadeIn";
import { home } from "@/content";
import { imagePath, images } from "@/data/images";
import { LocaleLink } from "@/i18n/LocaleLink";

export function SafetyWelfarePreview() {
  const c = home.safetyPreview;
  const items = ["guardians", "supervision", "health"] as const;

  return (
    <section className="bg-gradient-to-b from-brand-base to-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                <Shield className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
                <p className="mt-3 max-w-2xl text-brand-muted">{c.subtitle}</p>
              </div>
            </div>
            <LocaleLink
              href="/programs"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              <HeartHandshake className="h-4 w-4" />
              {c.cta}
            </LocaleLink>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((key, i) => {
            const item = c.items[key];
            const photo = images.home.safety[i]!;
            return (
              <FadeIn key={key} delay={i * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                    <img
                      src={imagePath(photo.path)}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.body}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
