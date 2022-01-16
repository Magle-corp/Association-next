// Use.
import { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant: 'horizontal' | 'vertical';
  spacing?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const StyledWrapper = styled.div<{ variant: string; spacing: string }>`
  display: flex;
  flex-wrap: wrap;

  ${({ spacing }) =>
    spacing != '0px' &&
    css`
      > *:not(:first-child) {
        margin: ${spacing};
      }
    `}

  ${({ variant }) =>
    variant == 'horizontal' &&
    css`
      flex-direction: row;
    `}

  ${({ variant }) =>
    variant == 'vertical' &&
    css`
      flex-direction: column;
    `}
`;

/**
 * Provide UI component "Wrapper".
 *
 * @param className
 *   Styled component override.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component, string.
 * @param spacing
 *   The margin between each child, string.
 * @param onClick
 *   MouseEventHandler.
 * @param props
 *   Props.
 */
const Wrapper = ({
  className,
  children,
  variant,
  spacing = '0px',
  onClick,
  ...props
}: Props) => (
  <StyledWrapper
    className={className}
    variant={variant}
    spacing={spacing}
    onClick={onClick}
    {...props}
  >
    {children}
  </StyledWrapper>
);

export { Wrapper };
