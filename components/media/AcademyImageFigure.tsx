import Image from "next/image";

import { PhotoAttribution } from "@/components/media/PhotoAttribution";
import type { AcademyImage } from "@/types/unsplash";

type Props = {
  image: AcademyImage;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  prominentCredit?: boolean;
};

export function AcademyImageFigure({
  image,
  priority,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill,
  width,
  height,
  prominentCredit,
}: Props) {
  const w = width ?? image.width;
  const h = height ?? image.height;

  return (
    <figure className={fill ? `relative ${className ?? ""}` : className}>
      {fill ? (
        <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imgClassName ?? "object-cover"}
            unoptimized={image.isFallback}
          />
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={w}
          height={h}
          priority={priority}
          sizes={sizes}
          className={imgClassName ?? "h-auto w-full rounded-2xl object-cover shadow-card"}
          unoptimized={image.isFallback}
        />
      )}
      <PhotoAttribution image={image} prominent={prominentCredit} />
    </figure>
  );
}
