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

// Change xs size to 16px
const xsFont = {
  ...defaultAppTheme.typography.styles.body.xs,
  fontSize: 16,
};

// xxl is used on the h1, font change is needed
const headingStyles = {
  ...defaultAppTheme.typography.styles.header,
  xxl: {
    ...defaultAppTheme.typography.styles.header.xxl,
    // Also stick the other body fonts too since
    // overriding this font doesn't include the fallback
    // body fonts with it
    // (hardcoded for now since the actual body fonts
    // are added programmatically after this)
    fontFamily:
      "Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
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

// I do a lot of manual overrides... it might be
// better just to use createTheme() from MUI

// Container padding is too small... this is the
// only way I thought of fixing it for now...
export const biohubTheme = createTheme({
  ...makeThemeOptions(appTheme),
  palette: {
    ...makeThemeOptions(appTheme).palette,
    // temp way of getting contrastText to mui theme
    // types are saying that this is wrong also...
    // @ts-ignore
    primary: {
      ...makeThemeOptions(appTheme).palette?.primary,
      contrastText: "white",
    },
  },
  components: {
    ...makeThemeOptions(appTheme).components,
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
          paddingLeft: "24px",
          paddingRight: "24px",
        }),
        disableGutters: ({ theme }) => ({
          [theme.breakpoints.up("sm")]: {
            paddingLeft: "0px",
            paddingRight: "0px",
          },
          paddingLeft: "0px",
          paddingRight: "0px",
        }),
      },
    },
  },
  typography: {
    ...makeThemeOptions(appTheme).typography,
    // A custom typography variant
    ultimateHeading: {
      fontFamily:
        "Butler, Barlow, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      lineHeight: "normal",
    },
  },
});

// For "ultimateHeading" custom typography
// https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
declare module "@mui/material/styles" {
  interface TypographyVariants {
    ultimateHeading: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    ultimateHeading?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    ultimateHeading: true;
  }
}
