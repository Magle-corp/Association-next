// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Article, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter } from '../util';
import { FiltersTaxo } from './filter/FiltersTaxo';

interface Props {
  taxonomies: Taxonomy[];
  articles: Article[];
  setStackedArticles: Function;
  setPage: Function;
}

const ArticlesFilters = ({
  taxonomies,
  articles,
  setStackedArticles,
  setPage,
}: Props) => {
  const [filters, setFilters] = useState<Array<string | Array<string>>>([]);
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  useEffect(() => {
    if (routerQuery) {
      setFilters([...filters, routerQuery]);
      setStackedArticles(
        ItemsTaxoFilter(articles, filters) as Array<Article[]>
      );
    } else {
      setStackedArticles(ItemsStacker(articles) as Array<Article[]>);
    }
  }, [articles, routerQuery]);

  useEffect(() => {
    if (filters.length > 0) {
      setPage(0);
      setStackedArticles(
        ItemsTaxoFilter(articles, filters) as Array<Article[]>
      );
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
