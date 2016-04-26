
module.exports = {
  src: [
    'Gruntfile.js',
    'generators/app/index.js',
    'test/**/*.js'
  ],
  options: {
    config: '.jscsrc',
    verbose: true,
    fix: true
  }
};
