// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
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
import { Layout, Main, Aside, Wrapper, Text } from '../../src/ui';
import { Arrow } from '../../src/theme/icon';

interface Props {
  contentItems: Article[] | Event[];
  contentType: string;
  taxonomies: Taxonomy[];
  identity: Identity;
}

const FiltersContainer = styled(Wrapper)`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    flex-direction: column;
  }
`;

const ArrowIcon = styled(Arrow)<{ filtersViewState: boolean }>`
  transition: 200ms ease-in-out;
  ${({ filtersViewState }) =>
    filtersViewState ? `transform: rotate(0deg)` : `transform: rotate(180deg)`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    display: none;
  }
`;

/**
 * Provide page "Articles" ou "Evenements".
 *
 * @param contentItems
 *   Array of Strapi custom content type "Article" or "Event".
 * @param contentType
 *   The content type used, string.
 * @param taxonomies
 *   Array of Strapi custom content type "Taxonomy".
 * @param identity
 *   Strapi custom content type "Identite".
 */
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
    setPage(0);
    setStackedItems(ItemsStacker(contentItems) as Array<Article[] | Event[]>);
  }, [contentItems]);

  useEffect(() => {
    setLastPage(stackedItems.length - 1);
  }, [stackedItems]);

  return (
    <>
      <Header identity={identity} />
      <Layout variant="duo_breadcrumb">
        <Breadcrumb variant="duo_breadcrumb" />
        <Main variant="duo_breadcrumb" spacing="50px 0 0 0">
          <Text as="h2" variant="h2">
            {contentType == 'article' ? 'Articles' : 'Evenements'}
          </Text>
          {stackedItems.length > 0 ? (
            <ItemsList
              items={stackedItems[page]}
              variant={`${
                'date' in stackedItems[page][0] ? 'event' : 'article'
              }_teaser`}
              spacing="60px 0 0 0"
            />
          ) : (
            <EmptyResult />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </Main>
        <Aside variant="duo_breadcrumb" spacing="50px 0 0 0">
          <FiltersContainer
            variant="horizontal"
            spacing="0 0 0 20px"
            onClick={() => {
              setFiltersViewState(!filtersViewState);
            }}
          >
            <Text as="h2" variant="h2">
              Filtres
            </Text>
            <ArrowIcon filtersViewState={filtersViewState} />
          </FiltersContainer>
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
        </Aside>
      </Layout>
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
