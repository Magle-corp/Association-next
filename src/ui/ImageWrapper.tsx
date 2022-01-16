// Use.
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  children: ReactNode;
  width: string;
  height: string;
}

const StyledImageWrapper = styled.div<{ width: string; height: string }>`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

/**
 * Provide UI component "ImageWrapper".
 *
 * @param className
 *   Styled component override.
 * @param children
 *   React Node children.
 * @param variant
 *   String for define behaviour of the component, string.
 * @param props
 *   Props.
 */
const ImageWrapper = ({
  className,
  children,
  width,
  height,
  ...props
}: Props) => (
  <StyledImageWrapper
    className={className}
    width={width}
    height={height}
    {...props}
  >
    {children}
  </StyledImageWrapper>
);

export { ImageWrapper };
