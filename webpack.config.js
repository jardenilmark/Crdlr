const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './frontend.jsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(process.cwd(), 'public')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
