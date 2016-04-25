
'use strict';

let webpackConfig = require('./webpack');

module.exports = {
  'dist-amd': Object.assign({
    entry: './src/index.js',
    output: {
      filename: './dist/<%= appName %>-amd.js',
      libraryTarget: 'amd'
    }
  }, webpackConfig),
  'dist-this': Object.assign({
    entry: './src/index.js',
    output: {
      filename: './dist/<%= appName %>-this.js',
      libraryTarget: 'this'
    }
  }, webpackConfig)
};
