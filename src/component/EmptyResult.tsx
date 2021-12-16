// Use.
import styled from 'styled-components';
import { Wrapper, Text } from '@magle-corp/design-system';

const Container = styled(Wrapper)`
  width: 100vh;
`;

/**
 * Provide component "EmptyResult".
 */
const EmptyResult = () => {
  return (
    <Container>
      <Text variant="h3">Aucun résultats</Text>
    </Container>
  );
};

export { EmptyResult };
