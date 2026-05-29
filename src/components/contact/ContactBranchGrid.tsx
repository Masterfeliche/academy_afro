import { FadeIn } from "@/components/motion/FadeIn";
import { contact } from "@/content";
import { academyContact, contactBranchIds } from "@/data/contact";

export function ContactBranchGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
      {contactBranchIds.map((id, i) => (
        <FadeIn key={id} delay={i * 0.06}>
          <article className="flex h-full min-h-0 flex-col rounded-2xl border border-brand-border bg-brand-surface p-6 shadow-card sm:p-8">
            <h2 className="font-display text-xl text-brand-frost sm:text-2xl lg:text-3xl">
              {contact.branches[id].name}
            </h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                  {contact.labels.phone}
                </dt>
                <dd className="mt-1">
                  <a
                    className="font-semibold text-brand-frost hover:text-brand-accent"
                    href={academyContact.telHref}
                  >
                    {academyContact.primaryPhone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                  {contact.labels.email}
                </dt>
                <dd className="mt-1 break-all">
                  <a
                    className="font-semibold text-brand-frost hover:text-brand-accent"
                    href={`mailto:${academyContact.email}`}
                  >
                    {academyContact.email}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-brand-border pt-6 text-sm leading-relaxed text-brand-muted">
              {contact.branches.inquiryNote}
            </p>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}
