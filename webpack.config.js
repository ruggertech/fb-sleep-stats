var webpack = require('webpack');
var path = require('path');
var config = require('config');

var fbAppId = config.appId;
if(!fbAppId) {
    fbAppId = process.env.FBAPPID;
}

module.exports = {
    entry: path.resolve(__dirname, 'src', 'browser', 'main.js'),
    plugins: [new webpack.DefinePlugin({
        __FBAPPID__: fbAppId 
    })],
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{

            // Less
            test: /\.less$/,
            loader: 'style!css!less'

            // jsx
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
