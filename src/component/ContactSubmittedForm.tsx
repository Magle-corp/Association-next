// Use.
import styled from 'styled-components';
import { useAppContext } from '../context';
import { Context } from '../type';
import { Wrapper, Text } from '../ui';
import { Valid, Incorrect } from '../theme/icon';

const StyledWrapper = styled(Wrapper)`
  align-items: center;
`;

const ContactSubmittedForm = () => {
  const { contactFormSubState } = useAppContext() as Context;
  return (
    <StyledWrapper variant="vertical" spacing="20px 0 0 0">
      {contactFormSubState === 200 ? (
        <>
          <Wrapper variant="horizontal" spacing="0 0 0 15px">
            <Text variant="h4">Nous avons reçus votre message</Text>
            <Valid size={30} />
          </Wrapper>
          <Text>Nous revenons vers vous le plus rapidement possible</Text>
        </>
      ) : (
        <>
          <Wrapper variant="horizontal" spacing="0 0 0 15px">
            <Text variant="h4">Une erreur est survenue</Text>
            <Incorrect size={30} />
          </Wrapper>
          <Text>Veuillez nous excuser pour le dérangement</Text>
        </>
      )}
    </StyledWrapper>
  );
};

export { ContactSubmittedForm };
