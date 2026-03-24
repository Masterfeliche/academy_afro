import { siteConfig } from "@/data/site";

/** Official lines — single source of truth for phone, email, and WhatsApp deep link. */
export const OFFICIAL_PHONE_DISPLAY = "0652225017";
export const OFFICIAL_EMAIL = "aroeurosocceracademy@gmail.com";
export const OFFICIAL_WHATSAPP_URL = "https://wa.me/255652225017";

/** Use in tel: links (E.164 without spaces). */
export const contactTelHref = "tel:+255652225017";

export const contactBranchIds = ["kunduchi", "mabwepande", "bunju"] as const;
export type ContactBranchId = (typeof contactBranchIds)[number];

/**
 * Shared contact block: Contact page, Registration, Footer, and payment confirmation copy.
 * Postal location stays on `site.ts` (`addressLine1` / `addressLine2`).
 */
export const academyContact = {
  primaryPhone: OFFICIAL_PHONE_DISPLAY,
  email: OFFICIAL_EMAIL,
  whatsappUrl: OFFICIAL_WHATSAPP_URL,
  telHref: contactTelHref,
  addressLine1: siteConfig.addressLine1,
  addressLine2: siteConfig.addressLine2,
} as const;
