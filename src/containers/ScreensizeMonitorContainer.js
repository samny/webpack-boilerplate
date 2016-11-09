import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import viewportResizeMonitor from '../client/util/viewportResizeMonitor';

export class App extends Component {
    static propTypes = {
        viewport: PropTypes.any
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        viewportResizeMonitor.start();
    }

    componentWillUnmount() {
        viewportResizeMonitor.stop();
    }

    render() {
        let props = this.props;
        return ( <div>Viewport size: <span>{props.viewport.height}</span> x <span>{props.viewport.width}</span> px</div>);
    }
}

export const mapStateToProps = function (state) {
    return {
        viewport: state.client.viewport
    };
};

export const mapDispatchToProps = function (/*dispatch*/) {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

