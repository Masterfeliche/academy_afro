"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { PhotoAttribution } from "@/components/media/PhotoAttribution";
import { Link } from "@/i18n/navigation";
import type { AcademyImage } from "@/types/unsplash";

type Props = {
  image: AcademyImage;
};

export function HomeHero({ image }: Props) {
  const t = useTranslations("home.hero");

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        unoptimized={image.isFallback}
      />
      <div className="absolute inset-0 gradient-hero" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent">
            {t("kicker")}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/registration"
              prefetch
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href="/programs"
              prefetch
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-brand-surface/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-brand-surface/20"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </motion.div>
        <div className="mt-12 max-w-2xl">
          <PhotoAttribution image={image} prominent />
        </div>
      </div>
    </section>
  );
}
