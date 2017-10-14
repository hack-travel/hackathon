'use strict'

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './client/index.jsx',
  output: { path: __dirname + '/client', filename: 'bundle.js' },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  node: {
    fs: "empty"
  },
  watch: true
}

module.exports = config;