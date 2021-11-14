import type { NextPage } from 'next';
import { Main, Article, Aside } from '@magle-corp/design-system';
import { Header } from '../src/component/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Article />
        <Aside />
      </Main>
    </>
  );
};

export default Home;
