/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
