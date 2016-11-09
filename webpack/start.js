var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;
var ENTRY = settings.ENTRY;
var os = require('os');
var devServer = require('./devserver').devServer;

module.exports = {
    entry: {
        app: ENTRY.app
    },

    output: {
        publicPath: 'http://' + os.hostname() + ':' + devServer.port + '/'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                include: [PATH.src],
                loader: 'eslint-loader'
            }
        ]
    }
};