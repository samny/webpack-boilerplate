import React from 'react';
import Menu from '../ui/Menu';
import styles from './Layout.less';
import ScreensizeMonitorContainer from '../../containers/ScreensizeMonitorContainer.js';

function Layout(props) {
    return (
        <div className={styles.root}>
            <Menu/>
            {props.children}
            <ScreensizeMonitorContainer/>
        </div>
    );
}
Layout.propTypes = {
    children: React.PropTypes.node
};

export default Layout;