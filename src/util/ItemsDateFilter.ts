// Use.
import { getYear, isWithinInterval } from 'date-fns';
import { Event } from '../type';

/**
 * Return an array of elements with a date corresponding
 * to the interval defined by the array of filters.
 *
 * @param items
 *   Array of Strapi custom content type "Event".
 * @param filters
 *   Array of years (number) or/and month (string).
 */
const ItemsDateFilter = (
  items: Array<Event>,
  filters: Array<string | number>
) => {
  const currentYear = getYear(new Date());
  const filteredItems: Array<Event> = [];

  items.forEach((item) => {
    filters.forEach((filter) => {
      if (typeof filter == 'string') {
        if (
          isWithinInterval(new Date(item.date), {
            start: new Date(`${currentYear} ${filter} 01`),
            end: new Date(`${currentYear} ${filter} 31`),
          })
        ) {
          filteredItems.push(item);
        }
      }
      if (typeof filter == 'number') {
        if (
          isWithinInterval(new Date(item.date), {
            start: new Date(`${filter} 01 01`),
            end: new Date(`${filter} 12 31`),
          })
        ) {
          filteredItems.push(item);
        }
      }
    });
  });

  return filteredItems;
};

export { ItemsDateFilter };
