// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside, Wrapper, Text } from '@magle-corp/design-system';
import { Article, Event, Identity } from '../src/type';
import { Header, Footer } from '../src/component';
import { Layout, Link } from '../src/ui';

interface Props {
  articles: Article[];
  events: Event[];
  identity: Identity;
}

const Home = ({ articles, events, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout>
        <Main></Main>
        <Aside></Aside>
      </Layout>
      <Footer identity={identity} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const articlesQuery = `/articles?${qs.stringify({
    _sort: 'published_at:DESC',
    _start: 0,
    _limit: 5,
  })}`;
  const articlesResult = await fetch(`${process.env.BASE_URL}${articlesQuery}`);
  const articles = await articlesResult.json();

  const eventsQuery = `/evenements?${qs.stringify({
    _sort: 'published_at:DESC',
    _start: 0,
    _limit: 5,
  })}`;
  const eventResult = await fetch(`${process.env.BASE_URL}${eventsQuery}`);
  const events = await eventResult.json();

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { articles, events, identity },
    revalidate: 60 * 60,
  };
}
