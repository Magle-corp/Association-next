// Use.
import styled from 'styled-components';
import { Identity } from '../src/type';
import {
  Header,
  Footer,
  ContactBanner,
  ContactForm,
  ContactInformation,
} from '../src/component';
import { Layout, Main, Text, Wrapper } from '../src/ui';

interface Props {
  identity: Identity;
}

const StyledMain = styled(Main)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-template-columns: 50% 50%;
    grid-template-rows: max-content;
  }
`;

const StyledRightWrapper = styled(Wrapper)`
  grid-column: 1/2;
  grid-row: 2/3;

  > *:not(:first-child) {
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const StyledLeftWrapper = styled(Wrapper)`
  grid-column: 1/2;
  grid-row: 1/2;

  > * {
    margin-bottom: 40px;
  }
`;

const StyledTitle = styled(Text)`
  padding: 7px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
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
          <StyledRightWrapper variant="vertical">
            <StyledTitle variant="h3">Ecrivez nous</StyledTitle>
            <ContactForm />
          </StyledRightWrapper>
          <StyledLeftWrapper variant="vertical">
            <ContactInformation identity={identity} />
          </StyledLeftWrapper>
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
