import * as React from 'react';
import React__default, { forwardRef, useState, useEffect, createContext, useMemo, useContext } from 'react';
import { css } from '@emotion/react';
import { colors, Accordion as Accordion$1, Alert as Alert$2, SvgIcon, IconButton as IconButton$1, Button as Button$1, Grow, Checkbox as Checkbox$1, Chip as Chip$1, TextField, outlinedInputClasses, inputBaseClasses, inputAdornmentClasses, InputAdornment, MenuItem as MenuItem$1, menuItemClasses, darken, Popper, Paper, Dialog as Dialog$1, DialogActions as DialogActions$1, DialogContent, DialogTitle as DialogTitle$1, Typography, Slider, Link as Link$1, List as List$1, ListItem as ListItem$1, ListSubheader as ListSubheader$1, Menu as Menu$1, Autocomplete as Autocomplete$1, Slide, Radio, Tooltip as Tooltip$1, Tab as Tab$1, Tabs as Tabs$1, useTheme as useTheme$1, TableCell, TableContainer, Table, TableBody, TableRow } from '@mui/material';
import { createTheme, styled, useTheme } from '@mui/material/styles';
import { Clear, Check } from '@mui/icons-material';
import { ClickAwayListener } from '@mui/base';
import Autocomplete from '@mui/material/Autocomplete';
import Popper$1 from '@mui/material/Popper';
import ToggleButton from '@mui/material/ToggleButton';
import { css as css$1 } from '@emotion/css';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var createThemeAdaptor = createTheme;
var common = colors.common;
var FontWeight;
(function (FontWeight) {
    FontWeight[FontWeight["bold"] = 700] = "bold";
    FontWeight[FontWeight["light"] = 300] = "light";
    FontWeight[FontWeight["medium"] = 800] = "medium";
    FontWeight[FontWeight["regular"] = 400] = "regular";
    FontWeight[FontWeight["semibold"] = 600] = "semibold";
})(FontWeight || (FontWeight = {}));
var defaultThemeColors = {
    beta: {
        "100": "#F4F0F9",
        "200": "#F0EBF6",
        "400": "#7A41CE",
        "500": "#703CBE",
        "600": "#693BAC",
    },
    error: {
        "100": "#FEF2F2",
        "200": "#FBE8E8",
        "400": "#DC132C",
        "500": "#C61128",
        "600": "#B70016",
    },
    gray: {
        "100": "#F8F8F8",
        "200": "#EAEAEA",
        "300": "#CCCCCC",
        "400": "#999999",
        "500": "#767676",
        "600": "#545454",
    },
    info: {
        "100": "#EFF2FC",
        "200": "#EBEFFC",
        "400": "#3867FA",
        "500": "#2B52CD",
        "600": "#223F9C",
    },
    primary: {
        "100": "#F8F9FE",
        "200": "#EFF2FC",
        "300": "#A9BDFC",
        "400": "#3867FA",
        "500": "#2B52CD",
        "600": "#223F9C",
    },
    secondary: {
        "400": "#9BC74E",
    },
    success: {
        "100": "#ECF5F0",
        "200": "#E6F7ED",
        "400": "#3CB371",
        "500": "#349A61",
        "600": "#1C7F48",
    },
    warning: {
        "100": "#FCF6EC",
        "200": "#FFF3E1",
        "400": "#F5A623",
        "500": "#D8921F",
        "600": "#946314",
    },
};
var defaultAppTheme = {
    colors: defaultThemeColors,
    corners: {
        l: 20,
        m: 4,
        none: 0,
        s: 2,
    },
    fontWeights: {
        bold: 700,
        light: 300,
        medium: 800,
        regular: 400,
        semibold: 600,
    },
    iconSizes: {
        input: { height: 16, width: 16 },
        l: { height: 22, width: 22 },
        s: { height: 14, width: 14 },
        xl: { height: 32, width: 32 },
        xs: { height: 10, width: 10 },
    },
    shadows: {
        l: "0 2px 12px 0 rgba(0,0,0, 0.3)",
        m: "0 2px 4px 0 rgba(0,0,0, 0.15), 0 2px 10px 0 rgba(0,0,0, 0.15)",
        none: "none",
        s: "0 2px 4px 0 rgba(0,0,0, 0.25)",
    },
    spacing: {
        default: 10,
        l: 14,
        m: 10,
        s: 8,
        xl: 22,
        xs: 6,
        xxl: 38,
        xxs: 4,
        xxxs: 2,
    },
    typography: {
        fontFamily: "Open Sans",
        styles: {
            body: {
                button: {
                    fontSize: 13,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "20px",
                    textTransform: "none",
                },
                l: {
                    fontSize: 18,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "28px",
                },
                m: {
                    fontSize: 16,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "26px",
                },
                s: {
                    fontSize: 14,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "24px",
                },
                xs: {
                    fontSize: 13,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "20px",
                },
                xxs: {
                    fontSize: 12,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "18px",
                },
                xxxs: {
                    fontSize: 11,
                    fontWeight: FontWeight.regular,
                    letterSpacing: "0.3px",
                    lineHeight: "16px",
                },
            },
            caps: {
                xxs: {
                    fontSize: 12,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "1.0px",
                    lineHeight: "18px",
                    textTransform: "uppercase",
                },
                xxxs: {
                    fontSize: 11,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "1.0px",
                    lineHeight: "16px",
                    textTransform: "uppercase",
                },
                xxxxs: {
                    fontSize: 10,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "1.0px",
                    lineHeight: "14px",
                    textTransform: "uppercase",
                },
            },
            header: {
                l: {
                    fontSize: 18,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "24px",
                },
                m: {
                    fontSize: 16,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "22px",
                },
                s: {
                    fontSize: 14,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "20px",
                },
                xl: {
                    fontSize: 22,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "30px",
                },
                xs: {
                    fontSize: 13,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "18px",
                },
                xxl: {
                    fontSize: 26,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "34px",
                },
                xxs: {
                    fontSize: 12,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "18px",
                },
                xxxs: {
                    fontSize: 11,
                    fontWeight: FontWeight.semibold,
                    letterSpacing: "0.3px",
                    lineHeight: "16px",
                },
            },
        },
    },
};
// (mlila) whenever our theme uses colors, we need to make sure we allow consuming
// applications to override those colors using their own custom theme.
// By defining borders using defaultAppTheme.colors instead of defaultThemeColors,
// we allow other apps to specify their colors once, and have them apply
// throughtout the application, such as in borders, etc without having to manually
// override every theme property that makes use of colors.
defaultAppTheme.borders = {
    error: {
        "400": "1px solid ".concat(defaultAppTheme.colors.error[400]),
    },
    gray: {
        "100": "1px solid ".concat(defaultAppTheme.colors.gray[100]),
        "200": "1px solid ".concat(defaultAppTheme.colors.gray[200]),
        "300": "1px solid ".concat(defaultAppTheme.colors.gray[300]),
        "400": "1px solid ".concat(defaultAppTheme.colors.gray[400]),
        "500": "1px solid ".concat(defaultAppTheme.colors.gray[500]),
        dashed: "2px dashed ".concat(defaultAppTheme.colors.gray[400]),
    },
    link: {
        dashed: "1px dashed",
        solid: "1px solid",
    },
    primary: {
        "300": "1px solid ".concat(defaultAppTheme.colors.primary[300]),
        "400": "1px solid ".concat(defaultAppTheme.colors.primary[400]),
        "500": "1px solid ".concat(defaultAppTheme.colors.primary[500]),
        "600": "1px solid".concat(defaultAppTheme.colors.primary[600]),
        dashed: "2px dashed ".concat(defaultAppTheme.colors.primary[400]),
    },
    success: {
        "400": "1px solid ".concat(defaultAppTheme.colors.success[400]),
    },
    warning: {
        "400": "1px solid ".concat(defaultAppTheme.colors.warning[400]),
    },
};
function makeThemeOptions(appTheme) {
    return {
        app: appTheme,
        components: {
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: "hover",
                },
            },
        },
        palette: {
            divider: appTheme.colors.gray[200],
            error: {
                dark: appTheme.colors.error[600],
                light: appTheme.colors.error[200],
                main: appTheme.colors.error[400],
            },
            grey: {
                "100": appTheme.colors.gray[100],
                "200": appTheme.colors.gray[200],
                "300": appTheme.colors.gray[300],
                "400": appTheme.colors.gray[400],
                "500": appTheme.colors.gray[500],
                "600": appTheme.colors.gray[600],
            },
            info: {
                dark: appTheme.colors.info[600],
                light: appTheme.colors.info[200],
                main: appTheme.colors.info[400],
            },
            mode: "light",
            primary: {
                dark: appTheme.colors.primary[600],
                light: appTheme.colors.primary[300],
                main: appTheme.colors.primary[400],
            },
            secondary: {
                main: appTheme.colors.secondary[400],
            },
            success: {
                dark: appTheme.colors.success[600],
                light: appTheme.colors.success[200],
                main: appTheme.colors.success[400],
            },
            text: {
                disabled: appTheme.colors.gray[300],
                primary: common.black,
                secondary: appTheme.colors.gray[500],
            },
            warning: {
                dark: appTheme.colors.warning[600],
                light: appTheme.colors.warning[200],
                main: appTheme.colors.warning[400],
            },
        },
        shadows: [
            appTheme.shadows.none,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.s,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.m,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
            appTheme.shadows.l,
        ],
        shape: {
            borderRadius: appTheme.corners.m,
        },
        spacing: [
            appTheme.spacing.default,
            appTheme.spacing.xxxs,
            appTheme.spacing.xxs,
            appTheme.spacing.xs,
            appTheme.spacing.s,
            appTheme.spacing.m,
            appTheme.spacing.l,
            appTheme.spacing.xl,
            appTheme.spacing.xxl,
        ],
        transitions: {
            duration: {
                complex: 200,
                enteringScreen: 20,
                leavingScreen: 10,
                short: 150,
                shorter: 100,
                shortest: 50,
                standard: 200,
            },
            easing: {
                easeIn: "cubic-bezier(0, 0, 0.2, 1)",
                easeInOut: "cubic-bezier(0, 0, 0.2, 1)",
                easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
                sharp: "cubic-bezier(0, 0.2, 0.6, 1)",
            },
        },
        typography: {
            body1: appTheme.typography.styles.body.xs,
            body2: appTheme.typography.styles.body.xxs,
            button: appTheme.typography.styles.body.button,
            caption: appTheme.typography.styles.body.xxxs,
            fontFamily: "".concat(appTheme.typography.fontFamily, ", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif"),
            h1: appTheme.typography.styles.header.xxl,
            h2: appTheme.typography.styles.header.xl,
            h3: appTheme.typography.styles.header.l,
            h4: appTheme.typography.styles.header.m,
            h5: appTheme.typography.styles.header.s,
            h6: appTheme.typography.styles.header.xs,
            overline: appTheme.typography.styles.caps.xxxs,
            subtitle1: appTheme.typography.styles.body.xs,
            subtitle2: appTheme.typography.styles.header.xxs,
        },
    };
}
var defaultThemeOptions = makeThemeOptions(defaultAppTheme);
var defaultTheme = createThemeAdaptor(defaultThemeOptions);

var getSpaces = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.spacing) || null;
};
var getSpacings = function (_a) {
    var _b;
    var theme = _a.theme;
    console.warn("getSpacings() is deprecated and may be removed in a future release. Please use getSpaces()");
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.spacing) || null;
};
var getTypography = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.typography) || null;
};
var getPalette = function (_a) {
    var theme = _a.theme;
    return theme === null || theme === void 0 ? void 0 : theme.palette;
};
var getColors = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.colors) || null;
};
var getShadows = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.shadows) || null;
};
var getCorners = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.corners) || null;
};
var getFontWeights = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.fontWeights) || null;
};
var getIconSizes = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.iconSizes) || null;
};
var getBorders = function (_a) {
    var _b;
    var theme = _a.theme;
    return ((_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.borders) || null;
};

var fontBody = function (fontSize) {
    return function (props) {
        var typography = getTypography(props);
        if (!typography)
            return null;
        var body = typography.styles.body;
        return themeToCss(body[fontSize]);
    };
};
var fontBodyL$1 = fontBody("l");
var fontBodyM$1 = fontBody("m");
var fontBodyS$2 = fontBody("s");
var fontBodyXs$4 = fontBody("xs");
var fontBodyXxs$1 = fontBody("xxs");
var fontBodyXxxs$1 = fontBody("xxxs");
var fontCaps = function (fontSize) {
    return function (props) {
        var typography = getTypography(props);
        if (!typography)
            return null;
        var caps = typography.styles.caps;
        return css(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n      ", "\n      text-transform: uppercase;\n    "], ["\n      ", "\n      text-transform: uppercase;\n    "])), themeToCss(caps[fontSize]));
    };
};
var fontCapsXxs = fontCaps("xxs");
var fontCapsXxxs = fontCaps("xxxs");
var fontCapsXxxxs = fontCaps("xxxxs");
var fontHeader = function (fontSize) {
    return function (props) {
        var typography = getTypography(props);
        if (!typography)
            return null;
        var header = typography.styles.header;
        return themeToCss(header[fontSize]);
    };
};
var fontHeaderXxl = fontHeader("xxl");
var fontHeaderXl = fontHeader("xl");
var fontHeaderL = fontHeader("l");
var fontHeaderM$1 = fontHeader("m");
var fontHeaderS = fontHeader("s");
var fontHeaderXs = fontHeader("xs");
var fontHeaderXxs = fontHeader("xxs");
var fontHeaderXxxs = fontHeader("xxxs");
function themeToCss(fontTheme) {
    return css(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n    font-size: ", "px;\n    line-height: ", ";\n    letter-spacing: ", ";\n    font-weight: ", ";\n    text-transform: ", ";\n  "], ["\n    font-size: ", "px;\n    line-height: ", ";\n    letter-spacing: ", ";\n    font-weight: ", ";\n    text-transform: ", ";\n  "])), fontTheme.fontSize, fontTheme.lineHeight, fontTheme.letterSpacing, fontTheme.fontWeight, fontTheme.textTransform);
}
var templateObject_1$F, templateObject_2$p;

var sdsPropNames$5 = ["useDivider", "togglePosition"];
var StyledAccordion = styled(Accordion$1, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames$5.includes(prop.toString());
    },
})(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var useDivider = props.useDivider, togglePosition = props.togglePosition;
    var shadows = getShadows(props);
    var typography = getTypography(props);
    var border = getBorders(props);
    return css(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n      &.MuiAccordion-root {\n        box-shadow: ", ";\n        font-family: ", ";\n        border-bottom: ", ";\n        height: fit-content;\n\n        & .MuiAccordionSummary-root {\n          padding: 10px;\n          min-height: 40px;\n\n          &.Mui-expanded {\n            min-height: unset;\n          }\n\n          & .MuiAccordionSummary-expandIcon,\n          & .MuiAccordionSummary-expandIconWrapper {\n            padding: 0;\n            align-self: flex-start;\n          }\n        }\n\n        .MuiAccordionDetails-root {\n          padding: 10px;\n          padding-top: 4px;\n        }\n\n        &:before {\n          opacity: 0;\n        }\n\n        &.Mui-expanded {\n          margin: 0;\n        }\n        ", "\n      }\n    "], ["\n      &.MuiAccordion-root {\n        box-shadow: ", ";\n        font-family: ", ";\n        border-bottom: ", ";\n        height: fit-content;\n\n        & .MuiAccordionSummary-root {\n          padding: 10px;\n          min-height: 40px;\n\n          &.Mui-expanded {\n            min-height: unset;\n          }\n\n          & .MuiAccordionSummary-expandIcon,\n          & .MuiAccordionSummary-expandIconWrapper {\n            padding: 0;\n            align-self: flex-start;\n          }\n        }\n\n        .MuiAccordionDetails-root {\n          padding: 10px;\n          padding-top: 4px;\n        }\n\n        &:before {\n          opacity: 0;\n        }\n\n        &.Mui-expanded {\n          margin: 0;\n        }\n        ", "\n      }\n    "])), shadows === null || shadows === void 0 ? void 0 : shadows.none, typography === null || typography === void 0 ? void 0 : typography.fontFamily, useDivider ? border === null || border === void 0 ? void 0 : border.gray[300] : "none", togglePosition === "left" && leftPosition(props));
});
var leftPosition = function (props) {
    var spaces = getSpaces(props);
    return css(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n    &.MuiAccordion-root {\n      & .MuiAccordionSummary-root {\n        flex-direction: row-reverse;\n\n        .MuiAccordionSummary-content {\n          padding-left: ", "px;\n        }\n\n        .MuiAccordionSummary-expandIconWrapper {\n          margin: 0;\n          transform: rotate(-90deg);\n          align-self: flex-start;\n          margin-top: ", "px;\n\n          &.Mui-expanded {\n            transform: rotate(0deg);\n          }\n        }\n      }\n\n      & .MuiAccordionDetails-root {\n        padding-left: 30px;\n      }\n    }\n  "], ["\n    &.MuiAccordion-root {\n      & .MuiAccordionSummary-root {\n        flex-direction: row-reverse;\n\n        .MuiAccordionSummary-content {\n          padding-left: ", "px;\n        }\n\n        .MuiAccordionSummary-expandIconWrapper {\n          margin: 0;\n          transform: rotate(-90deg);\n          align-self: flex-start;\n          margin-top: ", "px;\n\n          &.Mui-expanded {\n            transform: rotate(0deg);\n          }\n        }\n      }\n\n      & .MuiAccordionDetails-root {\n        padding-left: 30px;\n      }\n    }\n  "])), spaces === null || spaces === void 0 ? void 0 : spaces.xs, spaces === null || spaces === void 0 ? void 0 : spaces.xxs);
};
var templateObject_1$E, templateObject_2$o, templateObject_3$k;

/**
 * @see https://v4.mui.com/components/accordion/
 */
var Accordion = function (props) {
    var children = props.children, useDivider = props.useDivider, _a = props.togglePosition, togglePosition = _a === void 0 ? "right" : _a, id = props.id;
    var _b = React__default.useState(false), expanded = _b[0], setExpanded = _b[1];
    var handleChange = function (panel) {
        return function (_event, isExpanded) {
            setExpanded(isExpanded ? panel : false);
        };
    };
    return (React__default.createElement(StyledAccordion, { id: id, square: true, useDivider: useDivider, togglePosition: togglePosition, expanded: expanded === id, onChange: handleChange(id), "data-testid": "accordion" }, children));
};

var StyledAlert = styled(Alert$2)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    var shadows = getShadows(props);
    var _a = props.severity, severity = _a === void 0 ? "success" : _a;
    var borderColor = (colors && colors[severity][400]) || "black";
    var alertColor = (colors && colors[severity][100]) || "white";
    var iconColor = (colors && colors[severity][400]) || "black";
    var backgroundColor = colors && colors[severity][100];
    return "\n      background-color: ".concat(backgroundColor, ";\n      margin: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px 0;\n      color: ").concat(defaultTheme.palette.text.primary, ";\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px\n        ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px 9px;\n      background-color: ").concat(alertColor, ";\n      &.elevated {\n        border-left: 5px solid;\n        box-shadow: ").concat(shadows === null || shadows === void 0 ? void 0 : shadows.s, ";\n        border-color: ").concat(borderColor, ";\n      }\n      .MuiAlert-icon {\n        path {\n          fill: ").concat(iconColor, ";\n        }\n      }\n    ");
});
var templateObject_1$D;

/**
 * @see https://v4.mui.com/components/alert/
 */
var Alert$1 = function (props) {
    return React__default.createElement(StyledAlert, __assign({}, props));
};

var _path$16;

function _extends$1l() { _extends$1l = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1l.apply(this, arguments); }

function SvgIconBarChartHorizontal3Small(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1l({
    width: 15,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$16 || (_path$16 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.875 2.13a1 1 0 011-1h6.4a1 1 0 011 1v.75a1 1 0 01-1 1h-6.4a1 1 0 01-1-1v-.75zm0 4.5a1 1 0 011-1h10a1 1 0 011 1v.75a1 1 0 01-1 1h-10a1 1 0 01-1-1v-.75zm0 4.5a1 1 0 011-1h2.8a1 1 0 011 1v.75a1 1 0 01-1 1h-2.8a1 1 0 01-1-1v-.75z"
  })));
}

var _path$15;

function _extends$1k() { _extends$1k = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1k.apply(this, arguments); }

function SvgIconBarChartVertical3Small(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1k({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$15 || (_path$15 = /*#__PURE__*/React.createElement("path", {
    d: "M1.13 12V5.6a1 1 0 011-1h.75a1 1 0 011 1V12a1 1 0 01-1 1h-.75a1 1 0 01-1-1zm4.5 0V2a1 1 0 011-1h.75a1 1 0 011 1v10a1 1 0 01-1 1h-.75a1 1 0 01-1-1zm4.5 0V9.2a1 1 0 011-1h.75a1 1 0 011 1V12a1 1 0 01-1 1h-.75a1 1 0 01-1-1z",
    fillRule: "evenodd"
  })));
}

var _path$14;

function _extends$1j() { _extends$1j = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1j.apply(this, arguments); }

function SvgIconBarChartVertical4Small(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1j({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$14 || (_path$14 = /*#__PURE__*/React.createElement("path", {
    d: "M5.61 2.707c.477 0 .864.387.864.864v8.715a.864.864 0 11-1.727 0V3.571c0-.477.387-.864.864-.864zm-2.746 2.23c.476 0 .863.387.863.864v6.474a.864.864 0 11-1.727 0V5.801c0-.477.387-.863.864-.863zM8.358.9c.477 0 .863.387.863.864v10.511a.864.864 0 11-1.727 0V1.764c0-.477.387-.864.864-.864zm2.747 4.22c.477 0 .863.387.863.864v6.291a.864.864 0 01-1.727 0v-6.29c0-.478.387-.864.864-.864z",
    fillRule: "evenodd"
  })));
}

var _path$13;

function _extends$1i() { _extends$1i = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1i.apply(this, arguments); }

function SvgIconCheckCircleLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1i({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$13 || (_path$13 = /*#__PURE__*/React.createElement("path", {
    d: "M16 2c7.72 0 14 6.28 14 14s-6.28 14-14 14S2 23.72 2 16 8.28 2 16 2zm0 2C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm7.115 5.855l.045.143c.087.34.035.712-.137.995l-.082.115-8.695 11.028c-.288.364-.74.429-1.09.155l-.095-.086-4.886-5.165c-.274-.233-.418-.64-.374-1.05.044-.41.27-.756.587-.89.279-.117.586-.051.819.175l.085.096 4.233 4.57 8.168-10.359c.134-.18.315-.299.512-.335.38-.066.746.182.91.608z",
    fillRule: "evenodd"
  })));
}

var _path$12;

function _extends$1h() { _extends$1h = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1h.apply(this, arguments); }

function SvgIconCheckCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1h({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$12 || (_path$12 = /*#__PURE__*/React.createElement("path", {
    d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1.707A5.3 5.3 0 0112.293 7 5.3 5.3 0 017 12.293 5.3 5.3 0 011.707 7 5.3 5.3 0 017 1.707zM9.98 4.62a.8.8 0 00-1.123.14L6.368 7.958l-1.143-1.43-.074-.08a.8.8 0 00-1.176 1.08L5.753 9.75l.08.086a.8.8 0 001.176-.095l3.111-4 .061-.09a.8.8 0 00-.201-1.032z",
    fillRule: "evenodd"
  })));
}

var _path$11;

function _extends$1g() { _extends$1g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1g.apply(this, arguments); }

function SvgIconCheckSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1g({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$11 || (_path$11 = /*#__PURE__*/React.createElement("path", {
    d: "M12.415 1.011a.78.78 0 00-.484.334L5.65 9.862l-3.248-3.67c-.207-.287-.55-.399-.86-.258-.294.132-.497.462-.535.848-.038.38.087.76.333.985l3.826 4.325c.33.37.833.338 1.131-.066l6.825-9.257c.233-.307.294-.774.153-1.166-.148-.411-.492-.66-.86-.592z",
    fillRule: "evenodd"
  })));
}

var _path$10;

function _extends$1f() { _extends$1f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1f.apply(this, arguments); }

function SvgIconChevronDownLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1f({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$10 || (_path$10 = /*#__PURE__*/React.createElement("path", {
    d: "M28.302 8L30 9.725 16 24 2 9.725 3.689 8 16 20.542z",
    fillRule: "evenodd"
  })));
}

var _path$$;

function _extends$1e() { _extends$1e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1e.apply(this, arguments); }

function SvgIconChevronDownSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1e({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$$ || (_path$$ = /*#__PURE__*/React.createElement("path", {
    d: "M6.973 8.977l-5.19-5.328-1.14 1.078 6.328 6.49 6.375-6.423-.886-.963-.184-.081h-.055l-.178.075z",
    fillRule: "evenodd"
  })));
}

var _path$_;

function _extends$1d() { _extends$1d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1d.apply(this, arguments); }

function SvgIconChevronRightLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1d({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$_ || (_path$_ = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 3.697L9.725 2 24 16 9.725 30 8 28.311 20.542 16 8 3.697z"
  })));
}

var _path$Z;

function _extends$1c() { _extends$1c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1c.apply(this, arguments); }

function SvgIconChevronRightSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1c({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Z || (_path$Z = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.544 7.022l-5.328 5.19 1.078 1.139 6.49-6.327L4.36.649l-.963.886-.08.184v.055l.074.178 5.152 5.07z"
  })));
}

var _path$Y;

function _extends$1b() { _extends$1b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1b.apply(this, arguments); }

function SvgIconChevronUpLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1b({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Y || (_path$Y = /*#__PURE__*/React.createElement("path", {
    d: "M28.302 24L30 22.275 16 8 2 22.275 3.689 24 16 11.458z",
    fillRule: "evenodd"
  })));
}

var _path$X;

function _extends$1a() { _extends$1a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1a.apply(this, arguments); }

function SvgIconChevronUpSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1a({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$X || (_path$X = /*#__PURE__*/React.createElement("path", {
    d: "M6.973 5.888l-5.19 5.326-1.14-1.078L6.972 3.65l6.375 6.42-.886.963-.184.08h-.055l-.178-.074z",
    fillRule: "evenodd"
  })));
}

var _path$W, _path2$8;

function _extends$19() { _extends$19 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$19.apply(this, arguments); }

function SvgIconCopyLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$19({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$W || (_path$W = /*#__PURE__*/React.createElement("path", {
    d: "M8.038 24.557h9.55c.648 0 1.156-.395 1.156-.898s-.508-.897-1.155-.897H8.038c-.647 0-1.155.394-1.155.897s.508.898 1.155.898zM17.589 20.78H8.038c-.637 0-1.155-.406-1.155-.91 0-.495.508-.884 1.155-.884h9.55c.637 0 1.156.409 1.156.91 0 .495-.508.885-1.155.885z"
  })), _path2$8 || (_path2$8 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M29.45 7.563c0-.294-.121-.581-.332-.791L23.35.956c-.212-.21-.5-.33-.791-.33H11.245c-1.278 0-2.358 1.082-2.358 2.363V7.01H4.874c-1.3 0-2.358 1.06-2.358 2.363v19.63a2.364 2.364 0 002.358 2.366h15.878a2.366 2.366 0 002.361-2.365v-4.02h4.009c1.28 0 2.362-1.084 2.362-2.363L29.45 7.563zM4.793 9.34c0-.042.037-.081.081-.081h10.191v4.655c0 .62.503 1.125 1.123 1.125h4.645v13.933a.084.084 0 01-.081.082H4.874a.084.084 0 01-.081-.082V9.341zm17.986 3.784l-5.768-5.816c-.211-.21-.5-.331-.79-.331h-5.058v-3.99c0-.044.037-.081.082-.081h10.19v4.656c0 .62.504 1.124 1.124 1.124h4.645v13.934a.084.084 0 01-.082.081h-4.009v-8.787c0-.291-.122-.58-.334-.79zm-5.436-.367v-1.915l1.912 1.915h-1.912zm6.339-6.352V4.49l1.912 1.916h-1.912z"
  })));
}

var _path$V;

function _extends$18() { _extends$18 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$18.apply(this, arguments); }

function SvgIconCopySmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$18({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$V || (_path$V = /*#__PURE__*/React.createElement("path", {
    d: "M9.867.75c.13 0 .257.031.387.102l.099.06.096.08 2.195 2.214a.825.825 0 01.233.452l.01.129.013 5.736c0 .602-.432 1.128-1.028 1.264l-.13.023-.137.008H9.617v1.136c0 .564-.363 1.05-.891 1.228l-.135.037-.132.023-.137.008H2.394c-.61 0-1.13-.427-1.264-1.028l-.022-.131-.008-.137V4.477c0-.61.425-1.13 1.025-1.265l.131-.023.138-.007h1.989V2.045c0-.557.368-1.047.893-1.227L5.41.781l.13-.023.137-.008h4.19zm-3.79 4.08h-3.32v6.747h5.2V6.714H6.9a.822.822 0 01-.78-.576l-.032-.121-.01-.126-.001-1.062zm3.282-2.42H6.044l-.002.759h.554c.13 0 .257.032.387.102l.099.06.096.081 2.195 2.213a.811.811 0 01.205.346l.028.113.011.123v2.951h1.62l.003-4.864-1.056.001a.822.822 0 01-.78-.576l-.033-.122-.01-.126-.002-1.062z",
    fillRule: "evenodd"
  })));
}

var _path$U;

function _extends$17() { _extends$17 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$17.apply(this, arguments); }

function SvgIconDotsHorizontal3Large(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$17({
    width: 22,
    height: 22,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$U || (_path$U = /*#__PURE__*/React.createElement("path", {
    d: "M9.232 10.968a1.768 1.768 0 113.536 0 1.768 1.768 0 01-3.536 0zM2.75 10.968a1.768 1.768 0 113.536 0 1.768 1.768 0 01-3.536 0zM17.482 9.2a1.768 1.768 0 100 3.536 1.768 1.768 0 000-3.536z"
  })));
}

var _path$T;

function _extends$16() { _extends$16 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$16.apply(this, arguments); }

function SvgIconDotsHorizontal3Small(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$16({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$T || (_path$T = /*#__PURE__*/React.createElement("path", {
    d: "M3.5 7.05a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM8.75 7.05a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12.25 8.8a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
  })));
}

var _path$S;

function _extends$15() { _extends$15 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$15.apply(this, arguments); }

function SvgIconDownloadLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$15({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$S || (_path$S = /*#__PURE__*/React.createElement("path", {
    d: "M14.222 5c-3.922 0-7.21 2.837-8 6.608C2.723 12.058 0 15.075 0 18.758 0 22.752 3.19 26 7.111 26h1.067c.384.005.742-.2.936-.539a1.104 1.104 0 000-1.095 1.063 1.063 0 00-.936-.539H7.11c-2.776 0-4.978-2.241-4.978-5.068 0-2.827 2.202-5.07 4.978-5.07a1.074 1.074 0 001.067-.984c.304-3.103 2.9-5.533 6.044-5.533 1.715 0 3.093.661 4.211 1.833.297.312.746.414 1.145.26.456-.176 1.162-.282 1.755-.282a4.67 4.67 0 014.634 4.107c.046.406.312.752.689.894 1.892.707 3.21 2.559 3.21 4.775 0 2.827-2.201 5.068-4.977 5.068h-1.067c-.384-.005-.742.2-.936.54a1.104 1.104 0 000 1.094c.194.339.552.544.936.539h1.067C28.81 26 32 22.751 32 18.759a7.21 7.21 0 00-4.044-6.506c-.65-3.123-3.385-5.443-6.623-5.443a7.47 7.47 0 00-1.866.26C18.057 5.805 16.27 5 14.222 5zm1.767 6.495a1.058 1.058 0 00-.755.33 1.097 1.097 0 00-.3.778v5.793l-.623-.724a1.057 1.057 0 00-1.816.333c-.136.38-.052.806.216 1.104l2.489 2.897c.203.234.494.368.8.368.306 0 .597-.134.8-.368l2.489-2.897c.258-.29.343-.699.222-1.07a1.073 1.073 0 00-.806-.725 1.056 1.056 0 00-1.016.358l-.622.724v-5.793a1.097 1.097 0 00-.309-.786 1.057 1.057 0 00-.77-.322zm-4.267 10.137a1.058 1.058 0 00-.755.33 1.097 1.097 0 00-.3.78v2.172c0 .6.477 1.086 1.066 1.086h8.534c.589 0 1.066-.486 1.066-1.086V22.74a1.09 1.09 0 00-.529-.953 1.05 1.05 0 00-1.075 0 1.09 1.09 0 00-.529.953v1.086h-6.4v-1.086a1.097 1.097 0 00-.308-.786 1.057 1.057 0 00-.77-.323z",
    fillRule: "evenodd"
  })));
}

var _path$R;

function _extends$14() { _extends$14 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$14.apply(this, arguments); }

function SvgIconDownloadSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$14({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$R || (_path$R = /*#__PURE__*/React.createElement("path", {
    d: "M7.01.8a.858.858 0 01.624.262c.166.17.257.402.252.643v5.337l.974-1.134a.857.857 0 011.48.298.905.905 0 01-.182.876L7.668 9.98a.858.858 0 01-.65.298.859.859 0 01-.648-.299L3.882 7.084a.903.903 0 01-.18-.906.857.857 0 011.474-.272l.976 1.136V1.709a.9.9 0 01.246-.64.86.86 0 01.498-.26L7.01.8zm4.786 8.106a.947.947 0 00-.836.94l-.001 1.272H3.042l.001-1.271a.947.947 0 10-1.893 0v2.212c0 .529.424.953.947.953h9.806a.947.947 0 00.94-.837l.009-.155.001-2.173a.947.947 0 00-.946-.947l-.11.006z",
    fillRule: "evenodd"
  })));
}

var _path$Q;

function _extends$13() { _extends$13 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$13.apply(this, arguments); }

function SvgIconEditSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$13({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$Q || (_path$Q = /*#__PURE__*/React.createElement("path", {
    d: "M8.237 3.858L10.6 6.304l-7.004 7.004-2.556.44a.25.25 0 01-.289-.288l.443-2.56 7.043-7.042zm3.314-2.798l.07.047.085.074 1.644 1.646a.515.515 0 010 .729l-1.641 1.639-2.363-2.446 1.6-1.598a.516.516 0 01.605-.091z",
    fillRule: "evenodd"
  })));
}

var _path$P;

function _extends$12() { _extends$12 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$12.apply(this, arguments); }

function SvgIconExclamationMarkCircleLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$12({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$P || (_path$P = /*#__PURE__*/React.createElement("path", {
    d: "M16 2c7.72 0 14 6.28 14 14s-6.28 14-14 14S2 23.72 2 16 8.28 2 16 2zm0 2C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm-1.774 13.385c.063 1.199.937 1.736 1.774 1.736.82 0 1.72-.61 1.774-1.743l.353-8.25.001-.032A2.13 2.13 0 0016 6.97a2.13 2.13 0 00-2.128 2.127v.032l.354 8.257zM16 8.458a.64.64 0 01.639.626l-.353 8.227c-.014.29-.205.32-.286.32-.186 0-.272-.047-.286-.317l-.353-8.23A.64.64 0 0116 8.457zm0 11.825c-.662 0-1.31.27-1.779.739a2.528 2.528 0 00-.734 1.774c0 .664.268 1.311.734 1.778a2.531 2.531 0 001.779.735c.666 0 1.314-.269 1.772-.732a2.52 2.52 0 00.74-1.78A2.524 2.524 0 0016 20.283zm.718 3.241c-.37.376-1.065.376-1.444-.003a1.031 1.031 0 010-1.447c.192-.192.456-.302.726-.302a1.032 1.032 0 011.023 1.024c0 .27-.109.534-.305.728z",
    fillRule: "evenodd"
  })));
}

var _path$O;

function _extends$11() { _extends$11 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$11.apply(this, arguments); }

function SvgIconExclamationMarkCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$11({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$O || (_path$O = /*#__PURE__*/React.createElement("path", {
    d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1.707A5.3 5.3 0 001.707 7 5.3 5.3 0 007 12.293 5.3 5.3 0 0012.293 7 5.3 5.3 0 007 1.707zm-.813 7.007c.427-.43 1.199-.432 1.62-.002a1.151 1.151 0 01.005 1.629 1.15 1.15 0 01-.812.342c-.302 0-.598-.124-.813-.34a1.164 1.164 0 010-1.63zM7 2.927c.444 0 .822.306.925.733l.02.11.006.108V6.61a.951.951 0 01-1.876.218l-.02-.11-.006-.108V3.878c0-.525.426-.951.951-.951z",
    fillRule: "evenodd"
  })));
}

var _g$c;

function _extends$10() { _extends$10 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$10.apply(this, arguments); }

function SvgIconEyeOpenSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$10({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$c || (_g$c = /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2.039c3.78 0 6.76 4.378 6.884 4.564a.738.738 0 010 .794C13.76 7.583 10.78 11.96 7 11.96c-3.78 0-6.76-4.378-6.884-4.564a.738.738 0 010-.794C.24 6.417 3.22 2.04 7 2.04zm0 1.813a3.148 3.148 0 100 6.296 3.148 3.148 0 000-6.296z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 5.347a1.653 1.653 0 110 3.306 1.653 1.653 0 010-3.306z"
  }))));
}

