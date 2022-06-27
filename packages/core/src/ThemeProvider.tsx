import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeProviderProps {
  children: React.ReactNode;
}

// For custom palette colors, e.g the "line" color
declare module "@mui/material/styles" {
  interface Palette {
    line: Palette["primary"];
  }
  interface PaletteOptions {
    line: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
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
          line: {
            main: "rgba(0,0,0,0.1)",
          },
        },
        shape: {
          borderRadius: 0,
        },
        typography: {
          fontFamily: [
            "Lato",
            "Barlow",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          h1: {
            fontFamily: "Barlow",
            fontWeight: 800,
            fontSize: "4rem",
          },
          h2: {
            marginTop: "0.50em",
            fontWeight: 800,
            fontSize: "2rem",
          },
          h3: {
            marginTop: "0.50em",
            fontSize: "1.5rem",
          },
          body1: {
            marginBottom: "1em",
          },
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
          MuiTypography: {
            defaultProps: {
              gutterBottom: true,
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
