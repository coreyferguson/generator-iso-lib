
'use strict';

const merge = require('lodash.merge');
const defaultConfig = require('../webpack');
const overrideConfig = {
  entry: './src/index.js',

  // TODO: Define your library dependencies here:
  // https://webpack.github.io/docs/library-and-externals.html
  externals: {
  }
};

module.exports = {

  'dist-amd': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/<%= appName %>-amd.js',
      libraryTarget: 'amd'
    }
  }),

  'dist-this': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/<%= appName %>-this.js',
      libraryTarget: 'this',
      library: '<%= appClassName %>'
    }
  }),

  'dist-node': merge({}, defaultConfig, overrideConfig, {
    output: {
      filename: './dist/<%= appName %>-node.js',
      libraryTarget: 'commonjs2'
    },
    externals: getNodeExternals()
  }),

};

/**
 * Regular dependencies should be excluded from Webpack processing.
 * Fetch the list of dependencies from package.json and format
 * for Webpack externals configuration.
 */
function getNodeExternals() {
  const dependencies = require('../../package.json').dependencies;
  let externals = {};
  for (const dependency in dependencies) {
    externals[dependency] = dependency;
  }
  return externals;
}

