// Use.
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Article, Event, Taxonomy } from '../../type';
import { ItemsStacker, ItemsTaxoFilter } from '../../util';
import { FilterTaxo } from '../index';
import styled from 'styled-components';
import { Wrapper } from '@magle-corp/design-system';

interface Props {
  taxonomies: Taxonomy[];
  items: Article[] | Event[];
  setStackedItems: Function;
  setPage: Function;
  filters: Array<string | Array<string>>;
  setFilters: Function;
  filtersViewState: boolean;
  setFiltersViewState: Function;
}

const Container = styled(Wrapper)<{ viewState: boolean }>`
  display: ${({ viewState }) => (viewState ? 'block' : 'none')};

  > *:not(:first-child) {
    margin-top: 15px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    display: block;
  }
`;

/**
 * Provide component "Filters".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param items
 *   Array of Strapi custom content type "Article" or "Event".
 * @param setStackedItems
 *   Function for set "stackedArticles" state.
 * @param setPage
 *   Function for set "page" state.
 * @param filters
 *   State "filters".
 * @param setFilters
 *   Function for set "filters" state.
 * @param setFiltersViewState
 *   Function for set "viewState" state.
 * @param filtersViewState
 *   State "viewState".
 */
const ItemsFilters = ({
  taxonomies,
  items,
  setStackedItems,
  setPage,
  setFilters,
  filters,
  setFiltersViewState,
  filtersViewState,
}: Props) => {
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  // Set stackedArticles according to the router request.
  useEffect(() => {
    if (routerQuery) {
      setFiltersViewState(true);
      setFilters([...filters, routerQuery]);
      const filteredItems = ItemsTaxoFilter(items, filters);
      setStackedItems(
        ItemsStacker(filteredItems) as Array<Article[] | Event[]>
      );
    } else {
      setStackedItems(ItemsStacker(items) as Array<Article[] | Event[]>);
    }
  }, [items, routerQuery]);

  // Set stackedArticles according to the filters.
  useEffect(() => {
    if (filters.length > 0) {
      setPage(0);
      const filteredItems = ItemsTaxoFilter(items, filters);
      setStackedItems(
        ItemsStacker(filteredItems) as Array<Article[] | Event[]>
      );
    } else {
      setStackedItems(ItemsStacker(items) as Array<Article[] | Event[]>);
    }
  }, [filters, items]);

  return (
    <Container viewState={filtersViewState}>
      <FilterTaxo
        taxonomies={taxonomies}
        filters={filters}
        setFilters={setFilters}
      />
    </Container>
  );
};

export { ItemsFilters };
