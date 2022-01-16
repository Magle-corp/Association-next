// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Propos, Identity } from '../type';
import { Link, ImageWrapper } from '../ui';
import { Facebook, Instagram, Twitter } from '../theme/icon';

interface Props {
  propos: Propos;
  identity: Identity;
}

const StyledBanner = styled.div`
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
const Banner = ({ propos, identity }: Props) => {
  return (
    <StyledBanner>
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
    </StyledBanner>
  );
};

export { Banner };
