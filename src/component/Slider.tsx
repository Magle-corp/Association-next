// Use.
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper, Text, Button } from '@magle-corp/design-system';
import { Slider as SliderType, Slide as SlideType } from '../type';
import { Link } from '../ui';
import { Dot, Circle } from '../theme/icon';

interface Props {
  slider: SliderType;
}

const Container = styled(Wrapper)`
  background-color: ${({ theme }) => theme.colors.grey};
  position: relative;
  height: 100%;
`;

const SlidesWrapper = styled.div<{ slide: string }>`
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
  height: 250px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    height: 450px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    height: 350px;
  }
`;

const TitleWrapper = styled(Wrapper)`
  z-index: 40;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
`;

const DotesWrapper = styled(Wrapper)`
  display: none;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: absolute;
    bottom: -30px;
    display: flex;
    justify-content: center;
    width: 100%;

    > *:not(:first-child) {
      margin-left: 10px;
    }
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
  const [currentSlide, setCurrentSlide] = useState(slider.slides[0]);
  let sliderAuto: any;

  const slideMove = () => {
    const currentSlideIndex = slider.slides.indexOf(currentSlide);
    const nextSlide =
      currentSlideIndex >= slider.slides.length - 1
        ? slider.slides[0]
        : slider.slides[currentSlideIndex + 1];
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    if (slider && slider.slides.length > 1)
      sliderAuto = setTimeout(slideMove, 9000);
  }, [currentSlide]);

  const handleManualSlide = (slide: SlideType) => {
    setCurrentSlide(slide);
    window.clearTimeout(sliderAuto);
  };

  return (
    <>
      {slider && slider.slides && (
        <Container>
          <SlidesWrapper slide={currentSlide.id}>
            {slider.slides.map((slide) => (
              <Slide key={`slide_${slide.id}`} id={`slide_${slide.id}`}>
                <ImageWrapper>
                  <Image
                    src={`${process.env.BASE_URL}${slide.image.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt={slide.image.alternativeText}
                  />
                </ImageWrapper>
                <TitleWrapper>
                  <Link href={`${slide.link.slug}`} variant="internal">
                    <Text as="span" variant="p">
                      {slide.title}
                    </Text>
                  </Link>
                </TitleWrapper>
              </Slide>
            ))}
          </SlidesWrapper>
          <DotesWrapper direction="row">
            {slider.slides.map((slide) => (
              <StyledButton
                key={`slide_${slide.id}`}
                onClick={() => handleManualSlide(slide)}
              >
                {currentSlide.id === slide.id ? (
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
