export const themes = {
  dark: {
    colors: {
      background: "#191622",
      headings: "#E1E1E6",
      text: "#E1E1E6",

      white: "#FFFFFF",
      black: "#000000",

      gray_50: "#F7F8FA",
      gray_100: "#E6E8EB",
      gray_200: "#AFB2B1",
      gray_500: "#808080",
      gray_800: "#494D4B",

      green_500: "#04D361",

      purple_300: "#9F75FF",
      purple_400: "#9164FA",
      purple_500: "#8257E5",
      purple_800: "#6F48C9",

      HeaderBackground: "#191622",
      HeaderBorderLineColor: "#44475A",

      BorderLineColor: "#44475A",

      CardBackground: "#191622",
      CardPlayButtonBackground: "#44475A",

      playerBackground: "#483C67",
    },
  },
  light: {
    colors: {
      background: "#F7F8FA",
      headings: "#494D4B",
      text: "#808080",

      white: "#FFFFFF",
      black: "#000000",

      gray_50: "#F7F8FA",
      gray_100: "#E6E8EB",
      gray_200: "#AFB2B1",
      gray_500: "#808080",
      gray_800: "#494D4B",

      green_500: "#04D361",

      purple_300: "#9F75FF",
      purple_400: "#9164FA",
      purple_500: "#8257E5",
      purple_800: "#6F48C9",

      HeaderBackground: "#FFFFFF",
      HeaderBorderLineColor: "#E6E8EB",

      BorderLineColor: "#E6E8EB",

      CardBackground: "#FFFFFF",
      CardPlayButtonBackground: "#FFFFFF",

      playerBackground: "#8257E5",
    },
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
