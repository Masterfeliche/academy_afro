/** Home preview cards — copy in `home.programCards` */
export const homeProgramPreviewIds = [
  "pathway",
  "structure",
  "global",
  "welfare",
] as const;

export type HomeProgramPreviewId = (typeof homeProgramPreviewIds)[number];
