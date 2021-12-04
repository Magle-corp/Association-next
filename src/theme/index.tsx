// Use.
import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import breakpoints from './breakpoints';
import typography from './typography';
import FjallaOneWoff from './font/FjallaOneWoff.woff';
import FjallaOneWoff2 from './font/FjallaOneWoff2.woff2';
import RobotoWoff from './font/RobotoWoff.woff';
import RobotoWoff2 from './font/RobotoWoff2.woff2';

const theme: object = {
  colors,
  breakpoints,
  typography,
};

export { theme };

export const GlobalStyle = createGlobalStyle`
  #__next {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  html {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: 'FjallaOne';
    src: local('FjallaOne'), local('FjallaOne'),
    url(${FjallaOneWoff}) format('woff'),
    url(${FjallaOneWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto'),
    url(${RobotoWoff}) format('woff'),
    url(${RobotoWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
`;
