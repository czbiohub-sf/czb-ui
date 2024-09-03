"use client";
import * as React from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { createBiohubTheme } from "./theme";

import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProviderProps {
  children: React.ReactNode;
  mode?: "light" | "dark";
}

export const ThemeProvider = ({
  children,
  mode = "light",
}: ThemeProviderProps) => {
  let finalTheme = createBiohubTheme(mode);

  return (
    <MUIThemeProvider theme={finalTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
