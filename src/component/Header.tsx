// Use.
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Text, Wrapper } from '@magle-corp/design-system';
import { Identity } from '../type';
import { Link } from '../ui';
import { BurgerMenu, ArrowDown } from '../theme/icon';

interface Props {
  identity: Identity;
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  > *:not(:last-child) {
    margin: 0 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    box-sizing: border-box;
    max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
    padding: 0 20px;
    margin: 0 auto;

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

const StyledBurgerMenu = styled(BurgerMenu)`
  display: block;
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;

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

const StyledArrowIcon = styled(ArrowDown)`
  margin-left: 5px;
`;

const SubMenu = styled.ul`
  margin: 10px 0 0 15px;
  list-style: none;

  > *:not(:first-child) {
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
    position: absolute;
    width: 150px;
    padding-top: 10px;
    margin: 0;
  }
`;

/**
 * Provide component "Header".
 */
const Header = ({ identity }: Props) => {
  const [navbarView, setNavbarView] = useState(Boolean);

  return (
    <StyledHeader data-cy="header">
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
      <StyledBurgerMenu
        width={45}
        height={45}
        onClick={() => setNavbarView(!navbarView)}
      />
      <Navbar view={navbarView}>
        <Menu>
          <li data-cy="link">
            <Link href="/publications">
              <Text as="span" variant="h4">
                Publications
                <StyledArrowIcon width={20} height={20} />
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
