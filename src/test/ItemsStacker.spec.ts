// Use.
import { Article, Event } from '../type';
import { ItemsStacker } from '../util/ItemsStacker';

describe('Test util ItemsStacker', () => {
  const articlesArray: Array<Article> = [];
  const eventsArray: Array<Event> = [];

  test('Empty array parameter', () => {
    expect(ItemsStacker([])).toStrictEqual([]);
  });

  test('Articles array parameter', () => {
    expect(ItemsStacker(articlesArray)).toStrictEqual([]);
  });

  test('Events array parameter', () => {
    expect(ItemsStacker(eventsArray)).toStrictEqual([]);
  });

  test('Events array parameter', () => {
    expect(ItemsStacker(eventsArray)).toStrictEqual([]);
  });
});
