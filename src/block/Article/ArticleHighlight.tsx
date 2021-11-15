import styled from 'styled-components';
import { Article } from '../../type/Article';
import DateFormatter from '../../util/DateFormatter';
import { Wrapper, Text, List } from '@magle-corp/design-system';

interface Props {
  article: Article;
}

const StyledTaxonomiesList = styled(List)`
  margin-left: 10px;
`;

const StyledTaxonomy = styled(Text)`
  padding: 5px 7px;
  max-width: max-content;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const ArticleHighlight = ({ article }: Props) => {
  return (
    <Wrapper>
      <Text as="h2" variant="h2">
        Derniers articles
      </Text>
      <Text as="h3" variant="h3">
        {article.title}
      </Text>
      <Wrapper direction="row" alignItem="center">
        <Text>{DateFormatter(article.created_at)}</Text>
        <StyledTaxonomiesList variant="horizontal">
          {article.taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <StyledTaxonomy>{taxonomy.title}</StyledTaxonomy>
            </li>
          ))}
        </StyledTaxonomiesList>
      </Wrapper>
      <Text>{article.description}</Text>
    </Wrapper>
  );
};

export { ArticleHighlight };
