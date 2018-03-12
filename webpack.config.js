const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/frontend/') +
   '/frontend.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(__dirname, 'public')
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
      test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]'
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  performance: { hints: false }
}
