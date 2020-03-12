const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
      path: path.resolve("dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: "babel-loader"
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "./src"),
      hot: true
    }
  };
};
