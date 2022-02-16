// Use.
import { Propos, Identity } from '../src/type';
import { BlockBuilder } from '../src/util';
import { Header, AboutBanner, Footer } from '../src/component';
import { Layout, Main } from '../src/ui';

interface Props {
  propos: Propos;
  identity: Identity;
}

/**
 * Provide page "A propos".
 *
 * @param propos
 *   Strapi custom content type "Propos".
 * @param identity
 *   Strapi custom content type "Identite".
 */
const About = ({ propos, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout variant="mono_banner">
        <AboutBanner propos={propos} identity={identity} />
        <Main variant="mono_banner">
          <BlockBuilder blocks={propos.dynamic_zone} />
        </Main>
      </Layout>
      <Footer identity={identity} />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const proposQuery = `/a-propos`;
  const proposResult = await fetch(`${process.env.BASE_URL}${proposQuery}`);
  const propos = await proposResult.json();

  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { propos, identity },
    revalidate: 60 * 60,
  };
}
