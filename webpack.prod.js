const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");
const CompressionPlugin = require("compression-webpack-plugin");

const webpackProd = merge(webpackCommon, {
  mode: "production",
  output: {
    filename: "main.bundle.[contenthash].js",
    chunkFilename: "[name].chunk.[contenthash].js"
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })
  ]
});

module.exports = webpackProd;
