import { Mail, MessageCircle, Phone, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { coachesPage } from "@/content";
import { leadershipContact, type CoachProfile } from "@/data/coaches";
import type { SiteImage } from "@/types/site-image";

type Props = {
  coach: CoachProfile;
  image: SiteImage;
  featured?: boolean;
};

export function LeadershipCard({ coach, image, featured }: Props) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface shadow-premium">
        <FeaturedLayout image={image}>
          <LeaderDetails coach={coach} large />
        </FeaturedLayout>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
      <AcademyImageFigure
        image={image}
        fill
        className="relative min-h-[300px] w-full shrink-0"
        imgClassName="object-cover object-top"
      />
      <MotionlessCardBody coach={coach} />
    </article>
  );
}

function FeaturedLayout({ image, children }: { image: SiteImage; children: ReactNode }) {
  return (
    <MotionlessFeaturedGrid image={image}>
      <MotionlessFeaturedPanel>{children}</MotionlessFeaturedPanel>
    </MotionlessFeaturedGrid>
  );
}

function MotionlessFeaturedGrid({ image, children }: { image: SiteImage; children: ReactNode }) {
  return (
    <div className="grid lg:grid-cols-[minmax(280px,2fr)_3fr] lg:items-stretch">
      <AcademyImageFigure
        image={image}
        fill
        className="relative min-h-[320px] w-full lg:min-h-full"
        imgClassName="object-cover object-top"
      />
      {children}
    </div>
  );
}

function MotionlessFeaturedPanel({ children }: { children: ReactNode }) {
  return <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">{children}</div>;
}

function MotionlessCardBody({ coach }: { coach: CoachProfile }) {
  return (
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      <LeaderDetails coach={coach} />
    </div>
  );
}

function LeaderDetails({ coach, large }: { coach: CoachProfile; large?: boolean }) {
  const labels = coachesPage.coaches.labels;

  return (
    <>
      <p
        className={
          large
            ? "text-xs font-bold uppercase tracking-[0.3em] text-brand-accent"
            : "text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent"
        }
      >
        {large ? coachesPage.coaches.featuredEyebrow : coachesPage.coaches.cardEyebrow}
      </p>
      <h2
        className={
          large
            ? "mt-3 font-display text-4xl tracking-tight text-brand-frost sm:text-5xl"
            : "mt-2 font-display text-2xl text-brand-frost"
        }
      >
        {coach.name}
      </h2>
      <p
        className={
          large ? "mt-2 text-lg font-semibold text-brand-muted" : "mt-1 text-sm font-semibold text-brand-muted"
        }
      >
        {coach.role}
      </p>
      <FocusArea coach={coach} />
      <p
        className={
          large
            ? "mt-5 text-base leading-relaxed text-brand-muted"
            : "mt-4 flex-1 text-sm leading-relaxed text-brand-muted"
        }
      >
        {coach.bio}
      </p>
      <p
        className={
          large ? "mt-4 text-sm text-brand-muted/90" : "mt-3 text-xs leading-relaxed text-brand-muted/85"
        }
      >
        {coach.contactNote}
      </p>
      <ContactLinks labels={labels} />
    </>
  );
}

function FocusArea({ coach }: { coach: CoachProfile }) {
  const labels = coachesPage.coaches.labels;

  return (
    <div className="mt-5 flex gap-3 rounded-xl border border-brand-accent/20 bg-brand-base/50 p-4">
      <Target className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{labels.focus}</p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-brand-ink">{coach.focusArea}</p>
      </div>
    </div>
  );
}

function ContactLinks({ labels }: { labels: (typeof coachesPage.coaches)["labels"] }) {
  return (
    <ul className="mt-6 space-y-3 border-t border-brand-border pt-6 text-sm">
      <ContactRow
        icon={Phone}
        label={labels.phone}
        href={leadershipContact.telHref}
        value={leadershipContact.phone}
      />
      <ContactRow
        icon={Mail}
        label={labels.email}
        href={`mailto:${leadershipContact.email}`}
        value={leadershipContact.email}
      />
      <ContactRow
        icon={MessageCircle}
        label={labels.whatsapp}
        href={leadershipContact.whatsappUrl}
        value={labels.whatsappAction}
        external
      />
    </ul>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  value,
  external,
}: {
  icon: LucideIcon;
  label: string;
  href: string;
  value: string;
  external?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">{label}</p>
        <a
          href={href}
          className="mt-0.5 block break-all font-semibold text-brand-frost hover:text-brand-accent"
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        >
          {value}
        </a>
      </div>
    </li>
  );
}
