import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { biohubTheme } from "./theme";

import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProviderProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export const ThemeProvider = ({ children, darkMode }: ThemeProviderProps) => {
  const finalTheme = createTheme({
    ...biohubTheme,
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <MUIThemeProvider theme={finalTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
