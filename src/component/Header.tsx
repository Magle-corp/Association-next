// Use.
import styled from 'styled-components';
import { Text, List } from '@magle-corp/design-system';
import { Link } from '../ui';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  padding: 10px 20px 0 20px;
  margin: 0 auto;
`;

/**
 * Provide component "Header".
 */
const Header = () => {
  return (
    <StyledHeader>
      <>
        <Link href="/">
          <Text as="h1" variant="h1">
            Magle
          </Text>
        </Link>
      </>
      <nav>
        <List variant="horizontal" spacing={25}>
          <li>
            <Link href="/articles">
              <Text as="span" variant="h4">
                Articles
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="span" variant="h4">
                A propos
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Text as="span" variant="h4">
                Contact
              </Text>
            </Link>
          </li>
        </List>
      </nav>
    </StyledHeader>
  );
};

export { Header };
