import { VueWrapper } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
export default abstract class WrapperMatchers {
    public declare impl: VueWrapper<ComponentPublicInstance>;
    private expectExistence = (
        present: boolean,
        ...wrappers: VueWrapper<ComponentPublicInstance>[]
    ) => {
        if (present && !wrappers?.length) {
            throw new Error('Expected component to be present');
        } else {
            wrappers.forEach((w) => {
                if (w.exists() !== present) {
                    const name = w.vm?.$el?.name ?? w.vm?.$el?.tagName;
                    throw new Error(
                        `Expected component "${name}" to be ${
                            present ? 'present' : 'absent'
                        }`
                    );
                }
                expect(w.exists()).toBe(present);
            });
        }
    };

    expectToBeAbsent = (...wrappers: VueWrapper<ComponentPublicInstance>[]) =>
        this.expectExistence(false, ...wrappers);
    expectToBePresent = (...wrappers: VueWrapper<ComponentPublicInstance>[]) =>
        this.expectExistence(true, ...wrappers);

    expectToBeVisible(visible?: boolean) {
        return expect(this.impl.isVisible()).toBe(
            visible === undefined ? true : visible
        );
    }

    expectToBeExisting(existing?: boolean) {
        return expect(this.impl.exists()).toBe(
            existing === undefined ? true : existing
        );
    }

    expectNotToHaveEmittedEvents() {
        expect(Object.keys(this.impl.emitted())).toStrictEqual([]);
    }
    expectToHaveEmittedEvents(events: string[]) {
        const emittedEvents = Object.keys(this.impl.emitted());
        events.forEach((eventName) =>
            expect(emittedEvents.includes(eventName)).toBe(true)
        );
    }
}
