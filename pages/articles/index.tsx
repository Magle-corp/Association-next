// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article } from '../../src/type';
import { Header, ArticlesList } from '../../src/block';
import { Layout } from '../../src/component';

interface Props {
  articles: Article[];
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

const Articles = ({ articles }: Props) => {
  return (
    <>
      <Header />
      <StyledLayout>
        <StyledMain gridColumn="2/3">
          <ListTitle>Articles</ListTitle>
          <ArticlesList articles={articles} variant="teaser" spacing={30} />
        </StyledMain>
        <Aside gridColumn="1/2">
          <FiltersTitle>Filtres</FiltersTitle>
        </Aside>
      </StyledLayout>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  const query = `/articles?${qs.stringify({
    _sort: 'published_at:DESC',
    _start: 0,
    _limit: 5,
  })}`;

  const result = await fetch(`${process.env.BASE_URL}${query}`);
  const articles = await result.json();

  return {
    props: { articles },
    revalidate: 60 * 60,
  };
}
