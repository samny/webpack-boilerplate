export default {
    name: 'Page 2',
    path: '/page-2',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Page').default)
        }, 'page-2')
    }
}