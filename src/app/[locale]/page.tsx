import { CoachesPreview } from "@/components/home/CoachesPreview";
import { DonationPreview } from "@/components/home/DonationPreview";
import { FeesPreview } from "@/components/home/FeesPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhy } from "@/components/home/HomeWhy";
import { InternationalPartnersPreview } from "@/components/home/InternationalPartnersPreview";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { SafetyWelfarePreview } from "@/components/home/SafetyWelfarePreview";
import { Testimonials } from "@/components/home/Testimonials";
import {
  ACADEMY_PICTURE_FILES,
  getCoachPlaceholderImages,
  getGalleryImages,
  getHeroImages,
  getProgramImages,
} from "@/data/site-images";

export default async function HomePage() {
  const [hero, programImages, galleryImages, coachImages] = await Promise.all([
    getHeroImages(),
    getProgramImages(),
    getGalleryImages(Math.min(24, ACADEMY_PICTURE_FILES.length)),
    getCoachPlaceholderImages(4),
  ]);

  return (
    <>
      <HomeHero image={hero} />
      <HomeStats />
      <HomeWhy />
      <ProgramsPreview images={programImages.slice(0, 4)} />
      <InternationalPartnersPreview />
      <SafetyWelfarePreview />
      <FeesPreview />
      <GalleryPreview images={galleryImages} />
      <CoachesPreview images={coachImages} />
      <DonationPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