var _path$N, _path2$7;

function _extends$$() { _extends$$ = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$$.apply(this, arguments); }

function SvgIconFlagCheckSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$$({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$N || (_path$N = /*#__PURE__*/React.createElement("path", {
    d: "M9.083 2H.78a.757.757 0 00-.552.244.863.863 0 00-.229.59v8.333c0 .22.082.433.229.589A.757.757 0 00.78 12h8.302a.753.753 0 00.508-.2l3.864-3.535c.17-.156.308-.35.402-.569a1.76 1.76 0 000-1.392 1.661 1.661 0 00-.402-.57L9.59 2.202A.753.753 0 009.083 2z"
  })), _path2$7 || (_path2$7 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.464 4.9a.758.758 0 00-1.038.126L5.125 7.882 4.067 6.605 4 6.534a.76.76 0 00-.971-.04.698.698 0 00-.116 1.004l1.644 1.984.073.077a.758.758 0 001.088-.085l2.877-3.571.056-.08a.698.698 0 00-.186-.923z",
    fill: "#fff"
  })));
}

var _mask, _path$M;

function _extends$_() { _extends$_ = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$_.apply(this, arguments); }

function SvgIconFlagOutlineSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$_({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _mask || (_mask = /*#__PURE__*/React.createElement("mask", {
    id: "IconFlagOutlineSmall_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.083 2H.78a.757.757 0 00-.552.244.863.863 0 00-.229.59v8.333c0 .22.082.433.229.589A.757.757 0 00.78 12h8.302a.753.753 0 00.508-.2l3.864-3.535c.17-.156.308-.35.402-.569a1.76 1.76 0 000-1.392 1.661 1.661 0 00-.402-.57L9.59 2.202A.753.753 0 009.083 2z"
  }))), _path$M || (_path$M = /*#__PURE__*/React.createElement("path", {
    d: "M9.083 2V1v1zM0 2.833h-1 1zM9.083 12v1-1zm.508-.2l.675.737-.675-.738zm3.864-3.535l.675.738-.675-.738zm0-2.53l.675-.738-.675.738zM9.59 2.2l.675-.738-.675.738zM9.083 1H.78v2h8.302V1zM.78 1c-.494 0-.954.21-1.282.56L.96 2.928A.244.244 0 01.78 3V1zm-1.282.56C-.827 1.908-1 2.367-1 2.833h2c0 .024-.008.06-.042.095L-.5 1.56zM-1 2.833v8.334h2V2.833h-2zm0 8.334c0 .466.173.925.5 1.273l1.458-1.368c.034.036.042.07.042.095h-2zm.5 1.273c.327.35.787.56 1.281.56v-2c.08 0 .142.034.177.072L-.5 12.44zM.78 13h8.302v-2H.78v2zm8.302 0c.444 0 .863-.17 1.183-.463l-1.35-1.476A.248.248 0 019.083 11v2zm1.183-.463l3.864-3.534-1.35-1.475-3.864 3.534 1.35 1.475zm3.864-3.534a2.66 2.66 0 00.645-.91L12.94 7.3a.662.662 0 01-.16.227l1.35 1.475zm.645-.91A2.76 2.76 0 0015 7h-2a.763.763 0 01-.061.3l1.836.792zM15 7a2.76 2.76 0 00-.225-1.092l-1.836.791c.04.092.061.195.061.301h2zm-.225-1.092a2.66 2.66 0 00-.646-.911l-1.35 1.475c.065.059.12.135.16.227l1.836-.791zm-.646-.911l-3.863-3.534-1.35 1.476 3.864 3.533 1.35-1.475zm-3.863-3.534A1.753 1.753 0 009.083 1v2a.248.248 0 01-.167-.061l1.35-1.476z",
    mask: "url(#IconFlagOutlineSmall_svg__a)"
  })));
}

var _path$L, _path2$6;

function _extends$Z() { _extends$Z = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Z.apply(this, arguments); }

function SvgIconFlagQuestionmarkSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Z({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$L || (_path$L = /*#__PURE__*/React.createElement("path", {
    d: "M9.083 2H.78a.757.757 0 00-.552.244.863.863 0 00-.229.59v8.333c0 .22.082.433.229.589A.757.757 0 00.78 12h8.302a.753.753 0 00.508-.2l3.864-3.535c.17-.156.308-.35.402-.569a1.76 1.76 0 000-1.392 1.661 1.661 0 00-.402-.57L9.59 2.202A.753.753 0 009.083 2z"
  })), _path2$6 || (_path2$6 = /*#__PURE__*/React.createElement("path", {
    d: "M6.469 9.04a.738.738 0 00-.519-.215.74.74 0 00-.52.216.74.74 0 000 1.039.74.74 0 001.038.001.737.737 0 00.001-1.04zM8.118 5.411c-.047-.853-.885-1.818-2.07-1.853-1.185-.035-1.983.886-2.12 1.666 0 0-.012.066-.018.131a.773.773 0 00.018.234c.016.049.173.425.612.425.237 0 .393-.065.455-.19.054-.094.095-.255.122-.35l.001-.004c.028-.096.073-.253.261-.434a.916.916 0 01.554-.272l.076-.006.074-.002c.598 0 .72.429.72.727 0 .335-.43.682-.72.98-.29.297-.592.594-.739.953-.147.359-.024.587.046.657.07.07.209.245.527.245.319 0 .506-.088.62-.202.116-.114.2-.411.516-.848.314-.438 1.002-1.116 1.057-1.604l.007-.088.003-.092-.002-.073z",
    fill: "#fff"
  })));
}

var _path$K, _path2$5;

function _extends$Y() { _extends$Y = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Y.apply(this, arguments); }

function SvgIconFlagXmarkSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Y({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$K || (_path$K = /*#__PURE__*/React.createElement("path", {
    d: "M9.083 2H.78a.757.757 0 00-.552.244.863.863 0 00-.229.59v8.333c0 .22.082.433.229.589A.757.757 0 00.78 12h8.302a.753.753 0 00.508-.2l3.864-3.535c.17-.156.308-.35.402-.569a1.76 1.76 0 000-1.392 1.661 1.661 0 00-.402-.57L9.59 2.202A.753.753 0 009.083 2z"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "M3.18 4.68a.617.617 0 01.874 0l1.571 1.572 1.571-1.571a.617.617 0 11.873.873L6.498 7.125l1.571 1.571a.617.617 0 11-.873.873L5.625 7.998 4.054 9.569a.617.617 0 01-.873-.873l1.571-1.571-1.571-1.571a.617.617 0 010-.873z",
    fill: "#fff"
  })));
}

var _path$J;

function _extends$X() { _extends$X = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$X.apply(this, arguments); }

function SvgIconFlaskLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$X({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$J || (_path$J = /*#__PURE__*/React.createElement("path", {
    d: "M8.308 29a2.957 2.957 0 01-1.496-.436c-1.303-.855-1.701-2.626-.896-3.983l1.595-2.697a.926.926 0 01.325-.527l4.272-7.227V8.2c-1.136-.265-1.934-1.315-1.91-2.514v-.132c0-1.41 1.11-2.554 2.48-2.554h6.611c1.37 0 2.48 1.144 2.48 2.554v.132c.025 1.199-.773 2.25-1.909 2.514v5.93l4.272 7.227c.165.132.28.318.325.527l1.595 2.697c.805 1.357.407 3.128-.896 3.983-.453.277-.97.428-1.496.436zm15.352-2.22a.63.63 0 00.459-.19.669.669 0 00.19-.469.64.64 0 00-.118-.365l-1.447-2.412H9.224l-1.448 2.412a.64.64 0 00-.118.365c0 .177.07.346.191.47a.63.63 0 00.459.19H23.66zM19.067 5.24h-6.166a.31.31 0 00-.306.314v.132a.31.31 0 00.306.314h.521c.596.006 1.078.502 1.083 1.115v7.34c.003.2-.051.398-.157.567l-3.593 6.031h10.458l-3.593-6.031a1.036 1.036 0 01-.157-.568V7.115c.005-.613.487-1.11 1.082-1.115h.522a.31.31 0 00.305-.314v-.132a.31.31 0 00-.305-.314z",
    fillRule: "evenodd"
  })));
}

var _g$b;

function _extends$W() { _extends$W = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$W.apply(this, arguments); }

function SvgIconFlaskPrivateLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$W({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$b || (_g$b = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.262 25.094v-.314H6.87a.651.651 0 01-.47-.19.661.661 0 01-.194-.469.632.632 0 01.12-.365l1.48-2.412h10.452A7.492 7.492 0 0122 18.05l-3.551-5.89V6.23A2.52 2.52 0 0020.4 3.686v-.132A2.545 2.545 0 0017.865 1h-6.529a2.545 2.545 0 00-2.535 2.554v.132A2.52 2.52 0 0010.753 6.2v5.93l-4.366 7.227a.923.923 0 00-.332.527l-1.63 2.697a2.932 2.932 0 00.916 3.983c.463.277.99.428 1.529.436h10.643a7.534 7.534 0 01-.251-1.906zm-4.447-12.021c.11-.173.17-.373.171-.578v-7.34a1.12 1.12 0 00-1.116-1.114h-.534a.3.3 0 01-.301-.314v-.173c0-.17.133-.308.301-.314h6.53c.172 0 .311.14.311.314v.132c0 .174-.14.314-.312.314h-.533a1.12 1.12 0 00-1.106 1.115v7.34a1.02 1.02 0 00.16.567l3.672 6.031H9.143l3.672-5.98z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5 17a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm.015 2.832A2.63 2.63 0 0021.89 22.3v.88a.88.88 0 00-.88.87v3.5c0 .486.394.88.88.88h5.24a.87.87 0 00.87-.88l.01-3.5a.87.87 0 00-.87-.87v-.88a2.63 2.63 0 00-2.625-2.468zM24.5 24.61a.65.65 0 01.65.65.64.64 0 01-.33.55v.9a.32.32 0 01-.63 0v-.9a.62.62 0 01-.33-.55.65.65 0 01.64-.65zm0-4.06a1.75 1.75 0 011.75 1.75v.88h-3.5v-.88a1.76 1.76 0 011.75-1.75z"
  }))));
}

var _g$a;

function _extends$V() { _extends$V = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$V.apply(this, arguments); }

function SvgIconFlaskPublicLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$V({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$a || (_g$a = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.262 25.094v-.314H6.87a.651.651 0 01-.47-.19.661.661 0 01-.194-.469.632.632 0 01.12-.365l1.48-2.412h10.452A7.492 7.492 0 0122 18.05l-3.551-5.89V6.23A2.52 2.52 0 0020.4 3.686v-.132A2.545 2.545 0 0017.865 1h-6.529a2.545 2.545 0 00-2.535 2.554v.132A2.52 2.52 0 0010.753 6.2v5.93l-4.366 7.227a.923.923 0 00-.332.527l-1.63 2.697a2.932 2.932 0 00.916 3.983c.463.277.99.428 1.529.436h10.643a7.534 7.534 0 01-.251-1.906zm-4.447-12.021c.11-.173.17-.373.171-.578v-7.34a1.12 1.12 0 00-1.116-1.114h-.534a.3.3 0 01-.301-.314v-.173c0-.17.133-.308.301-.314h6.53c.172 0 .311.14.311.314v.132c0 .174-.14.314-.312.314h-.533a1.12 1.12 0 00-1.106 1.115v7.34a1.02 1.02 0 00.16.567l3.672 6.031H9.143l3.672-5.98z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.106 17.025a7.5 7.5 0 10-1.211 14.95 7.5 7.5 0 001.21-14.95zm.86 1.09c.29.068.577.151.86.25.154.106.327.184.51.23a6.36 6.36 0 012.11 1.59c.039.044.063.1.07.16a.86.86 0 010 .42.76.76 0 00-.06.25.37.37 0 00.29.32c.126.016.253.016.38 0a.24.24 0 01.22.16c.056.168.133.33.23.48.289.702.451 1.45.48 2.21a.4.4 0 01-.1.28 2.81 2.81 0 00-.35.48 7.31 7.31 0 01-.77 1.43 1.56 1.56 0 00-.42.6 3 3 0 00-.06.51c0 .07-.13.07-.2 0a3.86 3.86 0 01-.54-1.25c-.06-.32-.13-.64-.22-1a1.3 1.3 0 00-.58-.77 2.9 2.9 0 00-1-.15 1.18 1.18 0 01-1-.36.76.76 0 01-.16-.44 2 2 0 011-2.11c.09-.07.19-.1.28-.16a.68.68 0 00.23-.67.09.09 0 00-.13-.07 2.92 2.92 0 00-.54.23c-.1 0-.2 0-.16-.1a3.66 3.66 0 01.12-1 1.39 1.39 0 000-1 .3.3 0 00-.2-.13h-.89a1.73 1.73 0 00.41-.35.25.25 0 01.19-.04zm-3.23.09a.11.11 0 01.16.07c.1.16.16.32.26.51a1.5 1.5 0 01.06 1.24c-.22.45-.73.64-1.15.87a5.86 5.86 0 00-2.14 1.91s-.06.1-.09.1a.11.11 0 01-.16-.07.78.78 0 01-.26-.22s-.12 0-.12.1a1 1 0 00.47 1.15.71.71 0 01.2.12c.12.16 0 .39 0 .58 0 .19.35.41.64.38a3.23 3.23 0 00.76-.25 1.92 1.92 0 011.73.22c.25.16.48.42.73.58.221.167.492.255.77.25a.26.26 0 01.16.06.92.92 0 01-.16.8 6.31 6.31 0 01-.7.67c-.55.61-.67 1.54-1.12 2.21a1.91 1.91 0 00-.26.41 1.72 1.72 0 00-.06.67s0 .1-.06.07a1.27 1.27 0 01-.32-.13.21.21 0 01-.13-.16 8.63 8.63 0 00-.93-2.65 2.28 2.28 0 00-.7-.86c-.1-.07-.19-.13-.22-.23s0-.16 0-.22a2.46 2.46 0 00-1-2.27.82.82 0 01-.32-.29c-.07-.12-.07-.32-.13-.44a1.92 1.92 0 00-.45-.39c-.06 0-.06-.09-.06-.16a6.5 6.5 0 014.6-4.63z"
  }))));
}

var _path$I;

function _extends$U() { _extends$U = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$U.apply(this, arguments); }

function SvgIconGlobeSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$U({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$I || (_path$I = /*#__PURE__*/React.createElement("path", {
    d: "M7.554.175c-4.2-.35-7.729 3.18-7.379 7.38.263 3.324 2.946 6.008 6.27 6.27 4.23.35 7.73-3.18 7.38-7.38-.262-3.324-2.946-6.008-6.27-6.27zm.788.992c.262.058.525.145.787.233.146.088.292.175.467.204.729.35 1.4.846 1.925 1.458.029.03.058.088.058.146.03.117 0 .263-.029.38-.03.087-.058.145-.058.233 0 .146.145.262.262.291.088.03.234.03.35.03a.22.22 0 01.204.145c.059.146.146.38.204.438.263.642.409 1.313.438 2.013 0 .087-.03.204-.087.262a2.414 2.414 0 00-.321.438c-.204.408-.38.875-.671 1.224-.146.175-.321.321-.38.555-.058.146-.028.32-.058.466 0 .059-.116.059-.175.03a3.299 3.299 0 01-.495-1.138 9.48 9.48 0 00-.205-.875c-.087-.292-.262-.554-.525-.7-.291-.146-.612-.117-.933-.146-.32 0-.67-.058-.875-.32a.697.697 0 01-.146-.409c-.146-.758.263-1.575.933-1.925.088-.058.175-.088.263-.146a.605.605 0 00.204-.612c0-.059-.087-.088-.116-.059-.175.059-.35.117-.496.204-.088.03-.175-.029-.146-.087 0-.263.029-.583.117-.875.087-.32.175-.67.029-.933-.03-.059-.117-.117-.175-.117h-.817c-.03 0-.03-.03-.03-.03.147-.087.263-.203.38-.32a.221.221 0 01.117-.058zm-2.946.087c.058-.029.117 0 .146.058.087.146.146.292.233.467.146.38.233.788.058 1.138-.204.408-.67.583-1.05.787a5.372 5.372 0 00-1.954 1.75c-.029.03-.058.088-.087.088-.059.029-.117 0-.146-.059-.088-.058-.175-.116-.234-.204-.029-.029-.116.03-.116.088-.117.408.087.846.437 1.05a.61.61 0 01.175.116c.117.146 0 .35.03.525.029.234.32.38.583.35.262-.029.466-.146.7-.233.525-.175 1.137-.117 1.575.204.233.146.437.38.67.525.205.146.467.263.7.233.059 0 .117.03.147.059.087.233 0 .525-.146.729-.175.233-.438.408-.642.612-.496.555-.612 1.4-1.02 2.013-.088.117-.176.233-.234.38-.088.203-.059.408-.059.612 0 .029-.029.087-.058.058-.087-.03-.204-.058-.292-.117-.058-.029-.116-.087-.116-.146a7.974 7.974 0 00-.846-2.42c-.175-.292-.35-.613-.642-.788-.087-.058-.175-.117-.204-.204-.029-.058 0-.146 0-.204.117-.788-.262-1.604-.904-2.071-.117-.088-.233-.146-.292-.263-.058-.116-.058-.291-.116-.408-.059-.117-.292-.262-.409-.35-.058-.029-.058-.087-.058-.146.496-2.012 2.13-3.675 4.17-4.229z",
    fillRule: "evenodd"
  })));
}

var _path$H;

function _extends$T() { _extends$T = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$T.apply(this, arguments); }

function SvgIconGridLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$T({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$H || (_path$H = /*#__PURE__*/React.createElement("path", {
    d: "M3.806 3.001A.88.88 0 003 3.868v24.265c0 .479.403.867.9.867h25.2c.497 0 .9-.388.9-.867V3.868c0-.479-.403-.867-.9-.867H3.9a.935.935 0 00-.094 0zM4.8 4.734h4.8v4.622H4.8V4.734zm6.6 0h4.2v4.622h-4.2V4.734zm6 0h4.2v4.622h-4.2V4.734zm6 0h4.8v4.622h-4.8V4.734zM4.8 11.09h4.8v4.044H4.8V11.09zm6.6 0h4.2v4.044h-4.2V11.09zm6 0h4.2v4.044h-4.2V11.09zm6 0h4.8v4.044h-4.8V11.09zM4.8 16.867h4.8v4.044H4.8v-4.044zm6.6 0h4.2v4.044h-4.2v-4.044zm6 0h4.2v4.044h-4.2v-4.044zm6 0h4.8v4.044h-4.8v-4.044zM4.8 22.645h4.8v4.622H4.8v-4.622zm6.6 0h4.2v4.622h-4.2v-4.622zm6 0h4.2v4.622h-4.2v-4.622zm6 0h4.8v4.622h-4.8v-4.622z",
    fillRule: "evenodd"
  })));
}

var _g$9;

function _extends$S() { _extends$S = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$S.apply(this, arguments); }

function SvgIconGridPrivateLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$S({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$9 || (_g$9 = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.135 25.307h-2.788v-4.283h3.685a6.709 6.709 0 011.892-2.191v-3.387h4.283v1.693h.399c.498 0 .996.1 1.394.1V2.896A.893.893 0 0025.104 2H1.896h-.1C1.3 2 1 2.398 1 2.896v23.208c0 .498.398.896.896.896h15.538c-.199-.498-.299-1.096-.299-1.693zm2.79-21.514h4.282v4.283h-4.283V3.793zm0 6.175h4.282v3.685h-4.283V9.968zm-5.578-6.175h3.685v4.283h-3.685V3.793zm0 6.175h3.685v3.685h-3.685V9.968zm0 5.478h3.685v3.685h-3.685v-3.685zm-7.37 9.86H2.692v-4.282h4.283v4.283zm0-6.175H2.692v-3.685h4.283v3.685zm0-5.478H2.692V9.968h4.283v3.685zm0-5.577H2.692V3.793h4.283v4.283zm5.577 17.23H8.869v-4.282h3.685v4.283zm0-6.175H8.869v-3.685h3.685v3.685zm0-5.478H8.869V9.968h3.685v3.685zm0-5.577H8.869V3.793h3.685v4.283z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5 17c4.2 0 7.5 3.4 7.5 7.5S28.6 32 24.5 32 17 28.6 17 24.5s3.4-7.5 7.5-7.5zm0 2.6c-1.4 0-2.6 1.2-2.6 2.6v.9c-.5 0-.9.4-.9.9v3.5c0 .5.4.9.9.9h5.2c.5 0 .9-.4.9-.9V24c0-.5-.4-.9-.9-.9v-.9c0-1.4-1.2-2.6-2.6-2.6zm0 5c.4 0 .7.3.6.6 0 .3-.1.5-.3.6v.9c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-.9c-.2-.2-.3-.4-.3-.6 0-.3.2-.6.6-.6zm0-4.1c1 0 1.8.8 1.7 1.8v.9h-3.5v-.9c0-1 .8-1.8 1.8-1.8z"
  }))));
}

var _g$8;

function _extends$R() { _extends$R = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$R.apply(this, arguments); }

function SvgIconGridPublicLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$R({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$8 || (_g$8 = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.135 25.307h-2.788v-4.283h3.685a6.709 6.709 0 011.892-2.191v-3.387h4.283v1.693h.399c.498 0 .996.1 1.394.1V2.896A.893.893 0 0025.104 2H1.896h-.1C1.3 2 1 2.398 1 2.896v23.208c0 .498.398.896.896.896h15.538c-.199-.498-.299-1.096-.299-1.693zm2.79-21.514h4.282v4.283h-4.283V3.793zm0 6.175h4.282v3.685h-4.283V9.968zm-5.578-6.175h3.685v4.283h-3.685V3.793zm0 6.175h3.685v3.685h-3.685V9.968zm0 5.478h3.685v3.685h-3.685v-3.685zm-7.37 9.86H2.692v-4.282h4.283v4.283zm0-6.175H2.692v-3.685h4.283v3.685zm0-5.478H2.692V9.968h4.283v3.685zm0-5.577H2.692V3.793h4.283v4.283zm5.577 17.23H8.869v-4.282h3.685v4.283zm0-6.175H8.869v-3.685h3.685v3.685zm0-5.478H8.869V9.968h3.685v3.685zm0-5.577H8.869V3.793h3.685v4.283z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.098 17.028c-4.583-.398-8.468 3.487-8.07 8.07.299 3.586 3.188 6.575 6.874 6.874 4.583.398 8.468-3.487 8.07-8.07-.299-3.686-3.188-6.675-6.874-6.874zm.896.996l.897.3c.2.099.299.199.498.199.797.398 1.494.896 2.092 1.594 0 0 .1.1.1.199v.398c0 .1-.1.2-.1.3 0 .198.2.298.3.298h.398c.1 0 .199.1.199.2.1.199.2.398.2.497.298.698.398 1.395.497 2.192 0 .1 0 .2-.1.299-.099.1-.298.299-.398.498-.2.399-.398.996-.697 1.295-.2.2-.399.399-.399.598-.1.2 0 .398-.1.498 0 .1-.099.1-.199 0-.299-.398-.398-.797-.498-1.195-.1-.3-.1-.598-.199-.997a1.55 1.55 0 00-.598-.797c-.299-.199-.697-.1-.996-.199-.399 0-.697-.1-.996-.398-.1-.1-.2-.3-.2-.399-.199-.797.3-1.693.997-2.092.1-.1.199-.1.299-.2.199-.198.298-.398.199-.697 0-.1-.1-.1-.1-.1-.199.1-.398.1-.498.2-.1 0-.2 0-.2-.1 0-.298 0-.597.1-.996.1-.398.2-.697 0-.996 0-.1-.1-.1-.199-.1h-.896c.199-.1.298-.199.398-.398.1.199.2.1.2.1zm-3.188.1c.1 0 .1 0 .2.1.1.199.199.299.299.498.199.398.298.896.1 1.195-.2.399-.698.598-1.097.897-.896.398-1.594 1.096-2.092 1.893l-.1.1c-.1 0-.1 0-.199-.1-.1-.1-.199-.1-.299-.2 0 0-.1 0-.1.1-.099.399.1.897.499 1.096.1 0 .1.1.2.1.099.199 0 .398 0 .597 0 .3.398.399.597.399.299 0 .498-.2.797-.299.598-.2 1.195-.1 1.694.2.298.198.498.398.697.597.2.2.498.299.797.299.1 0 .1 0 .2.1.099.298 0 .597-.2.796-.2.3-.498.399-.697.698-.499.598-.698 1.494-1.096 2.192-.1.1-.2.298-.3.398-.099.2-.099.399-.099.697 0 0 0 .1-.1.1s-.199-.1-.298-.1c-.1 0-.1-.1-.1-.199-.2-.896-.498-1.793-.897-2.69-.199-.299-.398-.697-.697-.896-.1-.1-.2-.1-.2-.2v-.199c.1-.896-.298-1.793-.995-2.291-.1-.1-.3-.2-.3-.299 0-.1-.099-.299-.099-.398l-.398-.399c-.1 0-.1-.1-.1-.2.398-2.091 2.092-3.984 4.383-4.582z"
  }))));
}

var _g$7;

function _extends$Q() { _extends$Q = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$Q.apply(this, arguments); }

function SvgIconInfoCircleLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$Q({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$7 || (_g$7 = /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 30c7.72 0 14-6.28 14-14S23.72 2 16 2 2 8.28 2 16s6.28 14 14 14zm0-2C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.306 12.687c1.08 0 1.955.875 1.955 1.954v8.612c0 1.08-.876 1.955-1.955 1.955h-.401a1.955 1.955 0 01-1.955-1.955v-8.612c0-1.08.875-1.954 1.955-1.954zm0 1.5h-.401a.455.455 0 00-.455.454v8.612c0 .251.203.455.455.455h.401a.455.455 0 00.455-.455v-8.612a.455.455 0 00-.455-.454zM16.105 6.632a2.538 2.538 0 012.527 2.526c0 .67-.272 1.322-.745 1.79a2.522 2.522 0 01-1.782.736c-.667 0-1.32-.27-1.788-.739a2.544 2.544 0 01-.738-1.787c0-.665.27-1.315.738-1.784a2.546 2.546 0 011.788-.742zm0 1.497c-.27 0-.536.11-.73.303a1.037 1.037 0 000 1.455c.382.38 1.08.38 1.452.003a1.024 1.024 0 00.006-1.455 1.037 1.037 0 00-.728-.306z"
  }))));
}

var _path$G;

function _extends$P() { _extends$P = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$P.apply(this, arguments); }

function SvgIconInfoCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$P({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$G || (_path$G = /*#__PURE__*/React.createElement("path", {
    d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1.707A5.3 5.3 0 001.707 7 5.3 5.3 0 007 12.293 5.3 5.3 0 0012.293 7 5.3 5.3 0 007 1.707zm0 4.586c.488 0 .89.367.945.84l.006.11v2.733a.951.951 0 01-1.896.11l-.006-.11V7.244c0-.525.426-.951.951-.951zM7 3.17a1.152 1.152 0 01.807 1.971c-.421.43-1.193.428-1.62-.002a1.164 1.164 0 010-1.63c.215-.216.51-.34.813-.34z",
    fillRule: "evenodd"
  })));
}

var _path$F;

function _extends$O() { _extends$O = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$O.apply(this, arguments); }

function SvgIconInfoSpeechBubbleLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$O({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$F || (_path$F = /*#__PURE__*/React.createElement("path", {
    d: "M26.198 6.404c5.097 5.414 5.054 13.844-.04 19.205l-.246.253A14.007 14.007 0 0116.035 30a14.04 14.04 0 01-6.556-1.63 8.214 8.214 0 01-5.793 1.312 1.496 1.496 0 01-1.226-1.293 1.418 1.418 0 01.82-1.495 4.66 4.66 0 001.931-1.996c-4.816-5.819-4.14-14.406 1.528-19.4C12.407.502 21.02.903 26.199 6.403zm-18.254.712C3.098 11.53 2.67 19.003 6.978 23.943l.666.501-.328.705a8.121 8.121 0 01-1.931 2.69 6.763 6.763 0 003.476-1.37l.666-.5.55.51a12.088 12.088 0 0014.298-1.702l.233-.226c4.64-4.632 4.727-12.116.198-16.854C20.277 2.958 12.79 2.7 7.944 7.116zm6.185 6.734l.206.014h2.684a2.171 2.171 0 012.192 2.141v.029c-.007.416-.04.832-.096 1.244l-.078.492c-.154 1.022-.309 2.093-.473 3.058.454.074.864.314 1.15.675.375.469.51 1.085.366 1.668v.077a2.565 2.565 0 01-.521 1.023 4.076 4.076 0 01-3.09 1.62h-.058a6.553 6.553 0 01-1.41-.116 3.482 3.482 0 01-2.48-3.655c.067-.666.144-1.321.25-1.929.106-.83.232-1.659.357-2.498a2.025 2.025 0 01-1.071-2.035c.073-.91.759-1.65 1.66-1.794.206-.02.413-.02.618 0zm.1 1.654a1.266 1.266 0 00-.328 0 .328.328 0 00-.319.337.405.405 0 00.242.444c.152.043.306.075.463.096.367.048.483.212.483.656v.193c-.164 1.08-.319 2.15-.464 3.221a30.363 30.363 0 00-.241 1.852 1.929 1.929 0 001.236 1.93c.338.055.68.078 1.023.067a2.463 2.463 0 001.931-1.023c.098-.12.167-.263.203-.414.048-.213-.058-.367-.212-.367h-.107c-.144.068-.27.164-.405.241-.17.078-.348.137-.531.174h-.048c-.174 0-.32-.125-.377-.367a1.927 1.927 0 010-.588c.039-.415.106-.81.164-1.225.203-1.215.386-2.46.57-3.675.044-.32.07-.641.077-.964-.02-.396-.222-.588-.55-.588zm2.414-8.932a3.117 3.117 0 012.945 3.11 3.12 3.12 0 01-5.79 1.607 3.113 3.113 0 010-3.214 3.12 3.12 0 012.845-1.503zm0 1.64a1.477 1.477 0 00-1.094 2.508 1.478 1.478 0 002.532-1.042 1.457 1.457 0 00-1.438-1.466z",
    fillRule: "evenodd"
  })));
}

var _path$E;

function _extends$N() { _extends$N = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$N.apply(this, arguments); }

function SvgIconLightBulbSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$N({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$E || (_path$E = /*#__PURE__*/React.createElement("path", {
    d: "M7.001 0a4.851 4.851 0 013.65 8.043l-.148.177c-.498.622-1.03 1.547-1.23 2.217l-.001.001v2.02a.555.555 0 01-.054.235l-.04.07-.658.99a.552.552 0 01-.46.247H5.942a.553.553 0 01-.46-.247l-.659-.99a.55.55 0 01-.092-.305l-.001-1.997c-.227-.77-.845-1.809-1.38-2.419l-.159-.191a4.821 4.821 0 01-1.041-3A4.833 4.833 0 017.001 0zm0 1.535a3.301 3.301 0 00-3.315 3.316c.003.808.29 1.576.82 2.18l.226.269A8.333 8.333 0 016.2 10.02l-.066-.196 1.733.001A8.387 8.387 0 019.27 7.298l.226-.268c.529-.603.82-1.377.82-2.179A3.32 3.32 0 007 1.535zm.247 1.388a.772.772 0 110 1.544l-.093.007a.633.633 0 00-.538.624l-.007.105a.772.772 0 01-1.537-.105c0-1.2.975-2.175 2.175-2.175z",
    fillRule: "evenodd"
  })));
}

var _path$D;

function _extends$M() { _extends$M = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$M.apply(this, arguments); }

function SvgIconLinesDashed3Solid1Small(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$M({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$D || (_path$D = /*#__PURE__*/React.createElement("path", {
    d: "M7.201 9.116a.864.864 0 100-1.727H3.728a.864.864 0 000 1.727H7.2zM10.804 9.116a.864.864 0 000-1.727H9.33a.864.864 0 000 1.727h1.474zM3.6 6.628a.864.864 0 000-1.727H2.127a.864.864 0 000 1.727H3.6zM9.204 6.622a.864.864 0 000-1.727H5.73a.864.864 0 000 1.727h3.474zM5.073 4.14a.864.864 0 000-1.727H3.6a.864.864 0 100 1.727h1.474zM10.672 4.14a.864.864 0 000-1.727H7.198a.864.864 0 100 1.727h3.474zM12.359 11.616a.864.864 0 100-1.727H1.847a.864.864 0 100 1.727H12.36z"
  })));
}

var _path$C;

function _extends$L() { _extends$L = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$L.apply(this, arguments); }

function SvgIconLinesHorizontalSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$L({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$C || (_path$C = /*#__PURE__*/React.createElement("path", {
    d: "M13.42 7.12c0 .468-.379.847-.847.847H1.267a.847.847 0 110-1.694h11.306c.468 0 .847.38.847.847zm0-4.073c0 .467-.379.846-.847.846H1.267a.847.847 0 110-1.693h11.306c.468 0 .847.38.847.847zm0 8.147c0 .467-.379.846-.847.846H1.267a.847.847 0 110-1.693h11.306c.468 0 .847.379.847.847z",
    fillRule: "evenodd"
  })));
}

var _path$B;

function _extends$K() { _extends$K = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$K.apply(this, arguments); }

function SvgIconLinkSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$K({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$B || (_path$B = /*#__PURE__*/React.createElement("path", {
    d: "M8.586 5.414a3.412 3.412 0 01.008 4.82l-.008.008-1.51 1.51a3.418 3.418 0 01-4.828 0 3.418 3.418 0 010-4.829l.834-.833a.36.36 0 01.613.238c.014.398.086.798.218 1.184a.361.361 0 01-.085.373l-.294.294c-.63.63-.65 1.655-.026 2.29.63.642 1.664.646 2.298.012l1.51-1.51a1.617 1.617 0 00-.233-2.479.36.36 0 01-.156-.283.895.895 0 01.263-.67l.473-.472a.36.36 0 01.462-.04c.165.116.319.245.461.387zm3.166-3.166a3.418 3.418 0 00-4.829 0l-1.509 1.51a3.412 3.412 0 00.46 5.214.36.36 0 00.463-.039l.473-.473a.895.895 0 00.263-.67.36.36 0 00-.156-.282 1.617 1.617 0 01-.232-2.48L8.194 3.52a1.619 1.619 0 012.298.011c.624.636.604 1.661-.026 2.29l-.294.294a.361.361 0 00-.085.374c.132.386.203.786.218 1.184a.36.36 0 00.613.238l.834-.833a3.418 3.418 0 000-4.829h0z",
    stroke: "#FFF",
    strokeWidth: 0.1,
    fillRule: "evenodd"
  })));
}

var _path$A;

function _extends$J() { _extends$J = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$J.apply(this, arguments); }

function SvgIconListSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$J({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$A || (_path$A = /*#__PURE__*/React.createElement("path", {
    d: "M1.925 9.825a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zm10.711.375c.23 0 .429.147.507.37l.024.087.008.093v.75c0 .229-.138.43-.351.513l-.096.028-.092.009H5.364a.538.538 0 01-.507-.37l-.024-.087-.008-.093v-.75c0-.229.138-.43.351-.513l.096-.028.092-.009h7.272zM1.925 5.825a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zm10.711.375c.23 0 .429.147.507.37l.024.087.008.093v.75c0 .229-.138.43-.351.513l-.096.028-.092.009H5.364a.538.538 0 01-.507-.37l-.024-.087-.008-.093v-.75c0-.229.138-.43.351-.513l.096-.028.092-.009h7.272zM1.925 1.825a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zm10.711.375c.23 0 .429.147.507.37l.024.087.008.093v.75c0 .229-.138.43-.351.513l-.096.028-.092.009H5.364a.538.538 0 01-.507-.37l-.024-.087-.008-.093v-.75c0-.229.138-.43.351-.513l.096-.028.092-.009h7.272z",
    fillRule: "evenodd"
  })));
}

var _path$z;

function _extends$I() { _extends$I = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$I.apply(this, arguments); }

function SvgIconLoadingLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$I({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$z || (_path$z = /*#__PURE__*/React.createElement("path", {
    d: "M22.37 19.89a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-13.722.639a1.758 1.758 0 110 3.517 1.758 1.758 0 010-3.517zM25.43 13.3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-19.549.472a1.881 1.881 0 110 3.763 1.881 1.881 0 010-3.763zM22.887 6.64a2.487 2.487 0 110 4.974 2.487 2.487 0 010-4.974zm-13.93.098a2.057 2.057 0 110 4.115 2.057 2.057 0 010-4.115zM15.987 4a2.237 2.237 0 110 4.473 2.237 2.237 0 010-4.473z",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeType: "xml",
    attributeName: "transform",
    type: "rotate",
    from: "0 16 16",
    to: "360 16 16",
    dur: "1.6s",
    repeatCount: "indefinite"
  }))));
}

var _path$y;

function _extends$H() { _extends$H = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$H.apply(this, arguments); }

function SvgIconLoadingSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$H({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$y || (_path$y = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.787 8.702a1.094 1.094 0 110 2.188 1.094 1.094 0 010-2.188zm-6.003.28a.77.77 0 110 1.538.77.77 0 010-1.539zm7.342-3.163a1.094 1.094 0 110 2.187 1.094 1.094 0 010-2.187zm-8.553.206a.823.823 0 110 1.647.823.823 0 010-1.647zm7.44-3.12a1.088 1.088 0 110 2.176 1.088 1.088 0 010-2.176zm-6.094.043a.9.9 0 110 1.8.9.9 0 010-1.8zM6.994 1.75a.978.978 0 110 1.957.978.978 0 010-1.957z"
  })));
}

var _path$x, _path2$4;

function _extends$G() { _extends$G = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$G.apply(this, arguments); }

function SvgIconLockCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$G({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$x || (_path$x = /*#__PURE__*/React.createElement("path", {
    d: "M7 3.267c-.933 0-1.68.746-1.68 1.68v.84h3.267v-.84c.093-.934-.654-1.68-1.587-1.68zM7 7.093c-.373 0-.56.28-.56.56 0 .187.093.374.28.56v.84c0 .187.093.28.28.28.187 0 .28-.093.28-.28v-.84c.187-.093.28-.28.28-.56.093-.28-.187-.56-.56-.56z"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 0C3.173 0 0 3.173 0 7s3.173 7 7 7 7-3.173 7-7-3.08-7-7-7zm3.267 9.8c0 .467-.374.84-.84.84H4.573a.836.836 0 01-.84-.84V6.533c0-.466.374-.84.84-.84v-.84c0-1.306 1.12-2.426 2.427-2.426s2.427 1.12 2.427 2.426v.84c.466 0 .84.374.84.84V9.8z"
  })));
}

var _path$w;

function _extends$F() { _extends$F = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$F.apply(this, arguments); }

function SvgIconLockSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$F({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$w || (_path$w = /*#__PURE__*/React.createElement("path", {
    d: "M6.848 1c1.97 0 3.592 1.56 3.691 3.506l.005.19v.933l.024.004c.555.108.995.548 1.103 1.103l.019.13.006.134v4.608c0 .721-.554 1.318-1.258 1.386l-.134.006H3.392a1.396 1.396 0 01-1.386-1.258L2 11.608V7c0-.63.424-1.167 1.002-1.336l.126-.03.024-.005v-.933a3.708 3.708 0 013.32-3.677l.186-.014.19-.005zm0 6.348c-.739 0-1.354.562-1.354 1.267l.008.14.025.135c.052.22.16.413.316.571l.09.083.001.793c0 .49.412.871.914.871l.114-.007.113-.022c.403-.1.687-.436.687-.842l-.001-.799.089-.082c.227-.236.352-.529.352-.84 0-.706-.615-1.268-1.354-1.268zm0-4.716c-1.085 0-1.983.85-2.059 1.917l-.005.147v.912h4.128v-.912c0-1.085-.85-1.983-1.917-2.059l-.147-.005z",
    fillRule: "evenodd"
  })));
}

var _path$v;

function _extends$E() { _extends$E = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$E.apply(this, arguments); }

function SvgIconMinusSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$E({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$v || (_path$v = /*#__PURE__*/React.createElement("path", {
    d: "M1 6.13h12v1.75H1z",
    fillRule: "evenodd"
  })));
}

var _path$u;

function _extends$D() { _extends$D = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$D.apply(this, arguments); }

function SvgIconOpenSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$D({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$u || (_path$u = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.036 1.923c0-.51.412-.923.923-.923h2.538c.51 0 .923.414.923.923v2.538a.923.923 0 11-1.846 0v-.42L7.202 8.1a.923.923 0 01-1.257-1.353l4.201-3.902H9.96a.923.923 0 01-.923-.923zm-6.983.316c.353-.28.784-.393 1.136-.393h2.919a.923.923 0 110 1.846H3.266v7.462h7.462V7.889a.923.923 0 111.846 0v3.342c0 .62-.26 1.08-.632 1.376-.354.28-.785.393-1.137.393H3.19c-.62 0-1.08-.261-1.375-.633a1.868 1.868 0 01-.394-1.136V3.615c0-.62.261-1.081.633-1.376z"
  })));
}

var _path$t;

function _extends$C() { _extends$C = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

function SvgIconPeopleLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$C({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$t || (_path$t = /*#__PURE__*/React.createElement("path", {
    d: "M15.19 16.433c.247-.281.634-.422.986-.352a6.75 6.75 0 014.465 2.884c.639.507 1.558.853 2.429.921.205.03.275.044.49.044.216-.01.176-.007.483-.044 1.113-.087 2.313-.625 2.893-1.378a1.077 1.077 0 011.126-.387c2.285.598 3.938 2.813 3.938 5.275v2.11a3.152 3.152 0 01-3.165 3.164H3.165A3.152 3.152 0 010 25.505v-2.707a6.758 6.758 0 015.626-6.682c.387-.07.739.07.985.352a5.601 5.601 0 004.29 2.005 5.522 5.522 0 004.29-2.04zm12.872 3.974c-1.15 1.054-2.88 1.665-4.506 1.612a6.5 6.5 0 01-1.827-.213c.044.313.073.631.073.957v2.742c0 .372-.066.726-.181 1.055h7.214c.598 0 1.055-.457 1.055-1.055v-2.11c0-1.265-.774-2.46-1.828-2.988zM5.45 18.297c-1.97.562-3.341 2.39-3.341 4.466v2.742c0 .598.457 1.055 1.055 1.055h15.472c.598 0 1.055-.457 1.055-1.055v-2.707c0-2.075-1.371-3.903-3.34-4.466a7.66 7.66 0 01-5.45 2.25 7.548 7.548 0 01-5.451-2.285zm18.11-9.424a4.563 4.563 0 014.57 4.571v.246a4.563 4.563 0 01-4.57 4.572c-2.532 0-4.572-2.075-4.572-4.572v-.246a4.562 4.562 0 014.571-4.571zm0 2.074a2.446 2.446 0 00-2.462 2.462v.246a2.446 2.446 0 002.461 2.462 2.447 2.447 0 002.462-2.462v-.246a2.447 2.447 0 00-2.462-2.462zM10.9 3c3.481 0 6.33 2.848 6.33 6.33 0 3.481-2.849 6.33-6.33 6.33s-6.33-2.849-6.33-6.33C4.571 5.848 7.42 3 10.901 3zm0 2.11a4.232 4.232 0 00-4.22 4.22c0 2.32 1.899 4.22 4.22 4.22 2.321 0 4.22-1.9 4.22-4.22 0-2.321-1.899-4.22-4.22-4.22z",
    fillRule: "evenodd"
  })));
}

var _path$s;

function _extends$B() { _extends$B = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

function SvgIconPeopleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$B({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$s || (_path$s = /*#__PURE__*/React.createElement("path", {
    d: "M7 7.715l.077.008.026.005.023.008-.084-.016a2.976 2.976 0 012.462 2.942v1.184c0 .713-.53 1.294-1.22 1.375l-.13.01h-6.77a1.378 1.378 0 01-1.378-1.25L0 11.845v-1.184a2.957 2.957 0 012.462-2.924l.083-.007c.136-.001.258.059.347.161l.069.079-.069-.079a2.406 2.406 0 00.975.704 2.461 2.461 0 00.447.13l.08.014.017.003a2.416 2.416 0 002.235-.866.465.465 0 01.43-.154zm5.185.886l.092.014c1 .262 1.723 1.231 1.723 2.308v.923c0 .77-.615 1.385-1.385 1.385H10.65c.228-.412.355-.884.355-1.385v-1.184l-.005-.217a4.497 4.497 0 00-.192-1.103c.394-.088.774-.292.978-.557a.471.471 0 01.492-.17zM4.769 6.788A2.777 2.777 0 007.54 4.02a2.777 2.777 0 00-2.77-2.769A2.777 2.777 0 002 4.02a2.777 2.777 0 002.77 2.768m5.538.889c1.107 0 2-.892 2-2v-.108c0-1.107-.893-2-2-2-1.108 0-2 .893-2 2v.108c0 1.092.892 2 2 2z",
    fillRule: "evenodd"
  })));
}

var _path$r, _rect$2, _path2$3;

function _extends$A() { _extends$A = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

function SvgIconPercentageSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$A({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$r || (_path$r = /*#__PURE__*/React.createElement("path", {
    d: "M10.976 12.476a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  })), _rect$2 || (_rect$2 = /*#__PURE__*/React.createElement("rect", {
    x: 11.208,
    y: 1.024,
    width: 2.5,
    height: 14.402,
    rx: 1,
    transform: "rotate(45 11.208 1.024)"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    d: "M3.026 4.526a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  })));
}

var _path$q;

function _extends$z() { _extends$z = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

function SvgIconPersonLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$z({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$q || (_path$q = /*#__PURE__*/React.createElement("path", {
    d: "M20.175 17.1c0-2.475-1.8-4.575-4.2-5.025-.3-.075-.525.075-.75.3a4.128 4.128 0 01-3.225 1.5c-1.275 0-2.4-.525-3.225-1.5-.15-.225-.45-.3-.75-.3a5.07 5.07 0 00-4.2 5.025v2.175c0 .182.035.396.075.525.3.975 1.2 1.725 2.25 1.725h11.625c1.05 0 2.1-.525 2.325-1.725.056-.3.075-.345.075-.525 0-.826-.03-1.35 0-2.175zM18.6 19.125c0 .45-.375.825-.825.825H6.225a.832.832 0 01-.825-.825V17.1a3.558 3.558 0 012.475-3.375c.9.9 2.025 1.425 3.225 1.65.3.075.6.075.9.075.3 0 .6 0 .9-.075 1.2-.15 2.325-.75 3.225-1.65 1.5.45 2.475 1.8 2.475 3.375v2.025zm-6.6-7.35c2.625 0 4.725-2.1 4.725-4.725 0-2.625-2.1-4.8-4.725-4.8a4.705 4.705 0 00-4.725 4.725c0 2.625 2.1 4.8 4.725 4.8zm0-7.95a3.169 3.169 0 013.15 3.15 3.169 3.169 0 01-3.15 3.15 3.169 3.169 0 01-3.15-3.15A3.169 3.169 0 0112 3.825z"
  })));
}

var _path$p;

function _extends$y() { _extends$y = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

function SvgIconPersonSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$y({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$p || (_path$p = /*#__PURE__*/React.createElement("path", {
    d: "M9.8 4a2.8 2.8 0 11-5.6 0 2.8 2.8 0 015.6 0zM8.928 7.872c.094-.096.203-.208.372-.172 1.4.3 2.4 1.5 2.4 3v1.2c0 .7-.452 1.4-1.2 1.4h-7c-.781 0-1.2-.7-1.2-1.4v-1.2c0-1.5 1-2.7 2.4-3 .168-.036.28.079.376.175L5.1 7.9c.5.6 1.2.9 1.9.9s1.4-.4 1.9-.9l.028-.028z"
  })));
}

var _g$6, _defs$1;

function _extends$x() { _extends$x = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

function SvgIconPinLocationSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$x({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$6 || (_g$6 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#IconPinLocationSmall_svg__clip0_406_28)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.234 8.756l3.19 4.67a1.119 1.119 0 001.953 0l3.19-4.67c.202-.361.455-.873.66-1.412.194-.511.394-1.166.394-1.77C12.62 2.734 10.245.5 7.4.5 4.555.5 2.18 2.734 2.18 5.574c0 .604.2 1.259.394 1.77.205.539.458 1.05.66 1.412zM7.4 8.284a2.564 2.564 0 100-5.127 2.564 2.564 0 000 5.127z"
  }))), _defs$1 || (_defs$1 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "IconPinLocationSmall_svg__clip0_406_28"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z"
  })))));
}

var _path$o;

function _extends$w() { _extends$w = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

function SvgIconPinSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$w({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$o || (_path$o = /*#__PURE__*/React.createElement("path", {
    d: "M9.35 6.364h-.138a.14.14 0 01-.139-.122l-.309-2.399a.254.254 0 01.254-.293c.249.003.496 0 .654-.204.22-.284.336-.653.322-1.032-.013-.378-.024-.596-.264-.858-.24-.261-.481-.407-.814-.406H5.05c-.333-.001-.516.145-.756.406-.24.262-.309.48-.322.858-.014.379.101.748.322 1.032.158.203.405.207.654.204a.254.254 0 01.254.293l-.309 2.399a.14.14 0 01-.139.122h-.139c-.342 0-.845.33-1.086.605-.242.275-.413.544-.413.933v.489c0 .155.125.28.28.28h2.593a.07.07 0 01.07.07v3.214c0 .077.032.15.088.203l.644.61a.28.28 0 00.385 0l.644-.61a.28.28 0 00.088-.203V8.74a.07.07 0 01.07-.07h2.593a.28.28 0 00.28-.28v-.489c0-.389-.17-.658-.413-.933-.241-.275-.744-.605-1.086-.605z"
  })));
}

var _path$n;

function _extends$v() { _extends$v = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

function SvgIconPlusCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$v({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$n || (_path$n = /*#__PURE__*/React.createElement("path", {
    d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1.707A5.3 5.3 0 001.707 7 5.3 5.3 0 007 12.293 5.3 5.3 0 0012.293 7 5.3 5.3 0 007 1.707zm0 2.39c.435 0 .794.326.847.747l.007.107-.001 1.195h1.196c.399 0 .734.274.827.644l.02.103.006.107a.854.854 0 01-.746.847l-.107.007H7.853v1.195a.854.854 0 01-.643.827l-.103.02L7 9.902a.854.854 0 01-.847-.746l-.007-.107V7.854H4.951a.854.854 0 01-.827-.644l-.02-.103L4.098 7c0-.435.325-.794.746-.847l.107-.007h1.195V4.951c0-.399.274-.734.644-.827l.103-.02L7 4.098z",
    fillRule: "evenodd"
  })));
}

var _path$m;

function _extends$u() { _extends$u = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

function SvgIconPlusSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$u({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$m || (_path$m = /*#__PURE__*/React.createElement("path", {
    d: "M7.875 1v5.125H13v1.75H7.875V13h-1.75V7.875H1v-1.75h5.125V1h1.75z",
    fillRule: "evenodd"
  })));
}

var _g$5;

function _extends$t() { _extends$t = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

function SvgIconProjectPrivateLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$t({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$5 || (_g$5 = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M29.104 7.7c-.2-.3-.498-.5-.797-.7l.1-.7c.199-1.8-1.096-3.4-2.89-3.5H12.77c-.3 0-.598-.1-.798-.4l-.996-1.2C10.278.5 9.382 0 8.385 0H4.9c-.897 0-1.793.4-2.391 1.1-.697.7-.996 1.6-.896 2.6l.398 3.2c-.398.2-.797.4-1.195.8-.598.7-.897 1.6-.797 2.5l1.096 12.5C1.314 24.6 2.907 26 4.8 26h12.849c-.1-.4-.1-.8-.1-1.2 0-.3 0-.7.1-1H4.799c-.796 0-1.394-.6-1.394-1.3L2.21 10c0-.3.1-.6.299-.8.2-.2.498-.4.797-.4h23.407c.299 0 .598.1.797.4.2.2.299.5.299.8l-.698 7.6c.797.2 1.495.6 2.092 1L30 10.2c0-.9-.299-1.8-.896-2.5zm-2.989-1.1H4.202l-.398-3.2c0-.3.1-.6.299-.8.199-.2.498-.4.797-.4h3.486c.299 0 .597.1.797.4l.996 1.2c.597.8 1.494 1.2 2.49 1.2h12.35c.3 0 .598.1.798.3.199.2.298.5.298.8v.5z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5 17c4.2 0 7.5 3.4 7.5 7.5S28.6 32 24.5 32 17 28.6 17 24.5s3.4-7.5 7.5-7.5zm0 2.6c-1.4 0-2.6 1.2-2.6 2.6v.9c-.5 0-.9.4-.9.9v3.5c0 .5.4.9.9.9h5.2c.5 0 .9-.4.9-.9V24c0-.5-.4-.9-.9-.9v-.9c0-1.4-1.2-2.6-2.6-2.6zm0 5c.4 0 .7.3.6.6 0 .3-.1.5-.3.6v.9c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-.9c-.2-.2-.3-.4-.3-.6 0-.3.2-.6.6-.6zm0-4.1c1 0 1.8.8 1.7 1.8v.9h-3.5v-.9c0-1 .8-1.8 1.8-1.8z"
  }))));
}

var _g$4;

function _extends$s() { _extends$s = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

function SvgIconProjectPublicLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$s({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$4 || (_g$4 = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.497 25.4v-.6c0-.3 0-.7.1-1H4.813c-.8 0-1.398-.6-1.398-1.3L2.216 10c0-.3.1-.6.3-.8.2-.2.5-.4.799-.4h23.47c.3 0 .6.1.8.4.199.2.299.5.299.8l-.7 7.6c.4.1.7.2 1 .4 0 0 .1 0 .1.1.299.2.598.3.898.5l.8-8.4c.099-.9-.2-1.8-.8-2.5-.2-.3-.5-.5-.799-.7l.1-.7c.2-1.8-1.099-3.4-2.896-3.5H12.803c-.3 0-.6-.1-.8-.4l-.998-1.2C10.305.5 9.407 0 8.408 0H4.913c-.9 0-1.798.4-2.397 1.1-.7.7-.999 1.6-.9 2.6l.4 3.2c-.4.2-.799.4-1.198.8-.6.7-.899 1.6-.8 2.5l1.1 12.5c.2 1.9 1.797 3.3 3.695 3.3h12.884c-.1-.2-.1-.4-.2-.6zM4.114 2.6c.2-.2.5-.4.799-.4h3.495c.3 0 .6.1.8.4l.998 1.2c.6.8 1.498 1.2 2.497 1.2h12.384c.3 0 .6.1.8.3.199.2.299.5.299.8l-.1.5H4.114l-.3-3.2c0-.3.1-.6.3-.8z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.098 17.028c-4.583-.398-8.468 3.487-8.07 8.07.299 3.586 3.188 6.575 6.874 6.874 4.583.398 8.468-3.487 8.07-8.07a7.474 7.474 0 00-6.874-6.874zm.896 1.096l.897.299c.2.1.299.2.498.2.797.398 1.494.896 2.092 1.593 0 0 .1.1.1.2v.398c0 .1-.1.2-.1.299 0 .199.2.299.3.299h.398c.1 0 .199.1.199.199.1.2.2.398.2.498.298.697.398 1.395.497 2.192 0 .1 0 .199-.1.299-.099.1-.298.298-.398.498-.2.398-.398.996-.697 1.295-.2.2-.399.398-.399.598-.1.199 0 .398-.1.498 0 .1-.099.1-.199 0-.299-.399-.398-.797-.498-1.196-.1-.299-.1-.598-.199-.996a1.55 1.55 0 00-.598-.797c-.299-.2-.697-.1-.996-.2-.399 0-.697-.099-.996-.398-.1-.1-.2-.299-.2-.398-.199-.797.3-1.694.997-2.092.1-.1.199-.1.299-.2.199-.199.298-.398.199-.697 0-.1-.1-.1-.1-.1-.199.1-.398.1-.498.2-.1 0-.2 0-.2-.1 0-.299 0-.598.1-.996.1-.399.2-.698 0-.996 0-.1-.1-.1-.199-.1h-.896c.199-.1.298-.2.398-.399.1.1.1.1.2.1zm-3.188.1c.1 0 .1 0 .2.1.1.199.199.298.299.497.199.399.298.897.1 1.196-.2.398-.698.598-1.097.897-.896.398-1.594 1.095-2.092 1.892l-.1.1c-.1 0-.1 0-.199-.1-.1-.1-.199-.1-.299-.199 0 0-.1 0-.1.1-.099.398.1.896.499 1.096.1 0 .1.1.2.1.099.199 0 .398 0 .597 0 .299.398.398.597.398.2 0 .498-.199.797-.298.598-.2 1.195-.1 1.694.199.298.2.498.398.697.598.2.199.498.298.797.298.1 0 .1 0 .2.1.099.299 0 .598-.2.797-.2.299-.498.399-.697.697-.499.598-.698 1.495-1.096 2.192-.1.1-.2.3-.3.399-.198.199-.198.398-.198.697 0 0 0 .1-.1.1s-.2-.1-.299-.1c-.1 0-.1-.1-.1-.2-.199-.896-.498-1.792-.896-2.689-.2-.299-.399-.697-.698-.897-.1-.1-.199-.1-.199-.199v-.2c.1-.896-.299-1.792-.996-2.29-.1-.1-.299-.2-.299-.3-.1-.099-.1-.298-.1-.398l-.398-.398c-.1 0-.1-.1-.1-.2.399-2.191 2.192-3.985 4.483-4.582z"
  }))));
}

var _path$l;

function _extends$r() { _extends$r = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

function SvgIconPuzzlePieceSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$r({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$l || (_path$l = /*#__PURE__*/React.createElement("path", {
    d: "M5.627.709c.748 0 1.283.432 1.283 1.11 0 .299-.074.496-.276.794l-.137.193c-.272.374-.377.602-.377.952 0 .94.901 1.148 2.34.864.347-.068.715-.164 1.092-.28l.277-.088.267-.09.337-.123-.009.032c-.06.217-.12.452-.177.698-.081.35-.147.692-.193 1.015-.184 1.306-.02 2.654.693 2.654.095 0 .189-.02.287-.056.055-.021.111-.047.173-.08l.098-.056c.052-.03.237-.145.271-.165.367-.22.65-.322 1.023-.322.709 0 1.151.57 1.151 1.359 0 .746-.43 1.263-1.115 1.263-.3 0-.499-.073-.799-.274l-.193-.136c-.376-.268-.604-.373-.956-.373-.692 0-.962.57-.928 1.468.01.283.05.584.111.888l.05.233.022.091-.134.008c-.09.006-.199.017-.348.034l-1.049.121-.13.013c-1.441.14-2.142-.018-2.142-.634 0-.248.069-.421.254-.685l.482-.512c.315-.418.28-.73.28-1.14 0-.832-.838-1.36-1.716-1.36-.906 0-1.764.524-1.764 1.39 0 .378.054.774.3 1.11l.383.451c.03.038.178.215.215.262.072.09.12.16.154.225a.419.419 0 01.055.194c0 .583-.692.829-1.887.788-.404-.014-.838-.061-1.276-.13l-.295-.05L1 12.302V4.5l.267.053c.09.017.188.034.294.05.437.071.87.119 1.275.133 1.293.046 2.094-.246 2.094-1.037 0-.095-.02-.19-.058-.288a1.706 1.706 0 00-.14-.27l-.17-.27c-.228-.365-.332-.646-.332-1.016 0-.702.591-1.146 1.397-1.146z",
    fillRule: "evenodd"
  })));
}

var _path$k;

function _extends$q() { _extends$q = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function SvgIconQuestionMarkLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$q({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$k || (_path$k = /*#__PURE__*/React.createElement("path", {
    d: "M16.113 22.11a2.08 2.08 0 012.07 2.07 2.067 2.067 0 01-2.07 2.07c-.548 0-1.082-.22-1.466-.606a2.085 2.085 0 01-.605-1.465c0-.544.22-1.077.605-1.462.386-.386.92-.608 1.466-.608zM16.08 5.25c3.616 0 6.672 2.46 6.835 5.483l.006.26-.01.323-.025.311c-.186 1.73-1.09 2.846-2.991 4.296l-.288.222-.501.402c-.983.822-1.317 1.344-1.41 2.21l-.015.986h-3.184l.022-1.156c.179-1.88 1.169-3.122 3.128-4.616 1.658-1.25 2.093-1.797 2.093-2.985 0-1.716-1.613-3.069-3.66-3.069l-.252.007-.259.022c-1.624.184-2.893 1.237-3.114 2.61l-.015.112H9.25l.02-.213.036-.26C9.777 7.43 12.671 5.25 16.08 5.25z",
    fillRule: "evenodd"
  })));
}

var _path$j;

function _extends$p() { _extends$p = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function SvgIconRefreshLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$p({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$j || (_path$j = /*#__PURE__*/React.createElement("path", {
    d: "M25.315 18.4c.429 0 .858.145 1.143.436.286.29.429.727.286 1.163-1.429 4.214-4.857 7.266-9.142 7.847-4.286.727-8.571-1.162-11-4.796l-.428 1.599c-.143.581-.714 1.017-1.429.872-.57-.145-1-.872-.57-1.308l1.142-4.796c.143-.581.714-1.017 1.428-.872l4.571 1.163c.572.145 1 .727.858 1.453-.143.582-.715 1.017-1.429.872l-2.143-.581c1.857 2.906 5.143 4.505 8.571 4.069 3.429-.581 6.285-2.907 7.285-6.249a1.3 1.3 0 01.857-.872zM14.718 4.058c4.22-.431 8.16 1.58 10.41 5.028l.563-1.724c.14-.287.281-.574.563-.718.28-.144.562-.287.844-.144.281 0 .562.288.703.719.14.287.281.574.14.862l-1.406 4.597c-.14.288-.281.575-.563.719-.281.143-.562.287-.844.143l-4.502-1.436c-.703-.144-.984-.862-.844-1.437.141-.718.844-1.006 1.407-.862l1.97.575c-1.83-2.874-4.924-4.31-8.16-4.023-3.235.287-6.049 2.442-7.174 5.603l-.282.718c-.281.288-.562.719-.984.719-.423 0-.845-.144-1.126-.431-.281-.431-.281-.862-.14-1.293l.28-.719c1.548-3.879 4.925-6.465 9.145-6.896z",
    fillRule: "evenodd"
  })));
}

var _path$i;

function _extends$o() { _extends$o = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function SvgIconRefreshSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$o({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$i || (_path$i = /*#__PURE__*/React.createElement("path", {
    d: "M1.369 7.613l.123.015 3.313.664a.9.9 0 01.697.601.871.871 0 01-.198.884.856.856 0 01-.688.256l-.109-.017-1.106-.222.083.123a4.181 4.181 0 003.148 1.746l.238.01.227-.004.217-.014c1.558-.138 2.89-1.18 3.428-2.69.104-.234.238-.463.412-.695.193-.195.355-.276.58-.276.336 0 .64.125.887.387.147.225.202.468.168.733l-.024.135-.037.132-.148.376c-.86 2.155-2.738 3.574-5.051 3.81a6.185 6.185 0 01-5.11-1.902l-.175-.192-.159-.19-.03.645a.863.863 0 01-.28.609l-.09.071-.1.06a.873.873 0 01-.88-.062.901.901 0 01-.395-.685v-.112l.158-3.381a.86.86 0 01.9-.815zM6.579.432a6.185 6.185 0 015.11 1.902l.175.192.157.19.03-.645a.863.863 0 01.282-.61l.09-.07.1-.06a.873.873 0 01.88.061.901.901 0 01.395.685v.113l-.158 3.38a.86.86 0 01-.901.816l-.124-.016-3.312-.663a.9.9 0 01-.697-.602.871.871 0 01.197-.884.856.856 0 01.689-.255l.109.016 1.105.222-.082-.122a4.181 4.181 0 00-3.148-1.747l-.238-.009-.227.004-.217.014c-1.558.138-2.89 1.179-3.429 2.69a3.526 3.526 0 01-.411.695c-.193.194-.355.276-.58.276-.336 0-.64-.125-.887-.387a1.054 1.054 0 01-.169-.734l.025-.134.037-.133.147-.375C2.387 2.087 4.267.668 6.58.432z",
    fillRule: "evenodd"
  })));
}

var _path$h;

function _extends$n() { _extends$n = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function SvgIconSaveLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$n({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$h || (_path$h = /*#__PURE__*/React.createElement("path", {
    d: "M4.857 3h19.04c.493 0 .965.196 1.314.544l3.245 3.245c.348.349.544.821.544 1.314v19.04A1.857 1.857 0 0127.143 29H4.857A1.857 1.857 0 013 27.143V4.857C3 3.831 3.831 3 4.857 3zm3.714 1.857H5.476a.619.619 0 00-.619.62v21.047c0 .342.277.619.62.619h21.047a.619.619 0 00.619-.62V8.36a.619.619 0 00-.181-.438l-2.883-2.883a.619.619 0 00-.438-.18h-.288c-.3 0-.543.243-.543.543V9.81a1.857 1.857 0 01-1.858 1.857h-9.904A1.857 1.857 0 019.19 9.81V5.476a.619.619 0 00-.619-.619zM16 14.143a5.262 5.262 0 110 10.524 5.262 5.262 0 010-10.524zM16 16a3.405 3.405 0 100 6.81A3.405 3.405 0 0016 16zm-4.333-6.19h8.666a.619.619 0 00.62-.62V5.476a.619.619 0 00-.62-.619h-8.666a.619.619 0 00-.62.62V9.19c0 .342.278.62.62.62z",
    fillRule: "evenodd"
  })));
}

var _path$g;

function _extends$m() { _extends$m = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function SvgIconSearchLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$m({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.153 19.094h-1.084l-.385-.37a8.88 8.88 0 002.155-5.805A8.92 8.92 0 0012.919 4 8.92 8.92 0 004 12.92a8.92 8.92 0 008.92 8.919c2.209 0 4.24-.81 5.804-2.155l.37.385v1.084L25.955 28 28 25.955l-6.847-6.86zm-8.234 0a6.167 6.167 0 01-6.175-6.175 6.167 6.167 0 016.175-6.175 6.167 6.167 0 016.175 6.175 6.167 6.167 0 01-6.175 6.175z"
  })));
}

var _path$f, _path2$2;

function _extends$l() { _extends$l = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function SvgIconSearchLinesHorizontalLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$l({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.47 20.226l-1.188-.113-.46-.444a10.655 10.655 0 002.585-6.966C23.407 6.792 18.614 2 12.703 2 6.792 2 2 6.792 2 12.703c0 5.912 4.792 10.704 10.703 10.704 2.651 0 5.088-.972 6.966-2.586l.444.461.113 1.188 7.555 7.54a.96.96 0 001.357-.001l.87-.871a.96.96 0 00.001-1.357l-7.539-7.555zm-9.83.974a8.469 8.469 0 01-8.48-8.48 8.469 8.469 0 018.48-8.48 8.469 8.469 0 018.48 8.48 8.469 8.469 0 01-8.48 8.48z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    d: "M7.383 9.063c0-.53.43-.96.96-.96h6.24a.96.96 0 110 1.92h-6.24a.96.96 0 01-.96-.96zM7.383 12.743c0-.53.43-.96.96-.96h9.28a.96.96 0 110 1.92h-9.28a.96.96 0 01-.96-.96zM7.383 16.463a1 1 0 011-1h4.08a1 1 0 110 2h-4.08a1 1 0 01-1-1z"
  })));
}

var _g$3, _defs;

function _extends$k() { _extends$k = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

function SvgIconSearchLinesHorizontalSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$k({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$3 || (_g$3 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#IconSearchLinesHorizontalSmall_svg__clip0_203_46)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.743 5.371a5.371 5.371 0 10-5.372 5.372l.259-.006.278-.02a5.343 5.343 0 002.762-1.11l.068-.058.056.057v.562l.052.124 3.428 3.422a.979.979 0 001.384 0l.055-.056a.979.979 0 00.001-1.383l-3.422-3.43-.124-.05h-.562l-.057-.057.058-.068a5.344 5.344 0 001.136-3.299zm-9.1.012a3.7 3.7 0 013.705-3.705 3.7 3.7 0 013.706 3.705A3.7 3.7 0 015.348 9.09a3.7 3.7 0 01-3.705-3.706z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.048 3.511c0 .485-.407.645-.657.645H3.56c-.25 0-.589-.194-.589-.645 0-.45.34-.645.589-.645H6.39c.25 0 .657.16.657.645zm1.062 1.89c0 .462-.407.644-.657.644H3.634c-.25 0-.657-.131-.657-.644 0-.514.408-.645.657-.645h3.82c.249 0 .656.183.656.645zM6.14 7.256c0 .49-.373.644-.623.644H3.634c-.25 0-.657-.137-.657-.644 0-.508.408-.645.657-.645h1.882c.25 0 .623.154.623.645z"
  }))), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "IconSearchLinesHorizontalSmall_svg__clip0_203_46"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z"
  })))));
}

