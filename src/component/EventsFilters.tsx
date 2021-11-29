// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@magle-corp/design-system';
import { Event, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter, ItemsDateFilter } from '../util';
import { FiltersTaxo, FiltersArchive } from './index';

interface Props {
  taxonomies: Taxonomy[];
  events: Event[];
  setStackedEvents: Function;
  setPage: Function;
  filtersViewState: boolean;
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
 * Provide component "EventsFilters".
 *
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param events
 *   Array of Strapi custom content type "Events".
 * @param setStackedEvents
 *   Function for set "stackedArticles" state.
 * @param setPage
 *   Function for set "page" state.
 * @param filtersViewState
 *   State "viewState".
 */
const EventsFilters = ({
  taxonomies,
  events,
  setStackedEvents,
  setPage,
  filtersViewState,
}: Props) => {
  const [taxoFilters, setTaxoFilters] = useState<Array<string | Array<string>>>(
    []
  );
  const [dateFilters, setDateFilters] = useState<Array<string | number>>([]);
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  // Set stackedArticles according to the router request.
  useEffect(() => {
    if (routerQuery) {
      setTaxoFilters([...taxoFilters, routerQuery]);
      const filteredItems = ItemsTaxoFilter(events, taxoFilters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, routerQuery]);

  // Set stackedArticles according to the filters.
  useEffect(() => {
    if (taxoFilters.length > 0 && dateFilters.length <= 0) {
      setPage(0);
      const filteredItems = ItemsTaxoFilter(events, taxoFilters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else if (taxoFilters.length <= 0 && dateFilters.length > 0) {
      setPage(0);
      const filteredItems = ItemsDateFilter(events, dateFilters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else if (taxoFilters.length > 0 && dateFilters.length > 0) {
      setPage(0);
      const filteredItemsByDate = ItemsDateFilter(events, dateFilters);
      const filteredItemsByTaxo = ItemsTaxoFilter(
        filteredItemsByDate,
        taxoFilters
      );
      setStackedEvents(ItemsStacker(filteredItemsByTaxo) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, taxoFilters, dateFilters]);

  return (
    <Container viewState={filtersViewState}>
      <FiltersTaxo
        taxonomies={taxonomies}
        filters={taxoFilters}
        setFilters={setTaxoFilters}
      />
      <FiltersArchive
        events={events}
        filters={dateFilters}
        setFilters={setDateFilters}
      />
    </Container>
  );
};

export { EventsFilters };
