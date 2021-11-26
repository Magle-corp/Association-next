// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Event, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter, ItemsDateFilter } from '../util';
import { FiltersTaxo, FiltersArchive } from './filter';

interface Props {
  taxonomies: Taxonomy[];
  events: Event[];
  setStackedEvents: Function;
  setPage: Function;
}

const Container = styled.div`
  > *:not(:first-child) {
    margin-top: 25px;
  }
`;

const EventsFilters = ({
  taxonomies,
  events,
  setStackedEvents,
  setPage,
}: Props) => {
  const [taxoFilters, setTaxoFilters] = useState<Array<string | Array<string>>>(
    []
  );
  const [dateFilters, setDateFilters] = useState<Array<string | Array<string>>>(
    []
  );
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  useEffect(() => {
    if (routerQuery) {
      setTaxoFilters([...taxoFilters, routerQuery]);
      const filteredItems = ItemsTaxoFilter(events, taxoFilters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, routerQuery]);

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
      console.log('both taxo and date');
      setPage(0);
      const filteredItemsByDate = ItemsDateFilter(events, dateFilters);
      console.log(filteredItemsByDate);
      const filteredItemsByTaxo = ItemsTaxoFilter(
        filteredItemsByDate,
        taxoFilters
      );
      setStackedEvents(ItemsStacker(filteredItemsByTaxo) as Array<Event[]>);
    } else {
      console.log('no filters');
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, taxoFilters, dateFilters]);

  return (
    <Container>
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
