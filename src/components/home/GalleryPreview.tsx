import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { home, shared } from "@/content";
import { LocaleLink } from "@/i18n/LocaleLink";
import type { SiteImage } from "@/types/site-image";

type Props = {
  images: SiteImage[];
};

export function GalleryPreview({ images }: Props) {
  const c = home.galleryPreview;
  const slice = images.slice(0, 6);

  return (
    <section className="border-y border-brand-border bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
              <p className="mt-4 max-w-xl text-brand-muted">{c.subtitle}</p>
            </div>
            <LocaleLink
              href="/gallery"
              className="self-start rounded-full border border-brand-border px-5 py-2 text-sm font-semibold text-brand-frost transition hover:border-brand-accent hover:text-brand-accent"
            >
              {shared.common.viewAll}
            </LocaleLink>
          </div>
        </FadeIn>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {slice.map((img, i) => (
            <FadeIn key={`${img.src}-${i}`} delay={i * 0.04}>
              <div className="mb-4 break-inside-avoid">
                <AcademyImageFigure image={img} className="overflow-hidden rounded-2xl" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
