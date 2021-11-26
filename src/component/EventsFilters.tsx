// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Event, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter } from '../util';
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
  const [filters, setFilters] = useState<Array<string | Array<string>>>([]);
  const router = useRouter();
  const routerQuery = router.query.taxonomy;

  useEffect(() => {
    if (routerQuery) {
      setFilters([...filters, routerQuery]);
      const filteredItems = ItemsTaxoFilter(events, filters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, routerQuery]);

  useEffect(() => {
    if (filters.length > 0) {
      setPage(0);
      const filteredItems = ItemsTaxoFilter(events, filters);
      setStackedEvents(ItemsStacker(filteredItems) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [filters, events]);

  return (
    <Container>
      <FiltersTaxo
        taxonomies={taxonomies}
        filters={filters}
        setFilters={setFilters}
      />
      <FiltersArchive events={events} />
    </Container>
  );
};

export { EventsFilters };
