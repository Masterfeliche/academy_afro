import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { ImageStrip } from "@/components/media/ImageStrip";

export async function ProgramsMediaStrip() {
  const t = await getTranslations("programs.mediaStrip");

  return (
    <section className="border-b border-brand-border bg-brand-base/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">{t("eyebrow")}</p>
          <h2 className="mt-2 font-display text-2xl text-brand-frost sm:text-3xl">{t("title")}</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-muted">{t("subtitle")}</p>
        </FadeIn>
        <div className="mt-8">
          <ImageStrip startIndex={0} count={8} />
        </div>
      </div>
    </section>
  );
}
