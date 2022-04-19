const withTM = require("next-transpile-modules")(["@cz-ui/core"]);

module.exports = withTM({
  reactStrictMode: true,
});
