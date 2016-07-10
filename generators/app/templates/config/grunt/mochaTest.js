
module.exports = {
  options: require('../mocha'),
  test: {
    src: [
      'build/test/integration/**/*.js',
      'build/test/unit/**/*.js'
    ]
  }
};
