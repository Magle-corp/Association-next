// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Article, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter } from '../util';
import { FiltersTaxo } from './index';

interface Props {
  taxonomies: Taxonomy[];
  articles: Article[];
  setStackedArticles: Function;
  setPage: Function;
}

/**
 * Provide component "ArticlesFilters".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param articles
 *   Array of Strapi custom content type "Article".
 * @param setStackedArticles
 *   Function for set "stackedArticles" state.
 * @param setPage
 *   Function for set "page" state.
 */
const ArticlesFilters = ({
  taxonomies,
  articles,
  setStackedArticles,
  setPage,
}: Props) => {
  const [filters, setFilters] = useState<Array<string | Array<string>>>([]);
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  // Set stackedArticles according to the router request.
  useEffect(() => {
    if (routerQuery) {
      setFilters([...filters, routerQuery]);
      const filteredItems = ItemsTaxoFilter(articles, filters);
      setStackedArticles(ItemsStacker(filteredItems) as Array<Article[]>);
    } else {
      setStackedArticles(ItemsStacker(articles) as Array<Article[]>);
    }
  }, [articles, routerQuery]);

  // Set stackedArticles according to the filters.
  useEffect(() => {
    if (filters.length > 0) {
      setPage(0);
      const filteredItems = ItemsTaxoFilter(articles, filters);
      setStackedArticles(ItemsStacker(filteredItems) as Array<Article[]>);
    } else {
      setStackedArticles(ItemsStacker(articles) as Array<Article[]>);
    }
  }, [filters, articles]);

  return (
    <FiltersTaxo
      taxonomies={taxonomies}
      filters={filters}
      setFilters={setFilters}
    />
  );
};

export { ArticlesFilters };
