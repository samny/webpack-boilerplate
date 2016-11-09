var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;
var ENTRY = settings.ENTRY;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        playground: ENTRY.playground
    },

    output: {
        path: PATH.src,
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Component Playground',
            filename: 'playground/index.html',
            template: path.join(PATH.src, 'playground/index.ejs'),
            excludeChunks: ['app']
        })
    ],

    resolve: {
        alias: {
            COSMOS_COMPONENTS: path.join(PATH.src, 'playground/components'),
            COSMOS_FIXTURES: path.join(PATH.src, 'playground/fixtures')
        }
    }

};