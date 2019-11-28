import React from "react";
import { ThemeProvider } from "emotion-theming";
import { defaultTheme } from "../../theme/default";

export const Theme = ({children}) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
export default Theme;