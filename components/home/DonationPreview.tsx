import { HeartHandshake } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/motion/FadeIn";
import { Link } from "@/i18n/navigation";

export async function DonationPreview() {
  const t = await getTranslations("home.donationPreview");

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,122,32,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(11,31,92,0.12),transparent_40%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-brand-border bg-brand-surface p-10 shadow-premium lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-white">
                <HeartHandshake className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <h2 className="font-display text-4xl text-brand-frost sm:text-5xl">
                  {t("title")}
                </h2>
                <p className="mt-4 text-lg text-brand-muted">{t("subtitle")}</p>
              </div>
            </div>
            <Link
              href="/donation"
              className="inline-flex rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-premium transition hover:brightness-110"
            >
              {t("cta")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