var _path$e;

function _extends$j() { _extends$j = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function SvgIconSearchSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$j({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$e || (_path$e = /*#__PURE__*/React.createElement("path", {
    d: "M5.378 0a5.378 5.378 0 015.378 5.378 5.351 5.351 0 01-1.137 3.303l-.058.068.057.056h.563l.124.051 3.412 3.42a1 1 0 01-.001 1.413l-.027.027a1 1 0 01-1.414 0l-3.419-3.411-.051-.124v-.563l-.056-.057-.068.058a5.35 5.35 0 01-2.766 1.11l-.278.02-.259.007A5.378 5.378 0 115.378 0zm0 1.95a3.422 3.422 0 00-3.427 3.428 3.422 3.422 0 003.427 3.427 3.422 3.422 0 003.427-3.427 3.422 3.422 0 00-3.427-3.427z",
    fillRule: "evenodd"
  })));
}

var _path$d;

function _extends$i() { _extends$i = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function SvgIconShareLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$i({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$d || (_path$d = /*#__PURE__*/React.createElement("path", {
    d: "M24.193 26.3a2.59 2.59 0 01-3.507.99c-1.252-.675-1.704-2.218-1.006-3.437.701-1.226 2.246-1.645 3.52-.956 1.258.683 1.695 2.178.993 3.404M8.04 19.367c-1.384 0-2.503-1.09-2.503-2.436 0-1.347 1.12-2.438 2.503-2.438 1.384 0 2.504 1.09 2.504 2.438 0 1.345-1.12 2.436-2.504 2.436m12.646-12.66a2.593 2.593 0 013.507.992c.702 1.226.265 2.723-.994 3.404-1.273.691-2.818.27-3.519-.956-.698-1.219-.246-2.76 1.006-3.44m3.72 14.08c-1.988-1.078-4.456-.668-6.061.99l-5.653-2.966c.247-.58.388-1.214.388-1.88a4.79 4.79 0 00-.348-1.762l5.613-2.945c1.605 1.657 4.073 2.067 6.061.99 2.434-1.319 3.312-4.321 1.957-6.69l-.103-.179-.006.004C24.851 4.113 21.86 3.334 19.49 4.62c-1.977 1.072-2.925 3.323-2.338 5.516l-5.859 3.075a5.077 5.077 0 00-3.252-1.187C5.255 12.025 3 14.22 3 16.931c0 2.71 2.255 4.906 5.04 4.906 1.197 0 2.28-.423 3.147-1.103l5.964 3.13c-.587 2.192.36 4.443 2.338 5.515 2.371 1.287 5.362.508 6.765-1.728l.006.004.103-.179c1.355-2.369.477-5.37-1.957-6.69",
    fillRule: "evenodd"
  })));
}

var _path$c;

function _extends$h() { _extends$h = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function SvgIconSlidersHorizontalLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$h({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$c || (_path$c = /*#__PURE__*/React.createElement("path", {
    d: "M16.537 20.424c1.49 0 2.8.965 3.217 2.368h8.287a.95.95 0 01.959.94c0 .52-.43.941-.959.941h-8.287c-.425 1.39-1.734 2.337-3.212 2.327-1.494.004-2.81-.96-3.233-2.366H3.94a.943.943 0 01-.813-.46.906.906 0 010-.921.943.943 0 01.813-.46h9.38c.417-1.404 1.728-2.37 3.218-2.37zm-.055 1.835c-.818 0-1.482.651-1.482 1.454 0 .803.664 1.455 1.482 1.455.82 0 1.483-.652 1.483-1.455s-.664-1.454-1.483-1.454zm-6.736-9.827c1.49 0 2.801.965 3.218 2.368h15.093a.93.93 0 01.939.921.93.93 0 01-.94.921H12.965c-.41 1.401-1.717 2.366-3.203 2.366-1.491.005-2.807-.954-3.232-2.356h-2.59a.93.93 0 01-.939-.92.93.93 0 01.939-.922h2.59v-.01c.416-1.403 1.727-2.368 3.217-2.368zm-.025 1.864c-.596 0-1.134.353-1.361.894-.228.541-.1 1.163.324 1.576a1.494 1.494 0 001.608.307c.55-.227.906-.757.902-1.342-.005-.794-.663-1.435-1.473-1.435zM21.05 5c1.492 0 2.803.97 3.212 2.377h3.42a1 1 0 011.108.35.955.955 0 010 1.142 1 1 0 01-1.108.35h-3.42c-.407 1.415-1.733 2.386-3.232 2.366-1.495.006-2.813-.959-3.232-2.366H3.959A.95.95 0 013 8.279c0-.52.43-.94.959-.94h13.838l.04.038C18.247 5.97 19.557 5 21.049 5zm-.06 1.815c-.806 0-1.46.64-1.462 1.431-.002.791.65 1.435 1.456 1.438.807.004 1.464-.634 1.47-1.425l.04-.01c-.017-.8-.687-1.44-1.503-1.434z",
    fillRule: "evenodd"
  })));
}

var _path$b;

function _extends$g() { _extends$g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function SvgIconSquareOnDashedSquareLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$g({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.565 11.664v7.046c0 .338.126.656.354.901.166.18.38.311.595.376l.13.03.108.014 7.185.005v7.046a1.716 1.716 0 01-1.386 1.686l-.171.025-.162.008H5.519a1.717 1.717 0 01-1.686-1.386l-.025-.171-.008-.162V13.383a1.717 1.717 0 011.386-1.686l.171-.025.162-.008h7.046zm-1.916 1.915H5.716v13.305H19.02V21.95l-5.326-.004a3.232 3.232 0 01-1.699-.606l-.182-.141-.169-.151-.13-.132a3.233 3.233 0 01-.834-1.764l-.023-.223-.008-.218v-5.13zm13.558 6.374c.54 0 .985.439.985.977 0 .455-.32.844-.762.95l-.113.02-.11.007h-.96a.977.977 0 01-.231-1.925l.111-.021.12-.008h.96zm3.642-.442a.977.977 0 011.725.91 2.537 2.537 0 01-2.064 1.474.977.977 0 01-.414-1.893l.109-.032.185-.03a.59.59 0 00.31-.18l.052-.068.097-.181zm.975-6.376c.453 0 .839.31.948.746l.021.112.008.119v2.298a.977.977 0 01-1.924.23l-.022-.11-.008-.12v-2.298c0-.54.438-.977.977-.977zm0-5.903c.453 0 .839.309.948.746l.021.111.008.12v2.297a.977.977 0 01-1.924.231l-.022-.112-.008-.119V8.208c0-.54.438-.976.977-.976zm-17.153-.51c.452 0 .838.31.948.746l.021.112.008.119v1.56a.977.977 0 01-1.925.23l-.021-.112-.008-.119v-1.56c0-.539.437-.976.977-.976zm1.474-3.92a.977.977 0 01.295 1.915l-.111.025-.188.018a.588.588 0 00-.32.16l-.057.065-.108.175a.977.977 0 01-1.664-1.018 2.536 2.536 0 012.153-1.34zm14.317 0c.907.03 1.726.542 2.152 1.34a.977.977 0 01-1.593 1.106l-.077-.098-.053-.087a.588.588 0 00-.33-.281l-.084-.02-.08-.008a.977.977 0 11.065-1.953zm-8.768.163a.977.977 0 01.23 1.924l-.111.022-.12.007h-2.297a.977.977 0 01-.23-1.924l.11-.021.12-.008h2.298zm5.516 0a.977.977 0 01.231 1.924l-.111.022-.12.007h-2.298a.977.977 0 01-.23-1.924l.111-.021.12-.008h2.297z"
  })));
}

var _path$a;

function _extends$f() { _extends$f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function SvgIconTableSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M12.688 1H1.312C.589 1 0 1.588 0 2.313v9.624c0 .725.588 1.313 1.313 1.313h11.374c.725 0 1.313-.588 1.313-1.313V2.313C14 1.587 13.412 1 12.687 1zM6.5 11.675H1.25V8.75H6.5v2.925zm0-4.55H1.25V4.15H6.5v2.975zm6.25 4.55H7.5V8.75h5.25v2.925zm0-4.55H7.5V4.15h5.25v2.975z",
    fillRule: "evenodd"
  })));
}

var _path$9;

function _extends$e() { _extends$e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function SvgIconTrashCanSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.304 1.4v.459h3.286a.925.925 0 110 1.851h-.44l-.748 9.006A1.4 1.4 0 0110.007 14H3.815a1.4 1.4 0 01-1.395-1.284L1.67 3.71h-.274a.926.926 0 110-1.851h3.088V1.4a1.4 1.4 0 011.4-1.4h2.02a1.4 1.4 0 011.4 1.4zm-1.26-.28H5.762v.723h2.282V1.12zM4.408 11.755A.502.502 0 005.41 11.7l-.34-6.284a.502.502 0 10-1.004.054l.34 6.285zm2.371.45a.502.502 0 00.502-.502V5.435a.502.502 0 00-1.004 0v6.268c0 .277.225.501.502.501zm1.845.008a.502.502 0 00.526-.475l.34-6.285A.502.502 0 008.489 5.4l-.34 6.285a.502.502 0 00.476.529z"
  })));
}

var _g$2;

function _extends$d() { _extends$d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function SvgIconTreeDendogramLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React.createElement("g", {
    transform: "translate(2 4)",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.283 13.974H2.357M24.733 2.567H14v8.987h10.733"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.994 7.406H8.4v13.827h16.333"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 25.75,
    cy: 2.567,
    r: 1.867
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 25.75,
    cy: 11.554,
    r: 1.867
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 2.357,
    cy: 13.974,
    r: 1.867
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 25.75,
    cy: 21.233,
    r: 1.867
  }))));
}

var _path$8;

function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function SvgIconTreeHorizontalLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M25.045 23.034c1.134 0 2.022.884 2.022 2.012 0 1.14-.888 2.032-2.022 2.032a2.039 2.039 0 01-2.041-2.032c0-1.128.897-2.012 2.041-2.012zm-18.07-4.999a2.006 2.006 0 01-2.021-2.031c0-1.129.888-2.013 2.022-2.013 1.145 0 2.043.884 2.043 2.013a2.04 2.04 0 01-2.043 2.031zm18.07-13.114c1.134 0 2.022.892 2.022 2.032a1.995 1.995 0 01-2.022 2.012c-1.144 0-2.041-.883-2.041-2.012a2.04 2.04 0 012.041-2.032zm0 9.07c1.134 0 2.022.884 2.022 2.013a2.006 2.006 0 01-2.022 2.031 2.038 2.038 0 01-2.041-2.031c0-1.129.897-2.013 2.041-2.013zm-3.776 2.982c.46 1.764 1.995 2.984 3.776 2.984A3.958 3.958 0 0029 16.004a3.958 3.958 0 00-3.955-3.954c-1.79 0-3.325 1.227-3.776 3.003h-4.262V8.005h4.286c.487 1.715 2.012 2.903 3.752 2.903A3.958 3.958 0 0029 6.953 3.958 3.958 0 0025.045 3c-1.804 0-3.38 1.29-3.8 3.083h-5.222a.964.964 0 00-.97.971v7.999h-4.3c-.452-1.776-1.987-3.003-3.777-3.003C4.785 12.05 3 13.823 3 16.004l.001.165h.005c.086 2.104 1.834 3.788 3.97 3.788 1.782 0 3.317-1.22 3.776-2.984h4.303v8.002a.968.968 0 00.967.948h5.226C21.669 27.714 23.244 29 25.045 29A3.96 3.96 0 0029 25.046a3.96 3.96 0 00-3.955-3.955c-1.74 0-3.265 1.187-3.752 2.904V24h-4.286v-7.028h4.262z",
    fillRule: "evenodd"
  })));
}

var _g$1;

function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function SvgIconTreeHorizontalPrivateLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.28 21.2h-5.412v-6.4h3.983a3.578 3.578 0 003.472 2.7c2.043 0 3.677-1.6 3.677-3.6s-1.634-3.6-3.677-3.6a3.578 3.578 0 00-3.472 2.7h-3.983V6.6h3.983c.409 1.6 1.838 2.6 3.472 2.6C22.366 9.2 24 7.6 24 5.6S22.366 2 20.323 2c-1.634 0-3.166 1.2-3.472 2.8h-4.8c-.204 0-.408.1-.613.3-.204.2-.306.4-.306.6V13H7.149a3.578 3.578 0 00-3.472-2.7C1.634 10.3 0 11.9 0 13.9v.1c.102 1.9 1.736 3.5 3.677 3.5 1.634 0 3.063-1.1 3.472-2.7h3.983v7.3c0 .5.408.9.92.9h5.412c.102-.7.408-1.2.817-1.8zm2.043-9.1c1.022 0 1.839.8 1.839 1.8s-.817 1.9-1.839 1.9c-1.02 0-1.838-.8-1.838-1.9-.102-1 .715-1.8 1.838-1.8zm0-8.3c1.022 0 1.839.8 1.839 1.9 0 1-.817 1.8-1.839 1.8-1.02 0-1.838-.8-1.838-1.8-.102-1 .817-1.9 1.838-1.9zm-16.749 12c-1.02 0-1.838-.8-1.838-1.9 0-1 .817-1.8 1.838-1.8 1.022 0 1.94.8 1.94 1.8s-.918 1.9-1.94 1.9z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24.5 17c4.2 0 7.5 3.4 7.5 7.5S28.6 32 24.5 32 17 28.6 17 24.5s3.4-7.5 7.5-7.5zm0 2.6c-1.4 0-2.6 1.2-2.6 2.6v.9c-.5 0-.9.4-.9.9v3.5c0 .5.4.9.9.9h5.2c.5 0 .9-.4.9-.9V24c0-.5-.4-.9-.9-.9v-.9c0-1.4-1.2-2.6-2.6-2.6zm0 5c.4 0 .7.3.6.6 0 .3-.1.5-.3.6v.9c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-.9c-.2-.2-.3-.4-.3-.6 0-.3.2-.6.6-.6zm0-4.1c1 0 1.8.8 1.7 1.8v.9h-3.5v-.9c0-1 .8-1.8 1.8-1.8z"
  }))));
}

var _g;

function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function SvgIconTreeHorizontalPublicLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.587 21.2h-5.719v-6.4h3.983a3.578 3.578 0 003.472 2.7c2.043 0 3.677-1.6 3.677-3.6s-1.634-3.6-3.677-3.6a3.578 3.578 0 00-3.472 2.7h-3.983V6.6h3.983c.409 1.6 1.838 2.6 3.472 2.6C22.366 9.2 24 7.6 24 5.6S22.366 2 20.323 2c-1.634 0-3.166 1.2-3.472 2.8h-4.8c-.204 0-.408.1-.613.3-.204.2-.306.4-.306.6V13H7.149a3.578 3.578 0 00-3.472-2.7C1.634 10.3 0 11.9 0 13.9v.1c.102 1.9 1.736 3.5 3.677 3.5 1.634 0 3.063-1.1 3.472-2.7h3.983v7.3c0 .5.408.9.92.9h5.718c.102-.7.409-1.3.817-1.8zm1.736-9.1c1.022 0 1.839.8 1.839 1.8s-.817 1.9-1.839 1.9c-1.02 0-1.838-.8-1.838-1.9-.102-1 .715-1.8 1.838-1.8zm0-8.3c1.022 0 1.839.8 1.839 1.9 0 1-.817 1.8-1.839 1.8-1.02 0-1.838-.8-1.838-1.8-.102-1 .817-1.9 1.838-1.9zm-16.749 12c-1.02 0-1.838-.8-1.838-1.9 0-1 .817-1.8 1.838-1.8 1.022 0 1.94.8 1.94 1.8s-.918 1.9-1.94 1.9z",
    fill: "#CCC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.098 17.028c-4.583-.398-8.468 3.487-8.07 8.07.299 3.586 3.188 6.575 6.874 6.874 4.583.398 8.468-3.487 8.07-8.07-.299-3.686-3.188-6.675-6.874-6.874zm.896.996l.897.3c.2.099.299.199.498.199.797.398 1.494.896 2.092 1.594 0 0 .1.1.1.199v.398c0 .1-.1.2-.1.3 0 .198.2.298.3.298h.398c.1 0 .199.1.199.2.1.199.2.398.2.497.298.698.398 1.395.497 2.192 0 .1 0 .2-.1.299-.099.1-.298.299-.398.498-.2.399-.398.996-.697 1.295-.2.2-.399.399-.399.598-.1.2 0 .398-.1.498 0 .1-.099.1-.199 0-.299-.398-.398-.797-.498-1.195-.1-.3-.1-.598-.199-.997a1.55 1.55 0 00-.598-.797c-.299-.199-.697-.1-.996-.199-.399 0-.697-.1-.996-.398-.1-.1-.2-.3-.2-.399-.199-.797.3-1.693.997-2.092.1-.1.199-.1.299-.2.199-.198.298-.398.199-.697 0-.1-.1-.1-.1-.1-.199.1-.398.1-.498.2-.1 0-.2 0-.2-.1 0-.298 0-.597.1-.996.1-.398.2-.697 0-.996 0-.1-.1-.1-.199-.1h-.896c.199-.1.298-.199.398-.398.1.199.2.1.2.1zm-3.188.1c.1 0 .1 0 .2.1.1.199.199.299.299.498.199.398.298.896.1 1.195-.2.399-.698.598-1.097.897-.896.398-1.594 1.096-2.092 1.893l-.1.1c-.1 0-.1 0-.199-.1-.1-.1-.199-.1-.299-.2 0 0-.1 0-.1.1-.099.399.1.897.499 1.096.1 0 .1.1.2.1.099.199 0 .398 0 .597 0 .3.398.399.597.399.299 0 .498-.2.797-.299.598-.2 1.195-.1 1.694.2.298.198.498.398.697.597.2.2.498.299.797.299.1 0 .1 0 .2.1.099.298 0 .597-.2.796-.2.3-.498.399-.697.698-.499.598-.698 1.494-1.096 2.192-.1.1-.2.298-.3.398-.099.2-.099.399-.099.697 0 0 0 .1-.1.1s-.199-.1-.298-.1c-.1 0-.1-.1-.1-.199-.2-.896-.498-1.793-.897-2.69-.199-.299-.398-.697-.697-.896-.1-.1-.2-.1-.2-.2v-.199c.1-.896-.298-1.793-.995-2.291-.1-.1-.3-.2-.3-.299 0-.1-.099-.299-.099-.398l-.398-.399c-.1 0-.1-.1-.1-.2.398-2.091 2.092-3.984 4.383-4.582z"
  }))));
}

var _path$7;

function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function SvgIconTreeHorizontalSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M11.517 1c.981 0 1.75.765 1.75 1.742 0 .985-.769 1.758-1.75 1.758a1.77 1.77 0 01-1.594-1H7.25v2.75h2.662c.278-.596.885-1 1.605-1 .981 0 1.75.765 1.75 1.742 0 .985-.769 1.758-1.75 1.758a1.77 1.77 0 01-1.594-1H7.25v2.75h2.662c.278-.596.885-1 1.605-1 .981 0 1.75.765 1.75 1.742 0 .985-.769 1.758-1.75 1.758a1.77 1.77 0 01-1.594-1H6.5a.75.75 0 01-.743-.648l-.007-.102v-3.5l-1.899.001a1.73 1.73 0 01-1.584.999A1.764 1.764 0 01.5 6.992c0-.977.777-1.742 1.767-1.742a1.73 1.73 0 011.59 1H5.75v-3.5a.75.75 0 01.648-.743L6.5 2h3.412c.278-.596.885-1 1.605-1z",
    fillRule: "evenodd"
  })));
}

var _path$6;

function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function SvgIconTreeVerticalSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    d: "M4.875 1a1.874 1.874 0 01.706 3.612l.006.01v3.146l.156-.056c.34-.113.732-.175 1.346-.237l.65-.064c.883-.098 1.252-.217 1.484-.506.135-.167.212-.425.225-.776A1.885 1.885 0 018.25 4.375a1.874 1.874 0 113.75 0c0 .825-.534 1.526-1.275 1.779l.141-.055.009.017c-.01.614-.152 1.122-.43 1.533l-.11.15c-.581.722-1.288.926-2.873 1.072l-.583.06c-.451.056-.698.116-.912.224a.687.687 0 00-.278.237l-.024.033A1.874 1.874 0 113 11.125c0-.84.55-1.55 1.313-1.79l-.114.04-.037-.081V4.622l.005-.011A1.874 1.874 0 014.875 1z",
    fillRule: "evenodd"
  })));
}

var _path$5;

function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function SvgIconXMarkCircleSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1.707A5.3 5.3 0 001.707 7 5.3 5.3 0 007 12.293 5.3 5.3 0 0012.293 7 5.3 5.3 0 007 1.707zm.845 3.24a.854.854 0 011.284 1.12l-.077.088L8.207 7l.845.845c.278.278.324.7.14 1.025l-.063.095-.077.087a.854.854 0 01-1.12.077l-.087-.077L7 8.207l-.845.845a.854.854 0 01-1.025.14l-.095-.063-.087-.077a.854.854 0 01-.077-1.12l.077-.087L5.793 7l-.845-.845a.854.854 0 01-.14-1.025l.063-.095.077-.087a.854.854 0 011.12-.077l.087.077.845.845.845-.845z"
  })));
}

var _path$4;

function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function SvgIconXMarkLarge(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M17.735 16L28 26.265 26.264 28 16 17.735 5.735 28 4 26.265 14.264 16 4 5.735 5.735 4 16 14.265 26.264 4 28 5.735z",
    fillRule: "evenodd"
  })));
}

var _path$3;

function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function SvgIconXMarkSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M12.132.753L7.061 5.824 1.99.753.753 1.99 5.824 7.06.753 12.132 1.99 13.37 7.06 8.298l5.071 5.071 1.238-1.237-5.072-5.071L13.37 1.99z",
    fillRule: "evenodd"
  })));
}

var iconMap = {
    barChartHorizontal3: {
        largeIcon: null,
        smallIcon: SvgIconBarChartHorizontal3Small,
    },
    barChartVertical3: {
        largeIcon: null,
        smallIcon: SvgIconBarChartVertical3Small,
    },
    barChartVertical4: {
        largeIcon: null,
        smallIcon: SvgIconBarChartVertical4Small,
    },
    check: {
        largeIcon: null,
        smallIcon: SvgIconCheckSmall,
    },
    checkCircle: {
        largeIcon: SvgIconCheckCircleLarge,
        smallIcon: SvgIconCheckCircleSmall,
    },
    chevronDown: {
        largeIcon: SvgIconChevronDownLarge,
        smallIcon: SvgIconChevronDownSmall,
    },
    chevronRight: {
        largeIcon: SvgIconChevronRightLarge,
        smallIcon: SvgIconChevronRightSmall,
    },
    chevronUp: {
        largeIcon: SvgIconChevronUpLarge,
        smallIcon: SvgIconChevronUpSmall,
    },
    copy: {
        largeIcon: SvgIconCopyLarge,
        smallIcon: SvgIconCopySmall,
    },
    dotsHorizontal: {
        largeIcon: SvgIconDotsHorizontal3Large,
        smallIcon: SvgIconDotsHorizontal3Small,
    },
    download: {
        largeIcon: SvgIconDownloadLarge,
        smallIcon: SvgIconDownloadSmall,
    },
    edit: {
        largeIcon: null,
        smallIcon: SvgIconEditSmall,
    },
    exclamationMarkCircle: {
        largeIcon: SvgIconExclamationMarkCircleLarge,
        smallIcon: SvgIconExclamationMarkCircleSmall,
    },
    eyeOpen: {
        largeIcon: null,
        smallIcon: SvgIconEyeOpenSmall,
    },
    flagCheck: {
        largeIcon: null,
        smallIcon: SvgIconFlagCheckSmall,
    },
    flagOutline: {
        largeIcon: null,
        smallIcon: SvgIconFlagOutlineSmall,
    },
    flagQuestionmark: {
        largeIcon: null,
        smallIcon: SvgIconFlagQuestionmarkSmall,
    },
    flagXmark: {
        largeIcon: null,
        smallIcon: SvgIconFlagXmarkSmall,
    },
    flask: {
        largeIcon: SvgIconFlaskLarge,
        smallIcon: null,
    },
    flaskPrivate: {
        largeIcon: SvgIconFlaskPrivateLarge,
        smallIcon: null,
    },
    flaskPublic: {
        largeIcon: SvgIconFlaskPublicLarge,
        smallIcon: null,
    },
    globe: {
        largeIcon: null,
        smallIcon: SvgIconGlobeSmall,
    },
    grid: {
        largeIcon: SvgIconGridLarge,
        smallIcon: null,
    },
    gridPrivate: {
        largeIcon: SvgIconGridPrivateLarge,
        smallIcon: null,
    },
    gridPublic: {
        largeIcon: SvgIconGridPublicLarge,
        smallIcon: null,
    },
    infoCircle: {
        largeIcon: SvgIconInfoCircleLarge,
        smallIcon: SvgIconInfoCircleSmall,
    },
    infoSpeechBubble: {
        largeIcon: SvgIconInfoSpeechBubbleLarge,
        smallIcon: null,
    },
    lightBulb: {
        largeIcon: null,
        smallIcon: SvgIconLightBulbSmall,
    },
    linesDashed3Solid1: {
        largeIcon: null,
        smallIcon: SvgIconLinesDashed3Solid1Small,
    },
    linesHorizontal: {
        largeIcon: null,
        smallIcon: SvgIconLinesHorizontalSmall,
    },
    link: {
        largeIcon: null,
        smallIcon: SvgIconLinkSmall,
    },
    list: {
        largeIcon: null,
        smallIcon: SvgIconListSmall,
    },
    loading: {
        largeIcon: SvgIconLoadingLarge,
        smallIcon: SvgIconLoadingSmall,
    },
    lock: {
        largeIcon: null,
        smallIcon: SvgIconLockSmall,
    },
    lockCircle: {
        largeIcon: null,
        smallIcon: SvgIconLockCircleSmall,
    },
    minus: {
        largeIcon: null,
        smallIcon: SvgIconMinusSmall,
    },
    open: {
        largeIcon: null,
        smallIcon: SvgIconOpenSmall,
    },
    people: {
        largeIcon: SvgIconPeopleLarge,
        smallIcon: SvgIconPeopleSmall,
    },
    percentage: {
        largeIcon: null,
        smallIcon: SvgIconPercentageSmall,
    },
    person: {
        largeIcon: SvgIconPersonLarge,
        smallIcon: SvgIconPersonSmall,
    },
    pin: {
        largeIcon: null,
        smallIcon: SvgIconPinSmall,
    },
    pinLocation: {
        largeIcon: null,
        smallIcon: SvgIconPinLocationSmall,
    },
    plus: {
        largeIcon: null,
        smallIcon: SvgIconPlusSmall,
    },
    plusCircle: {
        largeIcon: null,
        smallIcon: SvgIconPlusCircleSmall,
    },
    projectPrivate: {
        largeIcon: SvgIconProjectPrivateLarge,
        smallIcon: null,
    },
    projectPublic: {
        largeIcon: SvgIconProjectPublicLarge,
        smallIcon: null,
    },
    puzzlePiece: {
        largeIcon: null,
        smallIcon: SvgIconPuzzlePieceSmall,
    },
    questionMark: {
        largeIcon: SvgIconQuestionMarkLarge,
        smallIcon: null,
    },
    refresh: {
        largeIcon: SvgIconRefreshLarge,
        smallIcon: SvgIconRefreshSmall,
    },
    save: {
        largeIcon: SvgIconSaveLarge,
        smallIcon: null,
    },
    search: {
        largeIcon: SvgIconSearchLarge,
        smallIcon: SvgIconSearchSmall,
    },
    searchLinesHorizontal: {
        largeIcon: SvgIconSearchLinesHorizontalLarge,
        smallIcon: SvgIconSearchLinesHorizontalSmall,
    },
    share: {
        largeIcon: SvgIconShareLarge,
        smallIcon: null,
    },
    slidersHorizontal: {
        largeIcon: SvgIconSlidersHorizontalLarge,
        smallIcon: null,
    },
    squareOnDashedSquare: {
        largeIcon: SvgIconSquareOnDashedSquareLarge,
        smallIcon: null,
    },
    table: {
        largeIcon: null,
        smallIcon: SvgIconTableSmall,
    },
    trashCan: {
        largeIcon: null,
        smallIcon: SvgIconTrashCanSmall,
    },
    treeDendogram: {
        largeIcon: SvgIconTreeDendogramLarge,
        smallIcon: null,
    },
    treeHorizontal: {
        largeIcon: SvgIconTreeHorizontalLarge,
        smallIcon: SvgIconTreeHorizontalSmall,
    },
    treeHorizontalPrivate: {
        largeIcon: SvgIconTreeHorizontalPrivateLarge,
        smallIcon: null,
    },
    treeHorizontalPublic: {
        largeIcon: SvgIconTreeHorizontalPublicLarge,
        smallIcon: null,
    },
    treeVertical: {
        largeIcon: null,
        smallIcon: SvgIconTreeVerticalSmall,
    },
    xMark: {
        largeIcon: SvgIconXMarkLarge,
        smallIcon: SvgIconXMarkSmall,
    },
    xMarkCircle: {
        largeIcon: null,
        smallIcon: SvgIconXMarkCircleSmall,
    },
};

