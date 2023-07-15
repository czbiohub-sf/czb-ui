# czb-ui

High level components for CZ Biohub. Based on [CZI's Science Design System](https://github.com/chanzuckerberg/sci-components) and [Material UI v5](https://mui.com/).

To get started, visit the [introduction documentation](https://czb-ui-docs.vercel.app/docs/introduction).

## Develop

Run storybook with live refresh: `yarn dev` from project root

## Before making a PR

1. Run `yarn changeset` in the project's root directory.
2. Mark the packages that need to have their version bumped up.
   - Make sure to follow the [SemVer Versioning spec](https://semver.org/#semantic-versioning-specification-semver)
3. Answer the remaining questions.
4. Commit the new changeset into git.
5. Remember to push those changes into your branch before making a PR!

## Publishing a version to npm

You will need to be on the `czb-ui` npm organization with 2FA enabled. Make sure you are also on the `main` branch.

1. Run `yarn changeset version` in the project's root directory. **Note after running this command you should not make anymore commits after step 2.**
2. Commit the changes the command made.
3. Run `yarn build` in the project's root directory.
4. Run `yarn changeset publish` in the project's root directory.
5. Run `git push && git push --tags` to push the remaining commits and tags made from the previous commands.

### Pre-release version

Please **do not** follow these steps in the `main` branch.

1. Switch to the `prerelease` branch.
2. Make sure the changesets pre-release is configured. This can be checked by the `mode` and `tag` values in `.changeset/pre.json`.
   ```sh
   head .changeset/pre.json
   ```
   ```json
   {
     "mode": "pre",
     "tag": "alpha",
     "initialVersions": {
   ```
   If `.changeset/pre.json` does not exist, pre-releases are not configured. Please see the [changesets pre-releases documentation](https://github.com/changesets/changesets/blob/main/docs/prereleases.md).
3. Merge `main` into the `prerelease` branch.
4. Run the regular steps under ["Publishing a version to npm"](#publishing-a-version-to-npm).
