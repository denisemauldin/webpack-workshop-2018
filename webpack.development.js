module.exports = {
  // devtool: "sourcemap" // generate sourcemaps
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader"}
        ]
      }
    ]
  }
}
