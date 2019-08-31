import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import paths from './paths';

module.exports = {
  entry: {
    // In this boilerplate, we only enable the popup script for demo
    // You can still create your own background or content scripts under src folder
    // Then, add following config to entry
    // content: paths.contentSrc
    background: paths.backgroundSrc,
    popup: paths.popupSrc
  },
  output: {
    path: paths.prodBuild,
    pathinfo: true,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js?$/,
      exclude: /node_modules/,
      include: [paths.source],
      loader: 'eslint-loader'
    }, {
      test: /\.js?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: [paths.source]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.popupHtml,
      filename: 'popup.html',
      excludeChunks: ['content', 'background'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new CopyWebpackPlugin([
      { from: paths.extension }
    ])
  ]
};
