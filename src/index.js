import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux';
import store from './state/store';
import rootRoute from './routes/index';

const history = syncHistoryWithStore(browserHistory, store);

render(<Provider store={store}>
    <Router history={history}
            routes={rootRoute}/></Provider>, document.getElementById('App'));
