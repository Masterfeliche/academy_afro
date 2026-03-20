import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { ACADEMY_PICTURE_FILES } from "@/data/pics";
import { getGalleryImages } from "@/lib/unsplash";
import { getTranslations } from "next-intl/server";

export default async function GalleryPage() {
  const t = await getTranslations("gallery");
  const images = await getGalleryImages(ACADEMY_PICTURE_FILES.length);

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <FadeIn key={`${img.src}-${i}`} delay={(i % 6) * 0.03}>
              <div className="group mb-4 break-inside-avoid">
                <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:shadow-premium">
                  <AcademyImageFigure
                    image={img}
                    className="overflow-hidden"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
