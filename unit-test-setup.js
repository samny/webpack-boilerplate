/*eslint no-undef:0*/
require('jsdom-global/register');
global.expect = require('expect');
global.createSpy = global.expect.createSpy;
global.spyOn = global.expect.spyOn;
global.isSpy = global.expect.isSpy;
global.ReactTestUtils = require('react-addons-test-utils');
global.ReactDOM = require('react-dom');
global.React = require('react');
global.shallow = require('enzyme/shallow');
global.mount = require('enzyme/mount');
require('source-map-support').install({
    environment: 'node'
});
