import { PageMeta } from "@/components/layout/PageMeta";
import { PageHero } from "@/components/pages/PageHero";
import { ProgramsContent } from "@/components/programs/ProgramsContent";
import { ProgramsMediaStrip } from "@/components/programs/ProgramsMediaStrip";
import { programs } from "@/content";

export function ProgramsPage() {
  return (
    <>
      <PageMeta page="programs" />
      <PageHero title={programs.hero.title} subtitle={programs.hero.subtitle} />
      <ProgramsMediaStrip />
      <ProgramsContent />
    </>
  );
}
