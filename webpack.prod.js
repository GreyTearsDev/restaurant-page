const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      title: "O Kazukuta",
    }),
  ],
});
