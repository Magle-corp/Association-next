// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Event, Taxonomy, Identity } from '../../../src/type';
import {
  Header,
  Breadcrumb,
  EmptyResult,
  ItemsFilters,
  ItemsList,
  Pagination,
  Footer,
} from '../../../src/component';
import { Layout } from '../../../src/ui';
import { ArrowDown } from '../../../src/theme/icon';

interface Props {
  events: Event[];
  taxonomies: Taxonomy[];
  identity: Identity;
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: 250px 1fr;
    grid-template-rows: max-content 1fr;
  }
`;

const StyledMain = styled(Main)`
  grid-column: 1/2;
  grid-row: 3/4;
  margin-top: 50px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-left: 35px;
    margin-top: 0;
  }
`;

const StyledAside = styled(Aside)`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  grid-column: 1/3;
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 70px;
`;

const FiltersTitle = styled(Title)`
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    margin-bottom: 70px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-left: 25px;
  }
`;

const ArrowIcon = styled(ArrowDown)<{ filtersViewState: boolean }>`
  display: block;
  transition: 200ms ease-in-out;
  ${({ filtersViewState }) =>
    filtersViewState ? `transform: rotate(0deg)` : `transform: rotate(180deg)`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    display: none;
  }
`;

const Articles = ({ events, taxonomies, identity }: Props) => {
  const [stackedEvents, setStackedEvents] = useState<Array<Event[]>>([]);
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filtersViewState, setFiltersViewState] = useState<boolean>(false);

  useEffect(() => {
    setLastPage(stackedEvents.length - 1);
  }, [stackedEvents]);

  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <StyledBreadcrumb />
        <StyledMain gridColumn="2/3">
          <Title>Evenements</Title>
          {stackedEvents.length > 0 ? (
            <ItemsList
              items={stackedEvents[page]}
              variant="event_teaser"
              spacing={60}
            />
          ) : (
            <EmptyResult />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </StyledMain>
        <StyledAside gridColumn="1/2">
          <Wrapper
            onClick={() => {
              setFiltersViewState(!filtersViewState);
            }}
          >
            <FiltersTitle>Filtres</FiltersTitle>
            <ArrowIcon filtersViewState={filtersViewState} />
          </Wrapper>
          <ItemsFilters
            taxonomies={taxonomies}
            items={events}
            setStackedItems={setStackedEvents}
            setPage={setPage}
            filtersViewState={filtersViewState}
            setFiltersViewState={setFiltersViewState}
          />
        </StyledAside>
      </StyledLayout>
      <Footer identity={identity} />
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

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { events, taxonomies, identity },
    revalidate: 60 * 60,
  };
}
