# @czb-ui/tinacms

## 1.2.0

### Minor Changes

- f6caa34: Code block syntax highlighting, inline code styles
- e314a31: Only use small variants in grids if there are three or more items in the grid

### Patch Changes

- e314a31: Info boxes better height styling
- c2376f9: Fix hydration error with rich-text images

## 1.1.1

### Patch Changes

- 5bafbf7: Support React 17

## 1.1.0

### Minor Changes

- bb13b38: InfoBox new tab support

### Patch Changes

- 96bd2ba: next/image use new props
- 60de8b3: Update tinacms. Update react if needed
- ec73b0b: Use new Template type
- Updated dependencies [60de8b3]
  - @czb-ui/core@1.0.1

## 1.0.0

### Major Changes

- b066109: Rebrand 2023

### Minor Changes

- a9db0ac: Add nobackground banner type
- 5756672: Allow for custom collection names
- b278974: New image gallery block
- 8827c68: Increase grid spacing
- 6a31310: Text block: open links in new tab and use czifui Link
- 89afcaf: Improve block switcher logic and allow for custom blocks

### Patch Changes

- 03e421a: use legacyBehavior for NextLinkComposed for support for Next.js 13
- c951b69: Update czifui
- 04e9810: Move common devDependencies to root package.json
- 5dff5da: Only resolve d3-dsv
- 3c39cc9: Update TinaCMS
- ad956d2: Update czifui
- 1daafaf: Update czifui
- 8827c68: More responsive legacy info boxes. Titles and subtitles taking up multiple lines will expand the whole box now instead of overflowing
- 9d32d86: Update TinaCMS
- ad956d2: Update tinacms
- cf78187: Make next/image alt blank if not defined in CMS
- 89b8c63: Edit dev/peer dependencies
- 96b99ed: Fix crash in BlockSwitcher when passing in a custom template for additionalBlocks
- 0ec5fcd: Update tinacms
- a8d4a19: Re-structure code to avoid circular dep
- cdaf01d: Rename package to @czb-ui/tinacms
- Updated dependencies [121d01b]
- Updated dependencies [a9db0ac]
- Updated dependencies [c951b69]
- Updated dependencies [04e9810]
- Updated dependencies [350a232]
- Updated dependencies [d384253]
- Updated dependencies [3fe423a]
- Updated dependencies [066d4af]
- Updated dependencies [52ee322]
- Updated dependencies [ce5c610]
- Updated dependencies [b066109]
- Updated dependencies [af3d8aa]
- Updated dependencies [ad956d2]
- Updated dependencies [1daafaf]
- Updated dependencies [8827c68]
- Updated dependencies [a8d4a19]
- Updated dependencies [22a3acb]
- Updated dependencies [8827c68]
- Updated dependencies [7694db7]
- Updated dependencies [39fd98a]
- Updated dependencies [8827c68]
- Updated dependencies [a8d4a19]
- Updated dependencies [6c3efa5]
  - @czb-ui/core@1.0.0

## 0.2.1

### Patch Changes

- d931b55: Remove unneeded peer dependencies

## 0.2.0

### Minor Changes

- 248e5f3: Add "Legacy Info Box" which is the info box component styled to look like the Info Box from the previous UI library. It is also available through Tina CMS.
- 1cf462d: Add Heading Separator component. It is available as a block in Tina CMS also.

### Patch Changes

- 6011c35: Add margin around table block
- db5a67a: Add new tab prop/option to legacy info box
- 280e241: Add legacy info box to grid block. Also add examples of it in the tina cms test app.
- 6f4af67: Add option to export CSV on table block
- 6723fa3: Add margin to bottom of legacy info box block when it's not in a grid (or has the small prop disabled)
- c5cddc8: Grand banner component: make image smaller, switch to column variant on smaller breakpoint
- 47cfe08: Legacy info boxes blocks now use object-fit contain for images
- a096f78: Change how nested block names are renamed internally (in GridBlock.tsx)
- 0aa7841: Fix images going over border in legacy info box
- d2c7f30: Add small variant to grand banner
- 065d2d1: Add image alt fields to components that use images
- 68711db: Add small and square variants/props to legacy info box
- fb4767e: Add ability to display another image on hover on the Legacy Info Box Block
- 95258f5: Add IDs to text headings and heading separator blocks. This allows for links that automatically scroll to the given heading. Currently the IDs mirror the text the heading has.
- 5d41f90: Update tinacms peer dependency
- c988f68: Add breakpoint sizes to images on text block
- 8a70ddc: Add option to put table in container
- c5cddc8: Add ability to switch title font on Grand Banner component between Butler and Lato
- 7aa3219: Update to TinaCMS v0.68.14

## 0.1.0

### Minor Changes

- f7e2fce: Create @czb-ui/tina-cms library, for easy use of Tina CMS in other projects using czb-ui. A test Tina CMS Next.js app was also made to test this library.

  This library contains a subset of components from czb-ui to use with Tina CMS. Schemas, templates, and block templates are included for a [block-based editing](https://tina.io/docs/editing/blocks/) workflow.
