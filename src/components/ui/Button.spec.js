import StandardButton from './Button';

function setup() {
    const shallowRenderer = ReactTestUtils.createRenderer();

    return {
        shallowRenderer
    }
}

describe('ui', function() {
    describe('StandardButton', function() {
        it('should render self and subcomponents', function() {
            const { shallowRenderer } = setup();
            shallowRenderer.render(<StandardButton text="Click me"/>);
            var renderedComponent = shallowRenderer.getRenderOutput();

            expect(
                renderedComponent.props.children.type
            ).toEqual('span');

            expect(
                renderedComponent.props.children.props.children
            ).toEqual([ 'Click me', ' ', undefined ]);
        });
    });
});