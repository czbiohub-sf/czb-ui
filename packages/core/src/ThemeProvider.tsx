import * as React from "react";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import "@fontsource/lato";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ThemeProviderProps {
  children: React.ReactNode;
}

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
