// Imports.
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
// Custom.
import { Header, ArticleHighlight, LatestArticles } from '../src/block';
import { Layout } from '../src/component';

const StyledMain = styled(Main)`
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
      <Layout>
        <StyledMain>
          <article>
            {articles.length > 0 && <ArticleHighlight article={articles[0]} />}
          </article>
        </StyledMain>
        <Aside>
          <LatestArticles articles={articles} />
        </Aside>
      </Layout>
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
