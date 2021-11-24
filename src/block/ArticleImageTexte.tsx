// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { TexteImage } from '../type';

interface Props {
  block: TexteImage;
}

const Container = styled(Wrapper)`
  display: grid;
  grid-template-columns: ${({ reverse }) =>
    reverse ? '1fr 300px' : '300px 1fr'};
  grid-template-rows: 1fr;
`;

const ImageWrapper = styled.div`
  grid-column: ${({ reverse }) => (reverse ? '2/3' : '1/2')};
  grid-row: 1/2;
  position: relative;
  width: 300px;
  height: 230px;
  min-width: 300px;
  min-height: 230px;
`;

const ContentWrapper = styled(Wrapper)`
  grid-column: ${({ reverse }) => (reverse ? '1/2' : '2/3')};
  grid-row: 1/2;
  margin: ${({ reverse }) => (reverse ? '0 20px 0 0' : '0 0 0 20px')};

  > *:not(:first-child) {
    margin-top: 15px;
  }
`;

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
        <Text as="h2" variant="h2">
          {block.title}
        </Text>
        <Text>{block.content}</Text>
      </ContentWrapper>
    </Container>
  );
};

export { ArticleImageTexte };
