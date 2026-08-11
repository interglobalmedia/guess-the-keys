import { describe, it, expect } from 'vitest'
import getRandomColor from './getRandomColor.mjs'

describe('getRandomColor', () => {
    it('builds a 6-digit hex color string prefixed with #', () => {
        const result = getRandomColor()
        expect(result).toMatch(/^#[0-9A-F]{6}$/)
    })
})