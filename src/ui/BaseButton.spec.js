import React from 'react'
import StandardButton from './BaseButton';

function setup() {
    const shallowRenderer = ReactTestUtils.createRenderer();

    return {
        shallowRenderer
    }
}

describe('ui', function() {
    describe('StandardButton', function() {
        it('should render self and subcomponents', function() {
            const { shallowRenderer, hello } = setup();
            shallowRenderer.render(<StandardButton text="Click me"></StandardButton>);
            var renderedComponent = shallowRenderer.getRenderOutput();

            expect(
                renderedComponent.props.className
            ).toEqual('BaseButton BaseButton-theme-default');

            expect(
                renderedComponent.props.children.type
            ).toEqual('span');

            expect(
                renderedComponent.props.children.props.children
            ).toEqual([ 'Click me', ' ', undefined ]);
        });
    });
});