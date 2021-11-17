import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';
// Custom.
import { Article } from '../../type';
import { dateFormatter } from '../../util';
import { Link } from '../../component';

interface Props {
  article: Article;
}

const ArticleWrapper = styled(Wrapper)`
  margin-top: 25px;

  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 250px;
`;

const FakeImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: lightblue;
`;

const Date = styled(Text)`
  margin-left: 10px;
`;

const ArticleLink = styled(Link)`
  margin: 25px 0 0 auto;
`;

const ArticleHighlight = ({ article }: Props) => {
  return (
    <Wrapper>
      <Text as="h2" variant="h2">
        A la une
      </Text>
      <ArticleWrapper>
        <ImageWrapper>
          <FakeImage />
          {/*<Image*/}
          {/*  src={`${process.env.BASE_URL}${article.background.formats.small.url}`}*/}
          {/*  layout="fill"*/}
          {/*  objectFit="cover"*/}
          {/*  alt={article.background.alternativeText}*/}
          {/*/>*/}
        </ImageWrapper>
        <Wrapper direction="row" alignItem="flex-end">
          <Text as="h3" variant="h3">
            {article.title}
          </Text>
          <Date>{dateFormatter(article.created_at)}</Date>
        </Wrapper>
        <List variant="horizontal">
          {article.taxonomies.map((taxonomy) => (
            <li key={taxonomy.id}>
              <Link href="#">
                <Text as="span" variant="tag">
                  {taxonomy.title}
                </Text>
              </Link>
            </li>
          ))}
        </List>
        <Text>{article.description}</Text>
      </ArticleWrapper>
      <ArticleLink href="#">
        <Text as="span" variant="decorate_link">
          Consulter l'article
        </Text>
      </ArticleLink>
    </Wrapper>
  );
};

export { ArticleHighlight };
