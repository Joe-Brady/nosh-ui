const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackCommon = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/static",
        to: "static"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = webpackCommon;
