// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Article } from '../../type';
import { ItemsList } from '../ItemsList';
import { Link, Wrapper, Text, ImageWrapper } from '../../ui';

interface Props {
  article: Article;
}

const Title = styled(Text)`
  margin-right: 10px;
`;

const Description = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleLink = styled(Link)`
  margin-left: auto;
`;

/**
 * Provide view "ArticleHighlight".
 *
 * @param article
 *   Strapi custom content type "Article".
 */
const ArticleHighlight = ({ article }: Props) => {
  return (
    <Wrapper variant="vertical" spacing="20px 0 0 0">
      <ImageWrapper width="100%" height="250px">
        <Image
          src={`${process.env.BASE_URL}${article.background.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
      </ImageWrapper>
      <Wrapper variant="vertical" spacing="10px 0 0 0">
        <Wrapper variant="vertical" spacing="10px 0 0 0">
          <Title variant="h3">{article.title}</Title>
          <Text>{format(new Date(article.created_at), 'd MMM y')}</Text>
        </Wrapper>
        {article.taxonomies && (
          <ItemsList items={article.taxonomies} variant="taxo_link" />
        )}
      </Wrapper>
      <Description>{article.description}</Description>
      <Wrapper variant="vertical">
        <ArticleLink
          href={`/publications/articles/${article.slug}`}
          variant="link_action"
        >
          <Text as="span">Consulter l&apos;article</Text>
        </ArticleLink>
      </Wrapper>
    </Wrapper>
  );
};

export { ArticleHighlight };
