import { Taxonomy } from './Taxonomy';

// Type for article content type.
interface Article {
  id: number;
  title: string;
  description: string;
  created_at: string;
  slug: string;
  taxonomies: Taxonomy[];
  background: Background;
}

interface Background {
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

export type { Article };
