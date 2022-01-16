// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { TexteImage } from '../type';
import { Text } from '../ui';

interface Props {
  block: TexteImage;
}

const Container = styled.div<{ reverse: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? '1fr 300px' : '300px 1fr'};
    grid-template-rows: 1fr;
  }
`;

const ImageWrapper = styled.div<{ reverse: boolean }>`
  grid-column: 1/2;
  grid-row: 1/2;
  position: relative;
  width: 100%;
  height: 230px;
  min-height: 230px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: ${({ reverse }) => (reverse ? '2/3' : '1/2')};
    grid-row: 1/2;
    width: 300px;
    height: 230px;
    min-width: 300px;
    min-height: 230px;
  }
`;

const ContentWrapper = styled.div<{ reverse: boolean }>`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: 35px;

  > *:not(:first-child) {
    margin-top: 30px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: ${({ reverse }) => (reverse ? '1/2' : '2/3')};
    grid-row: 1/2;
    margin: ${({ reverse }) => (reverse ? '0 35px 0 0' : '0 0 0 35px')};
  }
`;

/**
 * Provide block "Image Texte" for block builder.
 *
 * @param block
 *   The custom Strapi "Image Texte" component.
 */
const ArticleImageTexte = ({ block }: Props) => {
  return (
    <Container reverse={block.image_side == 'Droite'}>
      <ImageWrapper reverse={block.image_side == 'Droite'}>
        <Image
          src={`${process.env.BASE_URL}${block.image.formats.small.url}`}
          layout="fill"
          objectFit="cover"
          alt={block.image.alternativeText}
        />
      </ImageWrapper>
      <ContentWrapper reverse={block.image_side == 'Droite'}>
        {block.title && (
          <Text as="h2" variant="h2">
            {block.title}
          </Text>
        )}
        <Text>{block.content}</Text>
      </ContentWrapper>
    </Container>
  );
};

export { ArticleImageTexte };
