var webpack = require('webpack');
var path    = require('path')
module.exports = {
    entry: [
        './src/app.js',
        'webpack-hot-middleware/client',
    ],
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname,'lib'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query : {
                "presets": ["es2015","react","stage-0"]
            }
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
	          query : {
		            "presets": ["es2015","react","stage-0"]
	          }
        }]
    }
};
