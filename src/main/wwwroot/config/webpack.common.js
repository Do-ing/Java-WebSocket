var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [{ test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader']},
              { test: /\.html$/, loader: 'html' },
              { test: /\.(png|jpe?g|gif|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
              { test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract('style', 'css?sourceMap') }, 
              { test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw' },
              { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" }, 
              { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" }, 
              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]" }, 
              { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" }, 
              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"}]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};