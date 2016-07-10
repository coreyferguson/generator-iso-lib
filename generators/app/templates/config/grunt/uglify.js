
module.exports = {
  amd: {
    src: 'dist/<%= appName %>-amd.js',
    dest: 'dist/<%= appName %>-amd.min.js'
  },
  this: {
    src: 'dist/<%= appName %>-this.js',
    dest: 'dist/<%= appName %>-this.min.js'
  },
  commonjs2: {
    src: 'dist/<%= appName %>-commonjs2.js',
    dest: 'dist/<%= appName %>-commonjs2.min.js'
  }
};
