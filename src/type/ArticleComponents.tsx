// Use.
import { Image } from './index';

// Type for article components.

interface Cartes {
  __component: string;
  id: number;
  title?: string;
  cartes: Carte[];
}

interface Carte {
  __component: string;
  id: number;
  title?: string;
  content: string;
}

interface TexteImage {
  __component: string;
  id: number;
  title?: string;
  content: string;
  image_side: string;
  image: Image;
}

interface Wysiwyg {
  __component: string;
  id: number;
  title?: string;
  content: string;
}

export type { Cartes, TexteImage, Wysiwyg };
