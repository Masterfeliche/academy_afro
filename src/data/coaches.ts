import { images } from "@/data/images";
import { coachesPage } from "@/content/coachesPage";
import { academyContact } from "@/data/contact";
import type { ImageRef } from "@/types/site-image";

export type CoachId = "director" | "methodology" | "goalkeeping" | "performance";

export const coachIds: CoachId[] = [
  "director",
  "methodology",
  "goalkeeping",
  "performance",
];

export type CoachProfile = {
  id: CoachId;
  name: string;
  role: string;
  bio: string;
  focusArea: string;
  contactNote: string;
  image: ImageRef;
};

/** Coach bios and portrait paths — edit here or in `src/content/coachesPage.ts`. */
export const coaches: Record<CoachId, CoachProfile> = {
  director: {
    id: "director",
    ...coachesPage.coach.director,
    image: images.coaches.director,
  },
  methodology: {
    id: "methodology",
    ...coachesPage.coach.methodology,
    image: images.coaches.methodology,
  },
  goalkeeping: {
    id: "goalkeeping",
    ...coachesPage.coach.goalkeeping,
    image: images.coaches.goalkeeping,
  },
  performance: {
    id: "performance",
    ...coachesPage.coach.performance,
    image: images.coaches.performance,
  },
};

export type LeaderEntry = {
  id: CoachId;
  featured?: boolean;
};

/** Display order on the coaches page (director first). */
export const leaders: LeaderEntry[] = [
  { id: "director", featured: true },
  { id: "methodology" },
  { id: "goalkeeping" },
  { id: "performance" },
];

/** Official academy lines shared by the leadership team. */
export const leadershipContact = {
  phone: academyContact.primaryPhone,
  telHref: academyContact.telHref,
  email: academyContact.email,
  whatsappUrl: academyContact.whatsappUrl,
} as const;
