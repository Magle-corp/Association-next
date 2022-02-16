// Use.
import styled from 'styled-components';
import { Link, Text } from '../ui';

interface Props {
  navbarView: boolean;
}

const StyledNavbar = styled.nav<{ navbarView: boolean }>`
  display: none;

  ${({ theme, navbarView }) =>
    navbarView
      ? `
    position: absolute;
    display: flex;
    top: 100%;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.white}`
      : ``};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    display: flex;
    top: 0;
    width: max-content;
    height: max-content;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 30px;
  list-style: none;
  text-align: center;

  > li > a > span {
    ${({ theme }) => theme.typography.h2};
    padding-bottom: 3px;
    border-bottom: ${({ theme }) => `4px solid ${theme.colors.primary}`};
  }

  > li > ul > li > a > span {
    ${({ theme }) => theme.typography.h3};
  }

  > *:not(:first-child) {
    margin-top: 45px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    flex-direction: row;
    width: max-content;
    margin: 0;
    text-align: left;

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

    > li > a > span {
      ${({ theme }) => theme.typography.h4}
      padding-bottom: 0;
      border-bottom: unset;
    }

    > li > ul > li > a > span {
      ${({ theme }) => theme.typography.h4}
    }
  }
`;

const SubMenu = styled.ul`
  margin-top: 25px;
  list-style: none;

  > *:not(:first-child) {
    margin-top: 20px;
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
          <Link href="/contact">
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
