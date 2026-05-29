import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { home, fees as feesContent } from "@/content";
import { feesData } from "@/data/fees";
import { LocaleLink } from "@/i18n/LocaleLink";
import { formatTzs } from "@/lib/money";

export function FeesPreview() {
  const c = home.feesPreview;
  const lineLabels = feesContent.lines;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
            <p className="mt-4 text-lg text-brand-muted">{c.subtitle}</p>
            <p className="mt-6 text-sm text-brand-muted">{c.note}</p>
            <LocaleLink
              href="/fees"
              className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              {c.cta}
            </LocaleLink>
          </FadeIn>
          <FadeIn delay={0.08}>
            <HoverLift>
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card">
                <div className="flex items-baseline justify-between gap-4 border-b border-brand-border pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                      {c.initialLabel}
                    </p>
                    <p className="mt-2 font-display text-3xl text-brand-frost sm:text-4xl">
                      {formatTzs(feesData.initialPayment.amount)}
                    </p>
                    <p className="mt-2 text-xs text-brand-muted">{c.initialHint}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                      {c.monthlyLabel}
                    </p>
                    <p className="mt-2 font-display text-3xl text-brand-accent sm:text-4xl">
                      {formatTzs(feesData.monthlyTraining)}
                    </p>
                    <p className="mt-1 text-xs text-brand-muted">{c.perMonth}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-brand-muted">
                  {feesData.lineItems.slice(0, 2).map((line) => (
                    <li
                      key={line.id}
                      className="flex items-center justify-between rounded-xl bg-brand-base/80 px-4 py-2"
                    >
                      <span className="font-medium text-brand-ink">{lineLabels[line.id]}</span>
                      <span className="font-semibold text-brand-accent">
                        {formatTzs(line.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverLift>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
