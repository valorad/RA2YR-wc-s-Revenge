const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const { root } = require('./lib/helpers');

let config = {
  mode: "production",

  entry: {
    'index': root('src/index')
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

  externals: nodeExternals(),

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude:  /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([`${root('dist')}/**`], {root: root(), verbose: false}),
    new CopyWebpackPlugin([
      { 
        from: root("src/in"),
        to: 'in',
        ignore: [
          ".gitkeep"
        ]
      },
      { 
        from: root("src/out"),
        to: 'out',
        ignore: [
          // ".gitkeep"
        ]
      },
      { 
        from: root("src/config"),
        to: 'config'
      },
    ]),

  ],

  output: {
    path: root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  }

}

module.exports = config;
