var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;
var ENTRY = settings.ENTRY;
var LOADER_QUERY = settings.LOADER_QUERY;
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        test: ENTRY.test
    },

    target: 'node',

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                include: [PATH.src],
                exclude: /(node_modules)/,
                loader: 'babel-loader' + LOADER_QUERY.babel

            }, {
                exclude: /(node_modules)/,
                test: /\.(less|png|woff|woff2|eot|ttf|svg|css|md)$/,
                loader: 'null'
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    resolve: {
        root: [PATH.src],
        extensions: ['', '.js', '.json', '.jsx'],
        alias: {
            images: PATH.images,
            resources: PATH.images
        }
    },

    externals: [nodeExternals()],

    devtool: 'source-map'
};