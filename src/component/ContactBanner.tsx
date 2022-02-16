// Use.
import styled from 'styled-components';
import { SocialMedias } from '../component';
import { Identity } from '../type';

interface Props {
  identity: Identity;
}

const StyledBanner = styled.div`
  position: relative;
  grid-column: 1/2;
  grid-row: 1/2;
  margin-bottom: 100px;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content 45px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-template-columns: 1fr 170px 80px;
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
    grid-column: 1/4;
    grid-row: 1/3;
    padding: 15px 70px 25px 20px;
  }
`;

const SocialMediasWrapper = styled.div`
  z-index: 10;
  grid-column: 1/2;
  grid-row: 2/3;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  padding: 5px 25px 5px 5px;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    grid-column: 2/3;
    grid-row: 2/4;
    justify-content: center;
    padding: 15px 15px 10px 10px;
  }
`;

/**
 * Provides component "ContactBanner".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const ContactBanner = ({ identity }: Props) => {
  return (
    <StyledBanner>
      <TitleWrapper>
        <Title>Contactez nous</Title>
        <SocialMediasWrapper>
          <SocialMedias identity={identity} />
        </SocialMediasWrapper>
      </TitleWrapper>
    </StyledBanner>
  );
};

export { ContactBanner };
