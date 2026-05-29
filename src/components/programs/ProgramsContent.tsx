import { Calendar, Clock, Footprints, HeartPulse, Shirt, Sun } from "lucide-react";

import { FadeIn } from "@/components/motion/FadeIn";
import { programs } from "@/content";

export function ProgramsContent() {
  const sections = programs.sections;

  const blocks = [
    { key: "overview" as const, icon: Sun },
    { key: "phases" as const, icon: Calendar },
    { key: "weekly" as const, icon: Clock },
    { key: "holiday" as const, icon: Calendar },
    { key: "requirements" as const, icon: Footprints },
    { key: "safety" as const, icon: Shirt },
    { key: "health" as const, icon: HeartPulse },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:space-y-24 lg:px-8 lg:py-20">
      {blocks.map((block, index) => {
        const Icon = block.icon;
        const section = sections[block.key];
        return (
          <FadeIn key={block.key} delay={index * 0.03}>
            <section
              id={block.key}
              className="scroll-mt-28 rounded-3xl border border-brand-border bg-brand-surface p-8 shadow-card sm:p-10 lg:p-12"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-3xl text-brand-frost sm:text-4xl">{section.title}</h2>
                  <div className="mt-6 max-w-none text-brand-muted">
                    <p className="whitespace-pre-line">{section.body}</p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>
        );
      })}
    </div>
  );
}
