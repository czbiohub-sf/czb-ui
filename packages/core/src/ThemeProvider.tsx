import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { biohubTheme } from "./theme";

import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProviderProps {
  children: React.ReactNode;
  _experimentalDarkMode?: boolean;
}

export const ThemeProvider = ({
  children,
  _experimentalDarkMode: darkMode,
}: ThemeProviderProps) => {
  let finalTheme = biohubTheme;

  if (darkMode) {
    finalTheme = createTheme({
      ...biohubTheme,
      palette: {
        mode: "dark",
      },
    });
  }

  return (
    <MUIThemeProvider theme={finalTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
