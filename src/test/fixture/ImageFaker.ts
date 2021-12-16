// Use.
import { randomInt, randomText } from '../util';
import { Image } from '../../type';

/**
 * Returns a fake Image.
 */
const ImageFaker = () => {
  const fakeFormat = {
    name: randomText(100),
    url: randomText(100),
  };

  const fakeBackgroundFormats = {
    thumbnail: fakeFormat,
    small: fakeFormat,
    medium: fakeFormat,
    large: fakeFormat,
  };

  const fakeImage: Image = {
    id: randomInt(300),
    name: randomText(100),
    url: randomText(100),
    alternativeText: randomText(100),
    caption: randomText(100),
    formats: fakeBackgroundFormats,
  };

  return fakeImage;
};

export { ImageFaker };
