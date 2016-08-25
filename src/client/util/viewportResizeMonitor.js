import _ from 'lodash';
import {resize} from '../clientActions';
import store from '../../app/store';

const handleResize = _.debounce(function() {
    console.log('handleResize');
    store.dispatch(resize(window));
}, 500, { leading: false });


function start() {
    store.dispatch(resize(window));
    window.addEventListener('resize', handleResize);
}
function stop() {
    window.removeEventListener('resize', handleResize);
}

export default {
    start,
    stop
};

