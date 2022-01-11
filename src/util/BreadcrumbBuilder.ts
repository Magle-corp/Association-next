// Use.
import { ParsedUrlQuery } from 'querystring';

interface Route {
  route: string;
  url: string;
}

/**
 * Return an array of custom Route object for build a breadcrumb
 * depending on the current routes.
 *
 * @param rawRoute
 *   The route strings.
 * @param rawQuery
 *   The ParsedUrlQuery object.
 */
const BreadcrumbBuilder = (rawRoute: string, rawQuery: ParsedUrlQuery) => {
  const routes = rawRoute.split('/');
  routes.shift();
  const builtRoutes: Array<Route> = [];

  if (rawQuery && rawQuery.slug) {
    routes.pop();
    routes.push(rawQuery.slug as string);
  }

  routes.forEach((route) => {
    const requiredRoutes = routes.slice(0, routes.indexOf(route) + 1);
    let builtRoute = '';

    requiredRoutes.forEach((requiredRoute) => {
      builtRoute = builtRoute + `/${requiredRoute}`;
    });

    builtRoutes.push({ route: route, url: builtRoute });
  });

  return builtRoutes;
};

export { BreadcrumbBuilder };
