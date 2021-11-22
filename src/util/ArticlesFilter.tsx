// Use.
import { Article } from '../type';
import { ItemStacker } from './ItemStacker';

/**
 * Return Article
 *
 * @param articles
 * @param filters
 * @constructor
 */
const ArticlesFilter = (articles: Article[], filters: Array<string>) => {
  const filteredArticles: Article[] = [];
  articles.forEach((article) => {
    if (
      article.taxonomies.some(
        (taxonomy) => filters.indexOf(taxonomy.title) !== -1
      )
    ) {
      filteredArticles.push(article);
    }
  });
  return ItemStacker(filteredArticles);
};

export { ArticlesFilter };
