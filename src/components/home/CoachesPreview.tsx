import { Link } from "react-router-dom";

import { AcademyImageFigure } from "@/components/media/AcademyImageFigure";
import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { home, shared } from "@/content";
import { coachIds, coaches } from "@/data/coaches";
import { toSiteImage } from "@/data/images";

export function CoachesPreview() {
  const c = home.coachesPreview;

  return (
    <section className="bg-brand-base px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
              <p className="mt-4 max-w-xl text-brand-muted">{c.subtitle}</p>
            </div>
            <Link
              to="/coaches"
              className="self-start rounded-full bg-brand-surface px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              {shared.nav.coaches} — {shared.common.learnMore}
            </Link>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coachIds.map((id, index) => {
            const coach = coaches[id];
            return (
              <FadeIn key={id} delay={index * 0.05}>
                <HoverLift>
                  <article className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-card">
                    <AcademyImageFigure
                      image={toSiteImage(coach.image)}
                      fill
                      className="relative min-h-[220px] w-full"
                      imgClassName="object-cover object-top"
                    />
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">
                        {coach.role}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-brand-ink">{coach.name}</h3>
                      <p className="mt-2 line-clamp-3 text-sm text-brand-muted">{coach.bio}</p>
                    </div>
                  </article>
                </HoverLift>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
