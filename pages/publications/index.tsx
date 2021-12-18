// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside, Wrapper, Text } from '@magle-corp/design-system';
import { Article, Event, Identity } from '../../src/type';
import {
  Header,
  EmptyResult,
  ArticleHighlight,
  ArticlesList,
  EventHighlight,
  Footer,
} from '../../src/component';
import { Layout, Link } from '../../src/ui';

interface Props {
  articles: Article[];
  events: Event[];
  identity: Identity;
}

const StyledMain = styled(Main)`
  grid-column: 1/2;
  grid-row: 1/2;
  margin-right: 0;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    margin-right: 120px;
  }
`;

const StyledAside = styled(Aside)`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 50px;

  > *:not(:first-child) {
    margin-top: 60px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const EventWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    text-align: center;
    margin-top: 35px;
  }
`;

const EventsLink = styled(Link)`
  ${({ theme }) => theme.typography.call_action}
`;

const Home = ({ articles, events, identity }: Props) => {
  return (
    <Wrapper data-cy="page">
      <Header identity={identity} />
      <Layout>
        <StyledMain>
          <article>
            <Title>A la une</Title>
            {articles.length > 0 ? (
              <ArticleHighlight article={articles[0]} />
            ) : (
              <EmptyResult />
            )}
          </article>
        </StyledMain>
        <StyledAside>
          {events.length > 0 && (
            <EventWrapper>
              <EventHighlight event={events[0]} />
              <Wrapper data-cy="link">
                <EventsLink href="/publications/evenements">
                  <Text as="span">Voir tous les évènements</Text>
                </EventsLink>
              </Wrapper>
            </EventWrapper>
          )}
          <Wrapper>
            <Title>Derniers articles</Title>
            {articles.length > 0 ? (
              <ArticlesList articles={articles} spacing={15} />
            ) : (
              <EmptyResult />
            )}
          </Wrapper>
        </StyledAside>
      </Layout>
      <Footer identity={identity} />
    </Wrapper>
  );
};

export default Home;

export async function getStaticProps() {
  const articlesQuery = `/articles?${qs.stringify({
    _sort: 'created_at:DESC',
    _start: 0,
    _limit: 5,
  })}`;
  const articlesResult = await fetch(`${process.env.BASE_URL}${articlesQuery}`);
  const articles = await articlesResult.json();

  const eventsQuery = `/evenements?${qs.stringify({
    _sort: 'date:DESC',
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
