import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { ACADEMY_PICTURE_FILES, siteImagePath } from "@/data/site-images";
import { Link } from "@/i18n/navigation";

export async function FinalCta() {
  const t = await getTranslations("home.finalCta");

  return (
    <section className="relative isolate overflow-hidden bg-brand-surface px-4 py-24 text-white sm:px-6 lg:px-8">
      <Image
        src={siteImagePath(ACADEMY_PICTURE_FILES[11]!)}
        alt=""
        fill
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/92 to-brand-surface/80" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">{t("subtitle")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/registration"
              prefetch
              className="inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {t("primary")}
            </Link>
            <Link
              href="/contact"
              prefetch
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-surface/10"
            >
              {t("secondary")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
