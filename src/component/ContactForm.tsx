// Use.
import styled, { css } from 'styled-components';
import { useFormik } from 'formik';
import { useAppContext } from '../context';
import { InputsValidationSchema } from '../util';
import { Context, FormContact } from '../type';
import { Text, Wrapper } from '../ui';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  > * :not(:last-child) {
    margin-bottom: 30px;
  }

  > * :first-child {
    margin-bottom: 0;
  }
`;

const StyledWrapper = styled(Wrapper)`
  > * :not(:last-child) {
    margin-right: 50px;
  }

  > * {
    margin-bottom: 30px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  > * :not(:first-child) {
    margin-top: 10px;
  }
`;

const StyledInput = styled.input<{ isValid: boolean | null }>`
  ${({ theme }) => theme.typography.p};
  max-width: 452px;
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
    `};
`;

const StyledTextArea = styled.textarea<{ isValid: boolean | null }>`
  box-sizing: border-box;
  ${({ theme }) => theme.typography.p};
  width: 100%;
  max-width: 620px;
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
  margin: 0 auto 0 0;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    margin: 0 0 0 auto;
  }
`;

/**
 * Provide component "ContactForm".
 */
const ContactForm = () => {
  const { setContactFormSubState } = useAppContext() as Context;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      message: '',
    },
    validationSchema: InputsValidationSchema,
    onSubmit: async (values) => {
      const postResult = await postMessage(values);
      setContactFormSubState(postResult.status);
    },
  });

  const postMessage = async (values: FormContact) => {
    return await fetch(`${process.env.BASE_POST_URL}/messages`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };

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
