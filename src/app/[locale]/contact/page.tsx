import { ContactForm } from "@/components/forms/ContactForm";
import { ImageStrip } from "@/components/media/ImageStrip";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { siteConfig } from "@/data/site";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <div className="border-b border-brand-border bg-brand-base/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ImageStrip startIndex={24} count={6} />
        </div>
      </div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-white shadow-premium">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{t("card.title")}</p>
              <p className="mt-2 text-sm text-white/60">{t("card.hours")}</p>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-white/85">
                    {siteConfig.addressLine1}
                    <br />
                    {siteConfig.addressLine2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <a className="hover:text-brand-accent" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <a className="hover:text-brand-accent" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <a className="text-white/85 hover:text-brand-accent" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                    {t("card.whatsapp")}
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
