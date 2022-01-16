// Use.
import { Homepage, Identity } from '../src/type';
import { Header, HeroBanner, Footer } from '../src/component';
import { Layout, Main } from '../src/ui';

interface Props {
  homepage: Homepage;
  identity: Identity;
}

/**
 * Provide home page.
 *
 * @param homepage
 *   Strapi custom content type "Page d'accueil".
 * @param identity
 *   Strapi custom content type "Identite".
 */
const Home = ({ homepage, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout variant="mono">
        <Main variant="mono">
          <HeroBanner homepage={homepage} />
        </Main>
      </Layout>
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
