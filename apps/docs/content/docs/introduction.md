---
title: Introduction
---

# Welcome to czb-ui!

czb-ui is a UI library that contains React components for data portals and
various web apps here at the Biohub.

It is based off of [Material UI](https://mui.com/ "Material UI website
link") and [Chan ](https://github.com/chanzuckerberg/sci-components "Chan
Zuckerberg Initiative Science Design System GitHub repository
link")[Zuckerberg Initiative's Science Design System
(SDS)](https://github.com/chanzuckerberg/sci-components "Chan Zuckerberg
Initiative Science Design System GitHub repository link"). A blend of
components between these two libraries are used to build higher level
components.

## "Higher Level Components"

This library does not serve individual components such as buttons or
switches. Instead the library has more pre-built, complex components such
as navigation bars, forms, and banners. These components are used
throughout the Biohub, whether it's on a data portal or web app. This
allows for the most consistent experience between them.

## Making it easy

These components make it as straight forward as possible to build a
website. Other than using code to implement them, a visual editor is
available also using TinaCMS.

## The Packages

czb-ui currently consists of four separate packages:

* **@czb-ui/core**: The core package that includes the essential higher
  level components, such as the navigation bar and the footer.
* **@czb-ui/tina-cms**: A toolkit to use czb-ui with the
  [TinaCMS](https://tina.io "TinaCMS website") content management system.
* **@czb-ui/forms**: A wrapper around
  [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form "react-jsonschema-form GitHub repo"), a library to generate forms with
  JSON, using the czb-ui style.
* **@czb-ui/biohub-logos**: The Biohub logos as React components.

Each package is published on npm and can be installed normally with `npm
install`. Additionally, using the yarn package manager works also.

## Portal Template

Internal use only. Please see the [Portal Template GitHub repository](https://github.com/czbiohub-sf/portal-template).
