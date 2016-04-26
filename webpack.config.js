var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    output: {
        path: __dirname,
        filename: './lib/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
	          query : {
		            "presets": ["es2015","react"]
	          }
        }]
    }
};
