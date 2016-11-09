var path = require('path');

var projectDir = path.join(__dirname, '../');
var srcDir = path.join(projectDir, 'src');

var PATH = {
    project: projectDir,
    src: srcDir,
    dist: path.join(projectDir, 'dist'),
    images: path.join(srcDir, 'resources/images'),
    resources: path.join(srcDir, 'resources'),
    playgroundComponents: path.join(srcDir, 'playground/components'),
    playgroundFixtures: path.join(srcDir, 'playground/fixtures'),
};

var entryCommon = [

    path.join(srcDir, 'normalize.less'),
    path.join(srcDir, 'index.less'),

    // Include polyfills here
    'core-js/fn/object/assign',
    'core-js/es6/promise'
];

var ENTRY = {

    app: entryCommon.concat([
        path.join(srcDir, 'index')
    ]),

    playground: entryCommon.concat([
        path.join(srcDir, 'playground/index')
    ]),

    test: []
};

var LOADER_QUERY = {
    babel: '?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-react-jsx-img-import',
    css: '?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    file: '?context=' + PATH.src + '&name=[path][name].[sha512:hash:base64:7].[ext]'
};

module.exports = {
    LOADER_QUERY: LOADER_QUERY,
    PATH: PATH,
    ENTRY: ENTRY,
};