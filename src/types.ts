import { Stubs } from '@vue/test-utils/dist/types';
import { ComponentPublicInstance, Directive, Plugin } from 'vue';

export type VueComponentTestWrapperOptions = {
    shallow?: boolean;
    props?: Record<string, unknown>;
    data?: Record<string, unknown>;
    mocks?: Record<string, unknown>;
    stubs?: Stubs;
    components?: Record<string, ComponentPublicInstance>;
    plugins?: Plugin[];
    provide?: Record<string, unknown>;
    directives?: Record<string, Directive>;
};
