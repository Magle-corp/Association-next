// Use.
import { getYear, isWithinInterval } from 'date-fns';

const ItemsDateFilter = (
  items: Array<any>,
  filters: Array<string | number | Array<string | number>>
) => {
  const currentYear = getYear(new Date());
  const filteredItems: Array<any> = [];

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
