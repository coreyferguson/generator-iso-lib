
module.exports = {
  options: {
    client: { mocha: require('./mocha-options') }
  },
  continuous: { configFile: 'config/karma-continuous.js' },
  single: { configFile: 'config/karma-single.js' }
};
