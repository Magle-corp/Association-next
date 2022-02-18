import styled from 'styled-components';
import { Svg } from './Svg';

const StyledCircle = styled.circle`
  fill: ${({ theme }) => theme.colors.error};
`;

const StyledPolygon = styled.polygon`
  fill: ${({ theme }) => theme.colors.white};
`;

const Incorrect = ({ ...props }) => {
  return (
    <Svg {...props} enable-background="new 0 0 32 32" viewBox="0 0 32 32">
      <StyledCircle cx="16" cy="16" id="BG" r="16" />
      <StyledPolygon
        id="Cross_x5F_Symbol"
        points="24,10.1 21.9,8 16,13.9 10.1,8 8,10.1         13.9,16 8,21.9 10.1,24 16,18.1 21.9,24 24,21.9 18.1,16 "
      />
    </Svg>
  );
};

export { Incorrect };
