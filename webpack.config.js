const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: {
      main: './index.js',
      analytics: './analytics.js'
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      library: 'webpackUniversalModuleDefinition',
      libraryTarget: 'umd',

   },

   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
      new CleanWebpackPlugin()
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   },
   externals: {
      lodash: {
         commonjs: 'lodash',
         commonjs2: 'lodash',
         amd: 'lodash',
         root: '_',
      },
   }

}