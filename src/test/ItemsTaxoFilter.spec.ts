// Use.
import { Article, Event } from '../type';
import { ItemsTaxoFilter } from '../util/ItemsTaxoFilter';
import {
  ArticleFaker,
  EventFaker,
  TaxonomyFaker,
  fakeTaxoTitle,
} from './fixture';

/**
 * Test for util ItemsTaxoFilter.
 */
describe('Test util ItemsTaxoFilter', function () {
  test('Empty parameter arrays', () => {
    expect(ItemsTaxoFilter([], [])).toStrictEqual([]);
  });

  test('3 Article with 0 filter', () => {
    const articlesArray: Array<Article> = [];

    // Generate an array of Article.
    for (let i = 0; i < 3; i++) {
      articlesArray.push(ArticleFaker());
    }

    const filteredArticles = ItemsTaxoFilter(articlesArray, fakeTaxoTitle);

    expect(filteredArticles.length).toStrictEqual(3);
  });

  test('6 Article with unselected taxonomies filters', () => {
    const articlesArray: Array<Article> = [];
    const unsetFilters = ['test0', 'test1', 'test2'];

    // Generate an array of Article.
    for (let i = 0; i < 6; i++) {
      articlesArray.push(ArticleFaker());
    }

    const filteredArticles = ItemsTaxoFilter(articlesArray, unsetFilters);

    expect(filteredArticles.length).toStrictEqual(0);
  });

  test('2 Article with selected taxonomies filters and 1 without', () => {
    const articlesArray: Array<Article> = [];

    // Generate an array of Article.
    for (let i = 0; i < 2; i++) {
      articlesArray.push(ArticleFaker());
    }

    // Generate an array of articles and sabotage its taxonomy.
    const unselectedArticle = ArticleFaker();
    unselectedArticle.taxonomies = [TaxonomyFaker('test')];
    articlesArray.push(unselectedArticle);

    const filteredArticles = ItemsTaxoFilter(articlesArray, fakeTaxoTitle);

    expect(filteredArticles.length).toStrictEqual(2);
  });

  test('3 Event with 0 filter', () => {
    const eventsArray: Array<Event> = [];

    // Generate an array of Event.
    for (let i = 0; i < 3; i++) {
      eventsArray.push(EventFaker());
    }

    const filteredEvents = ItemsTaxoFilter(eventsArray, fakeTaxoTitle);

    expect(filteredEvents.length).toStrictEqual(3);
  });

  test('6 Event with unselected taxonomies filters', () => {
    const eventsArray: Array<Event> = [];
    const unsetFilters = ['test0', 'test1', 'test2'];

    // Generate an array of Event.
    for (let i = 0; i < 6; i++) {
      eventsArray.push(EventFaker());
    }

    const filteredEvents = ItemsTaxoFilter(eventsArray, unsetFilters);

    expect(filteredEvents.length).toStrictEqual(0);
  });

  test('2 Event with selected taxonomies filters and 1 without', () => {
    const eventsArray: Array<Event> = [];

    // Generate an array of Event.
    for (let i = 0; i < 2; i++) {
      eventsArray.push(EventFaker());
    }

    // Generate an array of articles and sabotage its taxonomy.
    const unselectedEvent = EventFaker();
    unselectedEvent.taxonomies = [TaxonomyFaker('test')];
    eventsArray.push(unselectedEvent);

    const filteredEvents = ItemsTaxoFilter(eventsArray, fakeTaxoTitle);

    expect(filteredEvents.length).toStrictEqual(2);
  });
});
