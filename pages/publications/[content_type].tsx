// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article, Event, Taxonomy, Identity } from '../../src/type';
import { ItemsStacker } from '../../src/util';
import {
  Header,
  Breadcrumb,
  EmptyResult,
  ItemsFilters,
  ItemsList,
  Pagination,
  Footer,
} from '../../src/component';
import { Layout } from '../../src/ui';
import { ArrowDown } from '../../src/theme/icon';

interface Props {
  contentItems: Article[] | Event[];
  contentType: string;
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

const ContentTypeListPage = ({
  contentItems,
  contentType,
  taxonomies,
  identity,
}: Props) => {
  const [stackedItems, setStackedItems] = useState<Array<Article[] | Event[]>>(
    []
  );
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filters, setFilters] = useState<Array<string | Array<string>>>([]);
  const [filtersViewState, setFiltersViewState] = useState<boolean>(false);

  useEffect(() => {
    setFilters([]);
    setStackedItems(ItemsStacker(contentItems) as Array<Article[] | Event[]>);
  }, [contentItems]);

  useEffect(() => {
    setLastPage(stackedItems.length - 1);
  }, [stackedItems]);

  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <StyledBreadcrumb />
        <StyledMain>
          <Title>{contentType == 'article' ? 'Articles' : 'Evenements'}</Title>
          {stackedItems.length > 0 ? (
            <ItemsList
              items={stackedItems[page]}
              variant={`${
                'date' in stackedItems[page][0] ? 'event' : 'article'
              }_teaser`}
              spacing={60}
            />
          ) : (
            <EmptyResult />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </StyledMain>
        <StyledAside>
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
            items={contentItems}
            setStackedItems={setStackedItems}
            setPage={setPage}
            filters={filters}
            setFilters={setFilters}
            filtersViewState={filtersViewState}
            setFiltersViewState={setFiltersViewState}
          />
        </StyledAside>
      </StyledLayout>
      <Footer identity={identity} />
    </>
  );
};

export default ContentTypeListPage;

type Params = {
  params: {
    content_type: string;
  };
};

export async function getStaticProps(context: Params) {
  let contentItems: object = {};
  let contentType: string = '';
  let taxonomies: Array<Taxonomy> = [];

  if (context.params.content_type == 'articles') {
    const articlesQuery = `/articles?${qs.stringify({
      _sort: 'created_at:DESC',
    })}`;
    const articlesResult = await fetch(
      `${process.env.BASE_URL}${articlesQuery}`
    );
    contentItems = await articlesResult.json();
    contentType = 'article';

    const taxonomiesQuery = `/taxonomies?${qs.stringify({
      _sort: 'title:ASC',
      _where: [{ articles_ne: null }],
    })}`;
    const taxonomiesResult = await fetch(
      `${process.env.BASE_URL}${taxonomiesQuery}`
    );
    taxonomies = await taxonomiesResult.json();
  }

  if (context.params.content_type == 'evenements') {
    const eventsQuery = `/evenements?${qs.stringify({
      _sort: 'date:DESC',
    })}`;
    const eventsResult = await fetch(`${process.env.BASE_URL}${eventsQuery}`);
    contentItems = await eventsResult.json();
    contentType = 'event';

    const taxonomiesQuery = `/taxonomies?${qs.stringify({
      _sort: 'title:ASC',
      _where: [{ evenements_ne: null }],
    })}`;
    const taxonomiesResult = await fetch(
      `${process.env.BASE_URL}${taxonomiesQuery}`
    );
    taxonomies = await taxonomiesResult.json();
  }

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { contentItems, contentType, taxonomies, identity },
    revalidate: 60 * 60,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { content_type: 'articles' } },
      { params: { content_type: 'evenements' } },
    ],
    fallback: false,
  };
}
