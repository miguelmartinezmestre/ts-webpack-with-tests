import {Configuration} from "webpack";
import path from "path";

const config: Configuration = {
  mode: "development",
  devServer: {
    contentBase: "./public",
  },
  resolve: { extensions: [".ts", ".js", ".tsx"] },
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",
};

module.exports = config;
