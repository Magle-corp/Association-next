// Use.
import { Identity } from '../src/type';
import { Header, Footer, ContactBanner, ContactForm } from '../src/component';
import { Layout, Main } from '../src/ui';

interface Props {
  identity: Identity;
}

/**
 * Provide page "Contact".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const Contact = ({ identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <Layout variant="mono_banner">
        <Main variant="mono_banner">
          <ContactBanner identity={identity} />
          <ContactForm />
        </Main>
      </Layout>
      <Footer identity={identity} />
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  const identityQuery = `/identite`;
  const identityResult = await fetch(`${process.env.BASE_URL}${identityQuery}`);
  const identity = await identityResult.json();

  return {
    props: { identity },
    revalidate: 60 * 60,
  };
}
