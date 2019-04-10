const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const plugins_dev = [
  new HtmlWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];
const plugins_pro = [new CleanWebpackPlugin(), new HtmlWebpackPlugin()];

module.exports = {
  devtool: 'source-map',
  mode: env,
  plugins: isDev ? plugins_dev : plugins_pro,
  entry: path.resolve(__dirname, 'app.ts'),
  output: {
    filename: 'toolkit.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDev ? '' : './',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 1024,
    open: true,
    hot: true,
  },
};
