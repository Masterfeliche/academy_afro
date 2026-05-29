import { PageMeta } from "@/components/layout/PageMeta";
import { PageHero } from "@/components/pages/PageHero";
import { RegistrationBranches } from "@/components/registration/RegistrationBranches";
import { registration } from "@/content";

export function RegistrationPage() {
  return (
    <>
      <PageMeta page="registration" />
      <PageHero title={registration.hero.title} subtitle={registration.hero.subtitle} />
      <RegistrationBranches />
    </>
  );
}
