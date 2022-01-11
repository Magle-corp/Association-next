// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Article } from '../../type';
import { ItemsList } from '../ItemsList';

interface Props {
  article: Article;
}

const ArticleWrapper = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
  }
`;

const ImageWrapper = styled(Wrapper)`
  grid-column: 1/2;
  grid-row: 1/2;
  position: relative;
  width: 100%;
  height: 200px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    width: 235px;
    min-width: 235px;
    min-height: 165px;
  }
`;

const ContentWrapper = styled(Wrapper)`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 25px;

  & > *:not(:first-child) {
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-left: 25px;
    margin-top: 0;
  }
`;

const Description = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/**
 * Provide component "ArticleTeaser".
 *
 * @param article
 *   Strapi custom content type "Article".
 */
const ArticleTeaser = ({ article }: Props) => {
  return (
    <ArticleWrapper direction="row" alignItem="flex-start">
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.formats.medium.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Text as="h3" variant="h3">
          {article.title}
        </Text>
        <Wrapper>
          <Text>{format(new Date(article.created_at), 'd MMM y')}</Text>
          {article.taxonomies && (
            <ItemsList
              spacing={0}
              items={article.taxonomies}
              variant="taxo_default"
            />
          )}
        </Wrapper>
        <Description>{article.description}</Description>
      </ContentWrapper>
    </ArticleWrapper>
  );
};

export { ArticleTeaser };
