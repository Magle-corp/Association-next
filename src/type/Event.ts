// Use.
import { Taxonomy } from './index';

// Type for event content type.
interface Event {
  id: number;
  title: string;
  created_at: string;
  content: string;
  date: string;
  slug: string;
  taxonomies?: Taxonomy[];
}

export type { Event };
