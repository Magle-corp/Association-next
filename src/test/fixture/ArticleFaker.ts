// Use.
const Faker = require('faker');
import { randomInt, randomText } from '../util';
import { Article, Taxonomy } from '../../type';
import { ImageFaker, TaxonomyFaker } from './index';

/**
 * Returns a fake Article.
 */
const ArticleFaker = () => {
  const fakeTaxonomies: Array<Taxonomy> = [];

  // Generate an array of Taxonomy.
  const randomIndex = randomInt(3);
  for (let i = 0; i < (randomIndex > 0 ? randomIndex : 1); i++) {
    fakeTaxonomies.push(TaxonomyFaker());
  }

  const fakeArticle: Article = {
    id: randomInt(300),
    title: randomText(70),
    description: randomText(200),
    created_at: Faker.date.past(),
    slug: randomText(70),
    background: ImageFaker(),
    taxonomies: fakeTaxonomies,
  };

  return fakeArticle;
};

export { ArticleFaker };