/**
 * @see https://v4.mui.com/components/icons/#svgicon
 */
function iconSize(props) {
    var _a, _b;
    var sdsSize = props.sdsSize;
    var iconSizes = getIconSizes(props);
    return css(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n    height: ", "px;\n    width: ", "px;\n  "], ["\n    height: ", "px;\n    width: ", "px;\n  "])), (_a = iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes[sdsSize]) === null || _a === void 0 ? void 0 : _a.height, (_b = iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes[sdsSize]) === null || _b === void 0 ? void 0 : _b.width);
}
function buttonStyle() {
    return css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n    color: inherit;\n  "], ["\n    color: inherit;\n  "])));
}
function staticStyle(props) {
    var colors = getColors(props);
    return css(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), colors === null || colors === void 0 ? void 0 : colors.primary[400]);
}
function interactive(props) {
    var colors = getColors(props);
    return css(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n\n    &:disabled {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n\n    &:disabled {\n      color: ", ";\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.gray[500], colors === null || colors === void 0 ? void 0 : colors.gray[600], colors === null || colors === void 0 ? void 0 : colors.primary[400], colors === null || colors === void 0 ? void 0 : colors.gray[300]);
}
var doNotForwardProps$e = ["sdsIcon", "sdsSize", "sdsType"];
var StyledSvgIcon = styled(SvgIcon, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$e.includes(prop); },
})(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var sdsType = props.sdsType;
    return css(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), sdsType !== "iconButton" && iconSize(props), sdsType === "static" && staticStyle(props), sdsType === "interactive" && interactive(props), sdsType === "button" && buttonStyle());
});
var StyledIcon = styled("div")(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  display: contents;\n"], ["\n  display: contents;\n"])));
var templateObject_1$C, templateObject_2$n, templateObject_3$j, templateObject_4$f, templateObject_5$d, templateObject_6$b, templateObject_7$7;

/**
 * @see https://v4.mui.com/components/dialogs/
 */
var Icon = forwardRef(function Icon(_a, ref) {
    var _b;
    var sdsIcon = _a.sdsIcon, sdsSize = _a.sdsSize, sdsType = _a.sdsType;
    var icon = (_b = iconMap[sdsIcon]) !== null && _b !== void 0 ? _b : {};
    var largeIcon = icon.largeIcon, smallIcon = icon.smallIcon;
    if ((sdsSize === "xs" || sdsSize === "s") && smallIcon) {
        return (React__default.createElement(StyledIcon, { ref: ref },
            React__default.createElement(StyledSvgIcon, { fillcontrast: "white", viewBox: "0 0 14 14", component: smallIcon, sdsSize: sdsSize, sdsType: sdsType, sdsIcon: sdsIcon })));
    }
    if ((sdsSize === "l" || sdsSize === "xl") && largeIcon) {
        return (React__default.createElement(StyledIcon, { ref: ref },
            React__default.createElement(StyledSvgIcon, { fillcontrast: "white", viewBox: "0 0 32 32", component: largeIcon, sdsSize: sdsSize, sdsType: sdsType, sdsIcon: sdsIcon })));
    }
    // eslint-disable-next-line no-console
    console.error("Error: Icon ".concat(sdsIcon, " not found for size ").concat(sdsSize, ". This is a czifui problem."));
    return null;
});

var isActive = function (props) {
    var sdsType = props.sdsType;
    var colors = getColors(props);
    return css(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), sdsType !== "tertiary" &&
        "\n      color: ".concat(sdsType === "primary" ? colors === null || colors === void 0 ? void 0 : colors.primary[600] : colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n\n      &:hover {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[600], ";\n      }\n    "));
};
var isDisabled$1 = function (props) {
    var colors = getColors(props);
    return css(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), colors === null || colors === void 0 ? void 0 : colors.gray[300]);
};
var primary$2 = function (props) {
    var colors = getColors(props);
    return css(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    &:hover {\n      background: ", ";\n    }\n\n    &:active {\n      color: ", ";\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.primary[400], colors === null || colors === void 0 ? void 0 : colors.gray[300], colors === null || colors === void 0 ? void 0 : colors.primary[600]);
};
var secondary$2 = function (props) {
    var colors = getColors(props);
    return css(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n    color: ", ";\n\n    &:hover {\n      background: none;\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    &:hover {\n      background: none;\n      color: ", ";\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.gray[500], colors === null || colors === void 0 ? void 0 : colors.primary[400]);
};
var tertiary = function (props) {
    var colors = getColors(props);
    return css(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n    color: ", ";\n\n    &:hover {\n      background: none;\n      color: black;\n    }\n\n    &:active {\n      color: black;\n    }\n  "], ["\n    color: ", ";\n\n    &:hover {\n      background: none;\n      color: black;\n    }\n\n    &:active {\n      color: black;\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.gray[500]);
};
var small$1 = function (props) {
    var iconSizes = getIconSizes(props);
    return css(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n    &:hover {\n      background: none;\n    }\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "], ["\n    &:hover {\n      background: none;\n    }\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "])), iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.width);
};
var medium$1 = function (props) {
    var iconSizes = getIconSizes(props);
    return css(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "], ["\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "])), iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.width);
};
var large = function (props) {
    var sdsType = props.sdsType;
    var spacings = getSpaces(props);
    var iconSizes = getIconSizes(props);
    return css(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n    padding: ", "px;\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "], ["\n    padding: ", "px;\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n    }\n  "])), sdsType === "primary" ? spacings === null || spacings === void 0 ? void 0 : spacings.xxs : 0, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.xl.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.xl.height);
};
var doNotForwardProps$d = ["active", "sdsSize", "sdsType"];
var StyledIconButton$2 = styled(IconButton$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$d.includes(prop); },
})(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  padding: 0;\n\n  ", "\n"], ["\n  padding: 0;\n\n  ", "\n"])), function (props) {
    var active = props.active, disabled = props.disabled, sdsSize = props.sdsSize, sdsType = props.sdsType;
    return css(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), sdsType === "primary" && primary$2(props), sdsType === "secondary" && secondary$2(props), sdsType === "tertiary" && tertiary(props), active && isActive(props), disabled && isDisabled$1(props), sdsSize === "small" && small$1(props), sdsSize === "medium" && medium$1(props), sdsSize === "large" && large(props));
});
var templateObject_1$B, templateObject_2$m, templateObject_3$i, templateObject_4$e, templateObject_5$c, templateObject_6$a, templateObject_7$6, templateObject_8$1, templateObject_9$1, templateObject_10$1;

/**
 * @see https://v4.mui.com/components/buttons/#icon-buttons
 */
var IconButton = forwardRef(function (props, ref) {
    return React__default.createElement(StyledIconButton$2, __assign({}, props, { ref: ref }));
});

var Centered = styled("div")(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var IconWrapper = styled("div")(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var iconSizes = getIconSizes(props);
    var spaces = getSpaces(props);
    return "\n      height: ".concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.height, "px;\n      margin-right: ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.m, "px;\n    ");
});
var doNotForwardPropsIconButton = ["bannerType"];
var StyledIconButton$1 = styled(IconButton, {
    shouldForwardProp: function (prop) {
        return !doNotForwardPropsIconButton.includes(prop);
    },
})(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (props) {
    var spaces = getSpaces(props);
    return "\n      flex: 0 0 auto;\n      margin: ".concat(spaces === null || spaces === void 0 ? void 0 : spaces.l, "px;\n    ");
}, function (props) {
    var bannerType = props.bannerType;
    var colors = getColors(props);
    if (bannerType !== "primary")
        return "";
    return "\n      svg:hover {\n        fill: ".concat(colors === null || colors === void 0 ? void 0 : colors.primary[300], ";\n      }\n    ");
});
var Text = styled("div")(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), fontBodyS$2, function (props) {
    var typography = getTypography(props);
    return "\n      font-family: ".concat(typography === null || typography === void 0 ? void 0 : typography.fontFamily, ";\n    ");
});
var primary$1 = function (props) {
    var colors = getColors(props);
    return "\n    background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.info[400], ";\n    color: white;\n    svg {\n      fill: white;\n    }\n  ");
};
var secondary$1 = function (props) {
    var colors = getColors(props);
    return "\n    background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.info[100], ";\n    color: black;\n  ");
};
var doNotForwardProps$c = ["sdsType"];
var StyledBanner = styled("div", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$c.includes(prop); },
})(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n\n  ", "\n"])), function (props) {
    var sdsType = props.sdsType;
    return "\n      ".concat(sdsType === "primary" ? primary$1(props) : "", "\n      ").concat(sdsType === "secondary" ? secondary$1(props) : "", "\n    ");
});
var templateObject_1$A, templateObject_2$l, templateObject_3$h, templateObject_4$d, templateObject_5$b;

var Banner = forwardRef(function Banner(props, ref) {
    var dismissed = props.dismissed, _a = props.dismissible, dismissible = _a === void 0 ? true : _a, onClose = props.onClose, sdsType = props.sdsType, text = props.text, rest = __rest(props, ["dismissed", "dismissible", "onClose", "sdsType", "text"]);
    var _b = useState(false), wasDismissed = _b[0], setWasDismissed = _b[1];
    if (dismissed || wasDismissed)
        return null;
    var handleClose = function (e) {
        if (dismissed === undefined) {
            // let the component be uncontrolled
            setWasDismissed(true);
        }
        if (onClose)
            onClose(e);
    };
    return (React__default.createElement(StyledBanner, __assign({ role: "banner", sdsType: sdsType, ref: ref }, rest),
        React__default.createElement(Centered, null,
            React__default.createElement(IconWrapper, null,
                React__default.createElement(Icon, { sdsIcon: "infoCircle", sdsSize: "l", sdsType: "static" })),
            React__default.createElement(Text, null, text)),
        dismissible && (React__default.createElement(StyledIconButton$1, { bannerType: sdsType, sdsType: "tertiary", sdsSize: "small", onClick: handleClose },
            React__default.createElement(Icon, { sdsIcon: "xMark", sdsSize: "s", sdsType: "iconButton" })))));
});

var sdsPropNames$4 = ["isAllCaps", "isRounded", "sdsStyle", "sdsType"];
var ButtonBase = styled(Button$1, {
    shouldForwardProp: function (prop) { return !sdsPropNames$4.includes(prop); },
})(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  box-shadow: none;\n  ", "\n"], ["\n  box-shadow: none;\n  ", "\n"])), function (props) {
    var variant = props.variant;
    var colors = getColors(props);
    var spacings = getSpaces(props);
    var containedPadding = "".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px");
    // (thuang): outline variant has border 1px, so padding needs to be smaller
    var outlinedPadding = "".concat(((spacings === null || spacings === void 0 ? void 0 : spacings.xs) || 0) - 1, "px ").concat(((spacings === null || spacings === void 0 ? void 0 : spacings.l) || 0) - 1, "px");
    var padding = variant === "outlined" ? outlinedPadding : containedPadding;
    return "\n      padding: ".concat(padding, ";\n      min-width: 120px;\n      height: 34px;\n      &:hover {\n        color: white;\n        background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[500], ";\n        box-shadow: none;\n      }\n      &:focus-visible {\n        outline: 5px auto Highlight;\n        outline: 5px auto -webkit-focus-ring-color;\n      }\n      &:active {\n        color: white;\n        background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[600], ";\n        box-shadow: none;\n      }\n      &:disabled {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[400], ";\n        background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n        border-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      }\n      .MuiButton-startIcon {\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      }\n      .MuiButton-endIcon {\n        margin-left: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      }\n    ");
});
var RoundedButton = styled(ButtonBase, {
    shouldForwardProp: function (prop) { return !sdsPropNames$4.includes(prop); },
})(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var corners = getCorners(props);
    return "\n      border-radius: ".concat(corners === null || corners === void 0 ? void 0 : corners.l, "px;\n    ");
});
var SquareButton = ButtonBase;
var MinimalButton = styled(Button$1, {
    shouldForwardProp: function (prop) { return !sdsPropNames$4.includes(prop); },
})(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  ", "\n\n  ", "\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"], ["\n  ", "\n\n  ", "\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"])), function (props) {
    var spacings = getSpaces(props);
    return "\n      padding: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px 0;\n    ");
}, function (props) {
    if (props === null || props === void 0 ? void 0 : props.isAllCaps) {
        return fontCapsXxxs;
    }
    return "";
});
var minimal$2 = function (props) {
    var colors = getColors(props);
    var spaces = getSpaces(props);
    return "\n    &:hover, &:focus-visible {\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.primary[500], ";\n    }\n    &:active {\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[600], ";\n    }\n    &:disabled {\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[400], ";\n    }\n\n    .MuiButton-startIcon {\n      margin-right: ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.xxs, "px;\n    }\n  ");
};
var PrimaryMinimalButton = styled(MinimalButton)(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), minimal$2);
var SecondaryMinimalButton = styled(MinimalButton)(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  ", "\n  color: #000;\n"], ["\n  ", "\n  color: #000;\n"])), minimal$2);
var StyledButton$1 = styled(Button$1, {
    shouldForwardProp: function (prop) { return !sdsPropNames$4.includes(prop); },
})(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n  ", "\n"], ["\n  &:focus-visible {\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n  ", "\n"])), function (props) {
    if (!props.isRounded)
        return "";
    var corners = getCorners(props);
    var spacings = getSpaces(props);
    return "\n      border-radius: ".concat(corners === null || corners === void 0 ? void 0 : corners.l, "px;\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      min-width: 120px;\n      height: 34px;\n    ");
});
var templateObject_1$z, templateObject_2$k, templateObject_3$g, templateObject_4$c, templateObject_5$a, templateObject_6$9;

var hasWarned$2 = false;
/**
 * @see https://v4.mui.com/components/buttons/
 */
var Button = React__default.forwardRef(function (props, ref) {
    var sdsStyle = props === null || props === void 0 ? void 0 : props.sdsStyle;
    var sdsType = props === null || props === void 0 ? void 0 : props.sdsType;
    if ((!sdsStyle || !sdsType) && !hasWarned$2) {
        // eslint-disable-next-line no-console
        console.warn("Warning: Buttons without sdsStyle or sdsType props will be deprecated.");
        hasWarned$2 = true;
    }
    if (typeof (props === null || props === void 0 ? void 0 : props.isAllCaps) === "boolean" && sdsStyle !== "minimal") {
        // eslint-disable-next-line no-console
        console.warn("Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'.");
    }
    // isAllCaps is only used for the Minimal Button.  It defaults to true.
    var isAllCaps = typeof (props === null || props === void 0 ? void 0 : props.isAllCaps) === "boolean" ? props === null || props === void 0 ? void 0 : props.isAllCaps : true;
    var propsWithDefault = __assign(__assign({}, props), { isAllCaps: isAllCaps });
    switch (true) {
        case sdsStyle === "rounded" && sdsType === "primary":
            return (React__default.createElement(RoundedButton, __assign({ color: "primary", ref: ref, variant: "contained" }, propsWithDefault)));
        case sdsStyle === "rounded" && sdsType === "secondary":
            return (React__default.createElement(RoundedButton, __assign({ color: "primary", ref: ref, variant: "outlined" }, propsWithDefault)));
        case sdsStyle === "square" && sdsType === "primary":
            return (React__default.createElement(SquareButton, __assign({ color: "primary", ref: ref, variant: "contained" }, propsWithDefault)));
        case sdsStyle === "square" && sdsType === "secondary":
            return (React__default.createElement(SquareButton, __assign({ color: "primary", ref: ref, variant: "outlined" }, propsWithDefault)));
        case sdsStyle === "minimal" && sdsType === "primary":
            return (React__default.createElement(PrimaryMinimalButton, __assign({ color: "primary", ref: ref, variant: "text" }, propsWithDefault)));
        case sdsStyle === "minimal" && sdsType === "secondary":
            return (React__default.createElement(SecondaryMinimalButton, __assign({ color: "primary", ref: ref, variant: "text" }, propsWithDefault)));
        default:
            return React__default.createElement(StyledButton$1, __assign({}, propsWithDefault, { ref: ref }));
    }
});

/**
 * @see https://v4.mui.com/components/buttons/
 */
var ButtonDropdown = React__default.forwardRef(function (props, ref) {
    var icon = props === null || props === void 0 ? void 0 : props.icon;
    var sdsStyle = props === null || props === void 0 ? void 0 : props.sdsStyle;
    var sdsType = props === null || props === void 0 ? void 0 : props.sdsType;
    return (React__default.createElement(Button, __assign({}, props, { endIcon: React__default.createElement(Icon, { sdsIcon: "chevronDown", sdsSize: "s", sdsType: "button" }), sdsStyle: sdsStyle, ref: ref, sdsType: sdsType, startIcon: icon })));
});

var fontBodyXs$3 = fontBody("xs");
var doNotForwardProps$b = ["calloutTitle"];
var StyledCallout = styled(Alert$2, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$b.includes(prop); },
})(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), fontBodyXs$3, function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    var _a = props.severity, severity = _a === void 0 ? "success" : _a;
    var corners = getCorners(props);
    var iconSizes = getIconSizes(props);
    var iconColor = (colors && colors[severity][400]) || "black";
    var calloutColor = (colors && colors[severity][100]) || "white";
    var backgroundColor = colors && colors[severity][100];
    return "\n      background-color: ".concat(backgroundColor, ";\n      width: 360px;\n      margin: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px 0;\n      border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n      color: ").concat(defaultTheme.palette.text.primary, ";\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      background-color: ").concat(calloutColor, ";\n\n      .MuiAlert-icon {\n        height: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.height, "px;\n        width: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.width, "px;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n        padding: 0;\n        path {\n          fill: ").concat(iconColor, ";\n        }\n      }\n\n      .MuiAlert-message {\n        padding: 0;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      }\n\n      .MuiAlert-action {\n        margin-right: 0;\n        padding: 0;\n        align-items: flex-start;\n        margin-top: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px;\n\n        > button {\n          padding: 0;\n        }\n      }\n    ");
});
var templateObject_1$y;

/**
 * @see https://v4.mui.com/components/alert/
 */
var Callout = function (_a) {
    var autoDismiss = _a.autoDismiss, children = _a.children, dismissed = _a.dismissed, onClose = _a.onClose, icon = _a.icon, intent = _a.intent, rest = __rest(_a, ["autoDismiss", "children", "dismissed", "onClose", "icon", "intent"]);
    var _b = useState(dismissed), hide = _b[0], setHide = _b[1];
    useEffect(function () {
        setHide(dismissed);
        if (autoDismiss) {
            var timeout = typeof autoDismiss === "boolean" ? 8000 : autoDismiss;
            setTimeout(function () {
                setHide(true);
            }, timeout);
        }
    }, [dismissed, autoDismiss]);
    var handleClose = function (event) {
        setHide(true);
        if (onClose)
            onClose(event);
    };
    var getIcon = function () {
        if (icon)
            return icon;
        switch (intent) {
            case "success":
                return React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "checkCircle", sdsType: "static" });
            case "info":
                return React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "infoCircle", sdsType: "static" });
            default:
                return (React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "exclamationMarkCircle", sdsType: "static" }));
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Grow, { in: !hide },
            React__default.createElement(StyledCallout, __assign({ onClose: onClose ? handleClose : undefined, action: onClose ? (React__default.createElement(IconButton, { onClick: handleClose, sdsSize: "small", sdsType: "tertiary", size: "large" },
                    " ",
                    React__default.createElement(Icon, { sdsIcon: "xMark", sdsSize: "s", sdsType: "iconButton" }),
                    " ")) : null, icon: getIcon(), severity: intent }, rest), children))));
};

var _rect$1;

function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function SvgIconCheckboxChecked(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect$1 || (_rect$1 = /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 16,
    rx: 2
  })), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.868 3.722a.558.558 0 00-.346.239l-4.486 6.083-2.32-2.62c-.148-.206-.393-.286-.615-.186-.21.095-.354.33-.382.606-.027.272.063.544.238.704l2.733 3.09c.235.263.595.24.808-.048l4.875-6.612c.167-.22.21-.553.11-.833-.107-.294-.353-.472-.615-.423z",
    fill: props.fillcontrast
  }));
}

var _rect;

function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgIconCheckboxIndeterminate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 16,
    rx: 2
  })), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 8a1 1 0 01-1 1H4a1 1 0 110-2h8a1 1 0 011 1z",
    fill: props.fillcontrast
  }));
}

var _path$2;

function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgIconCheckboxUnchecked(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z",
    fill: props.fillcontrast
  }), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
  })));
}

var StyledCheckbox = styled(Checkbox$1)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var colors = getColors(props);
    var iconSizes = getIconSizes(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[400], ";\n      &:hover {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n        background-color: transparent;\n      }\n      &.Mui-disabled {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      }\n      &.Mui-checked {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n        &:hover {\n          color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[500], ";\n          background-color: transparent;\n        }\n        &.Mui-disabled {\n          color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[300], "\n        }\n      }\n\n      .MuiSvgIcon-root {\n        height: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.input.height, "px;\n        width: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.input.width, "px;\n      }\n    ");
});
var templateObject_1$x;

/**
 * @see https://v4.mui.com/components/checkboxes/
 */
var Checkbox = function (props) {
    var newProps;
    var stage = props.stage;
    switch (stage) {
        case "checked":
            newProps = __assign(__assign({}, props), { checked: true, color: "primary" });
            break;
        case "unchecked":
            newProps = __assign(__assign({}, props), { checked: false, color: "default" });
            break;
        case "indeterminate":
            newProps = __assign(__assign({}, props), { checked: true, color: "primary", indeterminate: true });
            break;
        default:
            newProps = props;
    }
    return (React__default.createElement(StyledCheckbox, __assign({}, newProps, { checkedIcon: React__default.createElement(SvgIcon, { fillcontrast: "white", component: SvgIconCheckboxChecked, viewBox: "0 0 16 16" }), icon: React__default.createElement(SvgIcon, { fillcontrast: "white", component: SvgIconCheckboxUnchecked, viewBox: "0 0 16 16" }), indeterminateIcon: React__default.createElement(SvgIcon, { fillcontrast: "white", component: SvgIconCheckboxIndeterminate, viewBox: "0 0 16 16" }) })));
};

var small = function (props) {
    var spacings = getSpaces(props);
    return css(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n    height: ", "px;\n    padding: ", "px ", "px;\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n    }\n  "], ["\n    height: ", "px;\n    padding: ", "px ", "px;\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n    }\n  "])), spacings === null || spacings === void 0 ? void 0 : spacings.l, spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.xs, fontCapsXxxxs(props));
};
var medium = function (props) {
    var spacings = getSpaces(props);
    var colors = getColors(props);
    return css(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n    margin: 0 ", "px;\n    height: 24px;\n\n    background-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    .MuiChip-label {\n      ", "\n      color: white;\n      padding-left: ", "px;\n    }\n\n    .MuiChip-deleteIcon {\n      color: white;\n      padding-right: ", "px;\n      margin: 0 0 0 -", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "], ["\n    margin: 0 ", "px;\n    height: 24px;\n\n    background-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    .MuiChip-label {\n      ", "\n      color: white;\n      padding-left: ", "px;\n    }\n\n    .MuiChip-deleteIcon {\n      color: white;\n      padding-right: ", "px;\n      margin: 0 0 0 -", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "])), spacings === null || spacings === void 0 ? void 0 : spacings.s, colors === null || colors === void 0 ? void 0 : colors.primary[400], colors === null || colors === void 0 ? void 0 : colors.primary[500], colors === null || colors === void 0 ? void 0 : colors.primary[600], fontHeaderXs(props), spacings === null || spacings === void 0 ? void 0 : spacings.s, spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.s, spacings === null || spacings === void 0 ? void 0 : spacings.l, spacings === null || spacings === void 0 ? void 0 : spacings.l);
};
var rounded$3 = function (props) {
    var corners = getCorners(props);
    return css(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n    border-radius: ", "px;\n  "], ["\n    border-radius: ", "px;\n  "])), corners === null || corners === void 0 ? void 0 : corners.l);
};
var square$2 = function (props) {
    var corners = getCorners(props);
    return css(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n    border-radius: ", "px;\n  "], ["\n    border-radius: ", "px;\n  "])), corners === null || corners === void 0 ? void 0 : corners.m);
};
var success = function (props) {
    return createStatusCss(props, "success");
};
var error$3 = function (props) {
    return createStatusCss(props, "error");
};
var beta = function (props) {
    return createStatusCss(props, "beta");
};
var pending = function (props) {
    return createStatusCss(props, "pending");
};
var warning$3 = function (props) {
    return createStatusCss(props, "warning");
};
var info = function (props) {
    return createStatusCss(props, "info");
};
function createStatusCss(props, status) {
    var colors = getColors(props);
    if (!colors)
        return;
    var statusToColors = {
        beta: {
            dark: colors.beta[600],
            light: colors.beta[200],
        },
        error: {
            dark: colors.error[600],
            light: colors.error[200],
        },
        info: {
            dark: colors.info[600],
            light: colors.info[200],
        },
        pending: {
            dark: colors.gray[600],
            light: colors.gray[200],
        },
        success: {
            dark: colors.success[600],
            light: colors.success[200],
        },
        warning: {
            dark: colors.warning[600],
            light: colors.warning[200],
        },
    };
    var statusColors = statusToColors[status];
    return css(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n    background-color: ", ";\n\n    .MuiChip-label {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    .MuiChip-label {\n      color: ", ";\n    }\n  "])), statusColors.light, statusColors.dark);
}
var statusToCss = {
    beta: beta,
    error: error$3,
    info: info,
    pending: pending,
    success: success,
    warning: warning$3,
};
var doNotForwardProps$a = ["isRounded"];
var StyledChip = styled(Chip$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$a.includes(prop); },
})(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  border: none;\n\n  ", "\n"], ["\n  border: none;\n\n  ", "\n"])), function (props) {
    var size = props.size, status = props.status, isRounded = props.isRounded;
    return css(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), isRounded && rounded$3(props), !isRounded && square$2(props), size === "small" && small(props), size === "medium" && medium(props), status && statusToCss[status](props));
});
var templateObject_1$w, templateObject_2$j, templateObject_3$f, templateObject_4$b, templateObject_5$9, templateObject_6$8, templateObject_7$5;

var hasWarned$1 = false;
/**
 * @see https://v4.mui.com/components/chips/
 */
var Chip = function (props) {
    if (!hasWarned$1) {
        // eslint-disable-next-line no-console
        console.warn("Warning: <Chip /> will be deprecated and replaced with <Tag />");
        hasWarned$1 = true;
    }
    var onDelete = props.onDelete;
    if (onDelete) {
        return React__default.createElement(StyledChip, __assign({ deleteIcon: React__default.createElement(Clear, null) }, props));
    }
    return React__default.createElement(StyledChip, __assign({}, props));
};

var noop = function () { };

var sdsPropNames$3 = ["sdsStyle", "sdsStage", "intent", "handleSubmit"];
var rounded$2 = function (props) {
    var corners = getCorners(props);
    var borders = getBorders(props);
    return css(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n    .", " {\n      border-radius: ", "px;\n      border: ", ";\n    }\n  "], ["\n    .", " {\n      border-radius: ", "px;\n      border: ", ";\n    }\n  "])), outlinedInputClasses.notchedOutline, corners === null || corners === void 0 ? void 0 : corners.l, borders === null || borders === void 0 ? void 0 : borders.gray[400]);
};
var error$2 = function (props) {
    var borders = getBorders(props);
    return css(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n    .", " {\n      border: ", ";\n    }\n  "], ["\n    .", " {\n      border: ", ";\n    }\n  "])), outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.error[400]);
};
var warning$2 = function (props) {
    var borders = getBorders(props);
    return css(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n    .", " {\n      border: ", ";\n    }\n  "], ["\n    .", " {\n      border: ", ";\n    }\n  "])), outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.warning[400]);
};
var disabledStyled$1 = function (props) {
    var borders = getBorders(props);
    var colors = getColors(props);
    return css(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n    .Mui-disabled {\n      .", " {\n        border: ", ";\n      }\n\n      .MuiInputAdornment-root svg {\n        color: ", ";\n      }\n\n      &:hover .", " {\n        border: ", ";\n      }\n    }\n  "], ["\n    .Mui-disabled {\n      .", " {\n        border: ", ";\n      }\n\n      .MuiInputAdornment-root svg {\n        color: ", ";\n      }\n\n      &:hover .", " {\n        border: ", ";\n      }\n    }\n  "])), outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.gray[300], colors === null || colors === void 0 ? void 0 : colors.gray[300], outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.gray[300]);
};
var StyledLabel$2 = styled("label")(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), fontBodyM$1, function (props) {
    var typography = getTypography(props);
    var spacings = getSpaces(props);
    return "\n      font-family: ".concat(typography === null || typography === void 0 ? void 0 : typography.fontFamily, ";\n      margin-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px;\n      position: absolute;\n      overflow: hidden;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      width: 1px;\n      margin: -1px; padding: 0; border: 0;\n    ");
});
var StyledSearchBase = styled(TextField, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames$3.includes(prop.toString());
    },
})(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var intent = props.intent, disabled = props.disabled, sdsStyle = props.sdsStyle;
    var spacings = getSpaces(props);
    var borders = getBorders(props);
    var colors = getColors(props);
    return css(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n      margin-top: ", "px;\n      margin-bottom: ", "px;\n      margin-right: ", "px;\n      min-width: 120px;\n      display: block;\n\n      .", " {\n        .", " {\n          border: ", ";\n        }\n      }\n\n      .", " {\n        padding: ", "px ", "px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n      }\n\n      .", ":hover\n        .", " {\n        border: ", ";\n      }\n\n      .", ".Mui-focused {\n        .", " {\n          border: ", ";\n        }\n\n        .", " svg {\n          color: ", ";\n        }\n      }\n\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      margin-top: ", "px;\n      margin-bottom: ", "px;\n      margin-right: ", "px;\n      min-width: 120px;\n      display: block;\n\n      .", " {\n        .", " {\n          border: ", ";\n        }\n      }\n\n      .", " {\n        padding: ", "px ", "px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n      }\n\n      .", ":hover\n        .", " {\n        border: ", ";\n      }\n\n      .", ".Mui-focused {\n        .", " {\n          border: ", ";\n        }\n\n        .", " svg {\n          color: ", ";\n        }\n      }\n\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), spacings === null || spacings === void 0 ? void 0 : spacings.m, spacings === null || spacings === void 0 ? void 0 : spacings.m, spacings === null || spacings === void 0 ? void 0 : spacings.xl, outlinedInputClasses.root, outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.gray[400], inputBaseClasses.inputSizeSmall, spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.l, outlinedInputClasses.root, outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.gray[500], outlinedInputClasses.root, outlinedInputClasses.notchedOutline, borders === null || borders === void 0 ? void 0 : borders.primary[400], inputAdornmentClasses.root, colors === null || colors === void 0 ? void 0 : colors.primary[400], sdsStyle === "rounded" && rounded$2(props), intent === "error" && error$2(props), intent === "warning" && warning$2(props), disabled && disabledStyled$1(props));
});
var templateObject_1$v, templateObject_2$i, templateObject_3$e, templateObject_4$a, templateObject_5$8, templateObject_6$7, templateObject_7$4;

/**
 * @see https://v4.mui.com/components/text-fields/
 */
var InputSearch = forwardRef(function InputSearch(props, ref) {
    var label = props.label, id = props.id, placeholder = props.placeholder, _a = props.sdsStyle, sdsStyle = _a === void 0 ? "square" : _a, _b = props.intent, intent = _b === void 0 ? "default" : _b, handleSubmit = props.handleSubmit, rest = __rest(props, ["label", "id", "placeholder", "sdsStyle", "intent", "handleSubmit"]);
    var _c = useState(false), hasValue = _c[0], setHasValue = _c[1];
    var _d = useState(""), value = _d[0], setValue = _d[1];
    var handleChange = function (event) {
        if (event.target.value) {
            setHasValue(true);
        }
        else {
            setHasValue(false);
        }
        setValue(event.target.value);
    };
    var localHandleSubmit = function () {
        if (handleSubmit)
            handleSubmit(value);
    };
    var handleKeyPress = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (handleSubmit)
                handleSubmit(value);
        }
    };
    if (!id || !label) {
        // eslint-disable-next-line no-console
        console.error("Error: czifui component InputText requires id and label props for accessibility.");
        return React__default.createElement(React__default.Fragment, null);
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(StyledLabel$2, { htmlFor: id }, label),
        React__default.createElement(StyledSearchBase, __assign({ ref: ref, 
            // passed to mui Input
            InputProps: {
                endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                    React__default.createElement(IconButton, { "aria-label": "search-button", onClick: localHandleSubmit, sdsType: "secondary", size: "large" },
                        React__default.createElement(Icon, { sdsIcon: "search", sdsSize: "s", sdsType: "interactive" })))),
            }, type: "search", id: id, variant: "outlined", size: "small", placeholder: placeholder, value: value, sdsStyle: sdsStyle, sdsStage: hasValue ? "userInput" : "default", onChange: handleChange, onKeyPress: handleKeyPress, intent: intent }, rest))));
});

