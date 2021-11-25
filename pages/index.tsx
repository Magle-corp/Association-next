// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Aside, Wrapper, Text } from '@magle-corp/design-system';
import { Article, Event } from '../src/type';
import {
  Header,
  ArticleHighlight,
  ArticlesList,
  EventHighlight,
} from '../src/component';
import { Layout, Link } from '../src/ui';

interface Props {
  articles: Article[];
  events: Event[];
}

const StyledMain = styled(Main)`
  margin-right: 35px;
`;

const StyledAside = styled(Aside)`
  > *:not(:first-child) {
    margin-top: 40px;
  }
`;

const Title = styled.h2`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 25px;
`;

const EventWrapper = styled(Wrapper)`
  > *:first-child {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  }

  > *:not(:first-child) {
    text-align: center;
  }
`;

const Home = ({ articles, events }: Props) => {
  return (
    <>
      <Header />
      <Layout>
        <StyledMain>
          <article>
            <Title>A la une</Title>
            {articles.length > 0 && <ArticleHighlight article={articles[0]} />}
          </article>
        </StyledMain>
        <StyledAside>
          <Wrapper>
            <Title>Derniers articles</Title>
            <ArticlesList articles={articles} spacing={15} />
          </Wrapper>
          <EventWrapper>
            <EventHighlight event={events[0]} />
            <Link href="#" variant="internal">
              <Text>Voir tous les évènements</Text>
            </Link>
          </EventWrapper>
        </StyledAside>
      </Layout>
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

  return {
    props: { articles, events },
    revalidate: 60 * 60,
  };
}
