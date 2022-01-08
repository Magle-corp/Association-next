// Use.
import { Slug } from './index';

// Type for a Strapi Button.
interface Button {
  title: string;
  link_seo: string;
  slug?: Slug;
}

export type { Button };
