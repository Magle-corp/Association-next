// Use.
import { BreadcrumbBuilder } from '../util/BreadcrumbBuilder';

describe('Test util BreadcrumbBuilder', () => {
  test('Empty route', () => {
    expect(BreadcrumbBuilder('', {})).toStrictEqual([]);
  });

  test('Route with query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/[slug]', { slug: 'slug_test' });
    expect(breadcrumb.length).toStrictEqual(2);
  });

  test('Route without query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/test/test', {});
    expect(breadcrumb.length).toStrictEqual(3);
  });

  test('Route construction without query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/doe', {});
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
  });

  test('Route construction with query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/[slug]', {
      slug: 'slug_test',
    });
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
  });
});
