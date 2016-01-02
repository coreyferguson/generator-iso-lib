
module.exports = {
  'dist-amd': {
    entry: './src/index.js',
    output: {
      filename: './dist/<%= appName %>-amd.js',
      libraryTarget: 'amd'
    },
    devtool: 'source-map'
  },
  'dist-this': {
    entry: './src/index.js',
    output: {
      filename: './dist/<%= appName %>-this.js',
      libraryTarget: 'this'
    },
    devtool: 'source-map'
  }
};
