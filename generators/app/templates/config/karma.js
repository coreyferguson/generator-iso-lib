
'use strict';

module.exports = function(config) {
  config.set({

    basePath: '..',

    //////////////////////
    // karma extensions //
    //////////////////////

    // order is important for frameworks
    frameworks: [
      'mocha'
    ],
    files: [
      'test/integration/**/*.js',
      'test/unit/**/*.js'
    ],
    exclude: [],

    ///////////////////
    // preprocessors //
    ///////////////////

    preprocessors: {
      'test/integration/**/*.js': ['webpack', 'sourcemap'],
      'test/unit/**/*.js': ['webpack', 'sourcemap'],
      'test/support/**/*.js': ['webpack', 'sourcemap']
    },

    /////////////
    // webpack //
    /////////////

    webpack: require('./webpack'),

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
      mocha: require('./mocha')
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

    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,
    concurrency: Infinity,
    webpackMiddleware: { noInfo: true },

    ///////////////
    // launchers //
    ///////////////

    browsers: ['Chrome']

  });
};
