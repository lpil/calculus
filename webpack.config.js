var webpack = require('webpack');

module.exports = {
  entry: './src/main.ts',

  output: {
    filename: '_build/out.js'
  },

  devtool: 'source-map',
  resolve: {
    extensions: [
      '',
      '.js',
      '.ts'
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
