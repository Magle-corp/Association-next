// Use.
import styled from 'styled-components';
import { Identity } from '../src/type';
import { Header, Footer, ContactBanner, ContactForm } from '../src/component';
import { Layout, Main } from '../src/ui';

interface Props {
  identity: Identity;
}

const StyledMain = styled(Main)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: max-content;
`;

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
        <ContactBanner identity={identity} />
        <StyledMain variant="mono_banner">
          <ContactForm />
        </StyledMain>
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
