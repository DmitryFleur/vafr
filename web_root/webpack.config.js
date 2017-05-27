
var webpack = require('webpack')

module.exports = {

  entry: [
    './src/App.jsx'
  ],

  output: {
    filename: 'bundle.js',
    publicPath: '/dest/',
    path: __dirname + '/dest'
  },

  module: {
    rules: [
      {
        test: /(\.js$|\.jsx?$)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {  presets: ['react','es2017','stage-0','stage-1']   }
      },
      { test: /\.md/, loader: 'html!markdown-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },


  watchOptions: {
    poll: true
  }

}

