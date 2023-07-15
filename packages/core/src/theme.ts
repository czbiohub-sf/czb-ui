import { ThemeOptions, createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { defaultAppTheme, makeThemeOptions } from "czifui";
// defaultAppTheme settings:
// https://github.com/chanzuckerberg/sci-components/blob/main/packages/components/src/core/styles/common/defaultTheme.ts

const appTheme = { ...defaultAppTheme };
type AppTheme = typeof appTheme;

const primaryColors = {
  "300": "#00A0DD",
  "400": "#0D7CB5",
  "500": "#065B86",
  "600": "#003A57",
};
appTheme.colors.primary = primaryColors;

const mainFont = "Hanken Grotesk";
appTheme.typography.fontFamily = mainFont;

// Change our app's "body.xs" font styles to the SDS's "fontBodyM" styles
// (SDS uses the "body.xs" styles for MUI's "body1". "body1" is the default font style for MUI)
// https://github.com/chanzuckerberg/sci-components/blob/d607e6d8c38bf8da367844f706b314b33ab83012/src/core/styles/common/defaultTheme.ts#L399
const fontBodyM = defaultAppTheme.typography.styles.body.m;
appTheme.typography.styles.body["xs"] = fontBodyM;

// Change h1 font
// (SDS uses "header.xxl" for MUI's "h1")
// https://github.com/chanzuckerberg/sci-components/blob/d607e6d8c38bf8da367844f706b314b33ab83012/src/core/styles/common/defaultTheme.ts#L404
const newFontHeaderXxl = {
  ...defaultAppTheme.typography.styles.header.xxl,
  fontFamily: "STIX Two Text",
};
appTheme.typography.styles.header.xxl = newFontHeaderXxl;

// Change h2 font
// (SDS uses "header.xl" for MUI's "h2")
// (https://github.com/chanzuckerberg/sci-components/blob/d607e6d8c38bf8da367844f706b314b33ab83012/src/core/styles/common/defaultTheme.ts#L405)
const newFontHeaderXl = {
  ...defaultAppTheme.typography.styles.header.xl,
  fontFamily: "STIX Two Text",
};
appTheme.typography.styles.header.xl = newFontHeaderXl;

// Change h3 font
// (SDS uses "header.l" for MUI's "h3")
// (https://github.com/chanzuckerberg/sci-components/blob/d607e6d8c38bf8da367844f706b314b33ab83012/src/core/styles/common/defaultTheme.ts#L406)
const newFontHeaderL = {
  ...defaultAppTheme.typography.styles.header.l,
  fontFamily: "Lato",
  fontWeight: 700, // There's only a 700 weight for Lato,
  // not 600 which is what the defaultAppTheme uses
};
appTheme.typography.styles.header.l = newFontHeaderL;

// Change button text style
const newButtonStyle = {
  ...defaultAppTheme.typography.styles.body.button,
  fontFamily: "Barlow",
  textTransform: "uppercase" as React.CSSProperties["textTransform"], // Type workaround
};
appTheme.typography.styles.body.button = newButtonStyle;

const createFinalTheme = (czifuiAppTheme: AppTheme): ThemeOptions => ({
  ...makeThemeOptions(czifuiAppTheme),
  components: {
    ...makeThemeOptions(czifuiAppTheme).components,
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        // Change default padding for MuiContainer
        root: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
          },
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        }),
        disableGutters: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
          paddingLeft: 0,
          paddingRight: 0,
        }),
      },
    },
  },
});

export const biohubTheme = createTheme(createFinalTheme(appTheme));

export const createCustomAppTheme = (overrides: AppTheme) => {
  const merged = deepmerge(appTheme, overrides);
  return createTheme(createFinalTheme(merged));
};
