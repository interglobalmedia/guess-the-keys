import { defineConfig } from 'vitest/config'

export default defineConfig({
    base: '/guess-the-keys/',
    build: {
        outDir: 'dist',
        emptyOutDir: true
    },
    test: {
        globals: true,
        environment: "jsdom",
        coverage: {
            provider: 'istanbul',
        },
    },
    
})