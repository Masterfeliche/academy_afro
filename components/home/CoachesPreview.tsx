import { getTranslations } from "next-intl/server";

import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { coachIds } from "@/data/coaches";
import { Link } from "@/i18n/navigation";
import type { AcademyImage } from "@/types/unsplash";

type Props = {
  images: AcademyImage[];
};

export async function CoachesPreview({ images }: Props) {
  const t = await getTranslations("home.coachesPreview");
  const tc = await getTranslations("coach");
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");

  return (
    <section className="bg-brand-base px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-xl text-brand-muted">{t("subtitle")}</p>
            </div>
            <Link
              href="/coaches"
              className="self-start rounded-full bg-brand-surface px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              {tNav("coaches")} — {tCommon("learnMore")}
            </Link>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coachIds.map((id, index) => (
            <FadeIn key={id} delay={index * 0.05}>
              <HoverLift>
                <article className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
                  <AcademyImageFigure
                    image={images[index]!}
                    fill
                    className="relative min-h-[220px] w-full"
                    imgClassName="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                      {tc(`${id}.role`)}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                      {tc(`${id}.name`)}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-brand-muted">
                      {tc(`${id}.bio`)}
                    </p>
                  </div>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
