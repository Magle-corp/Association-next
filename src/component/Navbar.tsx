// Use.
import styled, { css } from 'styled-components';
import { Link, Text } from '../ui';

interface Props {
  navbarView: boolean;
}

const StyledNavbar = styled.nav<{ navbarView: boolean }>`
  display: none;

  ${({ theme, navbarView }) =>
    navbarView &&
    css`
      position: absolute;
      display: flex;
      top: 100%;
      width: 100vh;
      height: 100vh;
      padding-top: 20px;
      padding-left: 20px;
      background-color: ${theme.colors.secondary};
    `};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    display: flex;
    top: 0;
    width: max-content;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  > *:not(:first-child) {
    margin-top: 15px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    flex-direction: row;

    > *:not(:first-child) {
      margin-left: 30px;
      margin-top: 0;
    }

    > li {
      &:hover {
        ul {
          display: block;
        }
      }
    }
  }
`;

const SubMenu = styled.ul`
  margin: 15px 0 0 15px;
  list-style: none;

  > *:not(:first-child) {
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
    position: absolute;
    left: -15px;
    width: 100px;
    padding: 15px;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    animation: ${({ theme }) => theme.animations.appearTopFadeIn} 200ms linear;
  }
`;

/**
 * Provide component "Navbar".
 *
 * @param navbarView
 *   State "navbarView", boolean.
 */
const Navbar = ({ navbarView }: Props) => {
  return (
    <StyledNavbar navbarView={navbarView}>
      <Menu>
        <li>
          <Link href="/publications">
            <Text as="span" variant="h4">
              Publications
            </Text>
          </Link>
          <SubMenu>
            <li>
              <Link href="/publications/articles">
                <Text as="span" variant="h4">
                  Articles
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/publications/evenements">
                <Text as="span" variant="h4">
                  Evenements
                </Text>
              </Link>
            </li>
          </SubMenu>
        </li>
        <li>
          <Link href="/a-propos">
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
      </Menu>
    </StyledNavbar>
  );
};

export { Navbar };
