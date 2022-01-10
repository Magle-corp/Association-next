// Use.
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Text, Wrapper } from '@magle-corp/design-system';
import { Identity } from '../type';
import { Link } from '../ui';
import { BurgerMenu, Cross } from '../theme/icon';

interface Props {
  identity: Identity;
}

const StyledHeader = styled.header<{ view: boolean }>`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  padding-bottom: 10px;
  background-color: ${({ theme, view }) =>
    view ? theme.colors.grey : theme.colors.white};

  > *:not(:last-child) {
    margin: 0 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    box-sizing: border-box;
    max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
    padding: 0 20px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};

    > *:not(:last-child) {
      margin: 0;
    }
  }
`;

const Brand = styled(Wrapper)`
  flex-wrap: nowrap;
`;

const Logo = styled(Wrapper)`
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const BurgerMenuIcon = styled(BurgerMenu)`
  display: block;
  animation: ${({ theme }) => theme.animations.fadeIn} 500ms linear;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

const CrossIcon = styled(Cross)`
  animation: ${({ theme }) => theme.animations.fadeIn} 500ms linear;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

const Navbar = styled.nav<{ view: boolean }>`
  display: none;

  ${({ theme, view }) =>
    view
      ? `
  position: absolute;
  display: flex;
  top: 100%;
  width: 100%;
  padding: 20px;
  background-color: ${theme.colors.grey}
  `
      : ``};

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
    left: -8px;
    width: 100px;
    padding: 10px;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.primary};

    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

/**
 * Provide component "Header".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 *
 */
const Header = ({ identity }: Props) => {
  const [navbarView, setNavbarView] = useState(Boolean);

  return (
    <StyledHeader data-cy="header" view={navbarView}>
      <Brand direction="row">
        <Logo>
          <Image
            src={`${process.env.BASE_URL}${identity.logo.formats.thumbnail.url}`}
            layout="fill"
            objectFit="cover"
            alt={identity.logo.alternativeText}
          />
        </Logo>
        <Wrapper data-cy="link">
          <Link href="/">
            <Text as="h1" variant="h1">
              {identity.name}
            </Text>
          </Link>
        </Wrapper>
      </Brand>
      {navbarView ? (
        <Cross
          width={45}
          height={45}
          onClick={() => setNavbarView(!navbarView)}
        />
      ) : (
        <StyledBurgerMenu
          width={45}
          height={45}
          onClick={() => setNavbarView(!navbarView)}
        />
      )}
      <Navbar view={navbarView}>
        <Menu>
          <li data-cy="link">
            <Link href="/publications">
              <Text as="span" variant="h4">
                Publications
              </Text>
            </Link>
            <SubMenu>
              <li data-cy="link">
                <Link href="/publications/articles">
                  <Text as="span" variant="h4">
                    Articles
                  </Text>
                </Link>
              </li>
              <li data-cy="link">
                <Link href="/publications/evenements">
                  <Text as="span" variant="h4">
                    Evenements
                  </Text>
                </Link>
              </li>
            </SubMenu>
          </li>
          <li data-cy="link">
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
      </Navbar>
    </StyledHeader>
  );
};

export { Header };
