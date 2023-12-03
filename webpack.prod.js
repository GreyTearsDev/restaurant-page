const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
    }),
  ],
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: ["jpegtran", { progressive: true }],
          },
        },
      }),
    ],
  },
});
