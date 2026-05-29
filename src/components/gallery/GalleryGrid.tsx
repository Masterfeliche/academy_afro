import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { shared } from "@/content";
import type { SiteImage } from "@/types/site-image";

type Props = {
  images: SiteImage[];
};

export function GalleryGrid({ images }: Props) {
  const [active, setActive] = useState<SiteImage | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <FadeIn key={`${img.src}-${i}`} delay={(i % 6) * 0.03}>
            <button
              type="button"
              className="group mb-4 w-full break-inside-avoid text-left"
              onClick={() => setActive(img)}
              aria-label={img.alt}
            >
              <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card transition duration-300 group-hover:-translate-y-1 group-hover:shadow-premium">
                <AcademyImageFigure image={img} className="overflow-hidden" />
              </div>
            </button>
          </FadeIn>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={shared.a11y.galleryLightbox}
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-brand-surface text-white"
            onClick={close}
            aria-label={shared.a11y.closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
