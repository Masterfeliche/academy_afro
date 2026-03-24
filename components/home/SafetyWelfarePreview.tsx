import { HeartHandshake, Shield } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { ACADEMY_PICTURE_FILES, siteImagePath } from "@/data/site-images";
import { Link } from "@/i18n/navigation";

export async function SafetyWelfarePreview() {
  const t = await getTranslations("home.safetyPreview");

  const items = ["guardians", "supervision", "health"] as const;
  const cardPhotos = [13, 14, 20] as const;

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
                <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">
                  {t("title")}
                </h2>
                <p className="mt-3 max-w-2xl text-brand-muted">{t("subtitle")}</p>
              </div>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 self-start rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              <HeartHandshake className="h-4 w-4" />
              {t("cta")}
            </Link>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((key, i) => (
            <FadeIn key={key} delay={i * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
                <div className="relative aspect-[16/10] w-full shrink-0">
                  <Image
                    src={siteImagePath(ACADEMY_PICTURE_FILES[cardPhotos[i]!]!)}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {t(`items.${key}.body`)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
