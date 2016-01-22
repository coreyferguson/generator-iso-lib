
var merge = require('lodash.merge');
var defaultConfig = require('./karma');

module.exports = function(config) {
  var configOverride = merge(defaultConfig, {
    logLevel: config.LOG_INFO,
    singleRun: true,

    ///////////////////
    // preprocessors //
    ///////////////////

    preprocessors: {
      'test/integration/spec/**/*.js': ['webpack'],
      'test/integration/support/**/*.js': ['webpack']
    },

    /////////////
    // webpack //
    /////////////

    webpack: {
      module: {
        postLoaders: [{
          test: /\.js$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    }
  });
  config.set(configOverride);
};
