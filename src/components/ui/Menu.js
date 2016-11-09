import React from 'react';
import {Link} from 'react-router';
import rootRoute from '../../routes';

export default function () {
    const links = rootRoute
        .childRoutes[0]
        .childRoutes
        .map((route, i)=> {
            return (<li key={i}><Link to={route.path}>{route.name}</Link></li>);
        });

    return (<nav>
        <ul>
            <li><Link to="/">Start</Link></li>
            { links }
        </ul>
    </nav>);
}
