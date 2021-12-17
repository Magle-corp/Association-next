// Use.
import qs from 'qs';
import styled from 'styled-components';
import { Main, Text } from '@magle-corp/design-system';
import { Homepage, Identity } from '../src/type';
import { Header, Slider, Footer } from '../src/component';
import { Layout } from '../src/ui';

interface Props {
  homepage: Homepage;
  identity: Identity;
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`;

const StyledMain = styled(Main)`
  display: grid;
  grid-template-columns: 50% 10% 5% 30% 5%;
  grid-template-rows: 20% 5% 65% 10%;
  height: 500px;
`;

const BackgroundOne = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    z-index: 20;
    grid-column: 1/4;
    grid-row: 2/4;
  }
`;

const BackgroundTwo = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    z-index: 30;
    background-color: lightgreen;
    grid-column: 2/6;
    grid-row: 1/3;
    padding: 10px;
    box-sizing: border-box;
  }
`;

const BackgroundThree = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    z-index: 10;
    background-color: lightyellow;
    grid-column: 3/5;
    grid-row: 2/5;
    padding: 45px 20px 20px 80px;
    box-sizing: border-box;
  }
`;

const Home = ({ homepage, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <StyledMain>
          <BackgroundOne>
            <Slider slider={homepage.Banniere} />
          </BackgroundOne>
          <BackgroundTwo>
            <Text as="h1" variant="h1">
              Lorem ipsum dolor sit amet, consectetur
            </Text>
          </BackgroundTwo>
          <BackgroundThree>
            <Text variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis sem urna, eu ultrices sem tincidunt sit amet. Integer
              aliquam libero eleifend neque tristique finibus. Lorem ipsum dolor
              biam.
            </Text>
          </BackgroundThree>
        </StyledMain>
      </StyledLayout>
      <Footer identity={identity} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const HpQuery = `/page-d-accueil`;
  const HpResult = await fetch(`${process.env.BASE_URL}${HpQuery}`);
  const homepage = await HpResult.json();

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { homepage, identity },
    revalidate: 60 * 60,
  };
}
