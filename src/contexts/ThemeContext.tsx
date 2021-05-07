import {
  createContext,
  ReactNode,
  useEffect,
  ReactElement,
  useState,
} from "react";

import { ThemeProvider as ThemeStyledProvider } from "styled-components";

import { GlobalStyles } from "../styles/global";
import * as themes from "../styles/themes";

import { MyTheme } from "../styles/themes/myTheme";

export interface ThemeContextData {
  switchTheme: () => void;
  theme: MyTheme;
}

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProps): ReactElement {
  const [theme, setTheme] = useState(themes.light);

  function switchTheme() {
    setTheme(theme.title === "light" ? themes.dark : themes.light);
  }

  useEffect(() => {
    const themeStoraged = localStorage.getItem("@Podcastr:theme");

    if (themeStoraged) {
      setTheme(JSON.parse(themeStoraged));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@Podcastr:theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeStyledProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  );
}
