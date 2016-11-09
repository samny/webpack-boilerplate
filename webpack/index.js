var merge = require('webpack-merge');

var common = require('./common');
var start = require('./start');
var dist = require('./dist');
var test = require('./test');
var devServer = require('./devserver');
var playground = require('./playground');

var TARGET = process.env.npm_lifecycle_event;

switch (TARGET) {
    case 'test':
    case 'test:watch':
        module.exports = test;
        break;

    case 'playground':
        module.exports = merge.smart(common, playground, devServer);
        break;

    case 'start':
        module.exports = merge.smart(common, playground, start, devServer);
        break;

    case 'dist':
    case 'start:dist':
    default:
        module.exports = merge.smart(common, playground, dist);
        break;
}