import { getLocale, getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { feesData } from "@/data/fees";
import { formatTzs } from "@/lib/money";
import { Link } from "@/i18n/navigation";

export async function FeesPreview() {
  const t = await getTranslations("home.feesPreview");
  const tFees = await getTranslations("fees");
  const locale = await getLocale();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-brand-muted">{t("subtitle")}</p>
            <p className="mt-6 text-sm text-brand-muted">{t("note")}</p>
            <Link
              href="/fees"
              className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              {t("cta")}
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <HoverLift>
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 shadow-card">
                <div className="flex items-baseline justify-between gap-4 border-b border-brand-border pb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                      {t("initialLabel")}
                    </p>
                    <p className="mt-2 font-display text-3xl text-brand-frost sm:text-4xl">
                      {formatTzs(feesData.initialPayment.amount, locale)}
                    </p>
                    <p className="mt-2 text-xs text-brand-muted">{t("initialHint")}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                      {t("monthlyLabel")}
                    </p>
                    <p className="mt-2 font-display text-3xl text-brand-accent sm:text-4xl">
                      {formatTzs(feesData.monthlyTraining, locale)}
                    </p>
                    <p className="mt-1 text-xs text-brand-muted">{t("perMonth")}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-brand-muted">
                  {feesData.lineItems.slice(0, 2).map((line) => (
                    <li
                      key={line.id}
                      className="flex items-center justify-between rounded-xl bg-brand-base/80 px-4 py-2"
                    >
                      <span className="font-medium text-brand-ink">
                        {tFees(`lines.${line.id}`)}
                      </span>
                      <span className="font-semibold text-brand-accent">
                        {formatTzs(line.amount, locale)}
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
