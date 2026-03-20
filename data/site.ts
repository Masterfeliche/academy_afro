/** Public marketing name vs legal entity — see messages `site.legalName` */
export const siteConfig = {
  brandName: "AFROEURO Soccer Academy",
  legalName: "Afro Euro Sports Agency",
  taglineKey: "site.tagline",
  email: "info@afroeuro.tz",
  phone: "+255 000 000 000",
  whatsapp: "https://wa.me/255000000000",
  addressLine1: "Dar es Salaam",
  addressLine2: "Tanzania",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    x: "https://x.com/",
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
  | "trials"
  | "contact";

export const mainNav: { href: string; key: NavKey }[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/programs", key: "programs" },
  { href: "/fees", key: "fees" },
  { href: "/donation", key: "donation" },
  { href: "/gallery", key: "gallery" },
  { href: "/coaches", key: "coaches" },
  { href: "/trials", key: "trials" },
  { href: "/contact", key: "contact" },
];
