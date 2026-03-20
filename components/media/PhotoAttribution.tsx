"use client";

import { useTranslations } from "next-intl";

import type { AcademyImage } from "@/types/unsplash";

type Props = {
  image: AcademyImage;
  prominent?: boolean;
};

export function PhotoAttribution({ image, prominent }: Props) {
  const t = useTranslations("attribution");

  if (image.isFallback) {
    return (
      <p
        className={
          prominent
            ? "mt-3 text-sm text-white/70"
            : "mt-2 text-xs text-brand-muted"
        }
      >
        {t("placeholder")}
      </p>
    );
  }

  if (image.isLocal) {
    return (
      <p
        className={
          prominent
            ? "mt-3 text-sm text-white/75"
            : "mt-2 text-xs text-brand-muted"
        }
      >
        {t("local")}
      </p>
    );
  }

  const profile = `https://unsplash.com/@${image.photographerUsername}?utm_source=afroeuro_soccer_academy&utm_medium=referral`;
  const unsplash = `https://unsplash.com/?utm_source=afroeuro_soccer_academy&utm_medium=referral`;

  return (
    <p
      className={
        prominent
          ? "mt-3 text-sm text-white/75"
          : "mt-2 text-xs text-brand-muted"
      }
    >
      {t("photoBy")}{" "}
      <a
        href={profile}
        className="underline decoration-white/30 underline-offset-2 hover:text-brand-accent"
        target="_blank"
        rel="noreferrer noopener"
      >
        {image.photographerName}
      </a>{" "}
      {t("on")}{" "}
      <a
        href={unsplash}
        className="underline decoration-white/30 underline-offset-2 hover:text-brand-accent"
        target="_blank"
        rel="noreferrer noopener"
      >
        Unsplash
      </a>
    </p>
  );
}
