import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { homeProgramPreviewIds } from "@/data/programs";
import { Link } from "@/i18n/navigation";
import type { AcademyImage } from "@/types/unsplash";

type Props = {
  images: AcademyImage[];
};

export async function ProgramsPreview({ images }: Props) {
  const t = await getTranslations("home.programsPreview");
  const tc = await getTranslations("home.programCards");
  const tCommon = await getTranslations("common");

  return (
    <section className="bg-brand-surface px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">{t("title")}</h2>
              <p className="mt-4 max-w-xl text-white/70">{t("subtitle")}</p>
            </div>
            <Link
              href="/programs"
              prefetch
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-brand-accent hover:text-brand-accent"
            >
              <ArrowUpRight className="h-4 w-4" />
              {tCommon("viewAll")}
            </Link>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {homeProgramPreviewIds.map((id, index) => (
            <FadeIn key={id} delay={index * 0.06}>
              <HoverLift>
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-brand-elevated/50 shadow-premium backdrop-blur-sm">
                  <div className="grid gap-0 md:grid-cols-2">
                    <AcademyImageFigure
                      image={images[index]!}
                      fill
                      className="relative min-h-[280px] h-full w-full md:min-h-[320px]"
                      imgClassName="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="flex flex-col justify-center p-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                        {tc(`${id}.badge`)}
                      </p>
                      <h3 className="mt-3 font-display text-3xl tracking-wide text-white">
                        {tc(`${id}.title`)}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/75">
                        {tc(`${id}.desc`)}
                      </p>
                      <Link
                        href="/programs"
                        prefetch
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"
                      >
                        {tc(`${id}.cta`)}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
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
