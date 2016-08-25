var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var os = require('os');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


var TARGET = process.env.npm_lifecycle_event;

var PATH = {
    root: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    appMain: path.join(__dirname, 'src/index'),
    playgroundMain: path.join(__dirname, 'src/playground/index')
};

var entryCommon = [
    'normalize.css',
    'core-js/fn/object/assign',
    'core-js/es6/promise'
];

var ENTRY = {

    app: entryCommon.concat([
        PATH.appMain
    ]),

    playground: entryCommon.concat([
        PATH.playgroundMain
    ]),

    test: []
};

var CONFIG = {

    common: {

        output: {
            path: PATH.root,
            filename: 'dist/[name].min.js'
        },

        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    include: [ PATH.root ],
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: [ 'es2015', 'stage-0', 'react', 'react-hmre' ]
                    }
                }, {
                    test: /\.less$/,
                    loader: 'style!css!postcss!less'
                }, {
                    test: /\.css$/,
                    loader: 'style!css!postcss'
                }, {
                    test: /\.(woff|woff2|eot|ttf|svg)?(\?v=[0-9].[0-9].[0-9])?$/,
                    loader: 'url?limit=8192'
                }, {
                    test: /\.gif$/,
                    loader: 'url?limit=10000&mimetype=image/gif'
                }, {
                    test: /\.jpg$/,
                    loader: 'url?limit=10000&mimetype=image/jpg'
                }, {
                    test: /\.png$/,
                    loader: 'url?limit=10000&mimetype=image/png'
                }
            ]
        },

        resolve: {
            root: [ PATH.root ],
            extensions: [ '', '.js', '.json', '.jsx' ],
            alias: {}
        },

        plugins: [
            new webpack.ProvidePlugin({})
        ],

        postcss: function() {
            return [ autoprefixer({ browsers: [ 'last 10 versions', 'not ie <= 9' ] }), precss ];
        }
    },

    devServer: {
        watch: true,

        devtool: 'cheap-source-map',

        devServer: {
            headers: { "Access-Control-Allow-Origin": "*" },
            contentBase: PATH.root,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: '0.0.0.0'
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Home',
                filename: 'index.html',
                template: 'src/index.ejs'

            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    },

    start: {
        entry: {
            app: ENTRY.app
        },

        output: {
            publicPath: 'http://' + os.hostname() + ':8080/'
        },

        module: {
            preLoaders: [
                {
                    test: /\.js$/,
                    include: [ PATH.root ],
                    loader: 'eslint-loader'
                }
            ]
        }
    },

    dist: {
        entry: {
            app: ENTRY.app
        },

        output: {
            path: PATH.dist,
            filename: '[name].min.js',
            publicPath: '/dist/'
        },

        devtool: 'hidden-source-map',

        plugins: [
            new webpack.DefinePlugin({
                '__DEVTOOLS__': false,
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    drop_console: true,
                    warnings: false
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new ExtractTextPlugin('[name].min.css')
        ],

        module: {
            loaders: [
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!less')
                }, {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css!postcss')
                }
            ]
        }
    },

    test: {
        entry: {
            test: ENTRY.test
        },

        target: 'node',

        module: {
            loaders: [
                {
                    test: /\.js|jsx$/,
                    include: [ PATH.root ],
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: [ 'es2015', 'stage-0', 'react' ]
                    }
                }, {
                    exclude: /(node_modules)/,
                    test: /\.(less|png|woff|woff2|eot|ttf|svg|css)$/,
                    loader: 'null'
                }, {
                    test: /\.json$/,
                    loader: 'json'
                }
            ]
        },

        resolve: {
            root: [ PATH.root ],
            extensions: [ '', '.js', '.json', '.jsx' ],
            alias: {

            }
        },

        externals: [nodeExternals()],

        devtool: 'source-map'
    },

    playground: {
        entry: {
            playground: ENTRY.playground
        },

        output: {
            path: PATH.root,
            publicPath: '/'
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'Component Playground',
                filename: 'playground/index.html',
                template: 'src/playground/index.ejs',
                excludeChunks: [ 'app' ]
            })
        ],

        resolve: {
            alias: {
                COSMOS_COMPONENTS: path.join(PATH.root, 'playground/components'),
                COSMOS_FIXTURES: path.join(PATH.root, 'playground/fixtures')
            }
        }
    }
};



/**
 * Decide which config to run depending on the target (TARGET is the name of the npm script executed, eg. npm run dist)
 */
switch (TARGET) {
    case 'test':
    case 'test:watch':
        module.exports = CONFIG.test;
        break;

    case 'playground':
        module.exports = merge.smart(CONFIG.common, CONFIG.playground, CONFIG.devServer);
        break;

    case 'start':
        module.exports = merge.smart(CONFIG.common, CONFIG.playground, CONFIG.start, CONFIG.devServer);
        break;

    case 'dist':
    default:
        module.exports = merge.smart(CONFIG.common, CONFIG.dist);
        break;
}
