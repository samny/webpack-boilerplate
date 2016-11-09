import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

let initialState = {
    client: {},
    routing: {}
};
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk)
));

export default store;
