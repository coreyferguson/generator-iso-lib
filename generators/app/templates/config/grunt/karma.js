
module.exports = {
  options: {
    configFile: 'config/karma.js',
    client: {
      mocha: require('../mocha')
    }
  },
  continuous: {
    singleRun: false
  },
  single: {
    singleRun: true
  }
};
