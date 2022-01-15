// Use.
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant: 'mono' | 'mono_breadcrumb' | 'duo' | 'duo_breadcrumb';
  spacing?: string;
}

const StyledMain = styled.main<{ variant: string; spacing: string }>`
  box-sizing: border-box;

  ${({ spacing }) =>
    spacing != '0px' &&
    css`
      > *:not(:first-child) {
        margin: ${spacing};
      }
    `};

  ${({ variant }) =>
    variant == 'mono' &&
    css`
      grid-column: 1/2;
      grid-row: 1/2;
    `};

  ${({ variant }) =>
    variant == 'mono_breadcrumb' &&
    css`
      grid-column: 1/2;
      grid-row: 2/3;
    `};

  ${({ variant }) =>
    variant == 'duo' &&
    css`
      grid-column: 1/2;
      grid-row: 1/2;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-column: 1/2;
        grid-row: 1/2;
        margin-right: 80px;
      } ;
    `}

  ${({ variant }) =>
    variant == 'duo_breadcrumb' &&
    css`
      grid-column: 1/2;
      grid-row: 3/4;
      margin-top: 90px;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-column: 2/3;
        grid-row: 2/3;
        margin-top: 0;
        margin-left: 80px;
      }
    `};
`;

/**
 * Provide UI component "Main".
 *
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component.
 * @param spacing
 *   The margin between each child.
 * @param props
 *   Props.
 */
const Main = ({
  className,
  children,
  variant,
  spacing = 'Opx',
  ...props
}: Props) => (
  <StyledMain
    className={className}
    variant={variant}
    spacing={spacing}
    {...props}
  >
    {children}
  </StyledMain>
);

export { Main };
