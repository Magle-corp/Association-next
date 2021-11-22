// Use.
import { Image } from './Image';

// Type for article components.

interface Cartes {
  __component: string;
  title?: string;
  cartes: Carte[];
}

interface Carte {
  __component: string;
  title?: string;
  content: string;
}

interface TexteImage {
  __component: string;
  title?: string;
  content: string;
  image_side: string;
  image: Image;
}

interface Wysiwyg {
  __component: string;
  title?: string;
  content: string;
}

export type { Cartes, TexteImage, Wysiwyg };
