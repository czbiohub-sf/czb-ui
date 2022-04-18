import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface CZUIProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export const CZUIProvider = ({ children }: CZUIProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
