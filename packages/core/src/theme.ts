import { createTheme } from "@mui/material/styles";
import styleFunctionSx from "@mui/system/styleFunctionSx";
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

// Error color
const errorColors = {
  ...defaultAppTheme.colors.error,
  "400": "#E03B0B",
};

// Warning color
const warningColors = {
  ...defaultAppTheme.colors.warning,
  "400": "#E0A90B",
};

// Two fonts we need
const fontFamily = ["Lato", "Barlow"].join(",");

// xxl is used on the h1, font change is needed
const headingStyles = {
  ...defaultAppTheme.typography.styles.header,
  xxl: {
    ...defaultAppTheme.typography.styles.header.xxl,
    fontFamily: "Barlow",
  },
};

// Container padding is too small... this is the
// only way I thought of fixing it for now...
const componentOverrides = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "24px",
        paddingRight: "24px",
      },
    },
  },
};

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.colors.gray = grayColors;
appTheme.colors.error = errorColors;
appTheme.colors.warning = warningColors;
appTheme.typography.fontFamily = fontFamily;
appTheme.typography.styles.header = headingStyles;

export const biohubTheme = createTheme({
  ...makeThemeOptions(appTheme),
  components: componentOverrides,
});
