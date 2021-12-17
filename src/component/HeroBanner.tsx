// Use.
import styled from 'styled-components';
import { Main, Wrapper, Text, Button } from '@magle-corp/design-system';
import { Homepage } from '../type';
import { Slider } from './index';

interface Props {
  homepage: Homepage;
}

const Container = styled(Main)`
  display: grid;
  grid-template-columns: 50% 10% 5% 30% 5%;
  grid-template-rows: 20% 6% 64% 10%;
  height: 500px;
`;

const SliderContainer = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    z-index: 20;
    grid-column: 1/4;
    grid-row: 2/4;
    background-color: ${({ theme }) => `${theme.colors.grey}`};
  }
`;

const TitleContainer = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    z-index: 30;
    grid-column: 2/6;
    grid-row: 1/3;
    box-sizing: border-box;
    padding: 15px;
    color: ${({ theme }) => `${theme.colors.white}`};
    background-color: ${({ theme }) => `${theme.colors.primary}`};
  }
`;

const PresentationContainer = styled(Wrapper)`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    z-index: 10;
    grid-column: 3/5;
    grid-row: 2/5;
    box-sizing: border-box;
    padding: 45px 25px 20px 80px;
    background-color: ${({ theme }) => `${theme.colors.secondary}`};
  }

  > *:first-child {
    line-height: 3.2rem;
  }

  > *:not(:first-child) {
    margin-top: 30px;
    margin-left: auto;
  }
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
        <Slider slider={homepage.Banniere} />
      </SliderContainer>
      <TitleContainer>
        <Text as="h1" variant="h1">
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </TitleContainer>
      <PresentationContainer>
        <Text variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          convallis sem urna, eu ultrices sem tincidunt sit amet. Integer
          aliquam libero eleifend neque tristique finibus. Lorem ipsum dolor
          biam.
        </Text>
        <Button>Click me</Button>
      </PresentationContainer>
    </Container>
  );
};

export { HeroBanner };
