// Use.
import { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant?: 'button_action';
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

const StyledButton = styled.aside<{ variant: string }>`
  ${({ theme, variant }) => theme.typography[variant]}
`;

/**
 * Provide UI component "Button".
 *
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component.
 * @param onClick
 *   MouseEventHandler
 * @param disabled
 *   Boolean.
 * @param props
 *   Props.
 */
const Button = ({
  className,
  children,
  variant = 'button_action',
  onClick,
  disabled,
  ...props
}: Props) => (
  <StyledButton
    className={className}
    variant={variant}
    onClick={onClick}
    {...props}
  >
    {children}
  </StyledButton>
);

export { Button };
