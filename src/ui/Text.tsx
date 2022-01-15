// Use.
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'tag';
  as?: React.ElementType;
}

const StyledText = styled.p<{ variant: string }>`
  ${({ theme, variant }) => theme.typography[variant]}
`;

/**
 * Provide UI component "Text".
 *
 * @param className
 *   String for override Styled component style.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component.
 * @param as
 *   React.ElementType.
 * @param props
 *   Props.
 */
const Text = ({ className, children, variant = 'p', as, ...props }: Props) => (
  <StyledText className={className} variant={variant} as={as} {...props}>
    {children}
  </StyledText>
);

export { Text };
