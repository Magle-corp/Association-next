// Use.
import { Cartes, TexteImage, Wysiwyg } from '../type';

// Type for a propos content type.
interface Propos {
  dynamic_zone: [Cartes | TexteImage | Wysiwyg];
}

export type { Propos };
