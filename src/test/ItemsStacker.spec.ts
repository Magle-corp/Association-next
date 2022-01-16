// Use.
import { Article, Event } from '../type';
import { ItemsStacker } from '../util/ItemsStacker';
import { ArticleFaker, EventFaker } from './fixture';

/**
 * Test for util ItemsStacker.
 */
describe('Test util ItemsStacker', () => {
  test('Empty array ', () => {
    expect(ItemsStacker([])).toStrictEqual([]);
  });

  test('Stack with 7 Article', () => {
    const articlesArray: Array<Article> = [];

    // Generate an array of Article.
    for (let i = 0; i < 7; i++) {
      articlesArray.push(ArticleFaker());
    }

    const stackResult = ItemsStacker(articlesArray);

    expect(stackResult.length).toStrictEqual(2);
  });

  test('Stack with 13 Article', () => {
    const articlesArray: Array<Article> = [];

    // Generate an array of Article.
    for (let i = 0; i < 13; i++) {
      articlesArray.push(ArticleFaker());
    }

    const stackResult = ItemsStacker(articlesArray);

    expect(stackResult.length).toStrictEqual(3);
  });

  test('Stack with 1 Event', () => {
    const eventsArray: Array<Event> = [];

    // Generate an array of Event.
    for (let i = 0; i < 1; i++) {
      eventsArray.push(EventFaker());
    }

    const stackResult = ItemsStacker(eventsArray);

    expect(stackResult.length).toStrictEqual(1);
  });

  test('Stack with 20 Event', () => {
    const eventsArray: Array<Event> = [];

    // Generate an array of Event.
    for (let i = 0; i < 20; i++) {
      eventsArray.push(EventFaker());
    }

    const stackResult = ItemsStacker(eventsArray);

    expect(stackResult.length).toStrictEqual(4);
  });
});
