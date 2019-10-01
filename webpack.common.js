const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackCommon = {
  entry: {
    app: ["./src/index.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./static",
        to: "static"
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = webpackCommon;
