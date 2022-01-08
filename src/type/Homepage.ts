// Use.
import { Image, Button } from './index';

// Type for page d'accueil content type.

interface Homepage {
  id: string;
  title: string;
  content: string;
  slider: Slider;
  button: Button;
}

interface Slider {
  id: string;
  slides: Slide[];
}

interface Slide {
  id: string;
  image: Image;
  title: string;
  button: Button;
}

export type { Homepage, Slider, Slide };
