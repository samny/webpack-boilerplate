define([
    'react',
    'classnames',
    './BaseButton.less'
], function(React, classnames) {

    return React.createClass({

        displayName: 'BaseButton',

        propTypes: {
            theme: React.PropTypes.string,
            url: React.PropTypes.string,
            urlTarget: React.PropTypes.string,
            text: React.PropTypes.string,
            disabled: React.PropTypes.bool,
            track: React.PropTypes.string,
            test: React.PropTypes.string,
            onClick: React.PropTypes.func,
            className: React.PropTypes.string,
            children: React.PropTypes.node,
            smaller: React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                theme: 'default',
                disabled: false,
                variant: undefined,
                size: undefined,
                track: undefined,
                url: undefined,
                onClick: undefined,
                urlTarget: undefined,
                smaller: false
            };
        },

        render: function() {
            var clns = classnames('BaseButton', {
                [`BaseButton-theme-${this.props.theme}`]: !!this.props.theme,
                'BaseButton-smaller': this.props.smaller,
                'is-disabled': this.props.disabled
            }, this.props.className);

            var Element = function(props) {
                return (props.href && props.href !== '#') ? React.DOM.a(props, props.children) : React.DOM.button(props, props.children);
            };

            return (
                <Element href={ this.props.url }
                         target={ this.props.urlTarget }
                         data-track={ this.props.track }
                         data-test={ this.props.test }
                         onClick={(typeof this.props.onClick === 'function') ? this.props.onClick : undefined}
                         className={ clns }><span
                    className="BaseButton_inner">{ this.props.text } {this.props.children}</span></Element>
            );
        }
    });
});
