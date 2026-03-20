import { CopyAccountButton } from "@/components/donation/CopyAccountButton";
import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { PageHero } from "@/components/pages/PageHero";
import { bankDetails } from "@/data/bankDetails";
import { getDonationImages } from "@/lib/unsplash";
import { getTranslations } from "next-intl/server";

export default async function DonationPage() {
  const t = await getTranslations("donation");
  const heroImage = await getDonationImages();

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <h2 className="font-display text-3xl text-brand-frost">{t("impact.title")}</h2>
            <p className="mt-4 text-lg text-brand-muted leading-relaxed">{t("impact.body")}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-border shadow-card">
              <AcademyImageFigure image={heroImage} sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="grid gap-6">
              {(["scholarships", "equipment", "travel"] as const).map((key) => (
                <HoverLift key={key}>
                  <article className="rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-card">
                    <h3 className="font-display text-2xl text-brand-frost">
                      {t(`purposes.${key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                      {t(`purposes.${key}.body`)}
                    </p>
                  </article>
                </HoverLift>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="border-y border-brand-border bg-brand-surface px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl">{t("bank.title")}</h2>
            <p className="mt-3 text-white/70">{t("bank.subtitle")}</p>
            <dl className="mt-10 space-y-4 rounded-2xl border border-white/10 bg-brand-elevated/50 p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <dt className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {t("bank.fields.bankName")}
                </dt>
                <dd className="font-semibold">{bankDetails.bankName}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <dt className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {t("bank.fields.accountName")}
                </dt>
                <dd className="font-semibold">{bankDetails.accountName}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <dt className="text-xs font-bold uppercase tracking-widest text-white/50">
                  {t("bank.fields.accountNumber")}
                </dt>
                <dd className="flex flex-wrap items-center gap-3 font-mono text-lg font-semibold tracking-wide">
                  {bankDetails.accountNumber}
                  <CopyAccountButton value={bankDetails.accountNumber} />
                </dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl text-brand-frost">{t("instructions.title")}</h2>
          <p className="mt-4 text-brand-muted leading-relaxed">{t("instructions.body")}</p>
          <div className="mt-12 rounded-2xl border border-brand-accent/30 bg-brand-base/80 p-8">
            <h3 className="font-display text-2xl text-brand-frost">{t("thanks.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("thanks.body")}</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
