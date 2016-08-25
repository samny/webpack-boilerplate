import Component from './BaseButton';

describe('ui', function() {
    describe('BaseButton', function() {
        it('should render self and subcomponents', function() {
            const $el = Component({text: 'Click me', theme: 'default'});
            expect(
                $el.attr('class')
            ).toEqual('BaseButton BaseButton-theme-default');
        });
    });
});