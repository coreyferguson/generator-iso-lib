
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
    }],

    // https://github.com/webpack/webpack/issues/304#issuecomment-155822898
    noParse: [/node_modules\/sinon\//]

  },
  resolve: {
    alias: {

      // https://github.com/webpack/webpack/issues/304#issuecomment-155837677
      sinon: 'sinon/pkg/sinon.js'

    }
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['es2015']
    }
  }
};
