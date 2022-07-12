# czb-ui

High level components for CZ Biohub. Based on [CZI's Science Design System](https://github.com/chanzuckerberg/sci-components) and [Material UI v5](https://mui.com/).

## Develop

Run storybook with live refresh: `yarn dev` from project root

## Before making a PR

1. Run `yarn changeset` in the project's root directory.
2. Mark the packages that need to have their version bumped up.
3. Answer the remaining questions.
4. Commit the new changeset into git.

## Publishing a version to npm

You will need to be on the `czb-ui` npm organization with 2FA enabled. Make sure you are also on the `main` branch.

1. Run `yarn changeset version` in the project's root directory. **Note after running this command you should not make anymore commits after step 2.**
2. Commit the changes the command made and push them.
3. Run `yarn changeset publish` in the project's root directory.
4. Run `git push --tags` to push the tags made from the previous command.
