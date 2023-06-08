---
title: Updating Libraries
---

# Updating Libraries

czb-ui depends on many dependencies, however some can be upgraded easily while others can not.

## Terminology

Here are some very very simplified definitions:

### Major Update

In [Semantic Versioning (SemVer)](https://semver.org/), a major update signifies incompatible API changes, often requiring users to alter their code to maintain functionality. For example, upgrading from version 2.3.8 to 3.0.0 implies a major update.

czb-ui uses Semantic Versioning. "Major Updates to czb-ui" means any `@czb-ui/*` npm package follows the definition above. Likewise for "Minor Update" and "Patch Update".

### Minor Update

In SemVer, a minor update introduces backward-compatible functionality additions. For instance, progressing from version 2.3.8 to 2.4.0 indicates a minor update.

### Patch Update

In SemVer, a patch update involves backward-compatible bug fixes. For instance, an upgrade from version 2.3.8 to 2.3.9 denotes a patch update.

### Stable Version

A stable version in software, like @czb-ui/core@1.0.0 in SemVer, is a release that's devoid of suffixes like "-alpha.3", indicating it's been extensively tested and is deemed ready for use in production without significant known issues.

### Peer Dependencies

In npm, peer dependencies signify necessary packages for a package to operate correctly. The package doesn't include these dependencies itself, but expects them to be installed in the environment/project where it is used (in this case, Datahub).

## What and when to update

### Minor/patch czb-ui releases

Updating libraries can be done with `yarn upgrade`. This doesn't have to be ran for every release, but should be ran before major or minor czb-ui releases or if there are security vulnerabilities in a dependency.

Please do not use `--latest` as this may update packages across major versions, causing unintentional breaking changes.

Note it is normal for `yarn upgrade` to only make changes in `yarn.lock`.

### Major czb-ui releases

`yarn upgrade` can be used as a first step. Please do not use `--latest` -- TODO: Confirm? Why?

It is best to update only the `peerDependencies` libraries as these are the most essential. However, updating libraries that are specified in any `peerDependencies` is not as straight-forward.

These libraries include Material UI, SDS, and tinacms. As these dependencies are installed manually in the project czb-ui is being used in, updating them without caution may cause unintentional breaking changes.

Here are times when to update these `peerDependencies` libraries:

- **Security Updates**: These libraries should be updated as soon as possible if it is security related.
- **Major czb-ui Releases**: A major update in czb-ui should bump peer dependencies up to their latest stable version (even across major updates). It is best to update it here as a major change can safely introduce code migrations. Instructions should be put in the documentation (or changelogs) of czb-ui to update the peer dependencies, alongside any other code migrations.

When updating peerDependencies dependencies, make sure that the version is also updated in any `devDependencies` or `peerDependencies` lists.

## Updating Apps/Utilities

Turborepo and Storybook can be updated anytime. However as it works perfectly fine now, updating should not be needed unless there is a new feature needed or a security update.
