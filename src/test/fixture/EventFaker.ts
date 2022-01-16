// Use.
const Faker = require('faker');
import { randomInt, randomText } from '../util';
import { Event, Taxonomy } from '../../type';
import { TaxonomyFaker } from './index';

/**
 * Returns a fake Event.
 */
const EventFaker = () => {
  const fakeTaxonomies: Array<Taxonomy> = [];

  // Generate an array of Taxonomy.
  const randomIndex = randomInt(3);
  for (let i = 0; i < (randomIndex > 0 ? randomIndex : 1); i++) {
    fakeTaxonomies.push(TaxonomyFaker());
  }

  const fakeEvent: Event = {
    id: randomInt(300),
    title: randomText(70),
    created_at: Faker.date.past(),
    content: randomText(300),
    date: Faker.date.past(),
    slug: randomText(70),
    taxonomies: fakeTaxonomies,
  };

  return fakeEvent;
};

export { EventFaker };
