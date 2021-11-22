// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Article } from '../type';
import { dateFormatter } from '../util';
import { TaxonomiesList } from './TaxonomiesList';

interface Props {
  article: Article;
}

const ImageWrapper = styled(Wrapper)`
  display: flex;
  position: relative;
  width: 100%;
  height: 350px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1}
  z-index: 10;
  position: absolute;
  transform: translate(-50%);
  bottom: 0;
  left: 50%;
  width: 85%;
  padding: 25px 0 15px 0;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const ContentWrapper = styled(Wrapper)`
  width: 85%;
  margin: 0 auto;
`;

const Date = styled(Text)`
  ${({ theme }) => theme.typography.h4}
  margin: 0 auto;
  font-family: Roboto, Arial, sans-serif;
`;

const StyledTaxonomies = styled(TaxonomiesList)`
  justify-content: center;
  margin-top: 15px;
`;

const ArticleDetail = ({ article }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={`${process.env.BASE_URL}${article.background.url}`}
          layout="fill"
          objectFit="cover"
          alt={article.background.alternativeText}
        />
        <Title>{article.title}</Title>
      </ImageWrapper>
      <ContentWrapper>
        <Date variant="h4">{dateFormatter(article.created_at)}</Date>
        <StyledTaxonomies taxonomies={article.taxonomies} variant="link" />
      </ContentWrapper>
    </Wrapper>
  );
};

export { ArticleDetail };
