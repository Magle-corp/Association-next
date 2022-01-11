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
 * @param rawRoutes
 *   The route strings.
 * @param rawQuery
 *   The ParsedUrlQuery if there is a query, otherwise false.
 */
const BreadcrumbBuilder = (
  rawRoutes: string,
  rawQuery: ParsedUrlQuery | boolean
) => {
  const routes = rawRoutes.replace(/\/\[slug]/gm, '').split('/');
  routes.shift();

  if (rawQuery) {
    console.log(rawQuery);
    // const query = rawQuery.replace(/\/\[slug]/gm, '').split('/');
  }
  routes.shift();

  const builtRoutes: Array<Route> = [];

  routes.forEach((route, index) => {
    const requiredRoutes = routes.slice(0, routes.indexOf(route) + 1);
    let builtRoute = '';

    requiredRoutes.forEach((requiredRoute) => {
      builtRoute = builtRoute + `/${requiredRoute}`;
    });

    if (index === routes.length - 1) {
    }

    builtRoutes.push({ route: route, url: builtRoute });
  });

  return builtRoutes;
};

export { BreadcrumbBuilder };
