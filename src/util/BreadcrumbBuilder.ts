interface Route {
  route: string;
  url: string;
}

/**
 * Return an array of custom Route object for build a breadcrumb
 * depending on the current routes.
 *
 * @param raw_routes
 *   The route strings.
 * @param query
 *   True if there is a query, otherwise false.
 */
const BreadcrumbBuilder = (raw_routes: string, query: boolean) => {
  const routes = raw_routes.replace(/\/\[slug]/gm, '').split('/');
  routes.shift();
  if (!query) routes.pop();
  const built_routes: Array<Route> = [];

  routes.forEach((route) => {
    const required_routes = routes.slice(0, routes.indexOf(route) + 1);
    let built_route = '';

    required_routes.forEach((required_route) => {
      built_route = built_route + `/${required_route}`;
    });

    built_routes.push({ route: route, url: built_route });
  });

  return built_routes;
};

export { BreadcrumbBuilder };
