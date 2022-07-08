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

// There's only two grey colors I need to apply
// btw when getting these colors, its
// themes.palette.grey, grey with E
const grayColors = {
  ...defaultAppTheme.colors.gray,
  "300": "#3E484C",
  "400": "#888B8D",
};

const fontFamily = ["Lato", "Barlow"].join(",");

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.colors.gray = grayColors;
appTheme.typography.fontFamily = fontFamily;

export const biohubTheme = createTheme(makeThemeOptions(appTheme));
