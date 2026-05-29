import { FadeIn } from "@/components/motion/FadeIn";
import { home } from "@/content";
import { imagePath, images } from "@/data/images";
import { LocaleLink } from "@/i18n/LocaleLink";

export function FinalCta() {
  const c = home.finalCta;
  const bg = images.home.finalCta;

  return (
    <section className="relative isolate overflow-hidden bg-brand-surface px-4 py-24 text-white sm:px-6 lg:px-8">
      <img
        src={imagePath(bg.path)}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/92 to-brand-surface/80"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">{c.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">{c.subtitle}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <LocaleLink
              href="/registration"
              className="inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {c.primary}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-surface/10"
            >
              {c.secondary}
            </LocaleLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
