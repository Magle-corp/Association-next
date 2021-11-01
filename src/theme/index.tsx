import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import breakpoints from './breakpoints';

const theme: object = {
  colors,
  breakpoints,
};

export { theme };

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
`;
