const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

'use strict';

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]_library',
  },
  plugins:[
    new webpack.DllPlugin({
       name: '[name]_library',
       path: path.resolve(__dirname, 'dll/[name].manifest.json'),
    }),
    new CleanWebpackPlugin()
  ]
}