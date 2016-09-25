define([
    'react',
    '../../components/ui/BaseButton'
], function(
    React,
    Component
) {
    function Container(props) {
        return (
            <Component {...props} />
        );
    }

    Container.defaultProps = {
        text: '[Text]'
    };

    return Container;
});
