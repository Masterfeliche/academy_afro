import { ContactBranchGrid } from "@/components/contact/ContactBranchGrid";
import { PageMeta } from "@/components/layout/PageMeta";
import { ImageStrip } from "@/components/media/ImageStrip";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHero } from "@/components/pages/PageHero";
import { contact } from "@/content";
import { academyContact } from "@/data/contact";
import { images } from "@/data/images";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function ContactPage() {
  const c = contact;

  return (
    <>
      <PageMeta page="contact" />
      <PageHero title={c.hero.title} subtitle={c.hero.subtitle} />
      <div className="border-b border-brand-border bg-brand-base/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ImageStrip images={images.contact.strip} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-14 lg:py-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              {c.branches.sectionEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-brand-frost sm:text-4xl lg:text-[2.75rem]">
              {c.branches.sectionTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg">
              {c.branches.sectionLead}
            </p>
          </FadeIn>
          <div className="mt-10 sm:mt-12">
            <ContactBranchGrid />
          </div>
        </section>

        <section className="border-t border-brand-border pb-16 pt-4 sm:pb-20">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
              {c.card.sectionEyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl text-brand-frost sm:text-3xl">{c.card.sectionTitle}</h2>
          </FadeIn>
          <div className="mt-8 flex justify-center sm:mt-10">
            <FadeIn delay={0.05}>
              <div className="w-full max-w-xl rounded-2xl border border-brand-border bg-brand-surface p-6 text-white shadow-premium sm:p-8 lg:max-w-2xl">
                <p className="text-sm text-white/60">{c.card.hours}</p>
                <ul className="mt-6 space-y-5 text-sm sm:mt-8 sm:space-y-6">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                    <span className="min-w-0 text-white/85">
                      {academyContact.addressLine1}
                      <br />
                      {academyContact.addressLine2}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                    <a className="min-w-0 font-medium hover:text-brand-accent" href={academyContact.telHref}>
                      {academyContact.primaryPhone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                    <a
                      className="min-w-0 break-all font-medium hover:text-brand-accent"
                      href={`mailto:${academyContact.email}`}
                    >
                      {academyContact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                    <a
                      className="min-w-0 text-white/85 hover:text-brand-accent"
                      href={academyContact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {c.card.whatsapp}
                    </a>
                  </li>
                </ul>
                <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70 sm:mt-8">
                  {c.card.note}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
