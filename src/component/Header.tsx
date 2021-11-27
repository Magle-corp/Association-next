// Use.
import { useState } from 'react';
import styled from 'styled-components';
import { Text } from '@magle-corp/design-system';
import { Link } from '../ui';
import { BurgerMenu } from '../theme/icon';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  min-width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};

  > *:not(:last-child) {
    padding: 0 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    top: 0;
    min-width: 0;
    max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
    padding: 0 20px;
    margin: 0 auto;

    > *:not(:last-child) {
      padding: 0;
    }
  }
`;

const StyledBurgerMenu = styled(BurgerMenu)`
  display: block;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

const StyledNav = styled.nav<{ view: boolean }>`
  display: none;

  ${({ theme, view }) =>
    view
      ? `
  position: absolute;
  display: flex;
  top: 100%;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.white}
  `
      : ``};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    display: flex;
    top: 0;
    width: max-content;
    padding: 0;
  }
`;

const StyledList = styled.ul`
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
  }
`;

/**
 * Provide component "Header".
 */
const Header = () => {
  const [navbarView, setNavbarView] = useState(Boolean);

  return (
    <StyledHeader>
      <>
        <Link href="/">
          <Text as="h1" variant="h1">
            Magle
          </Text>
        </Link>
      </>
      <StyledBurgerMenu
        width={45}
        height={45}
        onClick={() => setNavbarView(!navbarView)}
      />
      <StyledNav view={navbarView}>
        <StyledList>
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
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
