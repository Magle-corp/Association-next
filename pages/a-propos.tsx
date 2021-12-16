// Use.
import styled from 'styled-components';
import { Main, Text } from '@magle-corp/design-system';
import { Propos, Identity } from '../src/type';
import { BlockBuilder } from '../src/util';
import { Header, Footer } from '../src/component';
import { Layout } from '../src/ui';

interface Props {
  propos: Propos;
  identity: Identity;
}

const StyledLayout = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
`;

const About = ({ propos, identity }: Props) => {
  return (
    <>
      <Header identity={identity} />
      <StyledLayout>
        <Main>
          <Text as="h1" variant="h1">
            A propos
          </Text>
          <BlockBuilder blocks={propos.dynamic_zone} />
        </Main>
      </StyledLayout>
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
