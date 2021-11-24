// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Article } from '../type';
import { Wrapper, Text } from '@magle-corp/design-system';
import { DateFormatter } from '../util';
import { TaxonomiesList } from './TaxonomiesList';

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

const ArticleTeaser = ({ article }: Props) => {
  return (
    <ArticleWrapper direction="row" alignItem="flex-start">
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.formats.small.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Text as="h3" variant="h3">
          {article.title}
        </Text>
        <Text>{DateFormatter(article.created_at)}</Text>
        <TaxonomiesList taxonomies={article.taxonomies} />
        <Text>{article.description}</Text>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export { ArticleTeaser };
