import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import chordPadStyles from './chordPadStyles.mjs'

describe('Sets styles for the chordPad div containing keypress result-related messages', () => {
    beforeEach(() => {
        document.body.innerHTML = `<div id="keyboard"></div> `
    })

    it('sets fixed style properties on #keyboard', () => {
        chordPadStyles()
        const chordPad = document.querySelector('#keyboard')

        expect(chordPad.style.borderWidth).toBe('2px')
        expect(chordPad.style.borderStyle).toBe('dashed')
        expect(chordPad.style.padding).toBe('10px')
        expect(chordPad.style.margin).toBe('0px auto')
        expect(chordPad.style.fontSize).toBe('20px')
        expect(chordPad.style.display).toBe('block')
        expect(chordPad.style.textAlign).toBe('center')
    })
   
    it('sets color, backgroundColor, and borderColor to valid rgb colors', () => {  
        chordPadStyles()
        const chordPad = document.querySelector("#keyboard")

        expect(chordPad.style.color).toMatch(/^rgb\(\d+, \d+, \d+\)$/)
        expect(chordPad.style.backgroundColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/)
        expect(chordPad.style.borderColor).toMatch(/^rgb\(\d+, \d+, \d+\)$/)
    })
})