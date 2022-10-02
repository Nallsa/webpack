const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
var PrettierPlugin = require('prettier-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  plugins: [new PrettierPlugin()],
  plugins: [new ESLintPlugin(options)],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
// module.exports = {
//   entry: './path/to/my/entry/file.js',
//   output: {
//     /**
//      * With zero configuration,
//      *   clean-webpack-plugin will remove files inside the directory below
//      */
//     path: path.resolve(process.cwd(), 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
//   plugins: [
//     new webpack.ProgressPlugin(),
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({ template: './src/index.html' }),
//   ],
// }
