import { FeesPreview } from "@/components/home/FeesPreview";
import { FinalCta } from "@/components/home/FinalCta";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeWhy } from "@/components/home/HomeWhy";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { PageMeta } from "@/components/layout/PageMeta";
import { images, toSiteImage, toSiteImages } from "@/data/images";

export function HomePage() {
  const hero = toSiteImage(images.home.hero);
  const programImages = toSiteImages(images.home.programs);
  const galleryImages = toSiteImages(images.home.galleryPreview);

  return (
    <>
      <PageMeta page="home" />
      <HomeHero image={hero} />
      <HomeStats />
      <HomeWhy />
      <ProgramsPreview images={programImages} />
      <FeesPreview />
      <GalleryPreview images={galleryImages} />
      <Testimonials />
      <FinalCta />
    </>
  );
}
