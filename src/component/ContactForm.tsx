// Use.
import styled, { css } from 'styled-components';
import { useFormik } from 'formik';
import { InputsValidationSchema } from '../util';
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

const StyledInput = styled.input<{ isValid: boolean | null }>`
  ${({ theme }) => theme.typography.p}
  padding: 4px;
  border-radius: 3px;

  ${({ isValid }) =>
    isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.error};
    `}

  ${({ isValid }) =>
    isValid === null &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    `}
`;

const StyledTextArea = styled.textarea<{ isValid: boolean | null }>`
  box-sizing: border-box;
  ${({ theme }) => theme.typography.p};
  width: 100%;
  height: 150px;
  padding: 4px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  resize: none;

  ${({ isValid }) =>
    isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary};
    `}

  ${({ isValid }) =>
    !isValid &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.error};
    `}

  ${({ isValid }) =>
    isValid === null &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.darkGrey};
    `}
`;

const StyledSubmit = styled.input`
  ${({ theme }) => theme.typography.button_action};
  margin-left: auto;
`;

/**
 * Provide component "ContactForm".
 */
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    validationSchema: InputsValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledWrapper variant="horizontal">
        <StyledLabel htmlFor="name">
          <Text as="span" variant="h4">
            Nom
          </Text>
          <StyledInput
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
            isValid={formik.touched.name ? !formik.errors.name : null}
          />
          {formik.touched.name && formik.errors.name ? (
            <Text as="span">{formik.errors.name}</Text>
          ) : null}
        </StyledLabel>
        <StyledLabel htmlFor="surname">
          <Text as="span" variant="h4">
            Prénom
          </Text>
          <StyledInput
            id="surname"
            type="text"
            {...formik.getFieldProps('surname')}
            isValid={formik.touched.surname ? !formik.errors.surname : null}
          />
          {formik.touched.surname && formik.errors.surname ? (
            <Text as="span">{formik.errors.surname}</Text>
          ) : null}
        </StyledLabel>
      </StyledWrapper>
      <StyledLabel htmlFor="email">
        <Text as="span" variant="h4">
          Adresse email
        </Text>
        <StyledInput
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          isValid={formik.touched.email ? !formik.errors.email : null}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text as="span">{formik.errors.email}</Text>
        ) : null}
      </StyledLabel>
      <StyledLabel htmlFor="message">
        <Text as="span" variant="h4">
          Message
        </Text>
        <StyledTextArea
          id="message"
          {...formik.getFieldProps('message')}
          isValid={formik.touched.message ? !formik.errors.message : null}
        />
        {formik.touched.message && formik.errors.message ? (
          <Text as="span">{formik.errors.message}</Text>
        ) : null}
      </StyledLabel>
      <StyledSubmit type="submit" value="Envoyer votre message" />
    </StyledForm>
  );
};

export { ContactForm };
