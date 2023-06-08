---
title: using-czb-ui-sds-and-mui-in-tandem
---

# Using czb-ui, SDS, and Material UI in Tandem

If a new, app-specific component needs to be made or you would not like to
use czb-ui's higher level components, it is still possible to use czb-ui
to import and use the styles.

As long as the `ThemeProvider` was set up (see "Installation"), any Material UI or SDS component will inherit the Biohub style.

Using the styles are strongly recommended as it allows for consistency (colors, spacing, etc.) with other applications.

## Which components from each UI library should I use?

It is recommended to start seeing if any of the components in czb-ui will
work for you. If not, see if SDS has the component. Lastly, use the normal
Material UI library for low level components. The SDS and Material UI
components will inherit the czb-ui Biohub style as long as you set up the
ThemeProvider correctly.

For example, if I wanted a button component, it is best to use SDS' button
component. For a container component, it is best to use MUI's container
component.
