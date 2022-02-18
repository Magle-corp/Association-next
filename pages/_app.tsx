import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../src/theme';
import { AppWrapper } from '../src/context';

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
