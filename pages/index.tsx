import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { Main, Article, Aside } from '@magle-corp/design-system';
import { Header } from '../src/component/Header';
import { LatestArticles } from '../src/component/LatestArticles';

const StyledMain = styled(Main)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 0 20px;
  margin: 50px auto auto;
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
        <Article />
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
