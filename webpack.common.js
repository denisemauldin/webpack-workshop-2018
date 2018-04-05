const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].chunk.js"
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      /*
      // loads the image as a base64 encoded image
      {
        test: /\.jpg$/,
        use: "url-loader"
      }
      */
     {
       test: /\.jpg$/,
       use: [
         {
           loader: "url-loader",
           options: {limit: 10000} // if it exceeds this limit use file-loader
         }
       ]
     }
    ]
  }
}
