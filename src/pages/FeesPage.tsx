import { PageMeta } from "@/components/layout/PageMeta";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { fees as feesContent } from "@/content";
import { feesData } from "@/data/fees";
import { images, toSiteImage } from "@/data/images";
import { LocaleLink } from "@/i18n/LocaleLink";
import { formatTzs } from "@/lib/money";

export function FeesPage() {
  const c = feesContent;
  const banner = toSiteImage(images.fees.banner);

  return (
    <>
      <PageMeta page="fees" />
      <PageHero title={c.hero.title} subtitle={c.hero.subtitle} />
      <section className="relative h-48 w-full overflow-hidden sm:h-64">
        <img
          src={banner.src}
          alt={banner.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/90 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="max-w-3xl text-lg leading-relaxed text-brand-muted">{c.intro}</p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{c.lines.title}</h2>
              <ul className="mt-6 divide-y divide-brand-border">
                {feesData.lineItems.map((line) => (
                  <li
                    key={line.id}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0"
                  >
                    <span className="text-sm font-medium text-brand-ink">{c.lines[line.id]}</span>
                    <span className="shrink-0 font-display text-xl text-brand-accent">
                      {formatTzs(line.amount)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-brand-accent/30 bg-brand-base/60 p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{c.initial.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{c.initial.body}</p>
              <p className="mt-8 font-display text-5xl text-brand-accent">
                {formatTzs(feesData.initialPayment.amount)}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                {c.initial.deadline.replace("{date}", feesData.initialPayment.validThrough)}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{c.monthly.title}</h2>
              <p className="mt-3 text-sm text-brand-muted">{c.monthly.body}</p>
              <p className="mt-8 font-display text-4xl text-brand-accent">
                {formatTzs(feesData.monthlyTraining)}
                <span className="ml-2 text-lg font-sans font-medium text-brand-muted">
                  {c.monthly.perMonth}
                </span>
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{c.holiday.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm text-brand-muted">{c.holiday.body}</p>
              <p className="mt-8 font-display text-4xl text-brand-accent">
                {formatTzs(feesData.holidayTraining)}
                <span className="ml-2 text-lg font-sans font-medium text-brand-muted">
                  {c.holiday.forProgram}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08}>
          <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-8 text-white shadow-premium lg:p-10">
            <h2 className="font-display text-2xl">{c.once.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/80">{c.once.body}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-10 text-center shadow-card">
            <h2 className="font-display text-2xl text-brand-frost">{c.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted">{c.cta.subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LocaleLink
                href="/contact"
                className="rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
              >
                {c.cta.primary}
              </LocaleLink>
              <LocaleLink
                href="/registration"
                className="rounded-full border border-brand-border px-8 py-3 text-sm font-semibold text-brand-frost transition hover:border-brand-accent"
              >
                {c.cta.secondary}
              </LocaleLink>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
