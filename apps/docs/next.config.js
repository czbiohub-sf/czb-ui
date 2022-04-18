const withTM = require("next-transpile-modules")(["@cz-ui/biohub"]);

module.exports = withTM({
  reactStrictMode: true,
});
