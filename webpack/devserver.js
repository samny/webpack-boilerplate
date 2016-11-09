var webpack = require('webpack');
var settings = require('./settings');
var PATH = settings.PATH;

var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    watch: true,

    devtool: 'cheap-source-map',

    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"},
        contentBase: PATH.src,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8383,
        stats: 'errors-only',
        host: '0.0.0.0'
    },

    plugins: [
        new DashboardPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};