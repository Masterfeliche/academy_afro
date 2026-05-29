import { FadeIn } from "@/components/motion/FadeIn";
import { ImageStrip } from "@/components/media/ImageStrip";
import { programs } from "@/content";
import { images } from "@/data/images";

export function ProgramsMediaStrip() {
  const c = programs.mediaStrip;

  return (
    <section className="border-b border-brand-border bg-brand-base/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">{c.eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl text-brand-frost sm:text-3xl">{c.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-muted">{c.subtitle}</p>
        </FadeIn>
        <div className="mt-8">
          <ImageStrip images={images.programs.strip} />
        </div>
      </div>
    </section>
  );
}
