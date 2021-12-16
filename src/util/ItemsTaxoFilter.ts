// Use.
import { Taxonomy } from '../type';

/**
 * Return an array of elements containing at least
 * one reference defined in the array of filters
 *
 * @param items
 *    Array of the items content type.
 * @param filters
 *    Array of taxonomy therms.
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

  return filteredItems;
};

export { ItemsTaxoFilter };
