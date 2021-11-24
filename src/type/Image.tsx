// Type for Strapi image.
interface Image {
  id: number;
  name: string;
  url: string;
  alternativeText: string;
  caption: string;
  formats: BackgroundFormat;
}

interface BackgroundFormat {
  thumbnail: Format;
  small: Format;
  medium: Format;
  large: Format;
}

interface Format {
  name: string;
  url: string;
}

export type { Image };
