import { Mail, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/FadeIn";
import { contact, fees, registration } from "@/content";
import { academyContact } from "@/data/contact";
import {
  registrationBranches,
  registrationBranchTotal,
  type RegistrationBranch,
} from "@/data/registrationBranches";
import { LocaleLink } from "@/i18n/LocaleLink";
import { formatTzs } from "@/lib/money";

function BranchCard({ branch }: { branch: RegistrationBranch }) {
  const branchCopy = registration.branches[branch.id];
  const total = registrationBranchTotal(branch);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">{branchCopy.eyebrow}</p>
      <h2 className="mt-3 font-display text-2xl text-brand-frost sm:text-3xl">{branchCopy.campus}</h2>
      <p className="mt-2 text-sm font-semibold text-brand-muted">{branchCopy.ageCategory}</p>

      <div className="mt-6 space-y-3 border-t border-brand-border pt-6 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{fees.lines.registrationForm}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.formFee)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{fees.lines.firstAid}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.firstAid)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{fees.lines.uniform}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.uniform)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="text-brand-muted">{fees.lines.longSocks}</span>
          <span className="shrink-0 font-semibold text-brand-ink">{formatTzs(branch.socks)}</span>
        </div>
        <div className="flex justify-between gap-4 border-t border-brand-border pt-3 font-display text-lg text-brand-accent">
          <span>{registration.costs.total}</span>
          <span>{formatTzs(total)}</span>
        </div>
      </div>

      <p className="mt-6 text-sm text-brand-muted">
        <span className="font-semibold text-brand-frost">{registration.costs.monthlyLabel}</span>{" "}
        <span className="font-display text-xl text-brand-accent">{formatTzs(branch.monthlyTrainingFee)}</span>
        <span className="text-brand-muted"> {registration.costs.perMonth}</span>
      </p>

      <div className="mt-4 rounded-2xl border border-brand-border/80 bg-brand-base/40 p-4 text-sm text-brand-muted">
        <p className="font-semibold text-brand-frost">{registration.schedule.title}</p>
        <p className="mt-2 whitespace-pre-line">
          {branch.schedule === "monFri"
            ? registration.schedules.monFri.detail
            : registration.schedules.wedSatSun.detail}
        </p>
        <p className="mt-2 text-xs text-brand-muted/90">{branchCopy.weekendNote}</p>
      </div>

      <div className="mt-6 space-y-3 rounded-2xl bg-brand-primary/15 px-4 py-3 text-sm">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
              {contact.labels.phone}
            </p>
            <a className="font-semibold text-brand-frost hover:text-brand-accent" href={academyContact.telHref}>
              {academyContact.primaryPhone}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">
              {contact.labels.email}
            </p>
            <a
              className="break-all font-semibold text-brand-frost hover:text-brand-accent"
              href={`mailto:${academyContact.email}`}
            >
              {academyContact.email}
            </a>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-brand-muted">{contact.branches.inquiryNote}</p>
    </article>
  );
}

export function RegistrationBranches() {
  const c = registration;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="rounded-3xl border border-brand-accent/25 bg-brand-base/50 p-8 shadow-card lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">{c.notice.eyebrow}</p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-brand-muted">{c.notice.phoneOnly}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-muted/90">{c.notice.intro}</p>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {registrationBranches.map((branch, i) => (
          <FadeIn key={branch.id} delay={i * 0.05}>
            <BranchCard branch={branch} />
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-12 rounded-3xl border border-brand-border bg-brand-surface p-8 text-center shadow-card">
          <p className="text-sm text-brand-muted">
            {c.officeNote
              .replace("{email}", academyContact.email)
              .replace("{phone}", academyContact.primaryPhone)}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <LocaleLink
              href="/contact"
              className="inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {c.cta.contact}
            </LocaleLink>
            <a
              href={academyContact.telHref}
              className="inline-flex rounded-full border border-brand-border px-8 py-3 text-sm font-semibold text-brand-frost transition hover:border-brand-accent"
            >
              {c.cta.call}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
