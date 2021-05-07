import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "../contexts/ThemeContext";
import { Wrapper } from "../styles/pages/App";

import { Header } from "../components/Header";
import Player from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <PlayerContextProvider>
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
