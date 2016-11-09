import Layout from '../components/layout/Layout';
import page1 from './page-1';
import page2 from './page-2';
import page3 from './page-3';
import page4 from './page-4';

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: Layout,
        indexRoute: {
            getComponent(nextState, cb) {
                require.ensure([], (require) => {
                    cb(null, require('./Page').default)
                }, 'start')
            }
        },
        childRoutes: [
            page1,
            page2,
            page3,
            page4
        ]
    }]
};

export default rootRoute;

