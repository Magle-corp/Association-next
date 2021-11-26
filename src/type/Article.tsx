// Use.
import { Taxonomy } from './index';
import { Image } from './index';
import { Cartes, TexteImage, Wysiwyg } from '../type';

// Type for article content type.
interface Article {
  id: number;
  title: string;
  description: string;
  created_at: string;
  slug: string;
  taxonomies: Taxonomy[];
  background: Image;
  dynamic_zone: [Cartes | TexteImage | Wysiwyg];
}

export type { Article };