var fontBodyXs$2 = fontBody("xs");
var StyledMenuItem$2 = styled(MenuItem$1)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var selected = props.selected;
    var colors = getColors(props);
    var fontWeights = getFontWeights(props);
    var spacings = getSpaces(props);
    var primary = colors === null || colors === void 0 ? void 0 : colors.primary[400];
    return "\n      padding: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n      min-height: unset;\n      opacity: 1;\n\n      &.MuiAutocomplete-option {\n        min-height: unset;\n      }\n      \n      .primary-text {\n        font-weight: ").concat(selected ? fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold : fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.regular, ";\n      }\n\n      &.MuiButtonBase-root {\n        background-color: transparent;\n\n        &:hover, &.").concat(menuItemClasses.focusVisible, " {\n          background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n\n          &[aria-selected=\"true\"] {\n            background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n          }\n        }\n      }\n\n      &.MuiMenuItem-root .MuiSvgIcon-root {\n        align-self: flex-start;\n        margin-top: 3px;\n      }\n  \n      &.MuiAutocomplete-option[aria-selected=\"true\"] {\n        background-color: white;\n\n        &:hover {\n          background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n        }\n\n        svg.MuiSvgIcon-root {\n          color: ").concat(selected ? primary : colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n        }\n      }\n\n      &:hover {\n        background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n        svg.MuiSvgIcon-root {\n          color: ").concat(selected ? primary : colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n        }\n      }\n\n      &.Mui-selected.MuiListItem-root.MuiListItem-button {\n        background-color: white;\n        &:hover {\n          background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n        }\n        .primary-text {\n          font-weight: ").concat(fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold, ";\n        }\n      }\n\n      &:active {\n        svg.MuiSvgIcon-root {\n          color: ").concat(primary, ";\n        }\n\n        &:active {\n          svg.MuiSvgIcon-root {\n            color: ").concat(primary, ";\n          }\n\n          .primary-text {\n            font-weight: ").concat(fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold, ";\n          }\n        }\n      }\n    ");
});
var ContentWrapper = styled("span")(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"])));
var disabledStyles = function (props) {
    var disabled = props.disabled;
    if (!disabled)
        return "";
    var colors = getColors(props);
    return "\n    color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n    cursor: default;\n  ");
};
var TextWrapper = styled("span")(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n"])), fontBodyXs$2, function (props) {
    var _a;
    var palette = getPalette(props);
    return "\n      color: ".concat((_a = palette === null || palette === void 0 ? void 0 : palette.text) === null || _a === void 0 ? void 0 : _a.primary, ";\n    ");
}, disabledStyles);
var ColumnWrapper = styled("span")(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n"])), fontBodyXs$2, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n    ");
}, disabledStyles);
styled("div")(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  width: 250px;\n"], ["\n  width: 250px;\n"])));
var StyledCheck = styled(Check, {
    shouldForwardProp: function (prop) { return prop !== "selected"; },
})(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var selected = props.selected, disabled = props.disabled;
    var colors = getColors(props);
    var iconSizes = getIconSizes(props);
    var spacings = getSpaces(props);
    var selectedColor = disabled ? colors === null || colors === void 0 ? void 0 : colors.gray[300] : colors === null || colors === void 0 ? void 0 : colors.primary[400];
    return "\n      color: ".concat(selected ? selectedColor : "transparent", ";\n      margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      margin-top: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxxs, "px;\n      padding: 0;\n      height: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.height, "px;\n      width: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.width, "px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    ");
});
var templateObject_1$u, templateObject_2$h, templateObject_3$d, templateObject_4$9, templateObject_5$7, templateObject_6$6;

/**
 * @see https://v4.mui.com/components/menus/
 */
var MenuItem = forwardRef(function (props, _) {
    var children = props.children, _a = props.column, column = _a === void 0 ? null : _a, disabled = props.disabled, _b = props.isMultiSelect, isMultiSelect = _b === void 0 ? false : _b, originalMenuItemProps = __rest(props, ["children", "column", "disabled", "isMultiSelect"]);
    var _c = originalMenuItemProps.selected, selected = _c === void 0 ? false : _c;
    return (React__default.createElement(StyledMenuItem$2, __assign({}, originalMenuItemProps, { disabled: disabled }),
        isMultiSelect && (
        // TODO (mlila): replace with sds InputCheckbox class once complete
        React__default.createElement(StyledCheck, { selected: selected, color: "primary", disabled: disabled })),
        React__default.createElement(ContentWrapper, null,
            React__default.createElement(TextWrapper, { selected: selected, className: "primary-text", disabled: disabled }, children),
            column && React__default.createElement(ColumnWrapper, { disabled: disabled }, column))));
});

var doNotForwardProps$9 = [
    "count",
    "keepSearchOnSelect",
    "search",
    "InputBaseProps",
    "hasSections",
    "title",
];
var StyledMenuItem$1 = styled(MenuItem)(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  width: 100%;\n  min-height: unset;\n  white-space: pre-wrap;\n\n  ", "\n"], ["\n  width: 100%;\n  min-height: unset;\n  white-space: pre-wrap;\n\n  ", "\n"])), function (props) {
    var count = props.count;
    if (count) {
        return "\n        .primary-text {\n          width: 100%;\n          display: flex;\n          justify-content: space-between;\n        }\n      ";
    }
});
var StyledMenuItemDetails = styled("div")(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), fontBodyXxs$1, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n      white-space: pre-wrap;\n    ");
});
var StyledMenuItemCount = styled("span")(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  ", "\n  text-align: right;\n  color: black;\n\n  ", "\n"], ["\n  ", "\n  text-align: right;\n  color: black;\n\n  ", "\n"])), fontBodyXs$4, function (props) {
    var spacings = getSpaces(props);
    return "\n      margin-left: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n    ");
});
var StyledAutocomplete$1 = styled(Autocomplete, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$9.includes(prop); },
})(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  + .MuiAutocomplete-popper\n    > .MuiAutocomplete-paper\n    .MuiAutocomplete-groupLabel {\n    ", "\n  }\n\n  ", "\n"], ["\n  + .MuiAutocomplete-popper\n    > .MuiAutocomplete-paper\n    .MuiAutocomplete-groupLabel {\n    ", "\n  }\n\n  ", "\n"])), fontCapsXxxxs, function (props) {
    var search = props.search, title = props.title, hasSections = props.hasSections;
    var spacings = getSpaces(props);
    var colors = getColors(props);
    var borders = getBorders(props);
    return "\n      ".concat(!search && "height: 0", ";\n\n      .MuiOutlinedInput-root.MuiInputBase-formControl.MuiInputBase-adornedEnd {\n        padding: 0 ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px 0 0;\n\n        .MuiAutocomplete-input {\n          padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n        }\n      }\n\n      & + .MuiAutocomplete-popper {\n        position: relative !important;\n        transform: none !important;\n        width: 100% !important;\n      }\n\n      & + .MuiAutocomplete-popper > .MuiAutocomplete-paper {\n        box-shadow: none;\n        margin: 0;\n        border-radius: 0;\n        padding-top: 0;\n        padding-bottom: 0;\n        ").concat(search || title || hasSections
        ? "padding-left: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;")
        : "", "\n\n        .MuiAutocomplete-option {\n          padding: 0;\n          min-height: unset;\n        }\n\n        .MuiMenuItem-root {\n          padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n          width: 100%;\n        }\n\n        .MuiAutocomplete-listbox {\n          max-height: 40vh;\n          padding-top: 0;\n          padding-bottom: 0;\n          ").concat(search || title || hasSections
        ? "padding-right: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;")
        : "", "\n\n          & .MuiAutocomplete-option.Mui-focused {\n            background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n          }\n\n          & .MuiAutocomplete-option[aria-selected=\"true\"] {\n            background-color: white;\n          }\n\n          & .MuiAutocomplete-option[aria-selected=\"true\"].Mui-focused {\n            background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n          }\n\n          & > li:last-child .MuiAutocomplete-groupUl {\n            border-bottom: none;\n            margin-bottom: 0;\n          }\n        }\n\n        .MuiAutocomplete-groupLabel {\n          top: 0;\n          color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n          padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px 0 ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px 0;\n        }\n\n        .MuiAutocomplete-groupUl {\n          margin-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n          position: relative;\n          padding: 0 0 ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px 0 0;\n          border-bottom: ").concat(borders === null || borders === void 0 ? void 0 : borders.gray[200], ";\n\n          & li:last-of-type {\n            position: relative;\n            margin-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px;\n          }\n        }\n      }\n    ");
});
var InputBaseWrapper$1 = styled("div", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$9.includes(prop); },
})(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var search = props.search;
    if (!search) {
        // (thuang): We cannot use `display: none;` here, since
        // the component needs to be in the DOM to handle backdrop
        // click to close the menu
        return "\n        border: 0;\n        padding: 0;\n\n        white-space: nowrap;\n\n        clip-path: inset(100%);\n        clip: rect(0 0 0 0);\n        overflow: hidden;\n        margin: 0;\n      ";
    }
    var spacings = getSpaces(props);
    return "\n      margin: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n    ");
});
var StyledMenuInputSearch$1 = styled(InputSearch, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$9.includes(prop); },
})(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  margin: 0;\n  .MuiInputBase-root {\n    width: 100%;\n  }\n  /* (thuang): Works with attribute inputMode: \"none\" to hide mobile keyboard */\n  caret-color: ", ";\n"], ["\n  margin: 0;\n  .MuiInputBase-root {\n    width: 100%;\n  }\n  /* (thuang): Works with attribute inputMode: \"none\" to hide mobile keyboard */\n  caret-color: ", ";\n"])), function (_a) {
    var search = _a.search;
    return (search ? "auto" : "transparent");
});
var templateObject_1$t, templateObject_2$g, templateObject_3$c, templateObject_4$8, templateObject_5$6, templateObject_6$5;

function DropdownMenu(props) {
    var _a = props.keepSearchOnSelect, keepSearchOnSelect = _a === void 0 ? true : _a, _b = props.multiple, multiple = _b === void 0 ? false : _b, _c = props.getOptionLabel, getOptionLabel = _c === void 0 ? defaultGetOptionLabel : _c, _d = props.isOptionEqualToValue, isOptionEqualToValue = _d === void 0 ? defaultIsOptionEqualToValue : _d, _e = props.renderTags, renderTags = _e === void 0 ? defaultRenderTags : _e, _f = props.renderOption, renderOption = _f === void 0 ? defaultRenderOption : _f, _g = props.disableCloseOnSelect, disableCloseOnSelect = _g === void 0 ? multiple : _g, _h = props.noOptionsText, noOptionsText = _h === void 0 ? "No options" : _h, _j = props.search, search = _j === void 0 ? false : _j, _k = props.onInputChange, onInputChange = _k === void 0 ? noop : _k, _l = props.InputBaseProps, InputBaseProps = _l === void 0 ? {} : _l;
    var _m = useState(""), inputValue = _m[0], setInputValue = _m[1];
    return (React__default.createElement(StyledAutocomplete$1, __assign({ clearOnBlur: false, disableCloseOnSelect: disableCloseOnSelect, disablePortal: true, renderTags: renderTags, noOptionsText: noOptionsText, renderOption: renderOption, getOptionLabel: getOptionLabel, isOptionEqualToValue: isOptionEqualToValue, inputValue: inputValue, onInputChange: function (event, value, reason) {
            if (event && event.type === "blur") {
                setInputValue("");
            }
            else if (reason !== "reset" ||
                (reason === "reset" && !keepSearchOnSelect)) {
                setInputValue(value);
            }
        }, renderInput: function (params) { return (React__default.createElement(InputBaseWrapper$1, { search: search },
            React__default.createElement(StyledMenuInputSearch$1, __assign({ id: "location-search", label: "Search for a location", placeholder: "Search", ref: params.InputProps.ref, search: search, onChange: onInputChange, autoFocus: true, InputProps: __assign(__assign({ 
                    /**
                     * (thuang): Works with css caret-color: "transparent" to hide
                     * mobile keyboard
                     */
                    inputMode: search ? "text" : "none" }, params.InputProps.ref), { endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                        React__default.createElement(IconButton, { sdsType: "secondary" },
                            React__default.createElement(Icon, { sdsIcon: "search", sdsSize: "s", sdsType: "interactive" })))), inputProps: params.inputProps }) }, InputBaseProps)))); } }, props)));
    function defaultGetOptionLabel(option) {
        if (typeof option === "object" && "name" in option)
            return option.name;
        return option.toString();
    }
    function defaultIsOptionEqualToValue(option, value) {
        return option.name === value.name;
    }
    function defaultRenderTags() {
        return null;
    }
    function defaultRenderOption(optionProps, option, _a) {
        var selected = _a.selected;
        return (React__default.createElement("li", __assign({}, optionProps),
            React__default.createElement(StyledMenuItem$1, __assign({}, { component: "div" }, { isMultiSelect: multiple, selected: selected, count: option.count }),
                React__default.createElement("div", null,
                    option.name,
                    option.details && (React__default.createElement(StyledMenuItemDetails, null, option.details))),
                option.count && (React__default.createElement(StyledMenuItemCount, { className: "menuItem-count" }, option.count)))));
    }
}

var labelFontBodyS = fontBody("s");
var labelFontBodyXs = fontBody("xs");
var inputDropdownStyles = function (props) {
    var _a, _b;
    var colors = getColors(props);
    var palette = getPalette(props);
    var spacings = getSpaces(props);
    var borders = getBorders(props);
    return css(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n    border: ", ";\n    color: ", ";\n    cursor: pointer;\n    padding: ", "px;\n\n    &.MuiButton-text {\n      justify-content: flex-start;\n\n      &:hover {\n        color: #000;\n      }\n\n      > span {\n        margin-right: ", "px;\n        margin-left: ", "px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        line-height: unset;\n        font-size: unset;\n      }\n\n      svg {\n        margin-left: auto;\n        margin-right: ", "px;\n      }\n    }\n\n    path {\n      fill: ", ";\n    }\n\n    &:hover {\n      background-color: unset;\n      border: ", ";\n      color: ", ";\n\n      path {\n        fill: ", ";\n      }\n\n      > span {\n        color: #000;\n      }\n    }\n\n    &:active {\n      border: ", ";\n      color: ", ";\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:focus {\n      outline: ", ";\n      outline-offset: -1px;\n    }\n  "], ["\n    border: ", ";\n    color: ", ";\n    cursor: pointer;\n    padding: ", "px;\n\n    &.MuiButton-text {\n      justify-content: flex-start;\n\n      &:hover {\n        color: #000;\n      }\n\n      > span {\n        margin-right: ", "px;\n        margin-left: ", "px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        line-height: unset;\n        font-size: unset;\n      }\n\n      svg {\n        margin-left: auto;\n        margin-right: ", "px;\n      }\n    }\n\n    path {\n      fill: ", ";\n    }\n\n    &:hover {\n      background-color: unset;\n      border: ", ";\n      color: ", ";\n\n      path {\n        fill: ", ";\n      }\n\n      > span {\n        color: #000;\n      }\n    }\n\n    &:active {\n      border: ", ";\n      color: ", ";\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:focus {\n      outline: ", ";\n      outline-offset: -1px;\n    }\n  "])), borders === null || borders === void 0 ? void 0 : borders.gray[400], colors === null || colors === void 0 ? void 0 : colors.gray[500], spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.xs, colors === null || colors === void 0 ? void 0 : colors.gray[500], borders === null || borders === void 0 ? void 0 : borders.gray[500], (_a = palette === null || palette === void 0 ? void 0 : palette.text) === null || _a === void 0 ? void 0 : _a.primary, colors === null || colors === void 0 ? void 0 : colors.gray[600], borders === null || borders === void 0 ? void 0 : borders.primary[400], (_b = palette === null || palette === void 0 ? void 0 : palette.text) === null || _b === void 0 ? void 0 : _b.primary, colors === null || colors === void 0 ? void 0 : colors.primary[400], borders === null || borders === void 0 ? void 0 : borders.primary[400]);
};
var minimal$1 = function (props) {
    var _a;
    var colors = getColors(props);
    var palette = getPalette(props);
    return css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n    border: none;\n    padding: 0;\n\n    & .MuiButton-label {\n      margin: 0;\n    }\n\n    span {\n      ", "\n      color: ", ";\n    }\n\n    path {\n      fill: ", ";\n    }\n\n    &:hover {\n      color: ", ";\n      border: none;\n\n      span {\n        color: ", ";\n      }\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:active {\n      color: ", ";\n      border: none;\n\n      span {\n        color: #000;\n      }\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &.MuiButton-root.MuiButton-text > span {\n      margin-left: 0;\n    }\n\n    &.MuiButton-root.MuiButton-text svg {\n      margin-left: auto;\n      margin-right: 0;\n    }\n  "], ["\n    border: none;\n    padding: 0;\n\n    & .MuiButton-label {\n      margin: 0;\n    }\n\n    span {\n      ", "\n      color: ", ";\n    }\n\n    path {\n      fill: ", ";\n    }\n\n    &:hover {\n      color: ", ";\n      border: none;\n\n      span {\n        color: ", ";\n      }\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:active {\n      color: ", ";\n      border: none;\n\n      span {\n        color: #000;\n      }\n\n      path {\n        fill: ", ";\n      }\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &.MuiButton-root.MuiButton-text > span {\n      margin-left: 0;\n    }\n\n    &.MuiButton-root.MuiButton-text svg {\n      margin-left: auto;\n      margin-right: 0;\n    }\n  "])), fontHeaderS(props), colors === null || colors === void 0 ? void 0 : colors.gray[500], colors === null || colors === void 0 ? void 0 : colors.gray[500], colors === null || colors === void 0 ? void 0 : colors.gray[600], colors === null || colors === void 0 ? void 0 : colors.gray[600], colors === null || colors === void 0 ? void 0 : colors.gray[600], (_a = palette === null || palette === void 0 ? void 0 : palette.text) === null || _a === void 0 ? void 0 : _a.primary, colors === null || colors === void 0 ? void 0 : colors.primary[400]);
};
var square$1 = function (props) {
    var corners = getCorners(props);
    return css(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n    border-radius: ", "px;\n    height: 34px;\n    min-width: 90px;\n\n    > span:first-of-type {\n      margin-right: 0px;\n    }\n  "], ["\n    border-radius: ", "px;\n    height: 34px;\n    min-width: 90px;\n\n    > span:first-of-type {\n      margin-right: 0px;\n    }\n  "])), corners === null || corners === void 0 ? void 0 : corners.m);
};
var rounded$1 = function (props) {
    var _a;
    var corners = getCorners(props);
    var colors = getColors(props);
    var palette = getPalette(props);
    var labelColor = props.disabled
        ? colors === null || colors === void 0 ? void 0 : colors.gray[300]
        : (_a = palette === null || palette === void 0 ? void 0 : palette.text) === null || _a === void 0 ? void 0 : _a.primary;
    return css(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n    border-radius: ", "px;\n    height: 34px;\n    min-width: 90px;\n\n    > span:first-of-type {\n      font-weight: 600;\n      color: ", ";\n      margin-right: 0px;\n    }\n  "], ["\n    border-radius: ", "px;\n    height: 34px;\n    min-width: 90px;\n\n    > span:first-of-type {\n      font-weight: 600;\n      color: ", ";\n      margin-right: 0px;\n    }\n  "])), corners === null || corners === void 0 ? void 0 : corners.l, labelColor);
};
var userInput = function (props) {
    var colors = getColors(props);
    return css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n    path {\n      fill: ", ";\n    }\n  "], ["\n    path {\n      fill: ", ";\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.primary[400]);
};
var warning$1 = function (props) {
    var colors = getColors(props);
    var yellow = colors === null || colors === void 0 ? void 0 : colors.warning[400];
    return css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:active {\n      border-color: ", ";\n    }\n  "], ["\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:active {\n      border-color: ", ";\n    }\n  "])), yellow, yellow, yellow);
};
var error$1 = function (props) {
    var colors = getColors(props);
    var red = colors === null || colors === void 0 ? void 0 : colors.error[400];
    return css(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:active {\n      border-color: ", ";\n    }\n  "], ["\n    border-color: ", ";\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &:active {\n      border-color: ", ";\n    }\n  "])), red, red, red);
};
var isDisabled = function (props) {
    var colors = getColors(props);
    var gray = colors === null || colors === void 0 ? void 0 : colors.gray[300];
    return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    cursor: default;\n    border-color: ", ";\n\n    span {\n      color: ", ";\n    }\n\n    path {\n      fill: ", ";\n    }\n  "], ["\n    cursor: default;\n    border-color: ", ";\n\n    span {\n      color: ", ";\n    }\n\n    path {\n      fill: ", ";\n    }\n  "])), gray, colors === null || colors === void 0 ? void 0 : colors.gray[300], colors === null || colors === void 0 ? void 0 : colors.gray[300]);
};
var doNotForwardProps$8 = ["intent", "open", "sdsStage"];
var StyledInputDropdown = styled(Button, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$8.includes(prop); },
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), labelFontBodyS, function (props) {
    var disabled = props.disabled, intent = props.intent, open = props.open, sdsStage = props.sdsStage, sdsStyle = props.sdsStyle;
    return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), inputDropdownStyles(props), sdsStyle === "minimal" && minimal$1(props), sdsStyle === "square" && square$1(props), sdsStyle === "rounded" && rounded$1(props), open && userInput(props), sdsStage === "userInput" && userInput(props), intent === "warning" && warning$1(props), intent === "error" && error$1(props), disabled && isDisabled(props));
});
var StyledDetail = styled("span", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$8.includes(prop); },
})(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), labelFontBodyXs, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n    ");
});
var StyledLabel$1 = styled("span", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$8.includes(prop); },
})(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), labelFontBodyXs, function (props) {
    var _a;
    var details = props.details, counter = props.counter;
    var colors = getColors(props);
    var palette = getPalette(props);
    var labelColor = details || counter !== undefined
        ? (_a = palette === null || palette === void 0 ? void 0 : palette.text) === null || _a === void 0 ? void 0 : _a.primary
        : colors === null || colors === void 0 ? void 0 : colors.gray[500];
    return "\n      color: ".concat(labelColor, ";\n    ");
});
var StyledCounter = styled("span", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$8.includes(prop); },
})(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), labelFontBodyXs, function (props) {
    var colors = getColors(props);
    var corners = getCorners(props);
    var spacings = getSpaces(props);
    return "\n    background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[200], ";\n    color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n    border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.l, "px;\n    padding: 1px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n  ");
});
var templateObject_1$s, templateObject_2$f, templateObject_3$b, templateObject_4$7, templateObject_5$5, templateObject_6$4, templateObject_7$3, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

/**
 * @see https://v4.mui.com/components/buttons/
 */
var InputDropdown = function (props) {
    var label = props.label, open = props.open, sdsType = props.sdsType, details = props.details, counter = props.counter;
    if (open !== undefined) {
        // eslint-disable-next-line no-console
        console.warn("Warning: InputDropdown prop `open` has been replaced by `sdsStage` and will be deprecated.");
    }
    return (React__default.createElement(StyledInputDropdown, __assign({}, props),
        React__default.createElement(StyledLabel$1, { details: details, counter: counter }, counter !== undefined || details ? "".concat(label, ":") : label),
        sdsType === "singleSelect" && details && (React__default.createElement(StyledDetail, null, details)),
        sdsType === "multiSelect" && counter !== undefined && (React__default.createElement(StyledCounter, null, counter)),
        React__default.createElement(Icon, { sdsIcon: "chevronDown", sdsSize: "s", sdsType: "interactive" })));
};

var withoutIcon = function (props) {
    var spacings = getSpaces(props);
    var iconSizes = getIconSizes(props);
    return css(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n    height: unset;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n      line-height: unset;\n    }\n\n    .MuiChip-deleteIcon {\n      ", "\n      color: white;\n      margin: 0 0 0 ", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "], ["\n    height: unset;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n      line-height: unset;\n    }\n\n    .MuiChip-deleteIcon {\n      ", "\n      color: white;\n      margin: 0 0 0 ", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "])), fontBodyXxxs$1(props), fontHeaderXs(props), spacings === null || spacings === void 0 ? void 0 : spacings.xxs, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.width);
};
var withIcon = function (props) {
    var spacings = getSpaces(props);
    var iconSizes = getIconSizes(props);
    return css(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n    height: unset;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n      line-height: unset;\n    }\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n      padding-right: ", "px;\n      margin: 0 0 0 -", "px;\n    }\n\n    .MuiChip-deleteIcon {\n      ", "\n      color: white;\n      margin: 0 0 0 ", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "], ["\n    height: unset;\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    .MuiChip-label {\n      ", "\n      padding: 0;\n      line-height: unset;\n    }\n\n    .MuiSvgIcon-root {\n      height: ", "px;\n      width: ", "px;\n      padding-right: ", "px;\n      margin: 0 0 0 -", "px;\n    }\n\n    .MuiChip-deleteIcon {\n      ", "\n      color: white;\n      margin: 0 0 0 ", "px;\n      height: ", "px;\n      width: ", "px;\n\n      &:hover,\n      &:focus-visible {\n        color: white;\n      }\n    }\n  "])), fontBodyXs$4(props), iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.width, spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.xxxs, fontHeaderXs(props), spacings === null || spacings === void 0 ? void 0 : spacings.xxs, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.width);
};
var rounded = function (props) {
    var corners = getCorners(props);
    var spacings = getSpaces(props);
    var icon = props.icon;
    return css(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n    border-radius: ", "px;\n    padding: ", ";\n\n    &:after {\n      border-radius: ", "px;\n    }\n  "], ["\n    border-radius: ", "px;\n    padding: ", ";\n\n    &:after {\n      border-radius: ", "px;\n    }\n  "])), corners === null || corners === void 0 ? void 0 : corners.l, icon
        ? "".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px")
        : "".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px"), corners === null || corners === void 0 ? void 0 : corners.l);
};
var square = function (props) {
    var corners = getCorners(props);
    var spacings = getSpaces(props);
    var icon = props.icon;
    return css(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n    border-radius: ", "px;\n    padding: ", ";\n\n    &:after {\n      border-radius: ", "px;\n    }\n  "], ["\n    border-radius: ", "px;\n    padding: ", ";\n\n    &:after {\n      border-radius: ", "px;\n    }\n  "])), corners === null || corners === void 0 ? void 0 : corners.m, icon
        ? "".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px")
        : "".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px"), corners === null || corners === void 0 ? void 0 : corners.m);
};
var primary = function (props) {
    return createTypeCss(props, "primary");
};
var secondary = function (props) {
    return createTypeCss(props, "secondary");
};
function createTypeCss(props, type) {
    var themeColors = getColors(props);
    var intent = typeof props.tagColor === "string" ? props.tagColor : "primary";
    var colors = Array.isArray(props.tagColor) ? __spreadArray([], props.tagColor, true) : [];
    var typeToColors = {
        primary: {
            background: colors.length >= 2 ? colors[1] : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][400],
            backgroundClicked: colors.length >= 2
                ? darken(colors[1], 0.3)
                : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][600],
            backgroundHover: colors.length >= 2
                ? darken(colors[1], 0.15)
                : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][500],
            iconColor: colors.length > 2 ? colors[2] : "white",
            label: colors.length ? colors[0] : "white",
        },
        secondary: {
            background: colors.length >= 2 ? colors[1] : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][200],
            backgroundClicked: colors.length >= 2
                ? darken(colors[1], 0.3)
                : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][600],
            backgroundHover: colors.length >= 2
                ? darken(colors[1], 0.15)
                : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][500],
            iconColor: colors.length > 2 ? colors[2] : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][400],
            label: colors.length ? colors[0] : themeColors === null || themeColors === void 0 ? void 0 : themeColors[intent][600],
        },
    };
    var typeColors = typeToColors[type];
    return css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    background-color: ", ";\n    position: relative;\n\n    .MuiChip-label {\n      color: ", ";\n    }\n\n    svg {\n      fill: ", ";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n\n    &:focus:hover {\n      background-color: ", ";\n    }\n\n    &:focus:active {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    position: relative;\n\n    .MuiChip-label {\n      color: ", ";\n    }\n\n    svg {\n      fill: ", ";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:focus {\n      background-color: ", ";\n    }\n\n    &:focus:hover {\n      background-color: ", ";\n    }\n\n    &:focus:active {\n      background-color: ", ";\n    }\n  "])), typeColors.background, typeColors.label, typeColors.iconColor, typeColors.backgroundHover, typeColors.backgroundClicked, typeColors.background, typeColors.backgroundHover, typeColors.backgroundClicked);
}
var typeToCss = {
    primary: primary,
    secondary: secondary,
};
var doNotForwardProps$7 = ["sdsType", "sdsStyle", "tagColor"];
var StyledTag$1 = styled(Chip$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$7.includes(prop); },
})(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  border: none;\n\n  ", "\n"], ["\n  border: none;\n\n  ", "\n"])), function (props) {
    var sdsType = props.sdsType, sdsStyle = props.sdsStyle, icon = props.icon;
    var isRounded = sdsStyle === "rounded";
    var type = sdsType || "primary";
    return css(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n    "])), icon ? withIcon(props) : withoutIcon(props), typeToCss[type](props), isRounded ? rounded(props) : square(props));
});
var templateObject_1$r, templateObject_2$e, templateObject_3$a, templateObject_4$6, templateObject_5$4, templateObject_6$3, templateObject_7$2;

/**
 * @see https://v4.mui.com/components/chips/
 *
 * @props color: {string}                   - applies color for tag based on default theme color values
 *               [string, string]           - applies custom colors for [font, background]
 *               [string, string, string]   - applies custom colors for [font, background, icon]
 */
var Tag = function (props) {
    var color = props.color;
    return React__default.createElement(StyledTag$1, __assign({ tagColor: color }, props, { color: "primary" }));
};

var StyledTag = styled(Tag)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var spacings = getSpaces(props);
    return css(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n      padding: ", "px ", "px;\n\n      &:after {\n        display: none;\n      }\n\n      .MuiChip-label {\n        ", "\n      }\n\n      .MuiChip-deleteIcon,\n      .MuiSvgIcon-root {\n        margin-left: ", "px;\n      }\n\n      .MuiChip-label,\n      svg {\n        z-index: auto;\n      }\n    "], ["\n      padding: ", "px ", "px;\n\n      &:after {\n        display: none;\n      }\n\n      .MuiChip-label {\n        ", "\n      }\n\n      .MuiChip-deleteIcon,\n      .MuiSvgIcon-root {\n        margin-left: ", "px;\n      }\n\n      .MuiChip-label,\n      svg {\n        z-index: auto;\n      }\n    "])), spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.s, fontHeaderXs(props), spacings === null || spacings === void 0 ? void 0 : spacings.s);
});
var templateObject_1$q, templateObject_2$d;

/**
 * @see https://v4.mui.com/components/chips/
 */
var TagFilter = function (props) {
    return React__default.createElement(StyledTag, __assign({ deleteIcon: React__default.createElement(Clear, null) }, props));
};

var StyledTagFilter = styled(TagFilter)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var spacings = getSpaces(props);
    return "\n      margin: 0 ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px 0;\n    ");
});
var templateObject_1$p;

function Chips(_a) {
    var value = _a.value, _b = _a.multiple, multiple = _b === void 0 ? false : _b, onDelete = _a.onDelete;
    if (!value)
        return null;
    if (!multiple) {
        var name_1 = value.name;
        return React__default.createElement(StyledTagFilter, { label: name_1, onDelete: onDelete });
    }
    return (React__default.createElement(React__default.Fragment, null, value.map(function (item) {
        var name = item.name;
        return (React__default.createElement(StyledTagFilter, { key: name, label: name, onDelete: function () { return onDelete(item); } }));
    })));
}

var Wrapper$1 = styled("div")(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  width: 150px;\n"], ["\n  width: 150px;\n"])));
var StyledPopper$1 = styled(Popper)(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  & {\n    ", "\n\n    ", "\n  }\n"], ["\n  & {\n    ", "\n\n    ", "\n  }\n"])), fontHeaderXs, function (props) {
    var colors = getColors(props);
    var corners = getCorners(props);
    var shadows = getShadows(props);
    var spacings = getSpaces(props);
    return "\n      background-color: white;\n      border: 1px solid ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n      border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n      box-shadow: ").concat(shadows === null || shadows === void 0 ? void 0 : shadows.m, ";\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n      min-width: 244px;\n      z-index: 1400; // allows the dropdown to be used in modals\n    ");
});
var StyledChipsWrapper = styled("div")(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var spacings = getSpaces(props);
    return "\n      margin-top: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n    ");
});
var templateObject_1$o, templateObject_2$c, templateObject_3$9;

// eslint-disable-next-line sonarjs/cognitive-complexity
function ComplexFilter(_a) {
    var options = _a.options, _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.multiple, multiple = _c === void 0 ? false : _c, _d = _a.search, search = _d === void 0 ? false : _d, onChange = _a.onChange, _e = _a.MenuSelectProps, MenuSelectProps = _e === void 0 ? {} : _e, _f = _a.InputDropdownProps, InputDropdownProps = _f === void 0 ? { sdsStyle: "minimal" } : _f, propValue = _a.value, _g = _a.PopperComponent, PopperComponent = _g === void 0 ? StyledPopper$1 : _g, _h = _a.InputDropdownComponent, InputDropdownComponent = _h === void 0 ? InputDropdown : _h, _j = _a.isTriggerChangeOnOptionClick, isTriggerChangeOnOptionClick = _j === void 0 ? false : _j, rest = __rest(_a, ["options", "label", "multiple", "search", "onChange", "MenuSelectProps", "InputDropdownProps", "value", "PopperComponent", "InputDropdownComponent", "isTriggerChangeOnOptionClick"]);
    var isControlled = propValue !== undefined;
    var _k = useState(false), open = _k[0], setOpen = _k[1];
    var _l = useState(null), anchorEl = _l[0], setAnchorEl = _l[1];
    var _m = useState(getInitialValue()), value = _m[0], setValue = _m[1];
    var _o = useState(getInitialValue()), pendingValue = _o[0], setPendingValue = _o[1];
    useEffect(function () {
        onChange(value);
        setPendingValue(value);
    }, [value]);
    useEffect(function () {
        if (isControlled) {
            setValue(propValue);
        }
    }, [propValue]);
    // * (mlila): likely, this portion on ComplexFilter will need to be replaced with Dropdown (or a
    // * new DropdownFilter) component. As ComplexFilter evolves, there will be more types added,
    // * such as sliders for ranges, inline multi selects, etc.
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Wrapper$1, __assign({}, rest),
            React__default.createElement(InputDropdownComponent, __assign({ label: label, onClick: handleClick, sdsStage: open ? "userInput" : "default" }, InputDropdownProps)),
            React__default.createElement(StyledChipsWrapper, null,
                React__default.createElement(Chips, { value: value, multiple: multiple, onDelete: handleDelete }))),
        React__default.createElement(PopperComponent, { anchorEl: anchorEl, modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 8],
                    },
                },
            ], open: open, placement: "bottom-start" },
            React__default.createElement(ClickAwayListener, { onClickAway: handleClose },
                React__default.createElement("div", null,
                    React__default.createElement(DropdownMenu, __assign({ open: !!open, onClose: handleMenuSelectClose, search: search, multiple: multiple, value: (multiple ? pendingValue : value), onChange: handleChange, disableCloseOnSelect: multiple, options: options }, MenuSelectProps)))))));
    function handleClick(event) {
        if (open) {
            if (multiple) {
                setValue(pendingValue);
            }
            setOpen(false);
            if (anchorEl) {
                anchorEl.focus();
            }
            setAnchorEl(null);
        }
        else {
            if (multiple) {
                setPendingValue(value);
            }
            setAnchorEl(event.currentTarget);
            setOpen(true);
        }
    }
    function handleClose() {
        if (open) {
            setOpen(false);
            if (multiple) {
                setValue(pendingValue);
            }
        }
    }
    function handleMenuSelectClose(event, reason) {
        var reasons = ["escape", "select-option"];
        if (reasons.includes(reason)) {
            handleClose();
        }
    }
    function handleChange(_, newValue) {
        if (multiple) {
            if (isTriggerChangeOnOptionClick) {
                setPendingValue(newValue);
                return setValue(newValue);
            }
            return setPendingValue(newValue);
        }
        setValue(newValue);
        setOpen(false);
    }
    function handleDelete(option) {
        if (!multiple) {
            return setValue(null);
        }
        var newValue = (value === null || value === void 0 ? void 0 : value.filter(function (item) { return item !== option; })) || null;
        setValue(newValue);
    }
    function getInitialValue() {
        if (isControlled) {
            return propValue;
        }
        return multiple
            ? []
            : null;
    }
}

