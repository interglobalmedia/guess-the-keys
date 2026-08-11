import { describe, it, expect, afterEach } from 'vitest'
import createCharDivs from './createCharDivs.mjs'

describe('createCharDivs', () => {
    afterEach(() => {
        document.body.innerHTML = ''
    })
    it('appends 511 divs to the body', () => {
        createCharDivs()
        const divs = document.body.querySelectorAll('.char-div')
        expect(divs.length).toBe(511)
    })
})