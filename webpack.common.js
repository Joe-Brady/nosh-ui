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
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: "ts-loader" },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
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
