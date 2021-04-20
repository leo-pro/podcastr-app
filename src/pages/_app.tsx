import { useState } from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps){
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme(){
    setTheme(theme.title === 'light' ? themes.dark : themes.light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default MyApp;
