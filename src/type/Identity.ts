// Use.
import { Image } from './index';

// Type for identity content type.
interface Identity {
  name: string;
  address?: string;
  zip_code?: string;
  city?: string;
  phone?: string;
  email: string;
  logo: Image;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export type { Identity };
