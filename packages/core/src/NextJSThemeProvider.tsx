"use client";
// From https://github.com/chanzuckerberg/create-sds-app/blob/7781c8900521c64f88f55151a288c8d302b2b559/app/common/CustomThemeProvider.tsx
// with some modifications

import {
  SDSLightAppTheme,
  SDSDarkAppTheme,
  makeThemeOptions,
  SDSThemeOptions,
} from "@czi-sds/components";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from "@mui/material";
import { ReactNode, useState, useEffect } from "react";
import { customTheme } from "./themeV2";
import { deepmerge } from "@mui/utils";
export type ThemeMode = "light" | "dark";

const createThemeFromMode = (themeMode: ThemeMode) => {
  const baseTheme = themeMode === "light" ? SDSLightAppTheme : SDSDarkAppTheme;
  const themeOptions = deepmerge(baseTheme, customTheme);

  const appTheme = makeThemeOptions(themeOptions, themeMode);

  // https://github.com/mui/material-ui/issues/29677#issuecomment-1378648375
  const spacingFix: SDSThemeOptions = {
    spacing: (factor: number) => {
      const values = appTheme.spacing as number[];
      const index = Math.floor(factor);
      const currentSpace = values[index];
      const nextSpace = values[index + 1] || currentSpace * 2;
      const space =
        currentSpace + (nextSpace - currentSpace) * (factor - index);
      return `${space}px`;
    },
  };

  const appThemeWithSpacingFix = deepmerge(appTheme, spacingFix);

  return createTheme(appThemeWithSpacingFix);
};

// CustomThemeProvider component to wrap your app
export const NextJSThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(createThemeFromMode("light"));

  const updateTheme = (themeMode: ThemeMode) => {
    setTheme(createThemeFromMode(themeMode));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme based on system preference
    updateTheme(mediaQuery.matches ? "dark" : "light");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      updateTheme(e.matches ? "dark" : "light");
    };

    // Listen for theme changes
    mediaQuery.addEventListener("change", handleThemeChange);

    // Clean up event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
