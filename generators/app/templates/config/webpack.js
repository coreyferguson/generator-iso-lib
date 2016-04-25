
module.exports = {
  devtool: 'inline-source-map',
  module: {
    preLoaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        presets: ['es2015']
      }
    }, {
      loader: 'isparta-loader',
      test: /\.js$/,
      exclude: /(test|node_modules)\//
    }]
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['es2015']
    }
  }
};
