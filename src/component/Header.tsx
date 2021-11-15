import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';

const StyledWrapper = styled(Wrapper)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 0 20px;
  margin: 10px auto auto;
`;

const Header = () => {
  return (
    <StyledWrapper
      direction="row"
      alignItem="flex-end"
      justifyContent="space-between"
    >
      <Wrapper>
        <Text as="h1" variant="h1">
          Magle
        </Text>
      </Wrapper>
      <nav>
        <List variant="horizontal" spacing={25}>
          <li>
            <Text variant="h4">Articles</Text>
          </li>
          <li>
            <Text variant="h4">A propos</Text>
          </li>
          <li>
            <Text variant="h4">Contact</Text>
          </li>
        </List>
      </nav>
    </StyledWrapper>
  );
};

export { Header };
