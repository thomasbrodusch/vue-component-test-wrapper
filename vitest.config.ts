import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    resolve: { alias: { '@': '/src' } },
    plugins: [vue()],
    test: {
        environment: 'happy-dom',
        globals: true,
        mockReset: true,
        restoreMocks: true,
        setupFiles: ['./tests/support'],
    },
});
