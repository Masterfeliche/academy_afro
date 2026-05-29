/** Home preview cards — copy in `home.programCards` */
export const homeProgramPreviewIds = ["pathway", "welfare"] as const;

export type HomeProgramPreviewId = (typeof homeProgramPreviewIds)[number];
