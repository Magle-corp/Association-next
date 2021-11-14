import styled from 'styled-components';
import { Wrapper, Text, List } from '@magle-corp/design-system';

const StyledWrapper = styled(Wrapper)`
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  margin: 10px auto auto;
`;

const StyledBrandWrapper = styled(Wrapper)`
  margin-left: 20px;
`;

const StyledNav = styled.nav`
  margin-right: 20px;
`;

const Header = () => {
  return (
    <StyledWrapper
      direction="row"
      alignItem="flex-end"
      justifyContent="space-between"
    >
      <StyledBrandWrapper>
        <Text as="h1" variant="h1">
          Magle
        </Text>
      </StyledBrandWrapper>
      <StyledNav>
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
      </StyledNav>
    </StyledWrapper>
  );
};

export { Header };
