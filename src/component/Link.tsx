import { ReactNode } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
}

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

const Link = ({ href, className, children }: Props) => (
  <NextLink href={href} passHref>
    <StyledLink className={className}>{children}</StyledLink>
  </NextLink>
);

export default Link;
