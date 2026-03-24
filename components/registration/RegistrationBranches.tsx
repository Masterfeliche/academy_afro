import { Mail, Phone } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { academyContact } from "@/data/contact";
import {
  registrationBranches,
  registrationBranchTotal,
  type RegistrationBranch,
} from "@/data/registrationBranches";
import { formatTzs } from "@/lib/money";
import { Link } from "@/i18n/navigation";

import { FadeIn } from "@/components/motion/FadeIn";

function BranchCard({
  branch,
  locale,
  t,
  tf,
  tContact,
}: {
  branch: RegistrationBranch;
  locale: string;
  t: (key: string, values?: Record<string, string>) => string;
  tf: (key: string) => string;
  tContact: (key: string) => string;
}) {
  const total = registrationBranchTotal(branch);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
        {t(`branches.${branch.id}.eyebrow`)}
      </p>
      <h2 className="mt-3 font-display text-2xl text-brand-frost sm:text-3xl">
        {t(`branches.${branch.id}.campus`)}
      </h2>
      <p className="mt-2 text-sm font-semibold text-brand-muted">{t(`branches.${branch.id}.ageCategory`)}</p>

      <div className="mt-6 space-y-3 border-t border-brand-border pt-6 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{tf("lines.registrationForm")}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.formFee, locale)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{tf("lines.firstAid")}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.firstAid, locale)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{tf("lines.uniform")}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.uniform, locale)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{tf("lines.longSocks")}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.socks, locale)}</span>
        </div>
        <div className="flex justify-between gap-4 border-t border-brand-border pt-3 font-display text-lg text-brand-accent">
          <span>{t("costs.total")}</span>
          <span>{formatTzs(total, locale)}</span>
        </div>
      </div>

      <p className="mt-6 text-sm text-brand-muted">
        <span className="font-semibold text-brand-frost">{t("costs.monthlyLabel")}</span>{" "}
        <span className="font-display text-xl text-brand-accent">{formatTzs(branch.monthlyTrainingFee, locale)}</span>
        <span className="text-brand-muted"> {t("costs.perMonth")}</span>
      </p>

      <div className="mt-4 rounded-2xl border border-brand-border/80 bg-brand-base/40 p-4 text-sm text-brand-muted">
        <p className="font-semibold text-brand-frost">{t("schedule.title")}</p>
        <p className="mt-2 whitespace-pre-line">
          {branch.schedule === "monFri"
            ? t(`schedules.monFri.detail`)
            : t(`schedules.wedSatSun.detail`)}
        </p>
        <p className="mt-2 text-xs text-brand-muted/90">{t(`branches.${branch.id}.weekendNote`)}</p>
      </div>

      <div className="mt-6 space-y-3 rounded-2xl bg-brand-primary/15 px-4 py-3 text-sm">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">{tContact("labels.phone")}</p>
            <a className="font-semibold text-brand-frost hover:text-brand-accent" href={academyContact.telHref}>
              {academyContact.primaryPhone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">{tContact("labels.email")}</p>
            <a
              className="break-all font-semibold text-brand-frost hover:text-brand-accent"
              href={`mailto:${academyContact.email}`}
            >
              {academyContact.email}
            </a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-brand-muted">{tContact("branches.inquiryNote")}</p>
    </article>
  );
}

export async function RegistrationBranches() {
  const t = await getTranslations("registration");
  const tf = await getTranslations("fees");
  const tContact = await getTranslations("contact");
  const locale = await getLocale();

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="rounded-3xl border border-brand-accent/25 bg-brand-base/50 p-8 shadow-card lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">{t("notice.eyebrow")}</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-brand-muted">{t("notice.phoneOnly")}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-muted/90">{t("notice.intro")}</p>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {registrationBranches.map((branch, i) => (
          <FadeIn key={branch.id} delay={i * 0.05}>
            <BranchCard branch={branch} locale={locale} t={t} tf={tf} tContact={tContact} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-8 text-center shadow-card">
          <p className="text-sm text-brand-muted">
            {t("officeNote", {
              email: academyContact.email,
              phone: academyContact.primaryPhone,
            })}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              prefetch
              className="inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {t("cta.contact")}
            </Link>
            <a
              href={academyContact.telHref}
              className="inline-flex rounded-full border border-brand-border px-8 py-3 text-sm font-semibold text-brand-frost transition hover:border-brand-accent"
            >
              {t("cta.call")}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
