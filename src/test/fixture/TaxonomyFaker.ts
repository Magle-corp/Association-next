// Use.
const Faker = require('faker');
import { randomInt } from '../util';
import { Taxonomy } from '../../type';

// Array of random string used as taxonomy title.
const fakeTaxoTitle = [
  'Article',
  'Association',
  'Grenoble',
  'News',
  'Paris',
  'Sport',
];

/**
 Returns a fake Taxonomy.
 */
const TaxonomyFaker = (title?: string) => {
  const randomIndex = randomInt(fakeTaxoTitle.length);

  const fakeTitle = title
    ? title
    : fakeTaxoTitle[randomIndex > 0 ? randomIndex : 1];

  const fakeTaxonomy: Taxonomy = {
    id: randomInt(300),
    title: fakeTitle,
    created_at: Faker.date.past(),
  };

  return fakeTaxonomy;
};

export { TaxonomyFaker, fakeTaxoTitle };
