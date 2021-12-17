// Use.
import styled from 'styled-components';
import { Main } from '@magle-corp/design-system';
import { Homepage, Identity } from '../src/type';
import { Header, HeroBanner, Footer } from '../src/component';
import { Layout } from '../src/ui';

interface Props {
  homepage: Homepage;
  identity: Identity;
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`;

const Home = ({ homepage, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <Main>
          <HeroBanner homepage={homepage} />
        </Main>
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
