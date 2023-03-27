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
// (SDS uses the "xs" styles for MUI's "body1". "body1" is the default font style for MUI)
// https://github.com/chanzuckerberg/sci-components/blob/d607e6d8c38bf8da367844f706b314b33ab83012/src/core/styles/common/defaultTheme.ts#L399
const fontBodyM = defaultAppTheme.typography.styles.body.m;
appTheme.typography.styles.body["xs"] = fontBodyM;

export const biohubTheme = createTheme(makeThemeOptions(appTheme));
