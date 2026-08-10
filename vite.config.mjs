import { defineConfig } from 'vite'

export default defineConfig({
    base: '/guess-the-keys/',
    build: {
        outDir: 'docs',
        emptyOutDir: true
    }
})