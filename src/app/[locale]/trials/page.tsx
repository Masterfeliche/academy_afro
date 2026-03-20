import { TrialsForm } from "@/components/forms/TrialsForm";
import { PageHero } from "@/components/pages/PageHero";
import { getTranslations } from "next-intl/server";

export default async function TrialsPage() {
  const t = await getTranslations("trials");

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <TrialsForm />
      </section>
    </>
  );
}