var DialogContext = createContext({ sdsSize: "m" });

var BoxShadows;
(function (BoxShadows) {
    BoxShadows["S"] = "0 2px 12px 0 rgba(0,0,0,0.3)";
    BoxShadows["M"] = "0 2px 4px 0 rgba(0,0,0, 0.15),0 2px 10px 0 rgba(0,0,0, 0.15)";
    BoxShadows["L"] = "0 2px 4px 0 rgba(0,0,0, 0.25)";
})(BoxShadows || (BoxShadows = {}));

// (thuang): Please keep this in sync with the props used in `ExtraProps`
var doNotForwardProps$6 = ["sdsSize"];
var StyledPaper = styled(Paper, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$6.includes(prop); },
})(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & {\n    box-shadow: ", ";\n\n    ", "\n\n    ", "\n  }\n"], ["\n  & {\n    box-shadow: ", ";\n\n    ", "\n\n    ", "\n  }\n"])), BoxShadows.L, paperDimensions, function (props) {
    var spaces = getSpaces(props);
    var corners = getCorners(props);
    return "\n        max-height: calc(100vh - ".concat(2 * ((spaces === null || spaces === void 0 ? void 0 : spaces.xxl) || 0), "px);\n        border-radius: ").concat((corners === null || corners === void 0 ? void 0 : corners.m) || 0, "px;\n        padding: ").concat((spaces === null || spaces === void 0 ? void 0 : spaces.xxl) || 0, "px;\n      ");
});
function paperDimensions(props) {
    var sdsSize = props.sdsSize;
    var sizeToDimensions = {
        l: {
            minHeight: "600px",
            width: "1200px",
        },
        m: {
            minHeight: "480px",
            width: "900px",
        },
        s: {
            minHeight: "400px",
            width: "600px",
        },
        xs: {
            minHeight: "160px",
            width: "400px",
        },
    };
    var _a = sizeToDimensions[sdsSize], width = _a.width, minHeight = _a.minHeight;
    return "\n    width: ".concat(width, ";\n    min-height: ").concat(minHeight, ";\n    max-width: revert;\n  ");
}
var templateObject_1$n;

/**
 * @see https://v4.mui.com/components/paper/
 */
var DialogPaper = forwardRef(function DialogPaper(props, ref) {
    return (React__default.createElement(DialogContext.Consumer, null, function (_a) {
        var sdsSize = _a.sdsSize;
        return React__default.createElement(StyledPaper, __assign({ sdsSize: sdsSize, ref: ref }, props));
    }));
});

/**
 * @see https://v4.mui.com/components/dialogs/
 */
var Dialog = forwardRef(function Dialog(props, ref) {
    var _a = props.sdsSize, sdsSize = _a === void 0 ? "m" : _a, _b = props.PaperComponent, PaperComponent = _b === void 0 ? DialogPaper : _b, rest = __rest(props, ["sdsSize", "PaperComponent"]);
    var contextValue = useMemo(function () { return ({ sdsSize: sdsSize }); }, [sdsSize]);
    return (React__default.createElement(DialogContext.Provider, { value: contextValue },
        React__default.createElement(Dialog$1, __assign({ ref: ref, PaperComponent: PaperComponent }, rest))));
});

// (thuang): Please keep this in sync with the props used in `DialogActionsExtraProps`
var doNotForwardProps$5 = ["buttonPosition"];
var StyledDialogActions = styled(DialogActions$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$5.includes(prop); },
})(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  padding: 0;\n\n  ", "\n"], ["\n  padding: 0;\n\n  ", "\n"])), function (props) {
    var spaces = getSpaces(props);
    var _a = props.buttonPosition, buttonPosition = _a === void 0 ? "right" : _a;
    return "\n      justify-content: ".concat(buttonPosition === "right" ? "flex-end" : "flex-start", ";;\n\n      margin-top: ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.xxl, "px;\n\n      &.MuiDialogActions-spacing > :not(:first-of-type) {\n        margin-left: ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.m, "px;\n      }\n  ");
});
var templateObject_1$m;

/**
 * @see https://v4.mui.com/components/dialogs/
 */
var DialogActions = forwardRef(function DialogActions(props, ref) {
    return React__default.createElement(StyledDialogActions, __assign({ ref: ref }, props));
});

var StyledDialogContent = styled(DialogContent)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$l;

var index = forwardRef(
/**
 * @see https://v4.mui.com/components/dialogs/
 */
function DialogContent(props, ref) {
    return React__default.createElement(StyledDialogContent, __assign({ ref: ref }, props));
});

var StyledIconButton = styled(IconButton)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n\n  ", "\n"], ["\n  position: absolute;\n\n  ", "\n"])), function (props) {
    var spaces = getSpaces(props);
    return "\n      top: ".concat((spaces === null || spaces === void 0 ? void 0 : spaces.xl) || 0, "px;\n      right: ").concat((spaces === null || spaces === void 0 ? void 0 : spaces.xl) || 0, "px;\n    ");
});
var templateObject_1$k;

var SDS_SIZE_TO_COMPONENT_SIZE = {
    l: "large",
    m: "large",
    s: "medium",
    xs: "small",
};
var SDS_SIZE_TO_ICON_SIZE = {
    l: "xl",
    m: "xl",
    s: "l",
    xs: "s",
};
var CloseButton = forwardRef(function CloseButton(props, ref) {
    return (React__default.createElement(DialogContext.Consumer, null, function (_a) {
        var sdsSize = _a.sdsSize;
        var size = SDS_SIZE_TO_COMPONENT_SIZE[sdsSize];
        var iconSize = SDS_SIZE_TO_ICON_SIZE[sdsSize];
        return (React__default.createElement(StyledIconButton, __assign({ ref: ref, sdsType: "tertiary", sdsSize: size }, props),
            React__default.createElement(Icon, { sdsIcon: "xMark", sdsSize: iconSize, sdsType: "iconButton" })));
    }));
});

var StyledDialogTitle = styled(DialogTitle$1)(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  padding: 0;\n  ", "\n"], ["\n  padding: 0;\n  ", "\n"])), function (props) {
    var spaces = getSpaces(props);
    return "\n      margin-bottom: ".concat((spaces === null || spaces === void 0 ? void 0 : spaces.xl) || 0, "px;\n    ");
});
var Title = styled(Typography)(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  ", "\n\n  color: black;\n"], ["\n  ", "\n\n  color: black;\n"])), fontHeaderXl);
var Subtitle$1 = styled(Typography)(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), fontBodyXs$4, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n    ");
});
var templateObject_1$j, templateObject_2$b, templateObject_3$8;

/**
 * @see https://v4.mui.com/components/dialogs/
 */
var DialogTitle = forwardRef(function DialogTitle(props, ref) {
    var children = props.children, title = props.title, subtitle = props.subtitle, onClose = props.onClose, rest = __rest(props, ["children", "title", "subtitle", "onClose"]);
    return (React__default.createElement(StyledDialogTitle, __assign({ ref: ref }, rest), children || (React__default.createElement(React__default.Fragment, null,
        onClose && React__default.createElement(CloseButton, { onClick: onClose }),
        React__default.createElement(Title, null, title),
        React__default.createElement(Subtitle$1, null, subtitle)))));
});

styled("div")(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  width: 150px;\n"], ["\n  width: 150px;\n"])));
var StyledPopper = styled(Popper$1)(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  ", "\n\n  .MuiAutocomplete-popperDisablePortal {\n    position: relative;\n    width: 100% !important;\n  }\n\n  ", "\n"], ["\n  ", "\n\n  .MuiAutocomplete-popperDisablePortal {\n    position: relative;\n    width: 100% !important;\n  }\n\n  ", "\n"])), fontHeaderXs, function (props) {
    var colors = getColors(props);
    var corners = getCorners(props);
    var shadows = getShadows(props);
    var spacings = getSpaces(props);
    return "\n      background-color: white;\n      border: 1px solid ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n      border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n      box-shadow: ").concat(shadows === null || shadows === void 0 ? void 0 : shadows.m, ";\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n      min-width: 244px;\n      z-index: 1400; // allows the dropdown to be used in modals\n    ");
});
var StyledButton = styled(Button)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var spacings = getSpaces(props);
    return "\n      margin-top: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      margin-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n\n      &:first-of-type {\n        margin-left: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      }\n\n      &:last-child {\n        margin-left: 0;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n      }\n    ");
});
var templateObject_1$i, templateObject_2$a, templateObject_3$7;

// eslint-disable-next-line sonarjs/cognitive-complexity
function Dropdown(_a) {
    var options = _a.options, _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.multiple, multiple = _c === void 0 ? false : _c, _d = _a.search, search = _d === void 0 ? false : _d, _e = _a.buttonPosition, buttonPosition = _e === void 0 ? "right" : _e, _f = _a.buttons, buttons = _f === void 0 ? false : _f, 
    // By default, most dropdowns will close when the user clicks outside the dropdown.
    // The exception is the multiple select variant with Apply/Cancel buttons,
    // which by default will not close on blur. If closeOnBlur is enabled, clicking out
    // is equivalent to clicking the Cancel button, closing the dropdown and losing
    // unapplied changes.
    _g = _a.closeOnBlur, 
    // By default, most dropdowns will close when the user clicks outside the dropdown.
    // The exception is the multiple select variant with Apply/Cancel buttons,
    // which by default will not close on blur. If closeOnBlur is enabled, clicking out
    // is equivalent to clicking the Cancel button, closing the dropdown and losing
    // unapplied changes.
    closeOnBlur = _g === void 0 ? !buttons : _g, onChange = _a.onChange, _h = _a.MenuSelectProps, MenuSelectProps = _h === void 0 ? {} : _h, _j = _a.InputDropdownProps, InputDropdownProps = _j === void 0 ? { sdsStyle: "minimal" } : _j, propValue = _a.value, _k = _a.PopperComponent, PopperComponent = _k === void 0 ? StyledPopper : _k, _l = _a.InputDropdownComponent, InputDropdownComponent = _l === void 0 ? InputDropdown : _l, rest = __rest(_a, ["options", "label", "multiple", "search", "buttonPosition", "buttons", "closeOnBlur", "onChange", "MenuSelectProps", "InputDropdownProps", "value", "PopperComponent", "InputDropdownComponent"]);
    if (buttons && !multiple) {
        // eslint-disable-next-line no-console
        console.warn("Warning: buttons are only supported for multiple select dropdowns.");
    }
    var isControlled = propValue !== undefined;
    var _m = useState(null), anchorEl = _m[0], setAnchorEl = _m[1];
    var _o = useState(getInitialValue()), value = _o[0], setValue = _o[1];
    var _p = useState([]), pendingValue = _p[0], setPendingValue = _p[1];
    useEffect(function () {
        onChange(value);
    }, [value]);
    useEffect(function () {
        if (isControlled) {
            setValue(propValue);
        }
    }, [propValue]);
    var open = Boolean(anchorEl);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(InputDropdownComponent, __assign({ label: label, onClick: handleClick, sdsStage: open ? "userInput" : "default" }, InputDropdownProps, rest)),
        React__default.createElement(PopperComponent, { open: open, modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 8],
                    },
                },
            ], anchorEl: anchorEl, placement: "bottom-start" },
            React__default.createElement(DropdownMenu, __assign({ open: true, search: search, onClose: handleClose, multiple: multiple, value: (multiple ? pendingValue : value), onChange: handleChange, disableCloseOnSelect: multiple, options: options }, MenuSelectProps)),
            buttons && (React__default.createElement("div", null, buttonPosition === "left" ? (React__default.createElement("div", null,
                React__default.createElement(StyledButton, { onClick: handleClose, sdsStyle: "square", sdsType: "primary" }, "Apply"),
                React__default.createElement(StyledButton, { onClick: handleCancel, sdsStyle: "square", sdsType: "secondary" }, "Cancel"))) : (React__default.createElement("div", null,
                React__default.createElement(StyledButton, { onClick: handleCancel, sdsStyle: "square", sdsType: "secondary" }, "Cancel"),
                React__default.createElement(StyledButton, { onClick: handleClose, sdsStyle: "square", sdsType: "primary" }, "Apply"))))))));
    function handleClick(event) {
        if (multiple) {
            setPendingValue(value);
        }
        setAnchorEl(event.currentTarget);
    }
    function handleClose(_, reason) {
        // (thuang): We don't want to close the menu when the input is clicked
        if (reason === "toggleInput") {
            return;
        }
        if (buttons && reason === "blur") {
            if (closeOnBlur) {
                handleCancel();
            }
            return;
        }
        if (multiple) {
            setValue(pendingValue);
        }
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    }
    function handleChange(_, newValue) {
        if (multiple) {
            return setPendingValue(newValue);
        }
        setValue(newValue);
    }
    function handleCancel() {
        setPendingValue(null);
        if (anchorEl) {
            anchorEl.focus();
        }
        setAnchorEl(null);
    }
    function getInitialValue() {
        if (isControlled) {
            return propValue;
        }
        return multiple
            ? []
            : null;
    }
}

var inputSlider = function (props) {
    var corners = getCorners(props);
    var colors = getColors(props);
    return "\n  position: relative;\n\n  .MuiSlider-rail,\n  .MuiSlider-track {\n    border-radius: 2px;\n  }\n\n  .MuiSlider-rail {\n    background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[200], ";\n  }\n  \n  .MuiSlider-track {\n    background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n  }\n\n  .MuiSlider-thumb {\n    height: 14px;\n    width: 14px;\n    background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n\n    &.Mui-focusVisible, &:hover, &:focus, &:active {\n      box-shadow: none;\n    }\n  }\n\n  .MuiSlider-thumb::before {\n    display: none;\n  }\n\n  .MuiSlider-thumb::after {\n    background-color: white !important;\n    height: 6px !important;\n    width: 6px !important;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .MuiSlider-valueLabel {\n    padding: 2px 4px;\n    color: black;\n    background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[200], ";\n    border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n    left: unset; \n    top: -3px;\n\n    &::before {\n      display: none;\n    }\n\n    & * {\n      background: transparent;\n      color: black;\n      transform: none;\n      width: unset;\n      height: unset;\n    }\n  }\n\n  .MuiSlider-mark {\n    background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[400], ";\n    opacity: 1;\n  }\n\n  .MuiSlider-mark.MuiSlider-markActive {\n    background-color: white;\n  }\n\n  .MuiSlider-markLabel {\n    color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], "\n  }\n\n  .MuiSlider-markLabelActive {\n    color: black;\n  }\n  ");
};
var horizontal = function () {
    return "\n    .MuiSlider-rail,\n    .MuiSlider-track {\n      border: none;\n      height: 4px;\n    \n      //to cover the last mark 4px padding is needed for rail and track\n      padding-right: 4px;\n\n      // to cover the first mark -2px padding left is needed for rail and track\n      margin-left: -2px;\n    }\n\n    .MuiSlider-markLabel {\n      top: 26px;\n    }\n\n    .Mui-disabled .MuiSlider-track {\n      border: none;\n    }\n  ";
};
var vertical = function () {
    return "  \n    .MuiSlider-rail,\n    .MuiSlider-track {\n      border: none;\n      width: 4px;\n\n      //to cover the last mark -3px margin-top is needed for rail and track \n      margin-top: -2px;\n\n      //to cover the first mark 3px padding-bottom is needed for rail and track\n      padding-bottom: 4px;\n    }\n\n    .MuiSlider-markLabel {\n      left: 26px;\n    }\n  ";
};
var disabledSlider = function (props) {
    var colors = getColors(props);
    return "\n    .MuiSlider-track {\n      background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n    }\n\n    .MuiSlider-thumb.Mui-disabled {\n      background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n    }\n\n    .MuiSlider-valueLabel {\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n      \n      & * {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      }\n    }\n\n    .MuiSlider-markLabel {\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], "\n    }\n\n    .MuiSlider-mark {\n      background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n    }\n  ");
};
var StyledSlider = styled(Slider)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), fontBodyXxs$1, function (props) {
    var orientation = props.orientation, disabled = props.disabled;
    return "\n      ".concat(inputSlider(props), "\n      ").concat(orientation === "vertical" ? vertical() : horizontal(), "\n      ").concat(disabled ? disabledSlider(props) : "", "\n    ");
});
var templateObject_1$h;

/**
 * @see https://v4.mui.com/components/slider/
 */
var InputSlider = forwardRef(function (props, ref) {
    return React__default.createElement(StyledSlider, __assign({ ref: ref }, props));
});

var sdsPropNames$2 = ["sdsStyle", "sdsStage", "sdsType", "intent", "hideLabel"];
var error = function (props) {
    var borders = getBorders(props);
    return css(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n    .MuiOutlinedInput-notchedOutline {\n      border: ", ";\n    }\n  "], ["\n    .MuiOutlinedInput-notchedOutline {\n      border: ", ";\n    }\n  "])), borders === null || borders === void 0 ? void 0 : borders.error[400]);
};
var warning = function (props) {
    var borders = getBorders(props);
    return css(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n    .MuiOutlinedInput-notchedOutline {\n      border: ", ";\n    }\n  "], ["\n    .MuiOutlinedInput-notchedOutline {\n      border: ", ";\n    }\n  "])), borders === null || borders === void 0 ? void 0 : borders.warning[400]);
};
var disabledStyled = function (props) {
    var borders = getBorders(props);
    return css(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n    .Mui-disabled {\n      .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n      &:hover .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n    }\n  "], ["\n    .Mui-disabled {\n      .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n      &:hover .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n    }\n  "])), borders === null || borders === void 0 ? void 0 : borders.gray[300], borders === null || borders === void 0 ? void 0 : borders.gray[300]);
};
var textArea = function (props) {
    var spacings = getSpaces(props);
    return css(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n    .MuiInputBase-multiline {\n      padding: ", "px;\n      > .MuiInputBase-inputMultiline {\n        padding: ", "px ", "px ", "px;\n        resize: both;\n      }\n    }\n  "], ["\n    .MuiInputBase-multiline {\n      padding: ", "px;\n      > .MuiInputBase-inputMultiline {\n        padding: ", "px ", "px ", "px;\n        resize: both;\n      }\n    }\n  "])), spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.xxs, spacings === null || spacings === void 0 ? void 0 : spacings.m, spacings === null || spacings === void 0 ? void 0 : spacings.m);
};
var StyledLabel = styled("label")(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  display: block;\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  ", "\n\n  ", "\n"])), fontBodyS$2, function (props) {
    var typography = getTypography(props);
    var spacings = getSpaces(props);
    return "\n      font-family: ".concat(typography === null || typography === void 0 ? void 0 : typography.fontFamily, ";\n      margin-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px;\n    ");
});
var StyledInputBase = styled(TextField, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames$2.includes(prop.toString());
    },
})(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var intent = props.intent, sdsType = props.sdsType, disabled = props.disabled;
    var spacings = getSpaces(props);
    var borders = getBorders(props);
    var corners = getCorners(props);
    return css(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n      margin-bottom: ", "px;\n      margin-right: ", "px;\n      min-width: 160px;\n      display: block;\n\n      .MuiInputBase-inputSizeSmall {\n        padding: ", "px ", "px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n\n        .MuiOutlinedInput-notchedOutline {\n          border-radius: ", "px;\n          border: ", ";\n        }\n      }\n\n      .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n\n      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n\n      ", "\n      ", "\n      ", "\n      ", "\n    "], ["\n      margin-bottom: ", "px;\n      margin-right: ", "px;\n      min-width: 160px;\n      display: block;\n\n      .MuiInputBase-inputSizeSmall {\n        padding: ", "px ", "px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n\n        .MuiOutlinedInput-notchedOutline {\n          border-radius: ", "px;\n          border: ", ";\n        }\n      }\n\n      .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n\n      .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {\n        border: ", ";\n      }\n\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), spacings === null || spacings === void 0 ? void 0 : spacings.l, spacings === null || spacings === void 0 ? void 0 : spacings.m, spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.l, corners === null || corners === void 0 ? void 0 : corners.m, borders === null || borders === void 0 ? void 0 : borders.gray[400], borders === null || borders === void 0 ? void 0 : borders.gray[500], borders === null || borders === void 0 ? void 0 : borders.primary[400], sdsType === "textArea" && textArea(props), intent === "error" && error(props), intent === "warning" && warning(props), disabled && disabledStyled(props));
});
var templateObject_1$g, templateObject_2$9, templateObject_3$6, templateObject_4$5, templateObject_5$3, templateObject_6$2, templateObject_7$1;

/**
 * @see https://v4.mui.com/components/text-fields/
 */
var InputText = forwardRef(function InputText(props, ref) {
    var id = props.id, _a = props.intent, intent = _a === void 0 ? "default" : _a, label = props.label, placeholder = props.placeholder, sdsType = props.sdsType, hideLabel = props.hideLabel, rest = __rest(props, ["id", "intent", "label", "placeholder", "sdsType", "hideLabel"]);
    var _b = useState(false), hasValue = _b[0], setHasValue = _b[1];
    var handleChange = function (event) {
        if (event.target.value) {
            setHasValue(true);
        }
        else {
            setHasValue(false);
        }
    };
    var inputProps = {
        "aria-label": "".concat(label),
    };
    if (!id || !label) {
        // eslint-disable-next-line no-console
        console.error("Error: czifui component InputText requires id and label props for accessibility.");
        return React__default.createElement(React__default.Fragment, null);
    }
    return (React__default.createElement(React__default.Fragment, null,
        !hideLabel && React__default.createElement(StyledLabel, { htmlFor: id }, label),
        React__default.createElement(StyledInputBase, __assign({ ref: ref, inputProps: inputProps, type: "text", multiline: sdsType === "textArea", minRows: sdsType === "textArea" ? 4 : 2, id: id, intent: intent, variant: "outlined", size: "small", placeholder: placeholder, sdsStage: hasValue ? "userInput" : "default", sdsType: sdsType, onChange: handleChange }, rest))));
});

var sdsPropNames$1 = ["sdsStyle"];
var defaultStyle = function (props) {
    var _a, _b;
    var theme = props.theme;
    return css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      color: ", ";\n    }\n  "])), (_a = theme === null || theme === void 0 ? void 0 : theme.app) === null || _a === void 0 ? void 0 : _a.colors.primary[400], (_b = theme === null || theme === void 0 ? void 0 : theme.app) === null || _b === void 0 ? void 0 : _b.colors.primary[600]);
};
var dashedStyle = function (props) {
    var border = getBorders(props);
    return css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    color: inherit;\n    border-bottom: ", ";\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      border-bottom: ", ";\n    }\n  "], ["\n    color: inherit;\n    border-bottom: ", ";\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      border-bottom: ", ";\n    }\n  "])), border === null || border === void 0 ? void 0 : border.link.dashed, border === null || border === void 0 ? void 0 : border.link.solid);
};
var StyledLink = styled(Link$1, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames$1.includes(prop.toString());
    },
})(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var sdsStyle = props.sdsStyle;
    return css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n    "])), sdsStyle === "default" && defaultStyle(props), sdsStyle === "dashed" && dashedStyle(props));
});
var templateObject_1$f, templateObject_2$8, templateObject_3$5, templateObject_4$4;

/**
 * @see https://v4.mui.com/components/links/
 */
var Link = forwardRef(function (props, ref) {
    var sdsStyle = props.sdsStyle;
    var underline;
    if (sdsStyle === "default") {
        underline = "none";
    }
    return React__default.createElement(StyledLink, __assign({}, props, { underline: underline, ref: ref }));
});

// (thuang): Please keep this in sync with the props used in `ListExtraProps`
var doNotForwardProps$4 = ["marginBotton", "ordered"];
var StyledList = styled(List$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$4.includes(prop); },
})(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  .MuiListSubheader-root {\n    ", "\n  }\n\n  ", "\n"], ["\n  .MuiListSubheader-root {\n    ", "\n  }\n\n  ", "\n"])), propsToMarginBottom$1, function (props) {
    if (!props.ordered)
        return "";
    return "\n      counter-reset: section;\n    ";
});
function propsToMarginBottom$1(props) {
    var spacings = getSpaces(props);
    var propsToMarginBottomMap = {
        l: spacings === null || spacings === void 0 ? void 0 : spacings.l,
        m: spacings === null || spacings === void 0 ? void 0 : spacings.l,
        s: spacings === null || spacings === void 0 ? void 0 : spacings.m,
        xs: spacings === null || spacings === void 0 ? void 0 : spacings.m,
        xxs: spacings === null || spacings === void 0 ? void 0 : spacings.m,
        xxxs: spacings === null || spacings === void 0 ? void 0 : spacings.s,
    };
    var marginBottom = props.marginBottom;
    return "\n    margin-bottom: ".concat(propsToMarginBottomMap[marginBottom || "s"], "px;\n  ");
}
var templateObject_1$e;

/**
 * @see https://v4.mui.com/components/lists/
 */
var List = function (props) {
    var ordered = props.ordered;
    return (React__default.createElement(StyledList, __assign({ component: ordered ? "ol" : "ul", disablePadding: true }, props)));
};

var fontBodyL = fontBody("l");
var fontBodyM = fontBody("m");
var fontBodyS$1 = fontBody("s");
var fontBodyXs$1 = fontBody("xs");
var fontBodyXxs = fontBody("xxs");
var fontBodyXxxs = fontBody("xxxs");
// (thuang): Please keep this in sync with the props used in `ListItemExtraProps`
var doNotForwardProps$3 = ["marginBottom", "fontSize", "ordered"];
var StyledListItem = styled(ListItem$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$3.includes(prop); },
})(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  &.MuiListItem-root {\n    ", "\n    ", "\n\n    padding: 0;\n\n    ", "\n\n    &:before {\n      display: inline-block;\n      font-weight: 600;\n\n      ", "\n    }\n  }\n"], ["\n  &.MuiListItem-root {\n    ", "\n    ", "\n\n    padding: 0;\n\n    ", "\n\n    &:before {\n      display: inline-block;\n      font-weight: 600;\n\n      ", "\n    }\n  }\n"])), propsToMarginBottom, propsToFontBody, function (props) {
    var ordered = props.ordered;
    var typography = getTypography(props);
    return "\n        align-items: flex-start;\n        font-family: ".concat(typography === null || typography === void 0 ? void 0 : typography.fontFamily, ";\n        ").concat(ordered ? "counter-increment: section;" : "", "\n      ");
}, function (props) {
    var spacings = getSpaces(props);
    var ordered = props.ordered;
    return "\n          content: ".concat(ordered ? "counters(section, \".\")\".\"" : "\"\u2022\"", ";\n          margin-right: ").concat(ordered ? spacings === null || spacings === void 0 ? void 0 : spacings.xs : spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n        ");
});
function propsToFontBody(props) {
    var propsToFontBodyMap = {
        l: fontBodyL,
        m: fontBodyM,
        s: fontBodyS$1,
        xs: fontBodyXs$1,
        xxs: fontBodyXxs,
        xxxs: fontBodyXxxs,
    };
    var fontSize = props.fontSize;
    return propsToFontBodyMap[fontSize || "s"];
}
function propsToMarginBottom(props) {
    var spacings = getSpaces(props);
    var propsToMarginBottomMap = {
        s: spacings === null || spacings === void 0 ? void 0 : spacings.s,
        xs: spacings === null || spacings === void 0 ? void 0 : spacings.xs,
        xxs: spacings === null || spacings === void 0 ? void 0 : spacings.xxs,
    };
    var marginBottom = props.marginBottom;
    return "\n    margin-bottom: ".concat(propsToMarginBottomMap[marginBottom || "xs"], "px;\n  ");
}
var ListItemLabel = styled("span")(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  margin-right: 5px;\n\n  ", "\n"], ["\n  margin-right: 5px;\n\n  ", "\n"])), function (props) {
    var fontWeights = getFontWeights(props);
    return "\n      font-weight: ".concat(fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold, ";\n    ");
});
var templateObject_1$d, templateObject_2$7;

/**
 * @see https://v4.mui.com/components/lists/
 */
var ListItem = function (props) {
    return React__default.createElement(StyledListItem, __assign({ disableGutters: true }, props));
};

var fontHeaderM = fontHeader("m");
var StyledListSubheader = styled(ListSubheader$1)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  &.MuiListSubheader-root {\n    ", "\n\n    line-height: unset;\n    color: unset;\n\n    ", "\n  }\n"], ["\n  &.MuiListSubheader-root {\n    ", "\n\n    line-height: unset;\n    color: unset;\n\n    ", "\n  }\n"])), fontHeaderM, function (props) {
    var spacings = getSpaces(props);
    return "\n        margin-bottom: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      ");
});
var templateObject_1$c;

/**
 * @see https://v4.mui.com/components/lists/
 */
var ListSubheader = function (props) {
    return React__default.createElement(StyledListSubheader, __assign({ disableGutters: true }, props));
};

var fontBodyS = fontBody("s");
var StyledText = styled("span")(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var spacings = getSpaces(props);
    var typography = getTypography(props);
    return "\n      margin: 0 ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n      font-family: ").concat(typography === null || typography === void 0 ? void 0 : typography.fontFamily, ";\n    ");
});
var minimal = function (props) {
    var colors = getColors(props);
    var iconSizes = getIconSizes(props);
    return css(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n    ", "\n\n    color: ", ";\n\n    svg {\n      height: ", "px;\n      width: ", "px;\n\n      path {\n        fill: ", ";\n      }\n    }\n  "], ["\n    ", "\n\n    color: ", ";\n\n    svg {\n      height: ", "px;\n      width: ", "px;\n\n      path {\n        fill: ", ";\n      }\n    }\n  "])), fontBodyS(props), colors === null || colors === void 0 ? void 0 : colors.gray[500], iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.height, iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.s.width, colors === null || colors === void 0 ? void 0 : colors.gray[500]);
};
var tag = function (props) {
    var colors = getColors(props);
    var corners = getCorners(props);
    return css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n    ", "\n\n    background-color: ", ";\n    border-radius: ", "px;\n    color: ", ";\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  "], ["\n    ", "\n\n    background-color: ", ";\n    border-radius: ", "px;\n    color: ", ";\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  "])), fontCapsXxxxs(props), colors === null || colors === void 0 ? void 0 : colors.info[200], corners === null || corners === void 0 ? void 0 : corners.l, colors === null || colors === void 0 ? void 0 : colors.info[600], colors === null || colors === void 0 ? void 0 : colors.info[400]);
};
var doNotForwardProps$2 = ["sdsStyle"];
var StyledLoadingIndicator = styled("div", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$2.includes(prop); },
})(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var sdsStyle = props.sdsStyle;
    var spacings = getSpaces(props);
    var style = css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n      display: inline-flex;\n      align-items: center;\n      padding: ", "px;\n    "], ["\n      display: inline-flex;\n      align-items: center;\n      padding: ", "px;\n    "])), spacings === null || spacings === void 0 ? void 0 : spacings.xxs);
    return css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n    "], ["\n      ", "\n      ", "\n      ", "\n    "])), style, sdsStyle === "minimal" && minimal(props), sdsStyle === "tag" && tag(props));
});
var templateObject_1$b, templateObject_2$6, templateObject_3$4, templateObject_4$3, templateObject_5$2, templateObject_6$1;

var LoadingIndicator = function (_a) {
    var sdsStyle = _a.sdsStyle;
    return (React__default.createElement(StyledLoadingIndicator, { sdsStyle: sdsStyle },
        React__default.createElement(Icon, { sdsIcon: "loading", sdsSize: "l", sdsType: "static" }),
        React__default.createElement(StyledText, null, "Loading")));
};

var StyledMenu = styled(Menu$1)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  & {\n    .MuiMenu-paper {\n      ", "\n    }\n\n    .MuiList-padding {\n      padding: 0;\n    }\n  }\n"], ["\n  & {\n    .MuiMenu-paper {\n      ", "\n    }\n\n    .MuiList-padding {\n      padding: 0;\n    }\n  }\n"])), function (props) {
    var spacings = getSpaces(props);
    return "\n          padding: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n        ");
});
var templateObject_1$a;

