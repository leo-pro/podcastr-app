import "styled-components";

import * as theme from "./themes";

interface MyThemeProps {
  title: string;

  colors: {
    background: string;
    headings: string;
    text: string;

    white: string;
    black: string;

    gray_50: string;
    gray_100: string;
    gray_200: string;
    gray_500: string;
    gray_800: string;

    green_500: string;

    purple_300: string;
    purple_400: string;
    purple_500: string;
    purple_800: string;

    HeaderBackground: string;
    HeaderBorderLineColor: string;
    BorderLineColor: string;
    CardBackground: string;
    CardPlayButtonBackground: string;
    playerBackground: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends MyThemeProps {}
}
