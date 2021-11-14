import type { NextPage } from 'next';
import styled from 'styled-components';
import { Main, Article, Aside } from '@magle-corp/design-system';
import { Header } from '../src/component/Header';
import { LatestArticles } from '../src/component/LatestArticles';

const StyledMain = styled(Main)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 20px;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Article />
        <Aside>
          <LatestArticles />
        </Aside>
      </StyledMain>
    </>
  );
};

export default Home;
