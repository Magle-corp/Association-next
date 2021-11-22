// Use.
import { Article } from '../type';

/**
 * Returns an array of items stacked in arrays of five items.
 *
 * @param articles
 *    Array.
 * @constructor
 */
function ItemStacker(articles: Article[]) {
  const articlesChunks = [];
  for (let i = 0; i < articles.length; i += 5) {
    articlesChunks.push(articles.slice(i, i + 5));
  }
  return articlesChunks;
}

export { ItemStacker };
