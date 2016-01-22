
module.exports = {
  options: require('./mocha-options'),
  integration: {
    src: [
      'test/support/globals.js',
      'test/support/globals-mocha.js',
      'test/integration/**/*.js',
      'test/unit/**/*.js'
    ]
  }
};
