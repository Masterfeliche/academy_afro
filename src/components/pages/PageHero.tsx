import { FadeIn } from "@/components/motion/FadeIn";

type Props = {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  kicker,
  align = "left",
  className,
}: Props) {
  const alignClass =
    align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <section
      className={`border-b border-brand-border bg-gradient-to-br from-brand-base via-brand-surface to-brand-base px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className={alignClass}>
            {kicker ? (
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                {kicker}
              </p>
            ) : null}
            <h1 className="mt-4 font-display text-4xl tracking-tight text-brand-frost sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-6 text-lg leading-relaxed text-brand-muted">
                {subtitle}
              </p>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
