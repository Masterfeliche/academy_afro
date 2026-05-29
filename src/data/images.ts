import type { ImageRef, SiteImage } from "@/types/site-image";

/**
 * All site images — edit paths here, then drop files into `public/images/`.
 *
 * Example: to change the home hero, update `home.hero.path` and add the file at
 * `public/images/hero/WhatsApp Image 2026-03-20 at 19.41.37.jpeg`.
 */
export const images = {
  home: {
    hero: {
      path: "hero/WhatsApp Image 2026-03-20 at 19.41.37.jpeg",
      alt: "AFROEURO Soccer Academy — elite youth football training",
    },
    programs: [
      {
        path: "home/photo_3_2025-07-11_14-29-26.jpg",
        alt: "Structured pathway — training and development at AFROEURO",
      },
      {
        path: "home/photo_4_2025-07-11_14-29-26.jpg",
        alt: "Player welfare, safety, and holistic support",
      },
    ],
    whyStrip: [
      { path: "home/photo_3_2025-07-11_14-29-26.jpg", alt: "Academy training session" },
      { path: "home/photo_4_2025-07-11_14-29-26.jpg", alt: "Technical development on the pitch" },
      { path: "home/photo_5_2025-07-11_14-29-26.jpg", alt: "Team culture at AFROEURO" },
      { path: "home/photo_6_2025-07-11_14-29-26.jpg", alt: "Holiday intensive training" },
      { path: "home/photo_7_2025-07-11_14-29-26.jpg", alt: "Youth players in match preparation" },
    ],
    galleryPreview: [
      {
        path: "hero/WhatsApp Image 2026-03-20 at 19.41.37.jpeg",
        alt: "Youth players in match kit during AFROEURO training",
      },
      {
        path: "home/pexels-jean-daniel-2961301.jpg",
        alt: "Team huddle before a weekend session at the academy",
      },
      {
        path: "home/photo_1_2025-07-11_14-29-26.jpg",
        alt: "Technical drills on the training pitch in Dar es Salaam",
      },
      {
        path: "home/photo_2_2025-07-11_14-29-26.jpg",
        alt: "Goalkeeper practice with coached shot-stopping reps",
      },
      {
        path: "home/photo_5_2025-07-11_14-29-26.jpg",
        alt: "Small-sided game emphasizing passing and movement",
      },
      {
        path: "home/photo_6_2025-07-11_14-29-26.jpg",
        alt: "Holiday intensive block — players warming up together",
      },
    ],
    finalCta: {
      path: "coaches/photo_11_2025-07-11_14-29-26.jpg",
      alt: "AFROEURO Soccer Academy training session",
    },
    partnersStrip: [
      { path: "home/photo_7_2025-07-11_14-29-26.jpg", alt: "International training exposure" },
      { path: "home/photo_8_2025-07-11_14-29-26.jpg", alt: "Youth festival participation" },
      { path: "coaches/photo_9_2025-07-11_14-29-26.jpg", alt: "Academy leadership abroad" },
      { path: "coaches/photo_10_2025-07-11_14-29-26.jpg", alt: "Technical staff on tour" },
      { path: "coaches/photo_11_2025-07-11_14-29-26.jpg", alt: "Goalkeeper development session" },
      { path: "coaches/photo_12_2025-07-11_14-29-26.jpg", alt: "Physical preparation abroad" },
    ],
    safety: [
      {
        path: "coaches/photo_12_2025-07-11_14-29-26.jpg",
        alt: "Authorized guardians at a supervised academy session",
      },
      {
        path: "home/photo_13_2025-07-11_14-29-26.jpg",
        alt: "Session supervision during youth football training",
      },
      {
        path: "gallery/photo_19_2025-07-11_14-29-27.jpg",
        alt: "Health and first aid support at training",
      },
    ],
  },
  about: [
    {
      path: "home/photo_5_2025-07-11_14-29-26.jpg",
      alt: "Coaching and mentorship at AFROEURO Soccer Academy",
    },
    {
      path: "home/photo_8_2025-07-11_14-29-26.jpg",
      alt: "Team culture, discipline, and unity on the pitch",
    },
  ],
  fees: {
    banner: {
      path: "home/photo_4_2025-07-11_14-29-26.jpg",
      alt: "Premium training environment — AFROEURO Soccer Academy",
    },
  },
  donation: {
    hero: {
      path: "home/photo_7_2025-07-11_14-29-26.jpg",
      alt: "Supporting the next generation of Tanzanian footballers",
    },
  },
  programs: {
    strip: [
      { path: "home/photo_1_2025-07-11_14-29-26.jpg", alt: "Academy training session" },
      { path: "home/photo_2_2025-07-11_14-29-26.jpg", alt: "Technical drills on the pitch" },
      { path: "home/photo_3_2025-07-11_14-29-26.jpg", alt: "Youth players in training" },
      { path: "home/photo_4_2025-07-11_14-29-26.jpg", alt: "Structured development session" },
      { path: "home/photo_5_2025-07-11_14-29-26.jpg", alt: "Team training at AFROEURO" },
      { path: "home/photo_6_2025-07-11_14-29-26.jpg", alt: "Holiday intensive training" },
    ],
  },
  contact: {
    strip: [
      { path: "gallery/photo_16_2025-07-11_14-29-26.jpg", alt: "Academy campus" },
      { path: "gallery/photo_17_2025-07-11_14-29-27.jpg", alt: "Training ground" },
      { path: "gallery/photo_18_2025-07-11_14-29-27.jpg", alt: "Youth football session" },
      { path: "gallery/photo_19_2025-07-11_14-29-27.jpg", alt: "Match day preparation" },
      { path: "gallery/photo_20_2025-07-11_14-29-27.jpg", alt: "Academy community event" },
      { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.18.jpeg", alt: "AFROEURO training" },
    ],
  },
  coaches: {
    director: {
      path: "coaches/photo_9_2025-07-11_14-29-26.jpg",
      alt: "Portrait — Academy director at AFROEURO Soccer Academy",
    },
    methodology: {
      path: "coaches/photo_10_2025-07-11_14-29-26.jpg",
      alt: "Portrait — Head of methodology at AFROEURO Soccer Academy",
    },
    goalkeeping: {
      path: "coaches/photo_11_2025-07-11_14-29-26.jpg",
      alt: "Portrait — Goalkeeper development lead at AFROEURO Soccer Academy",
    },
    performance: {
      path: "coaches/photo_12_2025-07-11_14-29-26.jpg",
      alt: "Portrait — Physical preparation lead at AFROEURO Soccer Academy",
    },
  },
  gallery: [
    { path: "hero/WhatsApp Image 2026-03-20 at 19.41.37.jpeg", alt: "Youth players in match kit during AFROEURO training" },
    { path: "home/pexels-jean-daniel-2961301.jpg", alt: "Team huddle before a weekend session at the academy" },
    { path: "home/photo_1_2025-07-11_14-29-26.jpg", alt: "Technical drills on the training pitch in Dar es Salaam" },
    { path: "home/photo_2_2025-07-11_14-29-26.jpg", alt: "Goalkeeper practice with coached shot-stopping reps" },
    { path: "home/photo_3_2025-07-11_14-29-26.jpg", alt: "Small-sided game emphasizing passing and movement" },
    { path: "home/photo_4_2025-07-11_14-29-26.jpg", alt: "Holiday intensive block — players warming up together" },
    { path: "home/photo_5_2025-07-11_14-29-26.jpg", alt: "Academy staff guiding players through a cool-down" },
    { path: "home/photo_6_2025-07-11_14-29-26.jpg", alt: "Match day preparation — boots and bibs on the sideline" },
    { path: "home/photo_7_2025-07-11_14-29-26.jpg", alt: "Evening training under floodlights at a campus ground" },
    { path: "home/photo_8_2025-07-11_14-29-26.jpg", alt: "Young athletes celebrating after a friendly fixture" },
    { path: "coaches/photo_9_2025-07-11_14-29-26.jpg", alt: "Conditioning circuit led by the physical preparation team" },
    { path: "coaches/photo_10_2025-07-11_14-29-26.jpg", alt: "Parents and guardians watching a supervised session" },
    { path: "coaches/photo_11_2025-07-11_14-29-26.jpg", alt: "Cross-campus tournament — AFROEURO kits on display" },
    { path: "coaches/photo_12_2025-07-11_14-29-26.jpg", alt: "Coach demonstrating first-touch control to U15 players" },
    { path: "home/photo_13_2025-07-11_14-29-26.jpg", alt: "Defensive shape drill in the school-term phase" },
    { path: "home/photo_14_2025-07-11_14-29-26.jpg", alt: "Players hydrating during a scheduled break" },
    { path: "gallery/photo_15_2025-07-11_14-29-26.jpg", alt: "International festival travel — squad photo abroad" },
    { path: "gallery/photo_16_2025-07-11_14-29-26.jpg", alt: "Community outreach session with academy leadership" },
    { path: "gallery/photo_17_2025-07-11_14-29-27.jpg", alt: "Weekend match kickoff at a Bunju campus fixture" },
    { path: "gallery/photo_18_2025-07-11_14-29-27.jpg", alt: "Registration day — families meeting branch coordinators" },
    { path: "gallery/photo_19_2025-07-11_14-29-27.jpg", alt: "Scholarship pathway talk with youth players" },
    { path: "gallery/photo_20_2025-07-11_14-29-27.jpg", alt: "Uniform fitting for new intake players" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.18.jpeg", alt: "Safeguarding briefing for authorized guardians" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.24.jpeg", alt: "Wednesday evening session on a lit training ground" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.27.jpeg", alt: "Saturday morning skills block for U10 categories" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.29.jpeg", alt: "Sunday match squad lining up for team photo" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.32.jpeg", alt: "Holiday camp group photo — Dar es Salaam" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.35.jpeg", alt: "Training cones and markers for agility work" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.37.jpeg", alt: "Academy director observing a methodology session" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.42.jpeg", alt: "Goalkeeping specialist working with shot-stoppers" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.44.jpeg", alt: "Partnership visit — technical staff on the sideline" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.46.jpeg", alt: "End-of-phase review with coaching staff" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.48.jpeg", alt: "Players practicing set-piece routines" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.51.jpeg", alt: "Academy banner displayed at a community event" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.52.jpeg", alt: "Post-training recovery stretch led by coaches" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.54.jpeg", alt: "Youth players presenting fair-play handshake" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.56.jpeg", alt: "Equipment check before an away friendly" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.57.jpeg", alt: "Branch campus entrance on registration weekend" },
    { path: "gallery/WhatsApp Image 2026-03-20 at 19.41.59.jpeg", alt: "Academy training under evening lights" },
  ],
} as const satisfies Record<string, unknown>;

export function imagePath(relativePath: string): string {
  const slash = relativePath.indexOf("/");
  if (slash <= 0 || slash === relativePath.length - 1) {
    throw new Error(`imagePath: expected "folder/filename", got "${relativePath}"`);
  }
  return `/images/${relativePath.slice(0, slash)}/${encodeURIComponent(relativePath.slice(slash + 1))}`;
}

export function toSiteImage(ref: ImageRef): SiteImage {
  return {
    src: imagePath(ref.path),
    alt: ref.alt,
    width: 1600,
    height: 1000,
  };
}

export function toSiteImages(refs: readonly ImageRef[]): SiteImage[] {
  return refs.map(toSiteImage);
}
