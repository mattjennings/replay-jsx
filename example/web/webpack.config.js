const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const babelLoader = {
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env"],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "ReplayJSX.create",
          pragmaFrag: "ReplayJSX.Fragment",
        },
      ],
      "replay-jsx/babel-plugin",
    ],
  },
};

module.exports = {
  entry: "./web/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules|replay-jsx/,
        use: [
          babelLoader,
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules|replay-jsx/,
        use: [babelLoader],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "assets/images" },
      { from: "assets/audio" },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new webpack.DefinePlugin({
      ASSET_NAMES: JSON.stringify(getAssetNames()),
    }),
    // new webpack.ProvidePlugin({
    //   Replay: path.resolve(__dirname, "../replay.js"),
    // }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    host: "0.0.0.0",
  },
};

function getAssetNames() {
  const imageFileNames = fs
    .readdirSync(path.resolve(__dirname, "../assets/images"))
    .filter((fileName) => !fileName.startsWith("."));
  const audioFileNames = fs
    .readdirSync(path.resolve(__dirname, "../assets/audio"))
    .filter((fileName) => !fileName.startsWith("."));

  return {
    imageFileNames,
    audioFileNames,
  };
}
