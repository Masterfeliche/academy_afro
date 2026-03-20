/**
 * Academy photography in `public/pics/`. Order is intentional for hero / strips / gallery.
 */
export const ACADEMY_PICTURE_FILES = [
  "daven2.png",
  "pexels-jean-daniel-2961301.jpg",
  "photo_1_2025-07-11_14-29-26.jpg",
  "photo_2_2025-07-11_14-29-26.jpg",
  "photo_3_2025-07-11_14-29-26.jpg",
  "photo_4_2025-07-11_14-29-26.jpg",
  "photo_5_2025-07-11_14-29-26.jpg",
  "photo_6_2025-07-11_14-29-26.jpg",
  "photo_7_2025-07-11_14-29-26.jpg",
  "photo_8_2025-07-11_14-29-26.jpg",
  "photo_9_2025-07-11_14-29-26.jpg",
  "photo_10_2025-07-11_14-29-26.jpg",
  "photo_11_2025-07-11_14-29-26.jpg",
  "photo_12_2025-07-11_14-29-26.jpg",
  "photo_13_2025-07-11_14-29-26.jpg",
  "photo_14_2025-07-11_14-29-26.jpg",
  "photo_15_2025-07-11_14-29-26.jpg",
  "photo_16_2025-07-11_14-29-26.jpg",
  "photo_17_2025-07-11_14-29-27.jpg",
  "photo_18_2025-07-11_14-29-27.jpg",
  "photo_19_2025-07-11_14-29-27.jpg",
  "photo_20_2025-07-11_14-29-27.jpg",
  "WhatsApp Image 2026-03-20 at 19.41.18.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.24.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.27.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.29.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.32.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.35.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.37.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.42.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.44.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.46.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.48.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.51.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.52.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.54.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.56.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.57.jpeg",
  "WhatsApp Image 2026-03-20 at 19.41.59.jpeg",
] as const;

export type AcademyPictureFile = (typeof ACADEMY_PICTURE_FILES)[number];

/** Safe URL for filenames with spaces or special characters */
export function picPath(file: string): string {
  return `/pics/${encodeURIComponent(file)}`;
}
