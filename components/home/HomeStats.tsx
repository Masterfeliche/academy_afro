import { FadeIn } from "@/components/motion/FadeIn";
import { homeStats } from "@/data/stats";
import { getTranslations } from "next-intl/server";

export async function HomeStats() {
  const t = await getTranslations("home.stats");

  return (
    <section className="border-y border-brand-border bg-brand-surface px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((item, i) => (
          <FadeIn key={item.key} delay={i * 0.06}>
            <div className="rounded-2xl border border-brand-border bg-brand-base/60 p-6 shadow-card">
              <p className="font-display text-4xl text-brand-accent">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-muted">
                {t(item.key)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
