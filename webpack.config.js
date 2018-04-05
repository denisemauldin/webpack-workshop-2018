console.log("FDSKAFSA")

/*
// multiple points of entry
module.exports = {
  entry:
  {
    page1: "./src/index",  // the default is 'main' which is why you get main.js as the bundle output
    page2: "./src/index2"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"  //  [] are interpolation helper - replaces name with the name of the entry point
  }
};
// by spitting the code into multiple bundles you can make some of them very small
*/


const webpackMerge = require("webpack-merge")
const commonConfig = require("./webpack.common");

// access the environment in the function passed in
module.exports = ({mode}) => {
  const envConfig = require(`./webpack.${mode}`);
  return webpackMerge({mode}, commonConfig, envConfig); // object.assign better versio
}
/*
module.exports = (env) => {
  return webpackMerge({mode: env.mode}, commonConfig);
}
*/
