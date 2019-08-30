const merge = require("webpack-merge");
const webpackCommon = require("./webpack.common.js");

const webpackDev = merge(webpackCommon, {
  mode: "development",
  output: {
    filename: "main.bundle.[hash].js",
    chunkFilename: "[name].chunk.[hash].js"
  },
  devtool: "eval",
  devServer: {
    contentBase: "./dist",
    hot: true
  }
});

module.exports = webpackDev;