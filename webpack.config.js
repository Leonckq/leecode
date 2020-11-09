const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.[hash:6].js',
    path: path.resolve(__dirname,'dist')
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    modules: [ path.resolve('node_modules') ],
    extensions: ['.js', '.jsx', '.tsx', '.css', '.json']
  },
  devServer: {
    port: 8001
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}