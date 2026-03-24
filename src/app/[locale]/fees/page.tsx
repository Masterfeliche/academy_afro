import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { feesData } from "@/data/fees";
import { formatTzs } from "@/lib/money";
import { getFeesBannerImage } from "@/data/site-images";
import { Link } from "@/i18n/navigation";

export default async function FeesPage() {
  const t = await getTranslations("fees");
  const tAttr = await getTranslations("attribution");
  const locale = await getLocale();
  const banner = await getFeesBannerImage();

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      {banner ? (
        <section className="relative h-48 w-full overflow-hidden sm:h-64">
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized={banner.isFallback}
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/90 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 mx-auto max-w-6xl px-4 text-xs text-white/80 sm:px-6 lg:px-8">
            {!banner.isFallback && !banner.isLocal ? (
              <>
                <a
                  href={`https://unsplash.com/@${banner.photographerUsername}?utm_source=afroeuro_soccer_academy&utm_medium=referral`}
                  className="underline decoration-white/30 underline-offset-2 hover:text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {banner.photographerName}
                </a>
                <span> on </span>
                <a
                  href="https://unsplash.com/?utm_source=afroeuro_soccer_academy&utm_medium=referral"
                  className="underline decoration-white/30 underline-offset-2 hover:text-white"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Unsplash
                </a>
              </>
            ) : (
              <span>{banner.isLocal ? tAttr("local") : "AFROEURO"}</span>
            )}
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="max-w-3xl text-lg leading-relaxed text-brand-muted">{t("intro")}</p>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{t("lines.title")}</h2>
              <ul className="mt-6 divide-y divide-brand-border">
                {feesData.lineItems.map((line) => (
                  <li
                    key={line.id}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0"
                  >
                    <span className="text-sm font-medium text-brand-ink">
                      {t(`lines.${line.id}`)}
                    </span>
                    <span className="shrink-0 font-display text-xl text-brand-accent">
                      {formatTzs(line.amount, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-brand-accent/30 bg-brand-base/60 p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{t("initial.title")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{t("initial.body")}</p>
              <p className="mt-8 font-display text-5xl text-brand-accent">
                {formatTzs(feesData.initialPayment.amount, locale)}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                {t("initial.deadline", { date: feesData.initialPayment.validThrough })}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{t("monthly.title")}</h2>
              <p className="mt-3 text-sm text-brand-muted">{t("monthly.body")}</p>
              <p className="mt-8 font-display text-4xl text-brand-accent">
                {formatTzs(feesData.monthlyTraining, locale)}
                <span className="ml-2 text-lg font-sans font-medium text-brand-muted">
                  {t("monthly.perMonth")}
                </span>
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
              <h2 className="font-display text-2xl text-brand-frost">{t("holiday.title")}</h2>
              <p className="mt-3 whitespace-pre-line text-sm text-brand-muted">
                {t("holiday.body")}
              </p>
              <p className="mt-8 font-display text-4xl text-brand-accent">
                {formatTzs(feesData.holidayTraining, locale)}
                <span className="ml-2 text-lg font-sans font-medium text-brand-muted">
                  {t("holiday.forProgram")}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.08}>
          <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-8 text-white shadow-premium lg:p-10">
            <h2 className="font-display text-2xl">{t("once.title")}</h2>
            <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">{t("once.body")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-10 text-center shadow-card">
            <h2 className="font-display text-2xl text-brand-frost">{t("cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted">{t("cta.subtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
              >
                {t("cta.primary")}
              </Link>
              <Link
                href="/registration"
                prefetch
                className="rounded-full border border-brand-border px-8 py-3 text-sm font-semibold text-brand-frost transition hover:border-brand-accent"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
