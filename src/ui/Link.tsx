// Use.
import { ReactNode } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { InternalLink, ExternalLink } from '../theme/icon';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'internal' | 'external';
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

const StyledInlineLink = styled(StyledLink)`
  > *:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0%);
    transition: 150ms ease-in-out;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
}
`;

const StyledInternalLink = styled(InternalLink)`
  display: inline;
  margin-left: 5px;
`;

const StyledExternalLink = styled(ExternalLink)`
  display: inline;
  margin-left: 5px;
`;

/**
 * Provide component "Link".
 *
 * @param href
 *   Link URL.
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component.
 */
const Link = ({ href, className, children, variant = 'default' }: Props) => (
  <>
    {variant === 'internal' && (
      <NextLink href={href} passHref>
        <StyledInlineLink className={className}>
          {children}
          <StyledInternalLink width={15} height={15} />
        </StyledInlineLink>
      </NextLink>
    )}
    {variant === 'external' && (
      <NextLink href={href} passHref>
        <StyledLink className={className}>
          {children}
          <StyledExternalLink width={15} height={15} />
        </StyledLink>
      </NextLink>
    )}
    {variant !== 'internal' && variant !== 'external' && (
      <NextLink href={href} passHref>
        <StyledLink className={className}>{children}</StyledLink>
      </NextLink>
    )}
  </>
);

export { Link };
