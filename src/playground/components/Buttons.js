import React from 'react';
import Component from '../../components/ui/Button';

function Container(props) {
    return (
        <Component {...props} />
    );
}

Container.defaultProps = {
    text: '[Text]'
};

export default Container;

