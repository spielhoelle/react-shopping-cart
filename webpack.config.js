const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

var config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pug Test',
      desc: 'Description from a long time ago went bad and now totally fine again.',
      minify: {
          collapseWhitespace: true
      },
      template: '!!pug-loader!src/index.pug',
    }),
  ]
}
module.exports = config;
