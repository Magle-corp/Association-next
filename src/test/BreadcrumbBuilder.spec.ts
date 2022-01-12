// Use.
import { BreadcrumbBuilder } from '../util/BreadcrumbBuilder';

describe('Test util BreadcrumbBuilder', () => {
  test('Empty route', () => {
    expect(BreadcrumbBuilder('', {})).toStrictEqual([]);
  });

  test('Dynamic route', () => {
    const breadcrumb = BreadcrumbBuilder('/test/[slug]', { slug: 'slug_test' });
    expect(breadcrumb.length).toStrictEqual(2);
  });

  test('Static route', () => {
    const breadcrumb = BreadcrumbBuilder('/test/test/test', {});
    expect(breadcrumb.length).toStrictEqual(3);
  });

  test('Static route construction', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/doe', {});
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
    expect(breadcrumb[2]).toStrictEqual({
      route: 'doe',
      url: '/test/jhon/doe',
    });
  });

  test('Dynamic route construction [content_type]', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/[content_type]', {
      content_type: 'content_type_test',
    });
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
    expect(breadcrumb[2]).toStrictEqual({
      route: 'content_type_test',
      url: '/test/jhon/content_type_test',
    });
  });

  test('Dynamic route construction [slug]', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/[slug]', {
      slug: 'slug_test',
    });
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
    expect(breadcrumb[2]).toStrictEqual({
      route: 'slug_test',
      url: '/test/jhon/slug_test',
    });
  });
});
