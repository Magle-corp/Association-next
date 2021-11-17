import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Main, Article, Aside } from '@magle-corp/design-system';
import { Header } from '../src/block/Header';
import { LatestArticles } from '../src/block/LatestArticles';
import { ArticleHighlight } from '../src/block/Article/ArticleHighlight';

const StyledMain = styled(Main)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 50px 20px 0 20px;
  margin: 0 auto;
`;

const StyledArticle = styled(Article)`
  margin-right: 35px;
`;

const Home: NextPage = () => {
  const [articles, setArticles] = useState([]);

  const query = `/articles?${qs.stringify({
    _sort: 'published_at:DESC',
    _start: 0,
    _limit: 5,
  })}`;

  useEffect(() => {
    const Fetch = async () => {
      const result = await fetch(`${process.env.BASE_URL}${query}`);
      const data = await result.json();
      setArticles(data);
    };
    Fetch();
  }, []);

  return (
    <>
      <Header />
      <StyledMain gridColumnsTemplate="1fr 250px">
        <StyledArticle>
          {articles.length > 0 && <ArticleHighlight article={articles[0]} />}
        </StyledArticle>
        <Aside>
          <LatestArticles articles={articles} />
        </Aside>
      </StyledMain>
    </>
  );
};

export default Home;

// export async function getStaticProps() {
//   const query = `/articles?${qs.stringify({
//     _sort: 'published_at:DESC',
//     _start: 0,
//     _limit: 5,
//   })}`;
//
//   const result = await fetch(`${process.env.BASE_URL}${query}`);
//   const data = await result.json();
// }
