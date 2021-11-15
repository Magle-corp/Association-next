import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';

interface Props {
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
}

const StyledList = styled(List)`
  margin-top: 10px;
`;

const LatestArticles = ({ articles }: Props) => {
  return (
    <Wrapper>
      <Text as="h2" variant="h2">
        Derniers articles
      </Text>
      <nav>
        <StyledList>
          {articles.map((article) => (
            <li key={article.id}>
              <Text>{article.title}</Text>
            </li>
          ))}
        </StyledList>
      </nav>
    </Wrapper>
  );
};

export { LatestArticles };

export async function getStaticProps() {}
