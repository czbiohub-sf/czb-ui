"use client";
import {
  AppTheme,
  SDSLightAppTheme,
  SDSDarkAppTheme,
  makeThemeOptions,
  Colors,
} from "@czi-sds/components";
import { ThemeOptions, createTheme, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";

// Utility type for making all properties (including nested) optional
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type ThemeMode = "light" | "dark";

function returnModifiedMUIComponentsForCZBUI(appTheme: AppTheme): ThemeOptions {
  // Customize MUI components
  // https://mui.com/material-ui/customization/theme-components/
  return {
    components: {
      // Change default container props
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
    // Change header fonts
    typography: {
      // Not sure if SDS reflects its typography styles
      // to MUI's theme typography
      h1: {
        fontFamily: appTheme.typography.fontFamily.header,
        marginBottom: appTheme.spacing.xl,
        fontSize: "40px",
        lineHeight: "120%",
      },
      h2: {
        marginTop: appTheme.spacing.xxl,
      },
      body1: {
        lineHeight: "150%",
      },
    },
  };
}

function createModifiedSDSTheme(
  customTheme: DeepPartial<AppTheme>,
  mode: ThemeMode
): Theme {
  const SDSAppTheme = mode === "light" ? SDSLightAppTheme : SDSDarkAppTheme;
  const CZBTheme = deepmerge(SDSAppTheme, customTheme);
  const appTheme = makeThemeOptions(CZBTheme, mode);
  const appThemeWithModifiedComponents = deepmerge(
    appTheme,
    returnModifiedMUIComponentsForCZBUI(CZBTheme)
  );
  return createTheme(appThemeWithModifiedComponents);
}

// Some of the colors below are generated manually
const BiohubLightThemeColors: DeepPartial<Colors> = {
  blue: {
    100: "#B5E7F7", // Lightened variant of San Francisco Cyan
    200: "#85D7F3", // Lightened variant of San Francisco Cyan
    300: "#0D7CB5", // San Francisco Cyan
    400: "#0D7CB5", // San Francisco Cyan (Primary)
    500: "#0D7CB5", // San Francisco Cyan (Primary)
    600: "#002F47", // Dark
  },
  // @ts-expect-error TODO: Figure out why common is not being recognized
  common: {
    black: "#000000", // Black
    white: "#FFFFFF", // White
  },
  gray: {
    100: "#F1F4F5", // Network Gray 950
    200: "#DDE1E2", // Network Gray 900, I think this is what MUI uses for borders
    300: "#DDE1E2", // Network Gray 800
    400: "#BDC3C6", // Network Gray 700
    500: "#6E767A", // Network Gray 500
    600: "#565F63", // Network Gray 400
  },
};

const BiohubDarkThemeColors: DeepPartial<Colors> = {
  blue: {
    100: "#002F47", // Dark
    200: "#065B86", // Medium
    300: "#0D7CB5", // San Francisco Cyan
    400: "#00A0DD", // San Francisco Cyan Bright (Primary on dark background)
    500: "#00A0DD", // San Francisco Cyan Bright (Primary)
    600: "#B5E7F7", // Lightened variant for dark background
  },
  // @ts-expect-error TODO: Figure out why common is not being recognized
  common: {
    black: "#131819", // Network Gray 100
    white: "#F9F9FA", // Network Gray 950
  },
  gray: {
    100: "#131819", // Network Gray 100
    200: "#262E31", // Network Gray 200
    300: "#262E31", // Network Gray 200
    400: "#262E31", // Network Gray 200
    500: "#6E767A", // Network Gray 500
    600: "#DDE1E2", // Network Gray 800
  },
};

// See SDS default theme:
// https://github.com/chanzuckerberg/sci-components/blob/cf36ac5d94e4f788da60ccffe666f45613f056c3/packages/components/src/core/styles/common/SDSAppTheme.ts

const sharedAppTheme: DeepPartial<AppTheme> = {
  typography: {
    fontFamily: {
      body: "Hanken Grotesk, sans-serif",
      caps: "Barlow, sans-serif",
      code: "JetBrains Mono, monospace",
      header: "Stix Two Text, serif",
    },
    styles: {
      body: {
        regular: {
          button: { fontSize: 16 },
          l: { fontSize: 21 },
          m: { fontSize: 19 },
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
          xxs: { fontSize: 15 },
          xxxs: { fontSize: 14 },
        },
        semibold: {
          button: { fontSize: 16 },
          l: { fontSize: 21 },
          m: { fontSize: 19 },
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
          xxs: { fontSize: 15 },
          xxxs: { fontSize: 14 },
        },
      },
      caps: {
        semibold: {
          xxs: { fontSize: 15 },
          xxxs: { fontSize: 14 },
          xxxxs: { fontSize: 13 },
        },
      },
      code: {
        regular: {
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
        },
        semibold: {
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
        },
      },
      header: {
        semibold: {
          l: { fontSize: 21 },
          m: { fontSize: 19 },
          s: { fontSize: 17 },
          xl: { fontSize: 25 },
          xs: { fontSize: 16 },
          xxl: { fontSize: 29 },
          xxs: { fontSize: 15 },
          xxxs: { fontSize: 14 },
        },
      },
      tabular: {
        regular: {
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
        },
        semibold: {
          s: { fontSize: 17 },
          xs: { fontSize: 16 },
        },
      },
    },
  },
};

export const BiohubLightAppTheme = {
  ...sharedAppTheme,
  colors: BiohubLightThemeColors,
};

export const BiohubDarkAppTheme = {
  ...sharedAppTheme,
  colors: BiohubDarkThemeColors,
};

export const createBiohubTheme = (mode: ThemeMode) => {
  const customTheme =
    mode === "light" ? BiohubLightAppTheme : BiohubDarkAppTheme;
  return createModifiedSDSTheme(customTheme, mode);
};

export const createCustomAppTheme = (overrides: AppTheme, mode: ThemeMode) => {
  const customTheme =
    mode === "light" ? BiohubLightAppTheme : BiohubDarkAppTheme;
  const customThemeWithOverrides = deepmerge(customTheme, overrides);
  return createModifiedSDSTheme(customThemeWithOverrides, mode);
};
