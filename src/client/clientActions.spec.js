import expect from 'expect'
import {resize, RESIZE} from './clientActions';

describe('clientActions', function() {
    describe('clientActions.resize', function() {
        it('should create RESIZE action', function() {
            expect(resize({
                innerWidth: 300, innerHeight: 200
            })).toEqual({
                type: RESIZE,
                width: 300,
                height: 200
            })
        });
    });
});