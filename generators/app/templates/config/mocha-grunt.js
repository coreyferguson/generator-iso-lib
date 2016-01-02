
module.exports = {
  options: require('./mocha-options'),
  integration: {
    src: ['test/integration/support/globals.js', 'test/integration/spec/**/*.js']
  }
};
