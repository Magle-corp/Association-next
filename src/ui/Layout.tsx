// Use.
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant:
    | 'mono'
    | 'mono_breadcrumb'
    | 'mono_banner'
    | 'duo'
    | 'duo_breadcrumb';
}

const StyledLayout = styled.div<{ variant: string }>`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maximumWidth};
  margin: 0 auto;
  padding: 150px 20px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
    padding: 110px 20px;
  }

  ${({ variant }) =>
    variant == 'mono' &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    `};

  ${({ variant }) =>
    (variant == 'mono_breadcrumb' || variant == 'mono_banner') &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
    `};

  ${({ variant }) =>
    variant == 'duo' &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-template-columns: 1fr 300px;
        grid-template-rows: max-content;
      }
    `};

  ${({ variant }) =>
    variant == 'duo_breadcrumb' &&
    css`
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content max-content;

      @media (min-width: ${({ theme }) => `${theme.breakpoints.desktop}`}) {
        grid-template-columns: 250px 1fr;
        grid-template-rows: max-content max-content;
      }
    `};
`;

/**
 * Provide UI component "Layout".
 *
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component.
 * @param props
 *   Props.
 */
const Layout = ({ className, children, variant, ...props }: Props) => (
  <StyledLayout className={className} variant={variant} {...props}>
    {children}
  </StyledLayout>
);

export { Layout };
