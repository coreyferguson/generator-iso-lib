
'use strict';

let webpackConfig = require('./webpack');
let overrideConfig = {
  entry: './src/index.js',
  // TODO: Define your library dependencies here:
  // https://webpack.github.io/docs/library-and-externals.html
  externals: {
  }
};

module.exports = {
  'dist-amd': Object.assign({
    output: {
      filename: './dist/<%= appName %>-amd.js',
      libraryTarget: 'amd'
    }
  }, webpackConfig, overrideConfig),
  'dist-this': Object.assign({
    output: {
      filename: './dist/<%= appName %>-this.js',
      libraryTarget: 'this'
    }
  }, webpackConfig, overrideConfig)
};
