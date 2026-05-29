import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageMeta } from "@/components/layout/PageMeta";
import { PageHero } from "@/components/pages/PageHero";
import { gallery } from "@/content";
import { images, toSiteImages } from "@/data/images";

export function GalleryPage() {
  const galleryImages = toSiteImages(images.gallery);

  return (
    <>
      <PageMeta page="gallery" />
      <PageHero title={gallery.hero.title} subtitle={gallery.hero.subtitle} />
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
