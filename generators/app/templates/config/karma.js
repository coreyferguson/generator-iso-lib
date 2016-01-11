var fs = require('fs');
var path = require('path');

module.exports = {
  basePath: '..',

  //////////////////////
  // karma extensions //
  //////////////////////

  plugins: [
    require('karma-chai'),
    require('karma-chai-as-promised'),
    require('karma-chai-sinon'),
    require('karma-chrome-launcher'),
    require('karma-coverage'),
    require('karma-mocha'),
    require('karma-sourcemap-loader'),
    require('karma-webpack')
  ],
  // order is important for frameworks
  frameworks: [
    'mocha',
    'chai-sinon',
    'chai-as-promised',
    'chai'
  ],
  files: [
    'test/support/globals.js',
    'test/integration/**/*.js',
    'test/unit/**/*.js'
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
