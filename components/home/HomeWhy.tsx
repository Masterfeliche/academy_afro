import { Award, Compass, Shield, Trophy } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ImageStrip } from "@/components/media/ImageStrip";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";

const icons = [Award, Compass, Shield, Trophy] as const;
const keys = ["coaching", "pathway", "discipline", "exposure"] as const;

export async function HomeWhy() {
  const t = await getTranslations("home.why");

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">{t("subtitle")}</p>
        </FadeIn>
        <div className="mt-10">
          <FadeIn delay={0.04}>
            <ImageStrip startIndex={4} count={5} />
          </FadeIn>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {keys.map((key, i) => {
            const Icon = icons[i]!;
            return (
              <FadeIn key={key} delay={i * 0.05}>
                <HoverLift>
                  <article className="h-full rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-brand-ink">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="mt-3 text-brand-muted leading-relaxed">
                      {t(`${key}.body`)}
                    </p>
                  </article>
                </HoverLift>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
