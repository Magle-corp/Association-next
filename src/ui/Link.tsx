// Use.
import { ReactNode } from 'react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { InternalLink, ExternalLink } from '../theme/icon';

interface Props {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'internal' | 'external' | 'social' | 'link_action';
}

const StyledLink = styled.a<{ variant: string }>`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  > * {
    display: inline;
  }

  ${({ variant }) =>
    variant == 'internal' &&
    css`
      > *:first-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0%);
        transition: 150ms ease-in-out;

        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.colors.black};
        }
      }
    `}

  ${({ variant }) =>
    variant == 'social' &&
    css`
      transition: 150ms ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }
    `}

  ${({ variant }) =>
    variant == 'link_action' &&
    css`
      ${({ theme }) => theme.typography.link_action}
    `}
`;

const InternalLinkIcon = styled(InternalLink)`
  display: inline;
  margin-left: 5px;
`;

const ExternalLinkIcon = styled(ExternalLink)`
  display: inline;
  margin-left: 5px;
`;

/**
 * Provide UI component "Link".
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
  <NextLink href={href} passHref>
    <StyledLink className={className} variant={variant}>
      {children}
      {variant == 'internal' && <InternalLinkIcon width={15} height={15} />}
      {variant == 'external' && <ExternalLinkIcon width={15} height={15} />}
    </StyledLink>
  </NextLink>
);

export { Link };
