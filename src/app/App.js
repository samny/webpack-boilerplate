import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import viewportResizeMonitor from '../client/util/viewportResizeMonitor';



class App extends Component {
    static propTypes = {
        viewport: PropTypes.any
    };

    constructor(props) {
        super(props);
        // bind callbacks here
    }

    componentDidMount(){
        viewportResizeMonitor.start();
    }

    componentWillUnmount(){
        viewportResizeMonitor.stop();
    }

    render() {
        let props = this.props;
        return (<div className="App">Hello! {props.viewport.height} {props.viewport.width}</div>);
    }
}

// App.propTypes = { viewport: PropTypes.any };
// App.defaultProps = {};

export default connect((state)=> {
    return {
        viewport: state.client.viewport
    };
}, (/*dispatch*/) => {
    return {
        //
    };
})(App);

