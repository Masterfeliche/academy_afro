import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { partnerClubs, partnerCountries, tournamentLocations } from "@/data/partnerships";
import { getAboutImages } from "@/data/site-images";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  const tSite = await getTranslations("site");
  const [a, b] = await getAboutImages();

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <section className="border-b border-brand-border bg-brand-surface px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent">
              {tSite("legalName")}
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">{t("legal.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">{t("legal.body")}</p>
          </FadeIn>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <h2 className="font-display text-4xl text-brand-frost">{t("story.title")}</h2>
            <p className="mt-6 text-brand-muted leading-relaxed">{t("story.p1")}</p>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("story.p2")}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <AcademyImageFigure image={a} sizes="(max-width: 1024px) 100vw, 45vw" />
          </FadeIn>
        </div>
      </section>
      <section className="border-y border-brand-border bg-brand-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <FadeIn>
            <h3 className="font-display text-3xl text-brand-frost">{t("mission.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("mission.body")}</p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h3 className="font-display text-3xl text-brand-frost">{t("vision.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("vision.body")}</p>
          </FadeIn>
        </div>
        <FadeIn delay={0.08}>
          <div className="mx-auto mt-14 max-w-6xl rounded-3xl border border-brand-border bg-brand-base/50 p-8 lg:p-10">
            <h3 className="font-display text-3xl text-brand-frost">{t("impact.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("impact.body")}</p>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h3 className="font-display text-3xl text-brand-frost">{t("values.title")}</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {(
              ["discipline", "respect", "courage", "excellence", "unity"] as const
            ).map((k) => (
              <li
                key={k}
                className="rounded-2xl border border-brand-border bg-brand-base/60 px-4 py-4 text-center text-sm font-semibold text-brand-ink"
              >
                {t(`values.${k}`)}
              </li>
            ))}
          </ul>
        </FadeIn>
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <AcademyImageFigure image={b} sizes="(max-width: 1024px) 100vw, 45vw" />
          </FadeIn>
          <FadeIn delay={0.06}>
            <h3 className="font-display text-3xl text-brand-frost">{t("partnerships.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("partnerships.body")}</p>
            <div className="mt-8 rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                {t("partnerships.clubsHeading")}
              </p>
              <ul className="mt-3 space-y-1 text-sm font-medium text-brand-ink">
                {partnerClubs.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-accent">
                {t("partnerships.regionsHeading")}
              </p>
              <p className="mt-2 text-sm text-brand-muted">
                {partnerCountries.join(" · ")}
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-accent">
                {t("partnerships.festivalsHeading")}
              </p>
              <p className="mt-2 text-sm text-brand-muted">
                {tournamentLocations.join(" · ")}
              </p>
            </div>
            <h3 className="mt-10 font-display text-3xl text-brand-frost">{t("why.title")}</h3>
            <p className="mt-4 text-brand-muted leading-relaxed">{t("why.body")}</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
