// Use.
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant: 'duo' | 'duo_breadcrumb';
  spacing?: string;
}

const StyledAside = styled.aside<{ variant: string; spacing: string }>`
  box-sizing: border-box;

  ${({ spacing }) =>
    spacing != '0px' &&
    css`
      > *:not(:first-child) {
        margin: ${spacing};
      }
    `};

  ${({ variant }) =>
    variant == 'duo' &&
    css`
      grid-column: 1/2;
      grid-row: 2/3;
      margin-top: 90px;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-column: 2/3;
        grid-row: 1/2;
        margin-top: 0;
      }
    `};

  ${({ variant }) =>
    variant == 'duo_breadcrumb' &&
    css`
      grid-column: 1/2;
      grid-row: 2/3;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    `};
`;

/**
 * Provide UI component "Aside".
 *
 * @param className
 *   Styled component override.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component, string.
 * @param spacing
 *   The margin between each child, string.
 * @param props
 *   Props.
 */
const Aside = ({
  className,
  children,
  variant,
  spacing = '0px',
  ...props
}: Props) => (
  <StyledAside
    className={className}
    variant={variant}
    spacing={spacing}
    {...props}
  >
    {children}
  </StyledAside>
);

export { Aside };
