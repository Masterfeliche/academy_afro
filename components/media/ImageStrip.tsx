import Image from "next/image";

import { ACADEMY_PICTURE_FILES, siteImagePath } from "@/data/site-images";

type Props = {
  /** Starting index into `ACADEMY_PICTURE_FILES` (wraps). */
  startIndex?: number;
  count?: number;
  className?: string;
  imageClassName?: string;
};

export function ImageStrip({
  startIndex = 0,
  count = 6,
  className = "",
  imageClassName = "object-cover",
}: Props) {
  const files: string[] = [];
  for (let i = 0; i < count; i++) {
    files.push(ACADEMY_PICTURE_FILES[(startIndex + i) % ACADEMY_PICTURE_FILES.length]!);
  }

  return (
    <div
      className={`flex gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      role="list"
    >
      {files.map((file, i) => (
        <div
          key={`${file}-${i}`}
          role="listitem"
          className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-brand-border/40 shadow-card sm:h-52 sm:w-80"
        >
          <Image
            src={siteImagePath(file)}
            alt=""
            fill
            sizes="320px"
            className={imageClassName}
          />
        </div>
      ))}
    </div>
  );
}
