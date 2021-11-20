import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside } from '@magle-corp/design-system';
import { Header, ArticlesList } from '../../src/block';
import { Layout } from '../../src/component';

const StyledLayout = styled(Layout)`
  grid-template-columns: 250px 1fr;
`;

const StyledMain = styled(Main)`
  margin-left: 35px;
`;

const StyledAside = styled(Aside)`
  background-color: lightblue;
`;

const ListTitle = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const Articles: NextPage = () => {
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
      <StyledLayout>
        <StyledMain gridColumn="2/3">
          <ListTitle>Articles</ListTitle>
          <ArticlesList articles={articles} variant="teaser" />
        </StyledMain>
        <StyledAside gridColumn="1/2">
          <p>prout</p>
        </StyledAside>
      </StyledLayout>
    </>
  );
};

export default Articles;
