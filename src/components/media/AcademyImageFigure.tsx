import type { SiteImage } from "@/types/site-image";

type Props = {
  image: SiteImage;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function AcademyImageFigure({
  image,
  priority,
  className,
  imgClassName,
  fill,
  width,
  height,
}: Props) {
  const w = width ?? image.width;
  const h = height ?? image.height;

  return (
    <figure className={fill ? `relative ${className ?? ""}` : className}>
      {fill ? (
        <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl">
          <img
            src={image.src}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={`absolute inset-0 h-full w-full ${imgClassName ?? "object-cover"}`}
          />
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          width={w}
          height={h}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={imgClassName ?? "h-auto w-full rounded-2xl object-cover shadow-card"}
        />
      )}
    </figure>
  );
}
