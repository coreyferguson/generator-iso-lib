var fs = require('fs');
var path = require('path');

module.exports = {
  basePath: '..',

  //////////////////////
  // karma extensions //
  //////////////////////

  plugins: [
    'karma-chrome-launcher',
    'karma-coverage',
    'karma-mocha',
    'karma-webpack',
    'karma-sourcemap-loader'
  ],
  frameworks: [
    'mocha'
  ],
  files: [
    'test/integration/support/globals.js',
    'test/integration/spec/**/*.js'
  ],
  exclude: [],

  //////////////////////////
  // server configuration //
  //////////////////////////

  hostname: 'localhost',
  protocol: 'http',
  port: 9876,

  ////////////////////////
  // testing / coverage //
  ////////////////////////

  client: {
    mocha: require('./mocha-options')
  },
  reporters: ['progress', 'coverage'],
  coverageReporter: {
    dir: 'coverage/',
    reporters: [
      { type: 'html', subdir: 'coverage-html' },
      { type: 'text', subdir: '.', file: 'coverage-detail.txt' },
      { type: 'text-summary', subdir: '.', file: 'coverage-summary.txt' }
    ]
  },

  //////////
  // misc //
  //////////

  colors: true,
  autoWatch: true,
  concurrency: Infinity,
  webpackMiddleware: { noInfo: true },

  ///////////////
  // launchers //
  ///////////////

  browsers: ['Chrome']

};
