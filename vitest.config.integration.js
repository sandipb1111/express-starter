import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['src/tests/**/*.test.ts'],
        threads: false,
        setupFiles: ['src/tests/helpers/setup.ts'],
    },
    resolve: {
        alias: {
            lib: '/src/lib',
        },
    },
})
