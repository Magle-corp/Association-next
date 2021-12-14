// Use.
import { Event } from '../type';
import { ItemsDateFilter } from '../util/ItemsDateFilter';

describe('Test util ItemsDateFilter', () => {
  const eventsArray: Array<Event> = [];
  const filtersArray: Array<string | number> = [];

  test('...', () => {
    expect(ItemsDateFilter(eventsArray, filtersArray)).toStrictEqual([]);
  });
});
