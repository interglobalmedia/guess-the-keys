import { describe, it, expect } from 'vitest'
import range from './range.mjs'

describe('range', () => {
    it('returns an integer', () => {
        const result = range(0, 10)
        expect(Number.isInteger(result)).toBe(true)
    })

    it('returns a value within the given bounds, inclusive', () => {
        for (let i = 0; i < 100; i++) {
            const result = range(5, 15)
            expect(result).toBeGreaterThanOrEqual(5)
            expect(result).toBeLessThanOrEqual(15)
        }
    })

    it('returns the same value when from and to are equal', () => {
        expect(range(7, 7)).toBe(7)
    })
})
