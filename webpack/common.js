var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;
var LOADER_QUERY = settings.LOADER_QUERY;
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    output: {
        path: PATH.src,
        filename: 'dist/[name].min.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: [PATH.src],
                exclude: /(node_modules)/,
                loader: 'babel-loader' + LOADER_QUERY.babel + ',presets[]=react-hmre'
            }, {
                test: /\.less$/,
                include: [PATH.src],
                loader: 'style!css' + LOADER_QUERY.css + '!postcss!less'
            }, {
                test: /\.css$/,
                include: /flexboxgrid/,
                loader: 'style!css' + LOADER_QUERY.css + '!postcss',
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)?(\?v=[0-9].[0-9].[0-9])?$/,
                include: [PATH.src],
                loader: 'file'
            }, {
                test: /\.(gif|jpg|png|svg)$/,
                include: [PATH.resources],
                loader: 'file' + LOADER_QUERY.file
            }, {
                test: /\.md$/,
                include: [PATH.src],
                exclude: /(Readme|\.examples)\.md$/,
                loader: 'html!markdown'
            }, {
                test: /\.json$/,
                include: [PATH.src],
                loader: 'json'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
        alias: {
            images: PATH.images,
            resources: PATH.resources
        }
    },

    plugins: [
        new webpack.ProvidePlugin({}),
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: path.join(PATH.src, 'index.ejs'),
            excludeChunks: ['playground']
        })
    ],

    postcss: function () {
        return [autoprefixer({browsers: ['last 10 versions', 'not ie <= 9']}), precss];
    }
};