export default {
    name: 'Page 4',
    path: '/page-4',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Page').default)
        }, 'page-4')
    }
}