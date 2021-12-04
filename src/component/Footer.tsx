// Use.
import styled from 'styled-components';
import { Identity } from '../type';
import { Wrapper, Text } from '@magle-corp/design-system';
import { Link } from '../ui';
import { Facebook, Instagram, Twitter } from '../theme/icon';

interface Props {
  identity: Identity;
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 10px 20px;
  margin: auto auto 0 auto;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;

const SocialWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    margin-left: 15px;
  }
`;

const InformationWrapper = styled(Wrapper)`
  > *:not(:first-child) {
    margin-top: 5px;
  }
`;

const Footer = ({ identity }: Props) => {
  return (
    <StyledFooter>
      <SocialWrapper direction="row">
        {identity.facebook && (
          <Link href={identity.facebook}>
            <Facebook width={35} height={35} />
          </Link>
        )}
        {identity.instagram && (
          <Link href={identity.instagram}>
            <Instagram width={35} height={35} />
          </Link>
        )}
        {identity.twitter && (
          <Link href={identity.twitter}>
            <Twitter width={35} height={35} />
          </Link>
        )}
      </SocialWrapper>
      <Text>{identity.name} 2021</Text>
      <InformationWrapper>
        <Text>{identity.email}</Text>
        <Text>
          {identity.address ? identity.address : ''},{' '}
          {identity.zip_code ? identity.zip_code : ''}{' '}
          {identity.city ? identity.city : ''}
        </Text>
        {identity.phone && <Text>{identity.phone}</Text>}
      </InformationWrapper>
    </StyledFooter>
  );
};

export { Footer };
