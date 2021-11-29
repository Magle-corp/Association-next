// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article, Taxonomy } from '../../src/type';
import {
  Header,
  ArticlesList,
  Pagination,
  ArticlesFilters,
} from '../../src/component';
import { Layout } from '../../src/ui';
import { ArrowDown } from '../../src/theme/icon';

interface Props {
  articles: Article[];
  taxonomies: Taxonomy[];
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
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  display: flex;

  > *:not(:first-child) {
    margin-left: 25px;
  }
`;

const ArrowIcon = styled(ArrowDown)`
  display: block;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    display: none;
  }
`;

const Articles = ({ articles, taxonomies }: Props) => {
  const [stackedArticles, setStackedArticles] = useState<Array<Article[]>>([]);
  const [page, setPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filtersViewState, setFiltersViewState] = useState<boolean>(false);

  useEffect(() => {
    setLastPage(stackedArticles.length - 1);
  }, [stackedArticles]);

  return (
    <>
      <Header />
      <StyledLayout>
        <StyledMain>
          <Title>Articles</Title>
          {stackedArticles.length > 0 && (
            <ArticlesList
              articles={stackedArticles[page]}
              variant="teaser"
              spacing={30}
            />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </StyledMain>
        <StyledAside>
          <Wrapper
            onClick={() => {
              setFiltersViewState(!filtersViewState);
            }}
          >
            <Title>Filtres</Title>
            <ArrowIcon />
          </Wrapper>
          <ArticlesFilters
            taxonomies={taxonomies}
            articles={articles}
            setStackedArticles={setStackedArticles}
            setPage={setPage}
            filtersViewState={filtersViewState}
          />
        </StyledAside>
      </StyledLayout>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  const articlesQuery = `/articles?${qs.stringify({
    _sort: 'published_at:DESC',
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

  return {
    props: { articles, taxonomies },
    revalidate: 60 * 60,
  };
}
