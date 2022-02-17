// Use.
import styled from 'styled-components';
import { Identity } from '../type';
import { Text } from '../ui';

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
      <StyledTitle variant="h3">Téléphone</StyledTitle>
      <Text>{identity.phone}</Text>
      <StyledTitle variant="h3">Email</StyledTitle>
      <Text>{identity.email}</Text>
      <StyledTitle variant="h3">Adresse</StyledTitle>
      <Text>
        {identity.address}, {identity.zip_code} {identity.city}
      </Text>
    </>
  );
};

export { ContactInformation };
