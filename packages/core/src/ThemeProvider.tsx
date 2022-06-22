import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#00A3E0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#888b8d",
    },
    error: {
      main: "#E03B0B",
    },
    warning: {
      main: "#E0A90B",
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "Lato",
  },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
