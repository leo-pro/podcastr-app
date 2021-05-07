import "styled-components";

import * as theme from "./themes";

import { MyTheme } from "./themes/myTheme";
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
