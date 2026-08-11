import { describe, it, expect } from 'vitest'
import getChar from './getChar.mjs'

describe('getChar', () => {
    it('returns a string', () => {
        const result = getChar()
        expect(typeof result).toBe('string')
    })
    it('returns exactly one character', () => {
        for (let i = 0; i < 100; i++) {
            const result = getChar()
            expect(result.length).toBe(1)
        }
    })
})