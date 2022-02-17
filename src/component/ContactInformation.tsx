// Use.
import styled from 'styled-components';
import { Identity } from '../type';
import { Text, Wrapper } from '../ui';

interface Props {
  identity: Identity;
}

const StyledTitle = styled(Text)`
  width: max-content;
  padding: 7px 40px 7px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

/**
 * Provide page "ContactInformation".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const ContactInformation = ({ identity }: Props) => {
  return (
    <>
      {identity.phone && (
        <Wrapper variant="vertical" spacing="30px 0 0 0">
          <StyledTitle variant="h3">Téléphone</StyledTitle>
          <Text>{identity.phone}</Text>
        </Wrapper>
      )}
      {identity.email && (
        <Wrapper variant="vertical" spacing="30px 0 0 0">
          <StyledTitle variant="h3">Email</StyledTitle>
          <Text>{identity.email}</Text>
        </Wrapper>
      )}
      {identity.address && identity.zip_code && identity.address && (
        <Wrapper variant="vertical" spacing="30px 0 0 0">
          <StyledTitle variant="h3">Adresse</StyledTitle>
          <Text>
            {identity.address}, {identity.zip_code} {identity.city}
          </Text>
        </Wrapper>
      )}
    </>
  );
};

export { ContactInformation };
