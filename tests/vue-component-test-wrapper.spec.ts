import VueComponentTestWrapper from '@/index';
import DummyComponent from './DummyComponent.vue';

describe('vue-component-test-wrapper', () => {
    it('should prompt component shallow html structure', () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        expect(wrapper.html()).toEqual(
            `<div class="dummy-component"><span class="message">Hello World!</span>
  <child-dummy-component-stub></child-dummy-component-stub>
</div>`
        );
    });

    it('should prompt component mount html structure', () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent, {
            shallow: false,
        });
        expect(wrapper.html()).toEqual(
            `<div class="dummy-component"><span class="message">Hello World!</span>
  <div class="child-dummy-component">Hello World from child component!</div>
</div>`
        );
    });

    it('should implements nextTick', async () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        const messageDiv = wrapper.impl.find('.message');
        expect(messageDiv.text()).toEqual('Hello World!');
        await wrapper.nextTick();
        expect(messageDiv.text()).toEqual('Good Bye!');
    });
});
