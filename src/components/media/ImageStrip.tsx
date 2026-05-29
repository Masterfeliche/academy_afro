import { imagePath } from "@/data/images";
import type { ImageRef } from "@/types/site-image";

type Props = {
  images: readonly ImageRef[];
  className?: string;
  imageClassName?: string;
};

export function ImageStrip({
  images,
  className = "",
  imageClassName = "object-cover",
}: Props) {
  return (
    <div
      className={`flex gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      role="list"
      aria-label="Academy photo strip"
    >
      {images.map((image) => (
        <figure
          key={image.path}
          className="relative m-0 h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-brand-border/40 shadow-card sm:h-52 sm:w-80"
        >
          <img
            src={imagePath(image.path)}
            alt=""
            aria-hidden
            loading="lazy"
            className={`h-full w-full ${imageClassName}`}
          />
        </figure>
      ))}
    </div>
  );
}
