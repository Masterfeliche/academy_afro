import { CoachesContent } from "@/components/coaches/CoachesContent";
import { PageMeta } from "@/components/layout/PageMeta";
import { PageHero } from "@/components/pages/PageHero";
import { coachesPage } from "@/content";

export function CoachesPage() {
  return (
    <>
      <PageMeta page="coaches" />
      <PageHero title={coachesPage.coaches.hero.title} subtitle={coachesPage.coaches.hero.subtitle} />
      <CoachesContent />
    </>
  );
}
