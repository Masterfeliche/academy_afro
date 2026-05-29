import { FadeIn } from "@/components/motion/FadeIn";
import { home } from "@/content";
import { homeStats } from "@/data/stats";

export function HomeStats() {
  const labels = home.stats;

  return (
    <section className="border-y border-brand-border bg-brand-surface px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((item, i) => (
          <FadeIn key={item.key} delay={i * 0.06}>
            <article className="rounded-2xl border border-brand-border bg-brand-base/60 p-6 shadow-card">
              <p className="font-display text-4xl text-brand-accent">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-muted">{labels[item.key]}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
