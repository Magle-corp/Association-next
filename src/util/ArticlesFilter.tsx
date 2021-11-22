// Use.
import { Article } from '../type';
import { ItemStacker } from './ItemStacker';

/**
 * Returns an array of articles containing at least one reference from the filters array.
 *
 * @param articles
 *    Array of the article content type.
 * @param filters
 *    Array of taxonomy therms.
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
