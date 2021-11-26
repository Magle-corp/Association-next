// Use.
import { Article, Event } from '../type';
type FilteredItem = Article | Event;

/**
 * Returns an array of items stacked in arrays of five items.
 *
 * @param items
 *   Array of Strapi custom content type "Article" or "Event".
 */
function ItemsStacker(items: FilteredItem[]) {
  const itemsChunks = [];
  for (let i = 0; i < items.length; i += 5) {
    itemsChunks.push(items.slice(i, i + 5));
  }
  return itemsChunks;
}

export { ItemsStacker };
