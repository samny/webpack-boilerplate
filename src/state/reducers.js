import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import client from '../client/client.reducer';

export default combineReducers({
    client,
    routing: routerReducer
})