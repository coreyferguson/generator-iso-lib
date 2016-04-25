
module.exports = {
  options: require('./mocha'),
  integration: {
    src: [
      'test/support/globals-mocha.js',
      'test/integration/**/*.js',
      'test/unit/**/*.js'
    ]
  }
};
