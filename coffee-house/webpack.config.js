const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [path.resolve(__dirname, 'src', 'index.js'), './src/sass/index.scss'],
    menu: [path.resolve(__dirname, 'src', 'menu.js'), './src/sass/menu.scss'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    assetModuleFilename: 'img/[hash][ext][query]',
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: 'menu.html',
      filename: './menu/index.html',
      chunks: ['menu'],
    }),
    new MiniCssExtractPlugin(
      { filename: '[name].css' },
    ),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
  ],
};
