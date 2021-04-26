import React, { useState } from "react";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "../styles/pages/App";

import * as themes from "../styles/theme";

import { Header } from "../components/Header";
import Player from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  }

  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <GlobalStyle />
        <Wrapper>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </Wrapper>
      </PlayerContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
