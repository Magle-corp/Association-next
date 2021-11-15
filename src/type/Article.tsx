import { Taxonomy } from './Taxonomy';

// Type for article content type.
export interface Article {
  id: string;
  title: string;
  description: string;
  created_at: string;
  taxonomies: Taxonomy[];
}
