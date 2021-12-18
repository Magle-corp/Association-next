// Use.
import { Image, Slug } from './index';

// Type for page d'accueil content type.

interface Homepage {
  id: string;
  title: string;
  content: string;
  slider: Slider;
  main_link: {
    id: number;
    link_title: string;
    link_seo: string;
    link: Slug;
  };
}

interface Slider {
  id: string;
  slides: Slide[];
}

interface Slide {
  id: string;
  image: Image;
  title: string;
  link_title: string;
  link_seo: string;
  link: Slug;
}

export type { Homepage, Slider, Slide };
