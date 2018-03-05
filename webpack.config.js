const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var config = {
  entry: './src/main.js',
  output: {
    path:'/',
    filename: './dist/index.js',
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\/.pug$/,
        // loader and use are the same
        loader: [
          "file-loader?name=[path][name].html",
          "extract-loader",
          "html-loader",
          "pug-html-loader"
        ],
      }
    ],
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: [
        '/index.pug'
      ],
      locals: {
        // Properties here are merged into `locals`
        // passed to the exported render function
        greet: 'Hello'
      }
    })
  ]
}
module.exports = config;
