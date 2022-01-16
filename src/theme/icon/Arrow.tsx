import styled, { css } from 'styled-components';
import { Svg } from './Svg';

interface props {
  size?: number;
  variant?: 'top' | 'right' | 'bottom' | 'left';
}

const StyledSvg = styled(Svg)<{ variant: string }>`
  ${({ variant }) =>
    variant == 'top' &&
    css`
      transform: rotate(180deg);
    `}
  ${({ variant }) =>
    variant == 'right' &&
    css`
      transform: rotate(270deg);
    `}
    ${({ variant }) =>
    variant == 'bottom' &&
    css`
      transform: rotate(0deg);
    `}
    ${({ variant }) =>
    variant == 'left' &&
    css`
      transform: rotate(90deg);
    `}
`;

const Arrow = ({ size, variant = 'top', ...props }: props) => {
  return (
    <StyledSvg viewBox="0 0 512 512" variant={variant} size={size} {...props}>
      <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
    </StyledSvg>
  );
};

export { Arrow };
