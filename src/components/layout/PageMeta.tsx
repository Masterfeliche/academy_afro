import { useEffect } from "react";

import { shared } from "@/content";
import { siteConfig } from "@/data/site";

type Props = {
  page: keyof typeof shared.meta;
};

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function PageMeta({ page }: Props) {
  const meta = shared.meta[page];
  const fullTitle =
    page === "home" ? siteConfig.brandName : `${meta.title} | ${siteConfig.brandName}`;

  useEffect(() => {
    document.title = fullTitle;
    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:site_name", siteConfig.brandName);
  }, [fullTitle, meta.description]);

  return null;
}
