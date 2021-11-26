// Use.
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Event, Taxonomy } from '../type';
import { ItemsStacker, ItemsTaxoFilter } from '../util';
import { FiltersTaxo } from './filter/FiltersTaxo';

interface Props {
  taxonomies: Taxonomy[];
  events: Event[];
  setStackedEvents: Function;
  setPage: Function;
}

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
      setStackedEvents(ItemsTaxoFilter(events, filters) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [events, routerQuery]);

  useEffect(() => {
    if (filters.length > 0) {
      setPage(0);
      setStackedEvents(ItemsTaxoFilter(events, filters) as Array<Event[]>);
    } else {
      setStackedEvents(ItemsStacker(events) as Array<Event[]>);
    }
  }, [filters, events]);

  return (
    <FiltersTaxo
      taxonomies={taxonomies}
      filters={filters}
      setFilters={setFilters}
    />
  );
};

export { EventsFilters };
