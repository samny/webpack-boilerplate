import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './Button.less';

export class Button extends Component {
    displayName: 'Button';

    static propTypes = {
        url: PropTypes.string,
        urlTarget: PropTypes.string,
        text: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string,
        children: PropTypes.node
    };

    constructor(props) {
        super(props);
    }

    render () {
        var clns = classNames(styles.root, {
            [styles['is-disabled']]: this.props.disabled
        }, this.props.className);

        var Element = function (props) {
            return (props.href && props.href !== '#') ? React.DOM.a(props, props.children) : React.DOM.button(props, props.children);
        };

        return (
            <Element href={ this.props.url }
                     target={ this.props.urlTarget }
                     onClick={(typeof this.props.onClick === 'function') ? this.props.onClick : undefined}
                     className={ clns }><span
                className={styles.inner}>{ this.props.text } {this.props.children}</span></Element>
        );
    }
}

export default Button;
