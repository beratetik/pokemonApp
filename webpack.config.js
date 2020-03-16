const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var AssetsPlugin = require("assets-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
      path: path.resolve("dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: "babel-loader"
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[name]_[local]_[hash:base64:5]"
                }
              }
            }
          ]
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, "./src"),
      hot: true
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: "Pokemon App",
        favicon: "./src/assets/immfly.ico",
        template: "./src/index.html"
      }),
      new AssetsPlugin()
    ]
  };
};
