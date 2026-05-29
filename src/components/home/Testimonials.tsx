import { Quote } from "lucide-react";

import { FadeIn } from "@/components/motion/FadeIn";
import { HoverLift } from "@/components/motion/HoverLift";
import { testimonials } from "@/content";
import { testimonialIds } from "@/data/testimonials";

export function Testimonials() {
  const c = testimonials.homeTestimonials;
  const quotes = testimonials.testimonial;

  return (
    <section className="border-t border-brand-border bg-brand-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">{c.title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-brand-muted">{c.subtitle}</p>
        </FadeIn>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonialIds.map((id, i) => {
            const item = quotes[id];
            return (
              <FadeIn key={id} delay={i * 0.06}>
                <HoverLift>
                  <article className="flex h-full flex-col rounded-2xl border border-brand-border bg-brand-base/50 p-8 shadow-card">
                    <Quote className="h-8 w-8 text-brand-accent" aria-hidden />
                    <p className="mt-6 flex-1 text-base leading-relaxed text-brand-ink">
                      “{item.quote}”
                    </p>
                    <p className="mt-8 text-sm font-semibold text-brand-frost">{item.name}</p>
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
