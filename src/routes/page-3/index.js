export default {
    name: 'Page 3',
    path: '/page-3',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Page').default)
        }, 'page-3')
    }
}