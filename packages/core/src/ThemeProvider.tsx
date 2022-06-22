import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import "@fontsource/lato";

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
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
