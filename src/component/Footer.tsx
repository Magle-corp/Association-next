// Use.
import Image from 'next/image';
import styled from 'styled-components';
import { Identity } from '../type';
import { SocialMedias } from '../component';
import { Wrapper, Text, ImageWrapper } from '../ui';

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

const StyledImageWrapper = styled(ImageWrapper)`
  margin-left: 20px;
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
      <Wrapper variant="horizontal">
        <Wrapper variant="vertical" spacing="15px 0 0 0">
          <Text>
            {identity.address ? identity.address : ''}
            <br /> {identity.zip_code ? identity.zip_code : ''}{' '}
            {identity.city ? identity.city : ''}
          </Text>
          {identity.phone && <Text>{identity.phone}</Text>}
        </Wrapper>
        <StyledImageWrapper width="40px" height="40px">
          <Image
            src={`${process.env.BASE_URL}${identity.logo.formats.thumbnail.url}`}
            layout="fill"
            objectFit="cover"
            alt={identity.logo.alternativeText}
          />
        </StyledImageWrapper>
      </Wrapper>
      <SocialMedias identity={identity} />
      <Wrapper variant="vertical" spacing="15px 0 0 0">
        <Text>{identity.name} 2021</Text>
        <Text>{identity.email}</Text>
      </Wrapper>
    </StyledFooter>
  );
};

export { Footer };
