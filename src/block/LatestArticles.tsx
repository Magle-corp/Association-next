import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';
import { Article } from '../type/Article';
import Link from '../component/Link';

interface Props {
  articles: Article[];
}

const StyledList = styled(List)`
  margin-top: 20px;
`;

const LatestArticles = ({ articles }: Props) => {
  return (
    <Wrapper>
      <Text as="h2" variant="h2">
        Derniers articles
      </Text>
      <nav>
        <StyledList spacing={15}>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href="#">
                <Text as="span">{article.title}</Text>
              </Link>
            </li>
          ))}
        </StyledList>
      </nav>
    </Wrapper>
  );
};

export { LatestArticles };

export async function getStaticProps() {}
