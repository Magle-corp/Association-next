// Use.
import { useEffect } from 'react';
import { Article, Event, Taxonomy } from '../../type';
import { ItemsStacker, ItemsTaxoFilter } from '../../util';
import { FilterTaxo } from '../index';
import styled from 'styled-components';

interface Props {
  taxonomies: Taxonomy[];
  items: Article[] | Event[];
  setStackedItems: Function;
  setPage: Function;
  filters: Array<string | Array<string>>;
  setFilters: Function;
  filtersViewState: boolean;
}

const Container = styled.div<{ viewState: boolean }>`
  display: ${({ viewState }) => (viewState ? 'block' : 'none')};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    display: block;
  }
`;

/**
 * Provide component "ItemsFilter".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param items
 *   Array of Strapi custom content type "Article" or "Event".
 * @param setStackedItems
 *   Function for set "stackedArticles" state, array.
 * @param setPage
 *   Function for set "page" state, number.
 * @param filters
 *   State "filters", array.
 * @param setFilters
 *   Function for set "filters" state, array.
 * @param filtersViewState
 *   State "viewState", boolean.
 */
const ItemsFilters = ({
  taxonomies,
  items,
  setStackedItems,
  setPage,
  setFilters,
  filters,
  filtersViewState,
}: Props) => {
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
  }, [filters, items, setPage, setStackedItems]);

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
