// Use.
import { Image, Cartes, TexteImage, Wysiwyg } from '../type';

// Type for Propos content type.
interface Propos {
  background: Image;
  dynamic_zone: [Cartes | TexteImage | Wysiwyg];
}

export type { Propos };
