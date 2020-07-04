const path = require('path');

const prod = process.env.NODE_ENV !== "development";

module.exports = {
  entry: './src/index.js',
  //target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    //libraryTarget: 'commonjs',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: prod ? "production" : "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
};