import { mount, VueWrapper } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import { VueComponentTestWrapperOptions } from '@/types';
import WrapperMatchers from '@/wrapperMatchers';

export default class VueComponentTestWrapper extends WrapperMatchers {
    public declare impl: VueWrapper<ComponentPublicInstance>;
    constructor(
        component: ComponentPublicInstance,
        options: VueComponentTestWrapperOptions = {}
    ) {
        const {
            shallow = true,
            props,
            data = {},
            mocks,
            stubs,
            plugins = [],
            directives = {},
        } = options ?? {};
        super();
        this.impl = mount(component, {
            shallow,
            global: {
                plugins,
                stubs,
                mocks,
                directives,
            },
            props,
            data: () => data,
        });
    }

    async nextTick() {
        return this.impl.vm.$nextTick();
    }
    html() {
        return this.impl.html();
    }
}
