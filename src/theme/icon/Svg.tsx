import styled from 'styled-components';
import React, { SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGSVGElement> {
  size?: number;
}

const Svg = styled.svg<Props>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

Svg.defaultProps = {
  width: '38',
  height: '38',
  viewBox: '0 0 48 48',
  'aria-hidden': true,
};

export { Svg };
