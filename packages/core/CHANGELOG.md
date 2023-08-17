# @czb-ui/core

## 1.0.0

### Major Changes

- b066109: Rebrand 2023

### Minor Changes

- a9db0ac: Add nobackground banner type
- d384253: Change settings when hamburger menu shows, to avoid squished/two columns of text in NavBar
- 066d4af: Add external link feature to nav bar (https://github.com/czbiohub/czb-ui/pull/30)
- ce5c610: Add small footer variant
- af3d8aa: Change settings when hamburger menu shows, to avoid squished/two columns of text in NavBar
- 8827c68: Make navbar height adjustable
- 22a3acb: If there's more than 7 pages, switch to mobile menu at md breakpoint instead of sm breakpoint
- 39fd98a: Use Barlow font in buttons, **breaking change**: Please update the font imports:

  ```js
  import "@fontsource/hanken-grotesk/400.css";
  import "@fontsource/hanken-grotesk/700.css";
  import "@fontsource/stix-two-text/600.css";
  import "@fontsource/lato/700.css";
  import "@fontsource/barlow/600.css";
  import "@fontsource/barlow/400.css";
  ```

- 8827c68: Add functions to customize Biohub theme

### Patch Changes

- 121d01b: Use ESM and CJS
- c951b69: Update czifui
- 04e9810: Move common devDependencies to root package.json
- 350a232: Fix NavBar long menu titles taking two lines
- 3fe423a: Use Classic Holy Grail Layout on NavBarAndFooterPlacer
- 52ee322: Adjust footer spacings
- ad956d2: Update czifui
- 1daafaf: Update czifui
- a8d4a19: Remove unused textinput component
- 8827c68: More responsive legacy info boxes. Titles and subtitles taking up multiple lines will expand the whole box now instead of overflowing
- 7694db7: Use hex in contrastText to avoid bugs with other components not parsing color string
- a8d4a19: Use lists correctly for nav bars, fix key errors
- 6c3efa5: Remove rjsf dependencies

## 0.3.0

### Minor Changes

- 248e5f3: Add "Legacy Info Box" which is the info box component styled to look like the Info Box from the previous UI library. It is also available through Tina CMS.
- 1cf462d: Add Heading Separator component. It is available as a block in Tina CMS also.

### Patch Changes

- 85bd321: Fix legacy info box component overflowing over other elements in smaller breakpoints
- db5a67a: Add new tab prop/option to legacy info box
- ca03f3f: Add additional margin-top on grand banner on mobile
- edee8d9: Text is now white on primary button (add explicit contrastText to primary color palette)
- 7976260: Adjust footer menu items spacing
- c5cddc8: Grand banner component: make image smaller, switch to column variant on smaller breakpoint
- e3f3055: Change grand banner text styles
- e3f3055: Add new "ultimateHeading" typography variant
- 07f9433: Make footer cz biohub logo go to czbiohub.org (for now)
- 68711db: Add small and square variants/props to legacy info box
- 280e241: Shrink legacy info box a bit to better suit smaller mobile devices
- c5cddc8: Add ability to switch title font on Grand Banner component between Butler and Lato
- 95258f5: Add id prop to Heading Separator component

## 0.2.0

### Minor Changes

- f7e2fce:
  - Add experimental dark mode
  - Work on info box styles
  - Change global container maxWidth
  - Change global body font size
  - Add small variant of info box (useful for grids)
  - Add pages for footer
  - Style footer for mobile
  - Use bold fonts for links on info box and image button
  - Remove Box and Stack components that were just re-exported from mui

### Patch Changes

- 2899f14: czifui is now a peer dependency
- 0844538: Add nav tag to appbar component
- 1e7dbf7: Use czifui v7.0.0
- 1e0faa0: Improve info box styles, work on styling Grand banner
- e31cbad: Adjust sm breakpoint on container, style grid info boxes
- 2f1b7b7: Set rollup plugin delete to run once
- b2039c3: Close mobile menu on link click and outside click, add nav bar home link (for Next.js only for now), fix additional margin with info box in rich text
- df0c1b0: Create prop to disable Y margins on InfoBoxBlock, fix mobile menu flex grow, only make clickable area for home button on the actual logo and title text on nav bar

## 0.1.2

### Patch Changes

- Edit package.json to only get czifui beta with mui v5
- 36c92fb: Add rollup-plugin-delete and add external deps to rollup config

## 0.1.1

### Patch Changes

- Build with correct config before publishing

## 0.1.0

### Minor Changes

- 996ba93: Add starting READMEs for npm page

## 0.0.2

### Patch Changes

- 93a9147: init
