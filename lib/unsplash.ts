import type { AcademyImage } from "@/types/unsplash";

import { ACADEMY_PICTURE_FILES, picPath } from "@/data/pics";

function localImage(file: string, alt: string): AcademyImage {
  return {
    src: picPath(file),
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
