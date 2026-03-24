import type { AcademyImage } from "@/types/unsplash";

/**
 * Subfolders under `public/images/`. Use `siteImagePath("folder/file.ext")` for URLs.
 */
export const SITE_IMAGE_FOLDERS = [
  "branding",
  "hero",
  "home",
  "gallery",
  "coaches",
  "branches",
  "placeholders",
] as const;

export type SiteImageFolder = (typeof SITE_IMAGE_FOLDERS)[number];

/** Default SVG when a raster asset is missing (swap file or edit path here). */
export const SITE_IMAGE_PLACEHOLDER_ACADEMY = "placeholders/placeholder-academy.svg" as const;

/**
 * Single source of truth for on-disk paths under `public/images/`.
 * Each entry is `folder/filename` (one subfolder, no nested dirs in the filename).
 * Order is intentional for hero, strips, gallery rotation, and section slots.
 */
export const ACADEMY_PICTURE_FILES = [
  "hero/WhatsApp Image 2026-03-20 at 19.41.37.jpeg",
  "home/pexels-jean-daniel-2961301.jpg",
  "home/photo_1_2025-07-11_14-29-26.jpg",
  "home/photo_2_2025-07-11_14-29-26.jpg",
  "home/photo_3_2025-07-11_14-29-26.jpg",
  "home/photo_4_2025-07-11_14-29-26.jpg",
  "home/photo_5_2025-07-11_14-29-26.jpg",
  "home/photo_6_2025-07-11_14-29-26.jpg",
  "home/photo_7_2025-07-11_14-29-26.jpg",
  "home/photo_8_2025-07-11_14-29-26.jpg",
  "coaches/photo_9_2025-07-11_14-29-26.jpg",
  "coaches/photo_10_2025-07-11_14-29-26.jpg",
  "coaches/photo_11_2025-07-11_14-29-26.jpg",
  "coaches/photo_12_2025-07-11_14-29-26.jpg",
  "home/photo_13_2025-07-11_14-29-26.jpg",
  "home/photo_14_2025-07-11_14-29-26.jpg",
  "gallery/photo_15_2025-07-11_14-29-26.jpg",
  "gallery/photo_16_2025-07-11_14-29-26.jpg",
  "gallery/photo_17_2025-07-11_14-29-27.jpg",
  "gallery/photo_18_2025-07-11_14-29-27.jpg",
  "gallery/photo_19_2025-07-11_14-29-27.jpg",
  "gallery/photo_20_2025-07-11_14-29-27.jpg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.18.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.24.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.27.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.29.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.32.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.35.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.37.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.42.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.44.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.46.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.48.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.51.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.52.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.54.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.56.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.57.jpeg",
  "gallery/WhatsApp Image 2026-03-20 at 19.41.59.jpeg"
]

export type AcademyPictureFile = (typeof ACADEMY_PICTURE_FILES)[number];

/**
 * Public URL for a file under `public/images/`.
 * `relativePath` must be `folder/filename` (see `SITE_IMAGE_FOLDERS`).
 */
export function siteImagePath(relativePath: string): string {
  const slash = relativePath.indexOf("/");
  if (slash <= 0 || slash === relativePath.length - 1) {
    throw new Error(`siteImagePath: expected "folder/filename", got "${relativePath}"`);
  }
  const folder = relativePath.slice(0, slash);
  const file = relativePath.slice(slash + 1);
  return `/images/${folder}/${encodeURIComponent(file)}`;
}

function localImage(relativePath: string, alt: string): AcademyImage {
  return {
    src: siteImagePath(relativePath),
    alt,
    width: 1600,
    height: 1000,
    photographerName: "AFROEURO Soccer Academy",
    photographerUsername: "afroeuro",
    photoPageUrl: "",
    isFallback: false,
    isLocal: true,
  };
}

function pickAt(index: number): string {
  const i = ((index % ACADEMY_PICTURE_FILES.length) + ACADEMY_PICTURE_FILES.length) % ACADEMY_PICTURE_FILES.length;
  return ACADEMY_PICTURE_FILES[i]!;
}

function takeUnique(start: number, count: number): number[] {
  const indices: number[] = [];
  for (let i = 0; i < count; i++) {
    indices.push((start + i) % ACADEMY_PICTURE_FILES.length);
  }
  return indices;
}

export async function getHeroImages(): Promise<AcademyImage> {
  return localImage(pickAt(0), "AFROEURO Soccer Academy — elite youth football training");
}

export async function getProgramImages(): Promise<AcademyImage[]> {
  const alts = [
    "Structured pathway — training and development at AFROEURO",
    "Technical and tactical sessions — academy football",
    "International exposure and tournament opportunities",
    "Player welfare, safety, and holistic support",
    "Holiday and intensive training blocks",
  ];
  return takeUnique(2, 5).map((idx, i) => localImage(pickAt(idx), alts[i] ?? "AFROEURO training program"));
}

export async function getGalleryImages(count = 12): Promise<AcademyImage[]> {
  const n = Math.min(count, ACADEMY_PICTURE_FILES.length);
  return Array.from({ length: n }, (_, i) =>
    localImage(pickAt(i), `AFROEURO academy — match and training ${i + 1}`),
  );
}

export async function getAboutImages(): Promise<AcademyImage[]> {
  return [
    localImage(pickAt(4), "Coaching and mentorship at AFROEURO Soccer Academy"),
    localImage(pickAt(8), "Team culture, discipline, and unity on the pitch"),
  ];
}

export async function getDonationImages(): Promise<AcademyImage> {
  return localImage(pickAt(6), "Supporting the next generation of Tanzanian footballers");
}

export async function getCoachPlaceholderImages(count: number): Promise<AcademyImage[]> {
  const start = 10;
  return Array.from({ length: count }, (_, i) =>
    localImage(pickAt(start + i), "AFROEURO Soccer Academy staff and coaching environment"),
  );
}

export async function getFeesBannerImage(): Promise<AcademyImage | null> {
  return localImage(pickAt(3), "Premium training environment — AFROEURO Soccer Academy");
}
