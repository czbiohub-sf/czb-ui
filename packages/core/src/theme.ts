import { createTheme } from "@mui/material/styles";
import { defaultAppTheme, makeThemeOptions } from "czifui";

const appTheme = { ...defaultAppTheme };

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
};
appTheme.typography.styles.header.l = newFontHeaderL;

export const biohubTheme = createTheme(makeThemeOptions(appTheme));
