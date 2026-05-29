import { motion, useReducedMotion } from "framer-motion";

import { home } from "@/content";
import { LocaleLink } from "@/i18n/LocaleLink";
import type { SiteImage } from "@/types/site-image";

type Props = {
  image: SiteImage;
};

export function HomeHero({ image }: Props) {
  const reduceMotion = useReducedMotion();
  const c = home.hero;

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 gradient-hero" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent">{c.kicker}</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{c.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LocaleLink
              href="/registration"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {c.primaryCta}
            </LocaleLink>
            <LocaleLink
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-brand-surface/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-brand-surface/20"
            >
              {c.secondaryCta}
            </LocaleLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
