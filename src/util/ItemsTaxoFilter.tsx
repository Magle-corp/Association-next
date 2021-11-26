// Use.
import { Taxonomy } from '../type';
import { ItemsStacker } from './ItemsStacker';

/**
 * Returns an array of items containing at least one reference from the filters array.
 *
 * @param items
 *    Array of the items content type.
 * @param filters
 *    Array of taxonomy therms.
 * @constructor
 */
const ItemsTaxoFilter = (
  items: Array<any>,
  filters: Array<string | Array<string>>
) => {
  const filteredItems: Array<any> = [];

  items.forEach((item) => {
    if (
      item.taxonomies.some(
        (taxonomy: Taxonomy) => filters.indexOf(taxonomy.title) !== -1
      )
    ) {
      filteredItems.push(item);
    }
  });
  return ItemsStacker(filteredItems);
};

export { ItemsTaxoFilter };
