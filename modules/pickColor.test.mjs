import { describe, it, expect } from 'vitest'
import pickColor from './pickColor.mjs'

describe('pickColor', () => {
    it('it picks one of the provided colors', () => {
        for (let i = 0; i < 100; i++) {
            const result = pickColor('green', 'red', 'blue')
            expect(['green', 'red', 'blue']).toContain(result)
        }
    })
})