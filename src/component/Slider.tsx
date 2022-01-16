// Use.
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Slider as SliderType, Slide as SlideType } from '../type';
import { Link, Text, Button, ImageWrapper } from '../ui';
import { Dot, Circle } from '../theme/icon';

interface Props {
  slider: SliderType;
}

const Container = styled.div`
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

const Slide = styled.div`
  display: none;
  width: 100%;
  animation: ${({ theme }) => theme.animations.fadeIn} 500ms linear;
`;

const StyledImageWrapper = styled(ImageWrapper)`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    height: 450px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    height: 350px;
  }
`;

const TitleWrapper = styled.div`
  z-index: 40;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: rgba(255, 255, 255, 70%);
`;

const DotesWrapper = styled.div`
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

const StyledButton = styled(Button)<{ slide: string }>`
  width: max-content;
  height: max-content;
  padding: 0;
  color: unset;
  background-color: unset;
  border: unset;

  ${({ theme, slide }) => `
    > #dot_${slide} {
      fill: ${theme.colors.black};
    } 
  `}

  > svg {
    stroke: ${({ theme }) => theme.colors.black};
  }

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
  const [currentSlide, setCurrentSlide] = useState<SlideType>(slider.slides[0]);
  const [sliderAuto, setSliderAuto] = useState<any>();

  useEffect(() => {
    const slideMove = () => {
      const currentSlideIndex = slider.slides.indexOf(currentSlide);
      const nextSlide =
        currentSlideIndex >= slider.slides.length - 1
          ? slider.slides[0]
          : slider.slides[currentSlideIndex + 1];
      setCurrentSlide(nextSlide);
    };

    if (slider && slider.slides.length > 1)
      setSliderAuto(setTimeout(slideMove, 9000));
  }, [slider, currentSlide]);

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
                <StyledImageWrapper width="100%" height="250px">
                  <Image
                    src={`${process.env.BASE_URL}${slide.image.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt={slide.image.alternativeText}
                  />
                </StyledImageWrapper>
                {slide.button && (
                  <TitleWrapper>
                    <Link
                      href={`${
                        slide.button.slug &&
                        slide.button.slug.slug !== undefined
                          ? slide.button.slug.slug
                          : '/404'
                      }`}
                      variant="internal_icon"
                    >
                      <Text as="span" variant="p">
                        {slide.button.title}
                      </Text>
                    </Link>
                  </TitleWrapper>
                )}
              </Slide>
            ))}
          </SlidesWrapper>
          <DotesWrapper>
            {slider.slides.map((slide) => (
              <StyledButton
                slide={currentSlide.id}
                key={`slide_${slide.id}`}
                onClick={() => handleManualSlide(slide)}
              >
                {currentSlide.id === slide.id ? (
                  <Dot size={12} id={`dot_${slide.id}`} />
                ) : (
                  <Circle size={12} />
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
