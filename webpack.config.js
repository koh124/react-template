const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname,
  mode: debug ? 'development' : 'production',
  entry: './src/js/client.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['react-html-attrs'],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader", // index.htmlにcssを書き込む場合
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + "/public/",
    filename: "client.min.js", // jsの出力先のファイル名
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.min.css" // cssの出力先のファイル名
    }),
    new Dotenv() // .env読み込み
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // minify js
      new CssMinimizerPlugin() // minify css
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/public/') // staticファイルの置き場所
    }
  }
};
