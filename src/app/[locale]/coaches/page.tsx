import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { PageHero } from "@/components/pages/PageHero";
import { coachIds } from "@/data/coaches";
import { getCoachPlaceholderImages } from "@/lib/unsplash";
import { getTranslations } from "next-intl/server";

export default async function CoachesPage() {
  const t = await getTranslations("coaches");
  const tc = await getTranslations("coach");
  const images = await getCoachPlaceholderImages(coachIds.length);

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {coachIds.map((id, index) => (
            <FadeIn key={id} delay={index * 0.05}>
              <HoverLift>
                <article className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
                  <AcademyImageFigure
                    image={images[index]!}
                    fill
                    className="relative min-h-[280px] w-full"
                    imgClassName="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">
                      {t("badge")}
                    </p>
                    <h2 className="mt-2 font-display text-2xl text-brand-frost">
                      {tc(`${id}.name`)}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-brand-muted">{tc(`${id}.role`)}</p>
                    <p className="mt-4 text-sm text-brand-muted leading-relaxed">{tc(`${id}.bio`)}</p>
                  </div>
                </article>
              </HoverLift>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
