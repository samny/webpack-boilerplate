export default {
    name: 'Page 1',
    path: '/page-1',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Page').default)
        }, 'page-1')
    }
}