import VueComponentTestWrapper from '@/index';
import DummyComponent from './DummyComponent.vue';
import ChildDummyComponent from './ChildDummyComponent.vue';

describe('Custom matchers', () => {
    it('should be existing', () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent, {
            shallow: false,
        });
        wrapper.expectToBeExisting();
    });

    it('should be visible', () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        wrapper.expectToBeVisible();
    });

    it('should ChildDummyComponent to be present in DummyComponent', () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        const childComponents =
            wrapper.impl.findAllComponents(ChildDummyComponent);
        wrapper.expectToBePresent(...childComponents);
    });

    it('should DummyComponent to be absent in ChildDummyComponent', () => {
        const wrapper = new VueComponentTestWrapper(ChildDummyComponent);
        const dummyComponents = wrapper.impl.findAllComponents(DummyComponent);
        wrapper.expectToBeAbsent(...dummyComponents);
    });

    it('should not have emit any event', async () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        wrapper.expectNotToHaveEmittedEvents();
    });

    it('should have emit "click" event', async () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        await wrapper.impl.trigger('click');
        wrapper.expectToHaveEmittedEvents(['click']);
    });
});
