import $ from 'jquery';
import classnames from 'classnames';
import './BaseButton.css';

export default function(props) {
    var theme = props.theme || 'default';

    var clns = classnames('BaseButton', {
        [`BaseButton-theme-${theme}`]: !!theme,
        'is-disabled': props.disabled
    });

    var tagName = (function(props) {
        return (props.href && props.href !== '#') ? 'a' : 'button';
    })(props);

    var $el = $(`<${tagName} href="${ props.url }"
                 target="${ props.urlTarget || '' }"
                 class="${ clns }"><span class="BaseButton_inner">${ props.text }</span></${tagName}>`);

    $el.on('click', props.onClick);

    return $el;
}

