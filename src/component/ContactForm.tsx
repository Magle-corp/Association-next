// Use.
import styled from 'styled-components';
import { Text, Wrapper } from '../ui';

const StyledForm = styled.form`
  grid-column: 2/3;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;

  > * :not(:first-child) {
    margin-top: 30px;
  }
`;

const StyledWrapper = styled(Wrapper)`
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  > * :not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledInput = styled.input`
  ${({ theme }) => theme.typography.p}
  padding: 4px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  outline: none;
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  ${({ theme }) => theme.typography.p};
  width: 100%;
  height: 150px;
  padding: 4px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  outline: none;
  resize: none;
`;

/**
 * Provide component "ContactForm".
 */
const ContactForm = () => {
  return (
    <StyledForm>
      <StyledWrapper variant="horizontal">
        <StyledLabel>
          <Text as="span" variant="h4">
            Nom
          </Text>
          <StyledInput type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          <Text as="span" variant="h4">
            Prénom
          </Text>
          <StyledInput type="text" name="surname" />
        </StyledLabel>
      </StyledWrapper>
      <StyledLabel>
        <Text as="span" variant="h4">
          Adresse email
        </Text>
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        <Text as="span" variant="h4">
          Object
        </Text>
        <StyledInput type="text" name="object" />
      </StyledLabel>
      <StyledLabel>
        <Text as="span" variant="h4">
          Message
        </Text>
        <StyledTextArea name="message" />
      </StyledLabel>
    </StyledForm>
  );
};

export { ContactForm };
