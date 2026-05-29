import { shared } from "@/content";

/** Public marketing name vs legal entity */
export const siteConfig = {
  brandName: "AFROEURO Soccer Academy",
  legalName: shared.site.legalName,
  tagline: shared.site.tagline,
  addressLine1: "Dar es Salaam",
  addressLine2: "Tanzania",
  social: {
    instagram: "https://www.instagram.com/afroeurosocceracademy",
    facebook: "https://www.facebook.com/afroeurosocceracademy",
    youtube: "https://www.youtube.com/@afroeurosocceracademy",
    x: "https://x.com/afroeurosocceracademy",
  },
} as const;

export type NavKey =
  | "home"
  | "about"
  | "programs"
  | "fees"
  | "donation"
  | "gallery"
  | "coaches"
  | "registration"
  | "contact";

export const mainNav: { href: string; key: NavKey; label: string }[] = [
  { href: "/", key: "home", label: shared.nav.home },
  { href: "/about", key: "about", label: shared.nav.about },
  { href: "/programs", key: "programs", label: shared.nav.programs },
  { href: "/fees", key: "fees", label: shared.nav.fees },
  { href: "/donation", key: "donation", label: shared.nav.donation },
  { href: "/gallery", key: "gallery", label: shared.nav.gallery },
  { href: "/coaches", key: "coaches", label: shared.nav.coaches },
  { href: "/registration", key: "registration", label: shared.nav.registration },
  { href: "/contact", key: "contact", label: shared.nav.contact },
];
