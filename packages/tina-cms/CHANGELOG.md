# @czb-ui/tina-cms

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
