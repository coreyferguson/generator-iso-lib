
var merge = require('lodash.merge');
var defaultConfig = require('./karma');

module.exports = function(config) {
  var configOverride = merge(defaultConfig, {
    logLevel: config.LOG_INFO,
    singleRun: false,

    ///////////////////
    // preprocessors //
    ///////////////////

    preprocessors: {
      'test/integration/spec/**/*.js': ['webpack', 'sourcemap'],
      'test/integration/support/**/*.js': ['webpack', 'sourcemap']
    },

    /////////////
    // webpack //
    /////////////

    /**
     * Webpack configuration is different in continuous testing mode so that the proper
     * source and line numbers are reported when errors occur. This is necessary because
     * of: https://github.com/gotwarlost/istanbul/issues/212
     */
    webpack: { devtool: 'inline-source-map' }

  });
  config.set(configOverride);
};
