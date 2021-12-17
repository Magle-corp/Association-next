// Use.
import { Image } from './index';

// Type for page d'accueil content type.

interface Homepage {
  id: string;
  title: string;
  content: string;
  slider: Slider;
}

interface Slider {
  id: string;
  slides: Slide[];
}

interface Slide {
  id: string;
  image: Image;
  title: string;
}

export type { Homepage, Slider, Slide };
