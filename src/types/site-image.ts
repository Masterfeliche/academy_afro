/** Local image served from `public/images/{path}`. */
export type ImageRef = {
  /** Relative to `public/images/` — e.g. `"hero/hero-main.jpeg"` */
  path: string;
  alt: string;
};

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
