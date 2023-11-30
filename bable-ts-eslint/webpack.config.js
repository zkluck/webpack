const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] }
        }
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          // @babel/preset-typescript 把 ts 转换成 js(es6)
          // @babel/preset-env 把 es6 转换成 es5
          options: { presets: ['@babel/preset-env', '@babel/preset-typescript'] }
        }
      }
    ]
  },
  // EslintPlugin 会在 webpack 构建过程中进行代码检查 (在 babel-loader 之前)
  plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] })]
}
