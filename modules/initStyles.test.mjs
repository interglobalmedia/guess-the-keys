import { describe, it, expect, beforeEach } from 'vitest'
import initStyles from './initStyles.mjs'

describe('initStyles', () => {
    beforeEach(() => {
        document.body.innerHTML = `<h2></h2><input id="secret"></input>`
    })
    it('sets fixed style properties on #secret', () => {
        initStyles()
        const body = document.querySelector('body');
        const keyInput = document.querySelector('#secret');
        const heading2 = document.querySelector('h2');
        expect(heading2.style.margin).toBe('0px auto')
        expect(heading2.style.textAlign).toBe('center')
        expect(heading2.style.display).toBe('block')
        expect(keyInput.style.display).toBe('block')
        expect(keyInput.style.margin).toBe('20px auto')
    })
    it('sets color,and backgroundColor, to valid rgb colors', () => {
        initStyles()
        const body = document.querySelector('body');
        const keyInput = document.querySelector('#secret');
        const heading2 = document.querySelector('h2');
        expect(heading2.style.color).toBe('rebeccapurple')
        expect(keyInput.style.backgroundColor).toBe('rgb(254, 111, 117)')
        expect(body.style.backgroundColor).toBe('rgb(253, 246, 227)')
    })
})