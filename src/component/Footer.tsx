// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Identity } from '../type';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Link } from '../ui';
import { Facebook, Instagram, Twitter } from '../theme/icon';

interface Props {
  identity: Identity;
}

const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  margin: auto auto 0 auto;

  > * {
    margin: 30px 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    > * {
      margin: 0 0 20px 0;
    }
  }
`;

const SocialWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    margin-left: 15px;
  }
`;

const AddressWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 5px;
  }
`;

const Logo = styled(Wrapper)`
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

/**
 * Provide component "Footer"
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const Footer = ({ identity }: Props) => {
  return (
    <StyledFooter>
      <Wrapper direction="row">
        <AddressWrapper>
          <Text>
            {identity.address ? identity.address : ''}
            <br /> {identity.zip_code ? identity.zip_code : ''}{' '}
            {identity.city ? identity.city : ''}
          </Text>
          {identity.phone && <Text>{identity.phone}</Text>}
        </AddressWrapper>
        <Logo>
          <Image
            src={`${process.env.BASE_URL}${identity.logo.formats.thumbnail.url}`}
            layout="fill"
            objectFit="cover"
            alt={identity.logo.alternativeText}
          />
        </Logo>
      </Wrapper>
      <SocialWrapper direction="row" data-cy="link">
        {identity.facebook && (
          <Link href={identity.facebook} variant="social">
            <Facebook width={30} height={30} />
          </Link>
        )}
        {identity.instagram && (
          <Link href={identity.instagram} variant="social">
            <Instagram width={30} height={30} />
          </Link>
        )}
        {identity.twitter && (
          <Link href={identity.twitter} variant="social">
            <Twitter width={30} height={30} />
          </Link>
        )}
      </SocialWrapper>
      <Wrapper>
        <Text>{identity.name} 2021</Text>
        <Text>{identity.email}</Text>
      </Wrapper>
    </StyledFooter>
  );
};

export { Footer };
