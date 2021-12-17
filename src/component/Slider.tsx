// Use.
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Text, Button } from '@magle-corp/design-system';
import { Slider as SliderType } from '../type';
import { Dot, Circle } from '../theme/icon';

interface Props {
  slider: SliderType;
}

const Container = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.grey};
  position: relative;
  height: 100%;
`;

const SlidesWrapper = styled.div<{ slide: number }>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;

  ${({ slide }) =>
    `
    > #slide_${slide} {
      display: flex;
    } 
  `}
`;

const Slide = styled(Wrapper)`
  display: none;
  width: 100%;
`;

const ImageWrapper = styled(Wrapper)`
  position: relative;
  height: 350px;
`;

const SlideTitle = styled(Text)`
  z-index: 40;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
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

  &:hover {
    background-color: unset;
  }
`;

/**
 * Provide component "Slider".
 *
 * @param slides
 *   Array of custom Strapi component "Slider".
 */
const Slider = ({ slider }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  let sliderAuto: any;

  const slideMove = () => {
    const nextSlide =
      currentSlide > slider.slides.length - 1 ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    sliderAuto = setTimeout(slideMove, 10000);
  }, [currentSlide]);

  const handleManualSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    window.clearTimeout(sliderAuto);
  };

  return (
    <>
      {slider.slides && (
        <Container>
          <SlidesWrapper slide={currentSlide}>
            {slider.slides.map((slide) => (
              <Slide id={`slide_${slide.id}`}>
                <ImageWrapper key={`slide_${slide.id}`}>
                  <Image
                    src={`${process.env.BASE_URL}${slide.image.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt={slide.image.alternativeText}
                  />
                </ImageWrapper>
                <SlideTitle>{slide.title}</SlideTitle>
              </Slide>
            ))}
          </SlidesWrapper>
          <DotesWrapper direction="row">
            {slider.slides.map((slide) => (
              <StyledButton
                key={`slide_${slide.id}`}
                onClick={() => handleManualSlide(parseInt(slide.id))}
              >
                {currentSlide === parseInt(slide.id) ? (
                  <Dot width={12} height={12} />
                ) : (
                  <Circle width={12} height={12} />
                )}
              </StyledButton>
            ))}
          </DotesWrapper>
        </Container>
      )}
    </>
  );
};

export { Slider };
