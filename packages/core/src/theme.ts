import { AppTheme, SDSAppTheme, makeThemeOptions } from "@czi-sds/components";
import { ThemeOptions, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";

// Utility type for making all properties (including nested) optional
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// See SDS default theme:
// https://github.com/chanzuckerberg/sci-components/blob/cf36ac5d94e4f788da60ccffe666f45613f056c3/packages/components/src/core/styles/common/SDSAppTheme.ts
const customTheme: DeepPartial<AppTheme> = {
  colors: {
    blue: {
      // 100 and 200 shades are generated with
      // https://m2.material.io/inline-tools/color/
      100: "#b5e7f7",
      200: "#85d7f3",
      300: "#00A0DD",
      400: "#0D7CB5",
      500: "#065B86",
      600: "#002F47",
    },
    common: {
      black: "#262E31",
      white: "#FFFFFF",
    },
    gray: {
      // "Normalizing" our color palette from 100-950 to 100-600
      100: "#F9F9FA",
      200: "#DDE1E2",
      300: "#6E767A",
      400: "#565F63",
      500: "#262E31",
      600: "#131819",
    },
  },
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

const CZBTheme = deepmerge(SDSAppTheme, customTheme);

const appTheme = makeThemeOptions(CZBTheme);

// Customize MUI components
// https://mui.com/material-ui/customization/theme-components/
const modifiedComponents: ThemeOptions = {
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
      fontFamily: CZBTheme.typography.fontFamily.header,
      marginBottom: CZBTheme.spacing.xl,
      fontSize: "40px",
      lineHeight: "120%",
    },
    h2: {
      marginTop: CZBTheme.spacing.xxl,
    },
    body1: {
      lineHeight: "150%",
    },
  },
};

const appThemeWithModifiedComponents = deepmerge(appTheme, modifiedComponents);

export const biohubTheme = createTheme(appThemeWithModifiedComponents);

export const createCustomAppTheme = (overrides: AppTheme) => {
  const merged = deepmerge(appTheme, overrides);
  return createTheme(merged);
};
