import { Award, Compass, Shield, Trophy } from "lucide-react";

import { ImageStrip } from "@/components/media/ImageStrip";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { home } from "@/content";
import { images } from "@/data/images";

const icons = [Award, Compass, Shield, Trophy] as const;
const keys = ["coaching", "pathway", "discipline", "exposure"] as const;

export function HomeWhy() {
  const c = home.why;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">{c.subtitle}</p>
        </FadeIn>
        <div className="mt-10">
          <FadeIn delay={0.04}>
            <ImageStrip images={images.home.whyStrip} />
          </FadeIn>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {keys.map((key, i) => {
            const Icon = icons[i]!;
            const item = c[key];
            return (
              <FadeIn key={key} delay={i * 0.05}>
                <HoverLift>
                  <article className="h-full rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-brand-ink">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-brand-muted">{item.body}</p>
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
