import { PageHero } from "@/components/pages/PageHero";
import { RegistrationBranches } from "@/components/registration/RegistrationBranches";
import { getTranslations } from "next-intl/server";

export default async function RegistrationPage() {
  const t = await getTranslations("registration");

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <RegistrationBranches />
    </>
  );
}
