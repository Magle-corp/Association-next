// Use.
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { Identity } from '../type';
import { Link, Text, Wrapper, ImageWrapper } from '../ui';
import { Navbar } from './index';
import { BurgerMenu, Cross } from '../theme/icon';

interface Props {
  identity: Identity;
}

const StyledHeader = styled.header<{ view: boolean }>`
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  min-height: 70px;
  padding: 10px 0;
  background-color: ${({ theme, view }) =>
    view ? theme.colors.secondary : theme.colors.white};

  > *:not(:last-child) {
    margin: 0 20px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    position: relative;
    box-sizing: border-box;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
    padding: 0 20px;
    margin: 10px auto;
    background-color: ${({ theme }) => theme.colors.white};

    > *:not(:last-child) {
      margin: 0;
    }
  }
`;

const Brand = styled(Wrapper)`
  flex-wrap: nowrap;
`;

const StyledImageWrapper = styled(ImageWrapper)`
  margin-right: 10px;
`;

const BurgerMenuIcon = styled(BurgerMenu)`
  display: block;
  animation: ${({ theme }) => theme.animations.fadeIn} 300ms linear;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

const CrossIcon = styled(Cross)`
  animation: ${({ theme }) => theme.animations.fadeInRotate} 300ms linear;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobile}`}) {
    display: none;
  }
`;

/**
 * Provide component "Header".
 *
 * @param identity
 *   Strapi custom content type "Identite".
 */
const Header = ({ identity }: Props) => {
  const [navbarView, setNavbarView] = useState(Boolean);

  return (
    <StyledHeader view={navbarView}>
      <Brand variant="horizontal">
        <StyledImageWrapper width="40px" height="40px">
          <Image
            src={`${process.env.BASE_URL}${identity.logo.formats.thumbnail.url}`}
            layout="fill"
            objectFit="cover"
            alt={identity.logo.alternativeText}
          />
        </StyledImageWrapper>
        <Wrapper variant="horizontal">
          <Link href="/">
            <Text as="h1" variant="h1">
              {identity.name}
            </Text>
          </Link>
        </Wrapper>
      </Brand>
      {navbarView ? (
        <CrossIcon size={40} onClick={() => setNavbarView(!navbarView)} />
      ) : (
        <BurgerMenuIcon size={40} onClick={() => setNavbarView(!navbarView)} />
      )}
      <Navbar navbarView={navbarView} />
    </StyledHeader>
  );
};

export { Header };
