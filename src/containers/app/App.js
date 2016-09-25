import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import viewportResizeMonitor from '../../client/util/viewportResizeMonitor';
import Image from '../../components/media/Image';
import './App.less';

export class App extends Component {
    static propTypes = {
        viewport: PropTypes.any
    };

    constructor(props) {
        super(props);
        // bind callbacks here
    }

    componentDidMount() {
        viewportResizeMonitor.start();
    }

    componentWillUnmount() {
        viewportResizeMonitor.stop();
    }

    render() {
        let props = this.props;
        let random = Math.floor(Math.random() * 9) + 1;
        return (<div className="App">
            <p>Hello! {props.viewport.height} {props.viewport.width}</p>
            <Image background src={`sequence/test_${random}.jpg`}/>
            <Image src={`sequence/test_${random}.jpg`}/>
        </div>);
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

