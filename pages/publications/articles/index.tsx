// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article, Taxonomy, Identity } from '../../../src/type';
import {
  Header,
  EmptyResult,
  ArticlesFilters,
  ArticlesList,
  Pagination,
  Footer,
} from '../../../src/component';
import { Layout } from '../../../src/ui';
import { ArrowDown } from '../../../src/theme/icon';

interface Props {
  articles: Article[];
  taxonomies: Taxonomy[];
  identity: Identity;
}

const StyledLayout = styled(Layout)`
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
  margin-top: 50px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-left: 35px;
    margin-top: 0;
  }
`;

const StyledAside = styled(Aside)`
  grid-column: 1/2;
  grid-row: 1/2;
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

const Articles = ({ articles, taxonomies, identity }: Props) => {
  const [stackedArticles, setStackedArticles] = useState<Array<Article[]>>([]);
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filtersViewState, setFiltersViewState] = useState<boolean>(false);

  useEffect(() => {
    setLastPage(stackedArticles.length - 1);
  }, [stackedArticles]);

  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <StyledMain>
          <Title>Articles</Title>
          {stackedArticles.length > 0 ? (
            <ArticlesList
              articles={stackedArticles[page]}
              variant="teaser"
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
          <ArticlesFilters
            taxonomies={taxonomies}
            articles={articles}
            setStackedArticles={setStackedArticles}
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
  const articlesQuery = `/articles?${qs.stringify({
    _sort: 'created_at:DESC',
  })}`;
  const articlesResult = await fetch(`${process.env.BASE_URL}${articlesQuery}`);
  const articles = await articlesResult.json();

  const taxonomiesQuery = `/taxonomies?${qs.stringify({
    _sort: 'title:ASC',
    _where: [{ articles_ne: null }],
  })}`;
  const taxonomiesResult = await fetch(
    `${process.env.BASE_URL}${taxonomiesQuery}`
  );
  const taxonomies = await taxonomiesResult.json();

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { articles, taxonomies, identity },
    revalidate: 60 * 60,
  };
}
