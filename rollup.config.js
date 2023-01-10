import typescript from '@rollup/plugin-typescript';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const outputOptions = {
    sourcemap: true,
    exports: 'named',
    banner: `/*
   * Vue-test-component-wrapper
   * https://github.com/thomasbrodusch/vue-component-test-wrapper
   * (c) Thomas Brodusch <brodusch.thomas@gmail.com>
   */`,
};

const config = [
    {
        input: `src/index.ts`,
        plugins: [typescript(), esbuild()],
        output: [
            {
                dir: `dist/cjs`,
                format: 'cjs',
                ...outputOptions,
            },
            {
                dir: `dist/esm`,
                format: 'es',
                ...outputOptions,
            },
        ],
    },
    {
        input: `src/index.ts`,
        plugins: [dts()],
        output: {
            file: `dist/index.d.ts`,
            format: 'es',
        },
    },
];

export default config;
