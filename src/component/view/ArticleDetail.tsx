// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Article } from '../../type';
import { BlockBuilder } from '../../util';
import { TaxonomiesList } from '../TaxonomiesList';

interface Props {
  article: Article;
}

const ImageWrapper = styled(Wrapper)`
  display: flex;
  position: relative;
  width: 100%;
  height: 350px;
`;

const AbsoluteTitle = styled.h1`
  display: none;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    ${({ theme }) => theme.typography.h1}
    z-index: 10;
    position: absolute;
    transform: translate(-50%);
    bottom: 0;
    left: 50%;
    display: flex;
    justify-content: center;
    width: 70%;
    padding: 25px 20px 0 20px;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  text-align: center;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

const ContentWrapper = styled(Wrapper)`
  width: 85%;
  margin: 35px auto 0 auto;

  > *:not(:first-child) {
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    margin: 0 auto;
  }
`;

const StyledDate = styled(Text)`
  ${({ theme }) => theme.typography.h4}
  margin: 0 auto;
  font-family: Roboto, Arial, sans-serif;
`;

const StyledTaxonomies = styled(TaxonomiesList)`
  justify-content: center;
`;

/**
 * Provide component "ArticleDetail".
 *
 * @param article
 *   Strapi custom content type "Article".
 */
const ArticleDetail = ({ article }: Props) => {
  return (
    <>
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
        <AbsoluteTitle>{article.title}</AbsoluteTitle>
      </ImageWrapper>
      <ContentWrapper>
        <Title>{article.title}</Title>
        <Wrapper>
          <StyledDate variant="h4">
            {format(new Date(article.created_at), 'd LLLL y')}
          </StyledDate>
          <StyledTaxonomies taxonomies={article.taxonomies} variant="link" />
        </Wrapper>
        <BlockBuilder blocks={article.dynamic_zone} />
      </ContentWrapper>
    </>
  );
};

export { ArticleDetail };
