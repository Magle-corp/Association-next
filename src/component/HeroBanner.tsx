// Use.
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Homepage } from '../type';
import { Link } from '../ui';
import { Slider } from './index';

interface Props {
  homepage: Homepage;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-template-columns: 50% 10% 5% 30% 5%;
    grid-template-rows: max-content max-content max-content;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: 50% 10% 5% 30% 5%;
    grid-template-rows: 20% 6% 64% 10%;
    height: 500px;
  }
`;

const SliderContainer = styled.div`
  z-index: 20;
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: ${({ theme }) => `${theme.colors.grey}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 1/4;
    grid-row: 2/4;
    height: auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 1/4;
    grid-row: 2/4;
  }
`;

const TitleContainer = styled.div`
  z-index: 30;
  box-sizing: border-box;
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 15px 30px 20px 15px;
  color: ${({ theme }) => `${theme.colors.white}`};
  background-color: ${({ theme }) => `${theme.colors.primary}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 1/6;
    grid-row: 1/2;
    height: max-content;
    padding: 15px 30px 20px 15px;
    text-align: right;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/6;
    grid-row: 1/3;
    height: unset;
    padding: 15px 15px 15px 30px;
    text-align: left;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  letter-spacing: 0.5rem;
  text-shadow: 3.5px 3.5px ${({ theme }) => theme.colors.black};
`;

const PresentationContainer = styled(Wrapper)`
  z-index: 10;
  box-sizing: border-box;
  grid-column: 1/2;
  grid-row: 3/4;
  padding: 25px;
  background-color: ${({ theme }) => `${theme.colors.secondary}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 4/6;
    grid-row: 2/4;
    padding: 25px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 3/5;
    grid-row: 3/5;
    padding: 25px 25px 50px 80px;
  }

  > *:first-child {
    line-height: 3.2rem;
  }
`;

const LinkWrapper = styled(Wrapper)`
  margin-top: 60px;
  margin-left: auto;
  transition: 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    margin-top: auto;
    margin-left: auto;
  }
`;

const SlideLink = styled(Link)`
  ${({ theme }) => theme.typography.call_action}
`;

/**
 * Provide component "HeroBanner".
 *
 * @param homepage
 *   Strapi custom content type "Page d'accueil".
 */
const HeroBanner = ({ homepage }: Props) => {
  return (
    <Container>
      <SliderContainer>
        <Slider slider={homepage.slider} />
      </SliderContainer>
      <TitleContainer>
        <Title>{homepage.title}</Title>
      </TitleContainer>
      <PresentationContainer>
        <Text variant="h4">{homepage.content}</Text>
        <LinkWrapper>
          <SlideLink href={`${homepage.main_link.link.slug}`}>
            <Text as="span">{homepage.main_link.link_title}</Text>
          </SlideLink>
        </LinkWrapper>
      </PresentationContainer>
    </Container>
  );
};

export { HeroBanner };
