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

// Change xs size to 14px
const xsFont = {
  ...defaultAppTheme.typography.styles.body.xs,
  fontSize: 14,
};

// xxl is used on the h1, font change is needed
const headingStyles = {
  ...defaultAppTheme.typography.styles.header,
  xxl: {
    ...defaultAppTheme.typography.styles.header.xxl,
    fontFamily: "Barlow",
    // https://github.com/mui/material-ui/issues/16307
    textTransform: "uppercase" as const,
  },
};

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.colors.gray = grayColors;
appTheme.colors.error = errorColors;
appTheme.colors.warning = warningColors;
appTheme.typography.fontFamily = fontFamily;
appTheme.typography.styles.body["xs"] = xsFont;
appTheme.typography.styles.header = headingStyles;

// Container padding is too small... this is the
// only way I thought of fixing it for now...
export const biohubTheme = createTheme({
  ...makeThemeOptions(appTheme),
  components: {
    ...makeThemeOptions(appTheme).components,
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
  },
});
