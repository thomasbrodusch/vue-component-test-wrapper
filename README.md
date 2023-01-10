# vue-component-test-wrapper

A wrapper for Vue Components that allows testing of lifecycle events and component instances with vue


[![version][version-badge]][package] [![Monthly downloads][npmstats-badge]][npmstats] [![MIT License][license-badge]][license] [![PRs Welcome][prs-badge]][prs]

## What problem is this solving?

A module designed to make it a bit easier to access the instance of the component you're rendering for tests.

## Install

```shell
yarn add -D vue-component-test-wrapper
```

or

```shell
npm install -D vue-component-test-wrapper
```

## How to use

In a file used in the `setupFiles` option of Vitest's config file (`vitest.config.ts`), add this code:

```ts
// tests/myTest.spec.ts
import VueComponentWrapper from 'vue-component-test-wrapper';
import MyComponent from '@/components/MyComponent.vue';

describe('My Test', () => {
    it('should render my component', () => {
        const wrapper = new VueComponentWrapper(MyComponent, {
            shallow: false
        })
    })
})
```

## Options

You can pass an object with options to the function:

### shallow

Use this if you want to override the default shallow mount option of your component.

- Type: `boolean`
- Default: `true`

### props

Use this to make a test fail when a `console.assert()` is logged.

- Type: `boolean`
- Default: `false`

### data

Use this to make a test fail when a `console.debug()` is logged.

- Type: `object`
- Default: `{}`

### mocks

Use this to make a test fail when a `console.error()` is logged.

- Type: `object`
- Default: `{}`

### stubs

Use this to make a test fail when a `console.info()` is logged.

- Type: `Stubs` (from `@vue/test-utils/dist/types`)
- Default: `false`

### Plugins

Use this to make a test fail when a `console.log()` is logged.

- Type: `GlobalMountOptions['plugins']` (from `@vue/test-utils/dist/types`)
- Default: `[]`


## License

[MIT](https://github.com/thomasbroduch/vue-component-test-wrapper/blob/develop/LICENSE)

[version-badge]: https://img.shields.io/npm/v/vue-component-test-wrapper.svg?style=flat-square
[package]: https://www.npmjs.com/package/vue-component-test-wrapper
[downloads-badge]: https://img.shields.io/npm/dm/vue-component-test-wrapper.svg?style=flat-square
[npmstats]: http://npm-stat.com/charts.html?package=vue-component-test-wrapper
[npmstats-badge]: https://img.shields.io/npm/dm/vue-component-test-wrapper.svg?style=flat-square
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/ValentinH/vue-component-test-wrapper/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
