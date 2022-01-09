// Use.
import { BreadcrumbBuilder } from '../util/BreadcrumbBuilder';

describe('Test util BreadcrumbBuilder', () => {
  test('Empty route', () => {
    expect(BreadcrumbBuilder('', false)).toStrictEqual([]);
  });

  test('Route with query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/[slug]', true);
    expect(breadcrumb.length).toStrictEqual(1);
  });

  test('Route without query', () => {
    const breadcrumb = BreadcrumbBuilder('/test/test/test', false);
    expect(breadcrumb.length).toStrictEqual(2);
  });

  test('Route construction', () => {
    const breadcrumb = BreadcrumbBuilder('/test/jhon/doe', false);
    expect(breadcrumb[0]).toStrictEqual({ route: 'test', url: '/test' });
    expect(breadcrumb[1]).toStrictEqual({ route: 'jhon', url: '/test/jhon' });
  });
});
