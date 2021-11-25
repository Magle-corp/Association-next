// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Article } from '../type';
import { TaxonomiesList } from './TaxonomiesList';
import { Link } from '../ui';

interface Props {
  article: Article;
}

const ArticleWrapper = styled(Wrapper)`
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 250px;
`;

const StyledDate = styled(Text)`
  margin-left: 10px;
`;

const ArticleLink = styled(Link)`
  margin-left: auto;
`;

const ArticleHighlight = ({ article }: Props) => {
  return (
    <ArticleWrapper>
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.formats.small.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
      </ImageWrapper>
      <Wrapper direction="row" alignItem="flex-end">
        <Text as="h3" variant="h3">
          {article.title}
        </Text>
        <StyledDate>
          {format(new Date(article.created_at), 'd MMM y')}
        </StyledDate>
      </Wrapper>
      <TaxonomiesList taxonomies={article.taxonomies} variant="link" />
      <Text>{article.description}</Text>
      <ArticleLink href={`/articles/${article.slug}`} variant="inline">
        <Text as="span" variant="decorate_link">
          Consulter l'article
        </Text>
      </ArticleLink>
    </ArticleWrapper>
  );
};

export { ArticleHighlight };
