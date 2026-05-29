import { LeadershipCard } from "@/components/coaches/LeadershipCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { coachesPage } from "@/content";
import { coaches, leaders } from "@/data/coaches";
import { toSiteImage } from "@/data/images";
import { LocaleLink } from "@/i18n/LocaleLink";

export function CoachesContent() {
  const c = coachesPage.coaches;
  const featured = leaders.find((l) => l.featured);
  const technical = leaders.filter((l) => !l.featured);

  const imageFor = (id: (typeof leaders)[number]["id"]) => toSiteImage(coaches[id].image);

  return (
    <>
      <section className="border-b border-brand-border bg-brand-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-accent">
              {c.intro.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl text-brand-frost sm:text-4xl">{c.intro.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted">{c.intro.body}</p>
          </FadeIn>
        </div>
      </section>

      {featured ? (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <FadeIn>
            <LeadershipCard coach={coaches[featured.id]} image={imageFor(featured.id)} featured />
          </FadeIn>
        </section>
      ) : null}

      <section className="border-t border-brand-border bg-brand-base px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              {c.technical.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-brand-frost sm:text-4xl">{c.technical.title}</h2>
            <p className="mt-4 max-w-2xl text-brand-muted">{c.technical.lead}</p>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {technical.map((leader, index) => (
              <FadeIn key={leader.id} delay={index * 0.06}>
                <LeadershipCard coach={coaches[leader.id]} image={imageFor(leader.id)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-brand-accent/25 bg-brand-surface p-8 text-center shadow-card sm:p-10">
            <h2 className="font-display text-2xl text-brand-frost sm:text-3xl">{c.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-muted">{c.cta.subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LocaleLink
                href="/contact"
                className="rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
              >
                {c.cta.contact}
              </LocaleLink>
              <LocaleLink
                href="/registration"
                className="rounded-full border border-brand-border px-8 py-3 text-sm font-semibold text-brand-frost transition hover:border-brand-accent"
              >
                {c.cta.register}
              </LocaleLink>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
