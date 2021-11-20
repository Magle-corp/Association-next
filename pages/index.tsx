// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Article } from '../src/type';
import { Header, ArticleHighlight, ArticlesList } from '../src/block';
import { Layout } from '../src/component';

interface Props {
  articles: Article[];
}

const StyledMain = styled(Main)`
  margin-right: 35px;
`;

const HighlightTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const LatestArticleTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const Home = ({ articles }: Props) => {
  return (
    <>
      <Header />
      <Layout>
        <StyledMain>
          <article>
            <HighlightTitle>A la une</HighlightTitle>
            {articles.length > 0 && <ArticleHighlight article={articles[0]} />}
          </article>
        </StyledMain>
        <Aside>
          <LatestArticleTitle>Derniers articles</LatestArticleTitle>
          <ArticlesList articles={articles} spacing={15} />
        </Aside>
      </Layout>
    </>
  );
};

export default Home;

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
