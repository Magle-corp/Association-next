// Use.
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article, Taxonomy } from '../../src/type';
import { ItemStacker } from '../../src/util';
import {
  Header,
  ArticlesList,
  TaxonomiesList,
  Pagination,
} from '../../src/block';
import { Layout } from '../../src/component';

interface Props {
  articles: Article[];
  taxonomies: Taxonomy[];
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 250px 1fr;
`;

const StyledMain = styled(Main)`
  margin-left: 35px;
`;

const ListTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const FiltersTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const Articles = ({ articles, taxonomies }: Props) => {
  const [stackedArticles, setStackedArticles] = useState<Array<Article[]>>([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const stackOfArticles = ItemStacker(articles);
    setStackedArticles(stackOfArticles);
  }, [articles]);

  useEffect(() => {
    setLastPage(stackedArticles.length - 1);
  }, [stackedArticles]);

  return (
    <>
      <Header />
      <StyledLayout>
        <StyledMain gridColumn="2/3">
          <ListTitle>Articles</ListTitle>
          {stackedArticles.length > 0 && (
            <ArticlesList
              articles={stackedArticles[page]}
              variant="teaser"
              spacing={30}
            />
          )}
          <Pagination page={page} lastPage={lastPage} setPage={setPage} />
        </StyledMain>
        <Aside gridColumn="1/2">
          <FiltersTitle>Filtres</FiltersTitle>
          <TaxonomiesList taxonomies={taxonomies} />
        </Aside>
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
