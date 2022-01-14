// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Article, Event, Identity } from '../../src/type';
import {
  Header,
  EmptyResult,
  ArticleHighlight,
  ItemsList,
  EventHighlight,
  Footer,
} from '../../src/component';
import { Layout, Main, Aside, Link, Text, Wrapper } from '../../src/ui';

interface Props {
  articles: Article[];
  events: Event[];
  identity: Identity;
}

const StyledAside = styled(Aside)`
  margin-top: 90px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    margin-top: 0;
  }
`;

/**
 * Provide page "Publication".
 *
 * @param articles
 *   Strapi custom content type "Articles".
 * @param events
 *   Strapi custom content type "Events".
 * @param identity
 *   Strapi custom content type "Identity".
 * @constructor
 */
const Home = ({ articles, events, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout variant="duo">
        <Main variant="duo" spacing="30px 0 0 0">
          <Text as="h2" variant="h1">
            A la une
          </Text>
          <article>
            {articles.length > 0 ? (
              <ArticleHighlight article={articles[0]} />
            ) : (
              <EmptyResult />
            )}
          </article>
        </Main>
        <StyledAside variant="duo" spacing="50px 0 0 0">
          {events.length > 0 && (
            <Wrapper variant="vertical" spacing="30px 0 0 0">
              <EventHighlight event={events[0]} />
              <Link href="/publications/evenements" variant="call_action">
                <Text as="span">Tous les évènements</Text>
              </Link>
            </Wrapper>
          )}
          <Wrapper variant="vertical" spacing="30px 0 0 0">
            <Text as="h2" variant="h1">
              Derniers articles
            </Text>
            <Wrapper variant="vertical">
              {articles.length > 0 ? (
                <ItemsList
                  items={articles}
                  variant="article_default"
                  spacing="15px 0 0 0"
                />
              ) : (
                <EmptyResult />
              )}
            </Wrapper>
            <Link href="/publications/articles" variant="call_action">
              <Text as="span">Tous les articles</Text>
            </Link>
          </Wrapper>
        </StyledAside>
      </Layout>
      <Footer identity={identity} />
    </>
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
