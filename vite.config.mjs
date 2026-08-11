import { defineConfig } from 'vitest/config'

export default defineConfig({
    base: '/guess-the-keys/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    },
    test: {
        globals: true,
        environment: 'jsdom'
    },
    
})