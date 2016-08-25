import $ from 'jquery';
import StandardButton from './ui/BaseButton';

var handleClick = () => {
    console.log('Clicked!');
};

$('#App').append(StandardButton({ onClick: handleClick, text: 'Click me'}));



