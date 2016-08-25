import {combineReducers} from 'redux';
import {RESIZE} from './clientActions';

function viewport(state = {}, action) {
    switch (action.type) {
        case RESIZE:
            return Object.assign({}, state, {
                width: action.width,
                height: action.height
            });
        default:
            return state
    }
}

const clientReducers = combineReducers({
    viewport
});

export default clientReducers;