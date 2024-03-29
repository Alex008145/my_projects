const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './sec/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: './',
  // },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
