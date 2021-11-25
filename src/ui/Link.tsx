// Use.
import { ReactNode } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { InternalLink } from '../theme/icon';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'inline';
}

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  > * {
    display: inline;
  }
`;

const StyledInternalLink = styled(InternalLink)`
  display: inline;
  margin-left: 5px;
`;

const Link = ({ href, className, children, variant = 'default' }: Props) => (
  <NextLink href={href} passHref>
    <StyledLink className={className}>
      {children}
      {variant === 'inline' && <StyledInternalLink width={15} height={15} />}
    </StyledLink>
  </NextLink>
);

export { Link };
