# vue-component-test-wrapper

A wrapper for Vue Components that allows testing of lifecycle events and component instances with vue


[![version][version-badge]][package] [![Monthly downloads][npmstats-badge]][npmstats] [![MIT License][license-badge]][license] [![PRs Welcome][prs-badge]][prs]

## What problem is this solving?

When testing Vue components, it can be sometimes redundant to use VueWrapper to perform some test.
This Wrapper, provide some efficient built-in class functions to improve and reuse any testing logic using Vue components.

## Install

```shell
yarn add -D vue-component-test-wrapper
```

or

```shell
npm install -D vue-component-test-wrapper
```

## How to use

```ts
// tests/myTest.spec.ts
import VueComponentWrapper from 'vue-component-test-wrapper';
import MyComponent from '@/components/MyComponent.vue';

describe('My Test', () => {
    it('should have emit a click event', async () => {
        const wrapper = new VueComponentTestWrapper(DummyComponent);
        await wrapper.emit('click');
        wrapper.expectToHaveEmittedEvents(['click']);
    })
})
```

You can also extends it for custom purpose
```typescript
// tests/myTest.spec.ts
import VueComponentWrapper from 'vue-component-test-wrapper';
import MyComponent from '@/components/MyComponent.vue';

const class MyWrapper extends VueComponentTestWrapper {
    myButton() {
        return this.impl.findComponent('.my-btn')
    }
}
describe('My Test', () => {
    it('should have a btn visible on mount', async () => {
        const wrapper = new MyWrapper(DummyComponent);
        expect(wrapper.myBtn().isVisible()).toBe(true)
    })
    
    it('should have emit a click event', async () => {
        const wrapper = new MyWrapper(DummyComponent);
        await wrapper.myBtn().trigger('click');
        expect(wrapper.myBtn().emitted('click')).toBe(true)
    })
})
```

## Options

You can pass an object with options to the `VueComponentTestWrapper`:

### shallow

Use this if you want to override the default shallow mount option of your component.

- Type: `boolean`
- Default: `true`

### props

Use this if you want to pass props to your component.

- Type: `Record<string, unknown>`
- Default: `{}`

### data

Use this if you want to pass data to your component.

- Type: `Record<string, unknown>`
- Default: `{}`

### mocks

Use this if you want to pass mocks to your component.

- Type: `Record<string, unknown>`
- Default: `{}`

### stubs

Use this if you want to pass stubs to your component.

- Type: `Stubs` (from `@vue/test-utils/dist/types`)
- Default: `undefined`

### Plugins

Use this if you want to pass plugins to your component.

- Type: `Plugin` (from `vue`)
- Default: `[]`

### directives

Use this if you want to pass plugins to your component.

- Type: `Record<string, Directive>` (`Directive` from `vue`)
- Default: `[]`


## License

[MIT](https://github.com/thomasbroduch/vue-component-test-wrapper/blob/develop/LICENSE)

[version-badge]: https://img.shields.io/npm/v/vue-component-test-wrapper.svg?style=flat-square
[package]: https://www.npmjs.com/package/vue-component-test-wrapper
[downloads-badge]: https://img.shields.io/npm/dm/vue-component-test-wrapper.svg?style=flat-square
[npmstats]: http://npm-stat.com/charts.html?package=vue-component-test-wrapper
[npmstats-badge]: https://img.shields.io/npm/dm/vue-component-test-wrapper.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/thomasbrodusch/vue-component-test-wrapper/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
