import { PageHero } from "@/components/pages/PageHero";
import { ProgramsContent } from "@/components/programs/ProgramsContent";
import { ProgramsMediaStrip } from "@/components/programs/ProgramsMediaStrip";
import { getTranslations } from "next-intl/server";

export default async function ProgramsPage() {
  const t = await getTranslations("programs");

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <ProgramsMediaStrip />
      <ProgramsContent />
    </>
  );
}
