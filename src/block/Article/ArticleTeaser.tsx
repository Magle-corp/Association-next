import styled from 'styled-components';
import { Article } from '../../type';
import { Wrapper, Text, List } from '@magle-corp/design-system';
import { dateFormatter } from '../../util';
import { Link } from '../../component';

interface Props {
  article: Article;
}

const ArticleWrapper = styled(Wrapper)`
  flex-wrap: nowrap;
`;

const ContentWrapper = styled(Wrapper)`
  margin-left: 15px;

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  width: 235px;
  height: 165px;
  min-width: 235px;
  min-height: 165px;
`;

const FakeImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: lightblue;
`;

const ArticleTeaser = ({ article }: Props) => {
  return (
    <ArticleWrapper direction="row" alignItem="flex-start">
      <ImageWrapper>
        <FakeImage />
        {/*<Image*/}
        {/*  src={`${process.env.BASE_URL}${article.background.formats.small.url}`}*/}
        {/*  layout="fill"*/}
        {/*  objectFit="cover"*/}
        {/*  alt={article.background.alternativeText}*/}
        {/*/>*/}
      </ImageWrapper>
      <ContentWrapper>
        <Text as="h3" variant="h3">
          {article.title}
        </Text>
        <Text>{dateFormatter(article.created_at)}</Text>
        <List variant="horizontal">
          {article.taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Text variant="tag">{taxonomy.title}</Text>
            </li>
          ))}
        </List>
        <Text>{article.description}</Text>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export { ArticleTeaser };