var ANCHOR_ORIGIN = {
    horizontal: "center",
    vertical: "bottom",
};
var TRANSFORM_ORIGIN = {
    horizontal: "center",
    vertical: "top",
};
/**
 * @see https://v4.mui.com/components/menus/
 */
var Menu = function (props) {
    return (React__default.createElement(StyledMenu, __assign({ anchorOrigin: ANCHOR_ORIGIN, transformOrigin: TRANSFORM_ORIGIN }, props)));
};

var StyledMenuItem = styled(MenuItem)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var doNotForwardProps$1 = ["search", "InputBaseProps", "keepSearchOnSelect"];
// (thuang): Casting the type to `Autocomplete`
//  per https://github.com/mui-org/material-ui/issues/21727#issuecomment-880263271
var StyledAutocomplete = styled(Autocomplete$1, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$1.includes(prop); },
})(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n"], ["\n  ", "\n  width: 100%;\n"])), function (_a) {
    var search = _a.search;
    return !search && "height: 0;";
});
var InputBaseWrapper = styled("div", {
    shouldForwardProp: function (prop) { return !doNotForwardProps$1.includes(prop); },
})(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var search = props.search;
    if (!search) {
        // (thuang): We cannot use `display: none;` here, since
        // the component needs to be in the DOM to handle backdrop
        // click to close the menu
        return "\n        border: 0;\n        padding: 0;\n\n        white-space: nowrap;\n\n        clip-path: inset(100%);\n        clip: rect(0 0 0 0);\n        overflow: hidden;\n        margin: 0;\n      ";
    }
    var spacings = getSpaces(props);
    return "\n      margin: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.s, "px;\n    ");
});
var StyledMenuInputSearch = styled(InputSearch, {
    shouldForwardProp: function (prop) { return !doNotForwardProps$1.includes(prop); },
})(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  && {\n    margin: 0;\n\n    .", " {\n      width: 100%;\n      padding: 0;\n      padding-right: 14px !important;\n    }\n\n    /* (thuang): Works with attribute inputMode: \"none\" to hide mobile keyboard */\n    caret-color: ", ";\n  }\n"], ["\n  && {\n    margin: 0;\n\n    .", " {\n      width: 100%;\n      padding: 0;\n      padding-right: 14px !important;\n    }\n\n    /* (thuang): Works with attribute inputMode: \"none\" to hide mobile keyboard */\n    caret-color: ", ";\n  }\n"])), inputBaseClasses.root, function (_a) {
    var search = _a.search;
    return (search ? "auto" : "transparent");
});
var templateObject_1$9, templateObject_2$5, templateObject_3$3, templateObject_4$2;

var hasWarned = false;
/**
 * @see https://v4.mui.com/components/autocomplete/
 */
function MenuSelect(props) {
    var _a = props.keepSearchOnSelect, keepSearchOnSelect = _a === void 0 ? true : _a, _b = props.multiple, multiple = _b === void 0 ? false : _b, _c = props.getOptionLabel, getOptionLabel = _c === void 0 ? defaultGetOptionLabel : _c, _d = props.renderTags, renderTags = _d === void 0 ? defaultRenderTags : _d, _e = props.renderOption, renderOption = _e === void 0 ? defaultRenderOption : _e, _f = props.disableCloseOnSelect, disableCloseOnSelect = _f === void 0 ? multiple : _f, _g = props.noOptionsText, noOptionsText = _g === void 0 ? "No options" : _g, _h = props.search, search = _h === void 0 ? false : _h, _j = props.InputBaseProps, InputBaseProps = _j === void 0 ? {} : _j;
    var _k = useState(""), inputValue = _k[0], setInputValue = _k[1];
    if (!hasWarned) {
        // eslint-disable-next-line no-console
        console.warn("Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />");
        hasWarned = true;
    }
    return (React__default.createElement(StyledAutocomplete, __assign({ clearOnBlur: false, open: true, disableCloseOnSelect: disableCloseOnSelect, disablePortal: true, renderTags: renderTags, noOptionsText: noOptionsText, renderOption: renderOption, getOptionLabel: getOptionLabel, inputValue: inputValue, onInputChange: function (event, value, reason) {
            if (event && event.type === "blur") {
                setInputValue("");
            }
            else if (reason !== "reset" ||
                (reason === "reset" && !keepSearchOnSelect)) {
                setInputValue(value);
            }
        }, renderInput: function (params) { return (React__default.createElement(InputBaseWrapper, { search: search },
            React__default.createElement(StyledMenuInputSearch, __assign({ id: "location-search", label: "Search for a location", placeholder: "Search", ref: params.InputProps.ref, search: search, autoFocus: true, InputProps: __assign(__assign({ 
                    /**
                     * (thuang): Works with css caret-color: "transparent" to hide
                     * mobile keyboard
                     */
                    inputMode: search ? "text" : "none" }, params.InputProps.ref), { endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                        React__default.createElement(IconButton, { sdsType: "secondary", size: "large" },
                            React__default.createElement(Icon, { sdsIcon: "search", sdsSize: "s", sdsType: "interactive" })))), inputProps: params.inputProps }) }, InputBaseProps)))); } }, props)));
    function defaultGetOptionLabel(option) {
        if (typeof option === "object" && "name" in option)
            return option.name;
        return option.toString();
    }
    function defaultRenderTags() {
        return null;
    }
    function defaultRenderOption(optionProps, option, _a) {
        var selected = _a.selected;
        return (React__default.createElement(StyledMenuItem, __assign({}, { component: "li" }, { isMultiSelect: multiple, selected: selected }, optionProps), option.name));
    }
}

var fontBodyXs = fontBody("xs");
var StyledNotification = styled(Alert$2)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), fontBodyXs, function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    var shadows = getShadows(props);
    var _a = props.severity, severity = _a === void 0 ? "success" : _a;
    var borderColor = (colors && colors[severity][400]) || "black";
    var corners = getCorners(props);
    var iconSizes = getIconSizes(props);
    var iconColor = (colors && colors[severity][400]) || "black";
    var notificationColor = (colors && colors[severity][100]) || "white";
    var backgroundColor = colors && colors[severity][100];
    return "\n      background-color: ".concat(backgroundColor, ";\n      width: 360px;\n      margin: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px 0;\n      border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n      color: ").concat(defaultTheme.palette.text.primary, ";\n      padding: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      align-items: flex-start;\n      background-color: ").concat(notificationColor, ";\n\n      &.elevated {\n        border-left: 5px solid;\n        box-shadow: ").concat(shadows === null || shadows === void 0 ? void 0 : shadows.s, ";\n        border-color: ").concat(borderColor, ";\n      }\n\n      .MuiAlert-icon {\n        height: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.height, "px;\n        width: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.l.width, "px;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n        padding: 0;\n        path {\n          fill: ").concat(iconColor, ";\n        }\n      }\n\n      .MuiAlert-message {\n        padding: 0;\n        margin-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n\n        > * {\n          margin: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px 0px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          display: block;\n        }\n      }\n\n      .MuiAlert-action {\n        margin-right: 0;\n        padding: 0;\n        align-items: flex-start;\n        margin-top: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xxs, "px;\n\n        > button {\n            padding: 0;\n          }\n        }\n      }\n    ");
});
var templateObject_1$8;

/**
 * @see https://v4.mui.com/components/alert/
 */
var Notification = function (_a) {
    var autoDismiss = _a.autoDismiss, children = _a.children, dismissed = _a.dismissed, _b = _a.dismissDirection, dismissDirection = _b === void 0 ? "left" : _b, intent = _a.intent, onClose = _a.onClose, buttonOnClick = _a.buttonOnClick, buttonText = _a.buttonText, rest = __rest(_a, ["autoDismiss", "children", "dismissed", "dismissDirection", "intent", "onClose", "buttonOnClick", "buttonText"]);
    var _c = useState(dismissed), hide = _c[0], setHide = _c[1];
    // remove prop used only for stories
    var passedProps = __assign({}, rest);
    delete passedProps.extraContent;
    useEffect(function () {
        setHide(dismissed);
        if (autoDismiss) {
            var timeout = typeof autoDismiss === "boolean" ? 8000 : autoDismiss;
            setTimeout(function () {
                setHide(true);
            }, timeout);
        }
    }, [dismissed, autoDismiss]);
    var handleClose = function (event) {
        setHide(true);
        if (onClose)
            onClose(event);
    };
    var getIcon = function () {
        switch (intent) {
            case "success":
                return React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "checkCircle", sdsType: "static" });
            case "info":
                return React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "infoCircle", sdsType: "static" });
            default:
                return (React__default.createElement(Icon, { sdsSize: "l", sdsIcon: "exclamationMarkCircle", sdsType: "static" }));
        }
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(Slide, { in: !hide, direction: dismissDirection, mountOnEnter: true, unmountOnExit: true, timeout: 250 },
            React__default.createElement(StyledNotification, __assign({ onClose: onClose ? handleClose : undefined, action: onClose ? (React__default.createElement(IconButton, { onClick: handleClose, sdsSize: "small", sdsType: "tertiary", "data-testid": "notificationCloseButton", size: "large" },
                    " ",
                    React__default.createElement(Icon, { sdsIcon: "xMark", sdsSize: "s", sdsType: "iconButton" }),
                    " ")) : null, icon: getIcon(), className: "elevated", severity: intent }, passedProps),
                children,
                buttonOnClick && (React__default.createElement(Button, { sdsStyle: "minimal", sdsType: "secondary", onClick: buttonOnClick }, buttonText))))));
};

var _path$1, _path2$1;

function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgIconRadioChecked(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 16A8 8 0 108 0a8 8 0 000 16z",
    fill: "#fff"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8A8 8 0 110 8a8 8 0 0116 0zm-5 0a3 3 0 11-6 0 3 3 0 016 0z"
  })));
}

var _path, _path2;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgIconRadioUnchecked(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 16A8 8 0 108 0a8 8 0 000 16z",
    fill: "#fff"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z"
  })));
}

var StyledRadioButton = styled(Radio)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var colors = getColors(props);
    var iconSizes = getIconSizes(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[400], ";\n      &:hover {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n        background-color: transparent;\n      }\n      &.Mui-disabled {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      }\n      &.Mui-checked {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n        &:hover {\n          color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[500], ";\n          background-color: transparent;\n        }\n        &.Mui-disabled {\n          color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[300], "\n        }\n      }\n\n      .MuiSvgIcon-root {\n        height: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.input.height, "px;\n        width: ").concat(iconSizes === null || iconSizes === void 0 ? void 0 : iconSizes.input.width, "px;\n      }\n    ");
});
var templateObject_1$7;

/**
 * @see https://v4.mui.com/components/radio-buttons/
 */
var RadioButton = function (props) {
    var newProps;
    var stage = props.stage;
    switch (stage) {
        case "checked":
            newProps = __assign(__assign({}, props), { checked: true, color: "primary" });
            break;
        case "unchecked":
            newProps = __assign(__assign({}, props), { checked: false, color: "default" });
            break;
        default:
            newProps = props;
    }
    return (React__default.createElement(StyledRadioButton, __assign({}, newProps, { checkedIcon: React__default.createElement(SvgIcon, { fillcontrast: "white", component: SvgIconRadioChecked, viewBox: "0 0 16 16" }), icon: React__default.createElement(SvgIcon, { fillcontrast: "white", component: SvgIconRadioUnchecked, viewBox: "0 0 16 16" }) })));
};

var dark = function (props) {
    var spacings = getSpaces(props);
    return css$1(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    ", "\n    background-color: black;\n    color: white;\n    text-align: center;\n    max-width: 250px;\n    padding: ", "px ", "px;\n  "], ["\n    ", "\n    background-color: black;\n    color: white;\n    text-align: center;\n    max-width: 250px;\n    padding: ", "px ", "px;\n  "])), fontHeaderXs(props), spacings === null || spacings === void 0 ? void 0 : spacings.s, spacings === null || spacings === void 0 ? void 0 : spacings.l);
};
var light = function (props) {
    var spacings = getSpaces(props);
    return css$1(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n    ", "\n    background-color: white;\n    color: black;\n    text-align: left;\n    max-width: 250px;\n    padding: ", "px ", "px;\n  "], ["\n    ", "\n    background-color: white;\n    color: black;\n    text-align: left;\n    max-width: 250px;\n    padding: ", "px ", "px;\n  "])), fontBodyXs$4(props), spacings === null || spacings === void 0 ? void 0 : spacings.xs, spacings === null || spacings === void 0 ? void 0 : spacings.l);
};
var wide = function () {
    return css$1(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    max-width: 550px;\n  "], ["\n    max-width: 550px;\n  "])));
};
var tableStyles = function (props) {
    var spacings = getSpaces(props);
    return css$1(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    padding: ", "px;\n  "], ["\n    padding: ", "px;\n  "])), spacings === null || spacings === void 0 ? void 0 : spacings.m);
};
var Subtitle = styled("div")(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), fontHeaderXxs, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray["400"], ";\n    ");
});
var tooltipCss = function (props) {
    var inverted = props.inverted, sdsStyle = props.sdsStyle, width = props.width, followCursor = props.followCursor;
    var borders = getBorders(props);
    var shadows = getShadows(props);
    return css$1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    &.MuiTooltip-tooltip {\n      ", "\n      ", "\n\n      ", "\n\n      border: ", ";\n      box-shadow: ", ";\n    }\n  "], ["\n    &.MuiTooltip-tooltip {\n      ", "\n      ", "\n\n      ", "\n\n      border: ", ";\n      box-shadow: ", ";\n    }\n  "])), sdsStyle === "dark" || inverted ? dark(props) : light(props), width === "wide" && sdsStyle === "light" && wide(), followCursor === true && tableStyles(props), borders === null || borders === void 0 ? void 0 : borders.gray["300"], shadows === null || shadows === void 0 ? void 0 : shadows.m);
};
var arrowCss = function (props) {
    var inverted = props.inverted, sdsStyle = props.sdsStyle, arrowOffset = props.arrowOffset;
    var borders = getBorders(props);
    return css$1(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    &.MuiTooltip-arrow {\n      /* (bethbertozzi): !important is needed to fight inline style */\n      left: ", "px !important;\n      color: ", ";\n      &:before {\n        border: ", ";\n        box-sizing: border-box;\n      }\n    }\n  "], ["\n    &.MuiTooltip-arrow {\n      /* (bethbertozzi): !important is needed to fight inline style */\n      left: ", "px !important;\n      color: ", ";\n      &:before {\n        border: ", ";\n        box-sizing: border-box;\n      }\n    }\n  "])), arrowOffset, inverted || sdsStyle === "dark" ? "black" : "white", inverted || sdsStyle === "dark"
        ? null
        : borders === null || borders === void 0 ? void 0 : borders.gray["300"]);
};
var templateObject_1$6, templateObject_2$4, templateObject_3$2, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7;

/**
 * @see https://v4.mui.com/components/tooltips/
 *
 * @warning If the tooltip wraps a disabled component, please make sure to
 * wrap the children in a `<span>` tag.
 * https://mui.com/components/tooltips/#disabled-elements
 */
var Tooltip = forwardRef(function Tooltip(props, ref) {
    var arrowOffset = props.arrowOffset, classes = props.classes, inverted = props.inverted, _a = props.sdsStyle, sdsStyle = _a === void 0 ? "light" : _a, subtitle = props.subtitle, title = props.title, _b = props.width, width = _b === void 0 ? "default" : _b, rest = __rest(props, ["arrowOffset", "classes", "inverted", "sdsStyle", "subtitle", "title", "width"]);
    var children = rest.children;
    if (inverted) {
        // eslint-disable-next-line no-console
        console.warn("Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead.");
    }
    if (width === "wide" && sdsStyle === "dark") {
        // eslint-disable-next-line no-console
        console.warn("Warning: The 'wide' width is only available for light tooltips.");
    }
    var theme = useTheme();
    var extraProps = {
        /* stylelint-disable property-no-unknown -- false positive */
        arrowOffset: arrowOffset,
        classes: classes,
        inverted: inverted,
        sdsStyle: sdsStyle,
        theme: theme,
        width: width,
        /* stylelint-enable property-no-unknown -- false positive */
    };
    var tooltip = mergeClass$1({
        className: tooltipCss(extraProps),
        key: "tooltip",
        props: props,
    });
    var arrow = mergeClass$1({
        className: arrowCss(extraProps),
        key: "arrow",
        props: props,
    });
    // (mlila) if no content is passed into the tooltip, don't render
    // a tooltip. this matches with the native MUI behavior.
    if (!title && !subtitle)
        return React__default.createElement(React__default.Fragment, null, children);
    var content = (React__default.createElement(React__default.Fragment, null,
        title,
        subtitle && React__default.createElement(Subtitle, null, subtitle)));
    var leaveDelay = inverted || sdsStyle === "dark" ? 0 : 500;
    return (React__default.createElement(Tooltip$1, __assign({ classes: { arrow: arrow, tooltip: tooltip }, leaveDelay: leaveDelay, title: content, ref: ref }, rest)));
});
function mergeClass$1(_a) {
    var props = _a.props, className = _a.className, key = _a.key;
    var classes = props.classes;
    if (!classes)
        return className;
    var propClassName = classes[key];
    return propClassName ? "".concat(propClassName, " ").concat(className) : className;
}

var doNotForwardProps = ["color", "buttonDefinition"];
var StyledSegmentedControl = styled(ToggleButtonGroup, {
    shouldForwardProp: function (prop) { return !doNotForwardProps.includes(prop); },
})(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    var corners = getCorners(props);
    return "\n    height: 26px;\n    \n    .Mui-selected.MuiToggleButton-root {\n        background-color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.primary[400], ";\n        border-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n        \n        &:hover {\n          background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n        }\n    }\n\n    .MuiToggleButton-root {\n      border-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n      line-height: 0px;\n      color: #000;\n      padding: 0;\n\n      &:hover {\n        border-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[300], ";\n        background-color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[100], ";\n      }\n    }\n\n    .MuiSvgIcon-root {\n      padding-right: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      padding-left: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      padding-bottom: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n      padding-top: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.xs, "px;\n      border-radius: ").concat(corners === null || corners === void 0 ? void 0 : corners.m, "px;\n    }\n    ");
});
var templateObject_1$5;

var SegmentedControl = function (props) {
    var _a;
    var buttonDefinition = props.buttonDefinition;
    var leftmost = (_a = buttonDefinition[0]) === null || _a === void 0 ? void 0 : _a.tooltipText;
    var _b = React__default.useState(leftmost), active = _b[0], setActive = _b[1];
    var handleActive = function (event, newActive) {
        if (newActive !== null) {
            setActive(newActive);
        }
    };
    return (React__default.createElement(StyledSegmentedControl, __assign({ color: "primary", size: "small", value: active, exclusive: true, onChange: handleActive }, props),
        buttonDefinition.map(function (button) {
            var iconName = button.iconName, tooltipText = button.tooltipText;
            return (React__default.createElement(ToggleButton, { disableRipple: true, value: tooltipText, key: tooltipText },
                React__default.createElement(Tooltip, { title: tooltipText, sdsStyle: "dark", arrow: true },
                    React__default.createElement("span", null,
                        React__default.createElement(Icon, { sdsIcon: iconName, sdsSize: "s", sdsType: "button" })))));
        }),
        ";"));
};

var TabsContext = createContext({ sdsSize: "large" });

var Wrapper = styled("span")(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) {
    var colors = getColors(props);
    return "\n      &:active {\n        color: black;\n      }\n\n      &:disabled {\n        color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[200], ";\n      }\n    ");
});
var LABEL_DO_NOT_FORWARD_PROPS = ["sdsSize"];
var Label = styled("span", {
    shouldForwardProp: function (prop) {
        return !LABEL_DO_NOT_FORWARD_PROPS.includes(String(prop));
    },
})(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (props) {
    var sdsSize = props.sdsSize;
    var isLarge = sdsSize === "large";
    return isLarge ? fontBodyS$2(props) : fontBodyXs$4(props);
}, function (props) {
    var fontWeights = getFontWeights(props);
    var spaces = getSpaces(props);
    var sdsSize = props.sdsSize;
    var isLarge = sdsSize === "large";
    return "\n      margin-right: ".concat(isLarge ? spaces === null || spaces === void 0 ? void 0 : spaces.l : spaces === null || spaces === void 0 ? void 0 : spaces.m, "px;\n      font-weight: ").concat(fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold, ";\n  ");
});
var COUNT_DO_NOT_FORWARD_PROPS = ["sdsSize"];
var Count = styled("span", {
    shouldForwardProp: function (prop) {
        return !COUNT_DO_NOT_FORWARD_PROPS.includes(String(prop));
    },
})(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (props) {
    var sdsSize = props.sdsSize;
    var isLarge = sdsSize === "large";
    return isLarge ? fontBodyXs$4(props) : fontBodyXxs$1(props);
}, function (props) {
    var colors = getColors(props);
    return "\n      color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n    ");
});
var templateObject_1$4, templateObject_2$3, templateObject_3$1;

var LabelWithCount = forwardRef(function LabelWithCount(props, ref) {
    var _a = useContext(TabsContext).sdsSize, sdsSize = _a === void 0 ? "large" : _a;
    var label = props.label, count = props.count;
    return (React__default.createElement(Wrapper, { ref: ref },
        React__default.createElement(Label, { sdsSize: sdsSize }, label),
        React__default.createElement(Count, { sdsSize: sdsSize }, count)));
});

var TempTabs = function (props) { return React__default.createElement(Tabs$1, __assign({}, props)); };
var TABS_DO_NOT_FORWARD_PROPS = ["underlined", "sdsSize"];
var StyledTabs = styled(TempTabs, {
    shouldForwardProp: function (prop) {
        return !TABS_DO_NOT_FORWARD_PROPS.includes(String(prop));
    },
})(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding-bottom: 0px;\n  min-height: unset;\n  position: relative;\n  z-index: 1;\n  overflow: inherit;\n\n  & .MuiTabs-scroller {\n    overflow: inherit !important;\n  }\n\n  ", "\n"], ["\n  box-sizing: border-box;\n  padding-bottom: 0px;\n  min-height: unset;\n  position: relative;\n  z-index: 1;\n  overflow: inherit;\n\n  & .MuiTabs-scroller {\n    overflow: inherit !important;\n  }\n\n  ", "\n"])), function (props) {
    var underlined = props.underlined, _a = props.sdsSize, sdsSize = _a === void 0 ? "large" : _a;
    var colors = getColors(props);
    var spaces = getSpaces(props);
    var isLarge = sdsSize === "large";
    return "\n      margin-top: ".concat(isLarge ? spaces === null || spaces === void 0 ? void 0 : spaces.l : spaces === null || spaces === void 0 ? void 0 : spaces.m, "px;\n      margin-bottom: ").concat(isLarge ? spaces === null || spaces === void 0 ? void 0 : spaces.xl : spaces === null || spaces === void 0 ? void 0 : spaces.m, "px;\n      border-bottom: ").concat(underlined ? "2px solid ".concat(colors === null || colors === void 0 ? void 0 : colors.gray[200], ";") : "none", ";\n    ");
});
var TAB_DO_NOT_FORWARD_PROPS = ["sdsSize"];
var StyledTab = styled(Tab$1, {
    shouldForwardProp: function (prop) { return !TAB_DO_NOT_FORWARD_PROPS.includes(String(prop)); },
})(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  min-height: unset;\n  padding: 0;\n  min-width: 32px;\n  opacity: 1 !important;\n\n  ", "\n\n  ", "\n"], ["\n  min-height: unset;\n  padding: 0;\n  min-width: 32px;\n  opacity: 1 !important;\n\n  ", "\n\n  ", "\n"])), tabFontMixin, function (props) {
    var colors = getColors(props);
    var spaces = getSpaces(props);
    var fontWeights = getFontWeights(props);
    var sdsSize = props.sdsSize;
    var isLarge = sdsSize === "large";
    return "\n      font-weight: ".concat(fontWeights === null || fontWeights === void 0 ? void 0 : fontWeights.semibold, ";\n      margin: 0 ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.xl, "px ").concat(spaces === null || spaces === void 0 ? void 0 : spaces.xxs, "px 0;\n\n      // (thuang): Large Tab height is 30px, the offset is 4px\n      height: ").concat(isLarge ? 26 : 22, "px;\n\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[500], ";\n\n      &:hover, :focus {\n        color: black;\n      }\n\n      &.Mui-selected {\n        color: black;\n\n        &:hover {\n          color: black;\n        }\n      }\n\n      &:active {\n        color: black;\n      }\n\n      &:disabled {\n        color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray[200], ";\n      }\n    ");
});
function tabFontMixin(props) {
    var sdsSize = props.sdsSize;
    var isLarge = sdsSize === "large";
    return isLarge ? fontBodyS$2(props) : fontBodyXs$4(props);
}
var templateObject_1$3, templateObject_2$2;

var TabIndicator = function (theme) {
    var colors = getColors({ theme: theme });
    return css$1(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    &.MuiTabs-indicator {\n      background-color: ", ";\n      height: 2px;\n      bottom: -2px;\n      z-index: 2;\n    }\n  "], ["\n    &.MuiTabs-indicator {\n      background-color: ", ";\n      height: 2px;\n      bottom: -2px;\n      z-index: 2;\n    }\n  "])), colors === null || colors === void 0 ? void 0 : colors.primary[400]);
};
var Tabs = forwardRef(function Tabs(props, ref) {
    var _a = props.sdsSize, sdsSize = _a === void 0 ? "large" : _a, rest = __rest(props, ["sdsSize"]);
    var theme = useTheme$1();
    var contextValue = React__default.useMemo(function () { return ({ sdsSize: sdsSize }); }, [sdsSize]);
    var indicatorProps = useMemo(function () {
        return { className: TabIndicator(theme) };
    }, [theme]);
    return (React__default.createElement(TabsContext.Provider, { value: contextValue },
        React__default.createElement(StyledTabs, __assign({ TabIndicatorProps: indicatorProps, ref: ref }, rest))));
});
/**
 * @see https://v4.mui.com/components/tabs/
 */
var Tab = forwardRef(function Tab(props, ref) {
    var count = props.count, label = props.label, rest = __rest(props, ["count", "label"]);
    var context = useContext(TabsContext);
    var Label = 
    // (thuang): `count` can be 0, which is a valid count value.
    count === undefined ? (label) : (React__default.createElement(LabelWithCount, { label: label, count: count }));
    return React__default.createElement(StyledTab, __assign({ label: Label, ref: ref }, rest, context));
});
var templateObject_1$2;

var indicatorCSS = function (props) {
    var indicatorColor = props.indicatorColor;
    var spaces = getSpaces(props);
    var corners = getCorners(props);
    return css$1(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    &::before {\n      content: \"\";\n      width: ", "px;\n      height: ", "px;\n      display: block;\n      background-color: ", ";\n      border-radius: ", "px;\n      margin-right: ", "px;\n    }\n  "], ["\n    &::before {\n      content: \"\";\n      width: ", "px;\n      height: ", "px;\n      display: block;\n      background-color: ", ";\n      border-radius: ", "px;\n      margin-right: ", "px;\n    }\n  "])), spaces === null || spaces === void 0 ? void 0 : spaces.m, spaces === null || spaces === void 0 ? void 0 : spaces.m, indicatorColor, corners === null || corners === void 0 ? void 0 : corners.l, spaces === null || spaces === void 0 ? void 0 : spaces.m);
};
var condensedCSS = function (props) {
    var indicator = props.indicator;
    var spaces = getSpaces(props);
    return css$1(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    && {\n      padding-top: ", "px;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      padding-right: ", "px;\n      max-width: 250px;\n      display: flex;\n      align-items: center;\n\n      ", "\n    }\n  "], ["\n    && {\n      padding-top: ", "px;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      padding-right: ", "px;\n      max-width: 250px;\n      display: flex;\n      align-items: center;\n\n      ", "\n    }\n  "])), spaces === null || spaces === void 0 ? void 0 : spaces.xxs, spaces === null || spaces === void 0 ? void 0 : spaces.xxs, spaces === null || spaces === void 0 ? void 0 : spaces.m, spaces === null || spaces === void 0 ? void 0 : spaces.m, indicator === true && indicatorCSS(props));
};
var templateObject_1$1, templateObject_2$1;

/**
 * @see https://v4.mui.com/components/tooltips/
 *
 * @warning If the tooltip wraps a disabled component, please make sure to
 * wrap the children in a `<span>` tag.
 * https://mui.com/components/tooltips/#disabled-elements
 */
var TooltipCondensed = forwardRef(function TooltipCondensed(props, ref) {
    var children = props.children, title = props.title, indicator = props.indicator, indicatorColor = props.indicatorColor;
    var theme = useTheme();
    var extraProps = {
        /* stylelint-disable property-no-unknown -- false positive */
        indicator: indicator,
        indicatorColor: indicatorColor,
        theme: theme,
        /* stylelint-enable property-no-unknown -- false positive */
    };
    var tooltip = mergeClass({
        className: condensedCSS(extraProps),
        key: "tooltip",
        props: props,
    });
    return (React__default.createElement(Tooltip, { followCursor: true, placement: "right-end", enterDelay: 50, leaveDelay: 50, title: title, ref: ref, classes: { tooltip: tooltip } }, children));
});
function mergeClass(_a) {
    var props = _a.props, className = _a.className, key = _a.key;
    var classes = props.classes;
    if (!classes)
        return className;
    var propClassName = classes[key];
    return propClassName ? "".concat(propClassName, " ").concat(className) : className;
}

var sdsPropNames = ["contentAlert", "itemAlign"];
var disabledStyle = function (props) {
    var colors = getColors(props);
    var disabled = props.disabled;
    if (!disabled)
        return "";
    return "\n    color: ".concat(colors === null || colors === void 0 ? void 0 : colors.gray["300"], ";\n  ");
};
var Section = styled("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), disabledStyle, function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    return "\n      &:not(:last-child) {\n        padding-bottom: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n        border-bottom: 1px solid ").concat(colors === null || colors === void 0 ? void 0 : colors.gray["200"], ";\n      }\n\n      &:not(:first-of-type) {\n        padding-top: ").concat(spacings === null || spacings === void 0 ? void 0 : spacings.l, "px;\n      }\n    ");
});
var SectionLabel = styled("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  ", "\n"], ["\n  ", "\n  ", "\n\n  ", "\n"])), fontCapsXxxxs, disabledStyle, function (props) {
    var colors = getColors(props);
    var spacings = getSpaces(props);
    if (!props.label)
        return "";
    return "\n      margin-bottom: ".concat(spacings === null || spacings === void 0 ? void 0 : spacings.m, "px;\n      color: ").concat(colors === null || colors === void 0 ? void 0 : colors.gray["500"], ";\n    ");
});
var RowLabel = styled(TableCell, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames.includes(prop.toString());
    },
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  padding: 0;\n  width: 50%;\n"], ["\n  ", "\n  ", "\n\n  padding: 0;\n  width: 50%;\n"])), fontHeaderXs, disabledStyle);
var RowValue = styled(TableCell, {
    shouldForwardProp: function (prop) {
        return !sdsPropNames.includes(prop.toString());
    },
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n"], ["\n  ", "\n  ", "\n\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n"])), fontBodyXs$4, disabledStyle);
var Alert = styled("div")(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), fontBodyXxs$1);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

/**
 * @see https://v4.mui.com/components/tables/
 */
var TooltipTableContent = function (props) {
    var contentAlert = props.contentAlert, data = props.data, _a = props.itemAlign, itemAlign = _a === void 0 ? "right" : _a, rest = __rest(props, ["contentAlert", "data", "itemAlign"]);
    return (React__default.createElement(TableContainer, __assign({}, rest),
        contentAlert && React__default.createElement(Alert, null, contentAlert), data === null || data === void 0 ? void 0 :
        data.map(function (section) { return (React__default.createElement(Section, { disabled: section.disabled, key: "".concat(section.label) },
            React__default.createElement(SectionLabel, { disabled: section.disabled, label: section.label }, section.label),
            React__default.createElement(Table, { size: "small" },
                React__default.createElement(TableBody, null, section.dataRows.map(function (row) { return (React__default.createElement(TableRow, { key: row.label },
                    React__default.createElement(RowLabel, { disabled: section.disabled, align: "left" }, row.label),
                    React__default.createElement(RowValue, { disabled: section.disabled, align: itemAlign }, row.value))); }))))); })));
};

export { Accordion, Alert$1 as Alert, Banner, Button, ButtonDropdown, Callout, Checkbox, Chip, ComplexFilter, InputDropdown as ComplexFilterInputDropdown, StyledPopper$1 as ComplexFilterPopper, Dialog, DialogActions, index as DialogContent, DialogContext, DialogPaper, DialogTitle, Subtitle$1 as DialogTitleSubtitle, Title as DialogTitleTitle, Dropdown, InputDropdown as DropdownInputDropdown, DropdownMenu, StyledPopper as DropdownPopper, Icon, IconButton, InputDropdown, InputSearch, InputSlider, InputText, Link, List, ListItem, ListItemLabel, ListSubheader, LoadingIndicator, Menu, MenuItem, MenuSelect, Notification, RadioButton, SegmentedControl, Tab, Tabs, Tag, TagFilter, Tooltip, TooltipCondensed, TooltipTableContent as TooltipTable, defaultAppTheme, defaultTheme, fontBody, fontBodyL$1 as fontBodyL, fontBodyM$1 as fontBodyM, fontBodyS$2 as fontBodyS, fontBodyXs$4 as fontBodyXs, fontBodyXxs$1 as fontBodyXxs, fontBodyXxxs$1 as fontBodyXxxs, fontCaps, fontCapsXxs, fontCapsXxxs, fontCapsXxxxs, fontHeader, fontHeaderL, fontHeaderM$1 as fontHeaderM, fontHeaderS, fontHeaderXl, fontHeaderXs, fontHeaderXxl, fontHeaderXxs, fontHeaderXxxs, getBorders, getColors, getCorners, getFontWeights, getIconSizes, getPalette, getShadows, getSpaces, getSpacings, getTypography, makeThemeOptions };
