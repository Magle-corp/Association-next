// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Article } from '../../type';
import { TaxonomiesList } from '../List/TaxonomiesList';
import { Link } from '../../ui';

interface Props {
  article: Article;
}

const ArticleWrapper = styled(Wrapper)`
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 250px;
`;

const StyledTitle = styled(Text)`
  margin-right: 10px;
`;

const Description = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleLink = styled(Link)`
  ${({ theme }) => theme.typography.call_action}
  margin-left: auto;
`;

/**
 * Provide component "ArticleHighlight".
 *
 * @param article
 *   Strapi custom content type "Article".
 */
const ArticleHighlight = ({ article }: Props) => {
  return (
    <ArticleWrapper>
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
      </ImageWrapper>
      <Wrapper>
        <Wrapper direction="row" alignItem="flex-end">
          <StyledTitle variant="h3">{article.title}</StyledTitle>
          <Text>{format(new Date(article.created_at), 'd MMM y')}</Text>
        </Wrapper>
        <TaxonomiesList taxonomies={article.taxonomies} variant="link" />
      </Wrapper>
      <Description>{article.description}</Description>
      <Wrapper data-cy="link">
        <ArticleLink href={`/publications/articles/${article.slug}`}>
          <Text as="span">Consulter l'article</Text>
        </ArticleLink>
      </Wrapper>
    </ArticleWrapper>
  );
};

export { ArticleHighlight };
