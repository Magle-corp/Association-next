import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AppWrapper } from '../src/AppContext';
import { theme, GlobalStyle } from '../src/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}
export default MyApp;
