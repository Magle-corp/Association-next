// Use.
import { Image } from './index';

// Type for homepage content type.

interface Homepage {
  id: string;
  Banniere: Slider;
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

export type { Homepage, Slider };
