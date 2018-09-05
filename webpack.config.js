const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  const { NODE_ENV } = process.env;
  const isProduction = NODE_ENV === 'production';
  // Build plugins
  const plugins = [
    new CleanWebpackPlugin(['dist']),
  ];
  // Return configuration
  return {
    mode: 'production',
    entry: './src/index.ts',
    context: path.resolve(__dirname, './'),
    stats: 'minimal',
    output: {
      filename: 'main.js',
      library: 'mobx-formstate',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
      umdNamedDefine: true,
    },
    plugins: isProduction ? plugins : [],
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader?cacheDirectory=true',
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
        },
      ],
    },
  };
};
