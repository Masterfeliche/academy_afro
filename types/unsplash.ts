export type UnsplashUser = {
  id: string;
  username: string;
  name: string;
  links: {
    html: string;
    self: string;
    photos: string;
  };
};

export type UnsplashPhoto = {
  id: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
  user: UnsplashUser;
};

export type UnsplashSearchResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
};

export type AcademyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  photographerName: string;
  photographerUsername: string;
  photoPageUrl: string;
  downloadLocation?: string;
  isFallback: boolean;
  /** Official academy photography (no Unsplash attribution). */
  isLocal?: boolean;
};
