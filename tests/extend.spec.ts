import VueComponentTestWrapper from '@/index';
import ChildDummyComponent from './ChildDummyComponent.vue';
import DummyComponent from './DummyComponent.vue';

class DummyComponentWrapper extends VueComponentTestWrapper {
    childComponent() {
        return this.impl.findComponent(ChildDummyComponent);
    }

    expectToHaveChildComponent() {
        const wrappers = this.impl.findAllComponents(ChildDummyComponent);
        return this.expectToBePresent(...wrappers);
    }
}

describe('Extend', () => {
    it('should wrapper.childComponent.exists() returns true', () => {
        const wrapper = new DummyComponentWrapper(DummyComponent);
        expect(wrapper.childComponent().exists()).toBe(true);
    });

    it('should wrapper.expectToHaveChildComponent() pass', () => {
        const wrapper = new DummyComponentWrapper(DummyComponent);
        wrapper.expectToHaveChildComponent();
    });
});
