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
    padding: 15px 15px 15px 30px;
    color: ${({ theme }) => `${theme.colors.white}`};
    background-color: ${({ theme }) => `${theme.colors.primary}`};
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
  letter-spacing: 0.5rem;
  text-shadow: 3.5px 3.5px ${({ theme }) => theme.colors.black};
`;

const PresentationContainer = styled(Wrapper)`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    z-index: 10;
    grid-column: 3/5;
    grid-row: 2/5;
    box-sizing: border-box;
    padding: 45px 25px 50px 80px;
    background-color: ${({ theme }) => `${theme.colors.secondary}`};
  }

  > *:first-child {
    line-height: 3.2rem;
  }
`;

const LinkWrapper = styled(Wrapper)`
  margin-top: auto;
  margin-left: auto;
  transition: 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLink = styled.span`
  ${({ theme }) => theme.typography.button}
  border: 2px solid ${({ theme }) => theme.colors.white};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
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
        <Slider slider={homepage.slider} />
      </SliderContainer>
      <TitleContainer>
        <Title>{homepage.title}</Title>
      </TitleContainer>
      <PresentationContainer>
        <Text variant="h4">{homepage.content}</Text>
        <LinkWrapper>
          <Link href="/a-propos">
            <StyledLink>Découvrir l'association</StyledLink>
          </Link>
        </LinkWrapper>
      </PresentationContainer>
    </Container>
  );
};

export { HeroBanner };
