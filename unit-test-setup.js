/*eslint no-undef:0*/
require('jsdom-global/register');

require('source-map-support').install({
    environment: 'node'
});

global.expect = require('expect');
global.createSpy = global.expect.createSpy;
global.spyOn = global.expect.spyOn;
global.isSpy = global.expect.isSpy;

