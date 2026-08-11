import { describe, it, expect } from 'vitest'
import Div from './Div.mjs'

describe('Div', () => {
    it('creates an element with class char-div', () => {
        const divInstance = new Div()
        expect(divInstance.element.tagName).toBe('DIV')
        expect(divInstance.element.getAttribute('class')).toBe('char-div')
    })
    it('sets textContent to exactly one character', () => {
        for (let i = 0; i < 100; i++) {
            const divInstance = new Div()
            expect(divInstance.element.textContent.length).toBe(1)
        }
    })
    it('it sets --deg to a value between 75 and 230', () => {
        for (let i = 0; i < 100; i++) {
            const divInstance = new Div()
            const deg = divInstance.element.style.getPropertyValue('--deg')
            expect(deg).toMatch(/^\d+deg$/)
            const value = parseInt(deg, 10)
            expect(value).toBeGreaterThanOrEqual(75)
            expect(value).toBeLessThanOrEqual(230)
        }
    })
    it('sets --colorbg to a valid hex color', () => {
        for (let i = 0; i < 100; i++) {
            const divInstance = new Div()
            expect(divInstance.element.style.getPropertyValue('--colorbg')).toMatch(/^#[0-9A-F]{6}$/)
        }
    })
    it('sets --colortx to a valid hex color', () => {
            const divInstance = new Div()
            expect(divInstance.element.style.getPropertyValue('--colortx')).toMatch(/^#[0-9A-F]{6}$/)
    })
})