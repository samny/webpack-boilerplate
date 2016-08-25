import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

let initialState = {
    client: {}
};

const store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));

export default store;
