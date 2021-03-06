import {
  createContext,
  ReactNode,
  useEffect,
  ReactElement,
  useState,
} from "react";
import { ThemeProvider as ThemeStyledProvider } from "styled-components";

import { GlobalStyles } from "../styles/global";
import { themes, ThemeName } from "../styles/theme";

export interface ThemeContextData {
  switchTheme: () => void;
  theme: ThemeName;
}

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProps): ReactElement {
  const [theme, setTheme] = useState<ThemeName>("light");
  const currentTheme = themes[theme];

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
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
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  );
}
