// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Propos, Identity } from '../src/type';
import { BlockBuilder } from '../src/util';
import { Header, Footer } from '../src/component';
import { Layout, Main, Link, ImageWrapper } from '../src/ui';
import { Facebook, Instagram, Twitter } from '../src/theme/icon';

interface Props {
  propos: Propos;
  identity: Identity;
}

const Banner = styled.div`
  position: relative;
  grid-column: 1/2;
  grid-row: 1/2;
  margin-bottom: 180px;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content 45px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: absolute;
    bottom: -45px;
    left: 20px;
    grid-template-columns: max-content 170px max-content 40px;
    grid-template-rows: max-content 17px max-content;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.h1}
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 15px 20px 15px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 1/3;
    grid-row: 1/3;
    padding: 15px 70px 25px 20px;
  }
`;

const SubTitleWrapper = styled.div`
  z-index: 10;
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding: 5px 25px 5px 5px;
  background-color: ${({ theme }) => theme.colors.secondary};

  > *:not(:first-child) {
    margin-left: 15px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 2/5;
    grid-row: 2/4;
    padding: 15px 15px 10px 10px;
  }
`;

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
        <Banner>
          <ImageWrapper width="100%" height="300px">
            <Image
              src={`${process.env.BASE_URL}${propos.background.url}`}
              layout="fill"
              objectFit="cover"
              alt={propos.background.alternativeText}
            />
          </ImageWrapper>
          <TitleWrapper>
            <Title>A propos de l&apos;{identity.name}</Title>
            <SubTitleWrapper>
              {identity.facebook && (
                <Link href={identity.facebook} variant="social">
                  <Facebook size={25} />
                </Link>
              )}
              {identity.instagram && (
                <Link href={identity.instagram} variant="social">
                  <Instagram size={25} />
                </Link>
              )}
              {identity.twitter && (
                <Link href={identity.twitter} variant="social">
                  <Twitter size={25} />
                </Link>
              )}
            </SubTitleWrapper>
          </TitleWrapper>
        </Banner>
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
