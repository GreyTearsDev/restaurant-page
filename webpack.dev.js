const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: "./src/index.js",

  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});
