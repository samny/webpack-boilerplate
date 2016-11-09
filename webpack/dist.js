var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;
var ENTRY = settings.ENTRY;
var LOADER_QUERY = settings.LOADER_QUERY;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: ENTRY.app
    },

    output: {
        path: PATH.dist,
        filename: '[name].min.js',
        publicPath: 'http:/localhost:8383/' // CDN url here
    },

    devtool: 'hidden-source-map',

    plugins: [
        new webpack.DefinePlugin({
            '__DEVTOOLS__': false,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].min.css'),
        new CopyWebpackPlugin(
            [{
                context: PATH.resources,
                from: '*',
                to: PATH.dist
            }])
    ],

    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                include: [PATH.src],
                exclude: /(node_modules)/,
                loader: 'babel-loader' + LOADER_QUERY.babel
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css' + LOADER_QUERY.css + '!postcss!less', {allChunks: true})
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css' + LOADER_QUERY.css + '!postcss', {allChunks: true}),
                include: /flexboxgrid/,
            }, {
                test: /\.(gif|jpg|png|svg)$/,
                loaders: [
                    'file' + LOADER_QUERY.file,
                    'image-webpack'
                ]
            }
        ]
    }
};