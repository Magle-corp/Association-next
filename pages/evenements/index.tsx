// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Event, Taxonomy } from '../../src/type';
import {
  Header,
  EventsList,
  Pagination,
  EventsFilters,
} from '../../src/component';
import { Layout } from '../../src/ui';

interface Props {
  events: Event[];
  taxonomies: Taxonomy[];
}

const StyledLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
  }
`;

const StyledMain = styled(Main)`
  grid-column: 1/2;
  grid-row: 2/3;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-left: 35px;
  }
`;

const StyledAside = styled(Aside)`
  grid-column: 1/2;
  grid-row: 1/2;
  margin-bottom: 50px;
`;

const ListTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const FiltersTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const Articles = ({ events, taxonomies }: Props) => {
  const [stackedEvents, setStackedEvents] = useState<Array<Event[]>>([]);
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);

  useEffect(() => {
    setLastPage(stackedEvents.length - 1);
  }, [stackedEvents]);

  return (
    <>
      <Header />
      <StyledLayout>
        <StyledMain gridColumn="2/3">
          <ListTitle>Evenements</ListTitle>
          {stackedEvents.length > 0 && (
            <EventsList events={stackedEvents[page]} spacing={60} />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </StyledMain>
        <StyledAside gridColumn="1/2">
          <FiltersTitle>Filtres</FiltersTitle>
          <EventsFilters
            taxonomies={taxonomies}
            events={events}
            setStackedEvents={setStackedEvents}
            setPage={setPage}
          />
        </StyledAside>
      </StyledLayout>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  const eventsQuery = `/evenements?${qs.stringify({
    _sort: 'date:DESC',
  })}`;
  const eventsResult = await fetch(`${process.env.BASE_URL}${eventsQuery}`);
  const events = await eventsResult.json();

  const taxonomiesQuery = `/taxonomies?${qs.stringify({
    _sort: 'title:ASC',
    _where: [{ evenements_ne: null }],
  })}`;
  const taxonomiesResult = await fetch(
    `${process.env.BASE_URL}${taxonomiesQuery}`
  );
  const taxonomies = await taxonomiesResult.json();

  return {
    props: { events, taxonomies },
    revalidate: 60 * 60,
  };
}
