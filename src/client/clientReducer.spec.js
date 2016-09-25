import reducer from './client.reducer';
import {RESIZE} from './clientActions';

describe('clientReducer', function() {

    describe('clientReducer.viewport', function() {
        it('should return the initial state', function() {
            expect(
                reducer(undefined, {})
            ).toEqual({ viewport: {} })
        });
        it('should handle RESIZE', function() {
            expect(
                reducer({}, { type: RESIZE, width: 300, height: 100 })
            ).toEqual({
                viewport: {
                    width: 300,
                    height: 100
                }
            });

            expect(
                reducer({}, { type: RESIZE })
            ).toEqual({
                viewport: {
                    width: undefined,
                    height: undefined
                }
            })
        });
    });
});