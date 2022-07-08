import { createTheme } from "@mui/material/styles";
import { defaultAppTheme, makeThemeOptions } from "czifui";

const primaryColors = {
  "100": "#0076A1", // I can't find a 100 color to choose
  "200": "#0076A1",
  "300": "#004761",
  "400": "#00A3E0",
  "500": "#00AEED",
  "600": "#0092C7",
};

const fontFamily = ["Lato", "Barlow"].join(",");

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.typography.fontFamily = fontFamily;

export const biohubTheme = createTheme(makeThemeOptions(appTheme));
