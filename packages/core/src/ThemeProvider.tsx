import * as React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { biohubTheme } from "./theme";

import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MUIThemeProvider theme={biohubTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
