const mCssPlugin = require("mini-css-extract-plugin")

module.exports = {
    plugins: [
      new mCssPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            mCssPlugin.loader,
            "css-loader"
          ]
        }
      ]
    }
}
