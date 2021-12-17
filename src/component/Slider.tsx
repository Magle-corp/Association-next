// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Wrapper, Button } from '@magle-corp/design-system';
import { Slider as SliderType } from '../type';
import { Dot } from '../theme/icon';

interface Props {
  slider: SliderType;
}

const Container = styled(Wrapper)`
  background-color: lightblue;
  position: relative;
  height: 100%;
`;

const SlidesWrapper = styled(Wrapper)`
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  height: 350px;
`;

const DotesWrapper = styled(Wrapper)`
  position: absolute;
  bottom: -30px;
  display: flex;
  justify-content: center;
  width: 100%;

  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const StyledButton = styled(Button)`
  width: max-content;
  height: max-content;
  padding: 0;
  color: unset;
  background-color: unset;
  border: unset;
`;

/**
 * Provide component "Slider".
 *
 * @param slides
 *   Array of custom Strapi component "Slider".
 */
const Slider = ({ slider }: Props) => {
  return (
    <Container>
      {slider.slides && (
        <SlidesWrapper direction="row">
          {slider.slides.map((slide) => (
            <ImageWrapper key={`slide_${slide.id}`} id={`slide_${slide.id}`}>
              <Image
                src={`${process.env.BASE_URL}${slide.image.url}`}
                layout="fill"
                objectFit="cover"
                alt={slide.image.alternativeText}
              />
            </ImageWrapper>
          ))}
        </SlidesWrapper>
      )}
      <DotesWrapper direction="row">
        <StyledButton>
          <Dot width={12} height={12} />
        </StyledButton>
        <StyledButton>
          <Dot width={12} height={12} />
        </StyledButton>
        <StyledButton>
          <Dot width={12} height={12} />
        </StyledButton>
      </DotesWrapper>
    </Container>
  );
};

export { Slider };
