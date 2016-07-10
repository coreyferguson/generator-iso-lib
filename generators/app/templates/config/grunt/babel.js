
module.exports = {
  options: {
    sourceMap: 'inline',
    presets: ['es2015']
  },
  build: {
    files: [{
      expand: true,
      src: ['src/**/*.js', 'test/**/*.js'],
      dest: 'build/',
    }]
  }
};
