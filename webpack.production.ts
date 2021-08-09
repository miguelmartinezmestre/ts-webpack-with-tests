import path from "path";
import {Configuration} from "webpack";
const WebpackObfuscator = require("webpack-obfuscator");

const config: Configuration = {
  mode: "production",
  resolve: { extensions: [".ts", ".js", ".tsx"] },
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.js$/,
        enforce: "post",
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true,
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true,
    }),
  ],
};

module.exports = config;
