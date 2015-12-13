var webpack = require('webpack');

var webpackPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    mangle: true
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()  
];
var webpackConfig = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  context: __dirname + '/app',
  entry: './main.ts',

  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: "bundle.js"
  },

  plugins: [],

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },


  devServer: {
    inline: true
  },

  devtool: 'eval-source-map'

};


if (process.env.NODE_ENV === 'production') {

  console.info('production mode! \n')

  webpackConfig.output.path = __dirname + '/dist';
  Array.prototype.push.apply(webpackConfig.plugins, webpackPlugins);
  webpackConfig.devtool = 'source-map';
  
  console.log(webpackConfig.plugins);
  
}

module.exports = webpackConfig;