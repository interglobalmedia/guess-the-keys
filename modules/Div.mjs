import pickColor from './pickColor.mjs';
import getRandomColor from './getRandomColor.mjs';
import range from './range.mjs';
import getChar from './getChar.mjs';

/* background related code */

/* creates a div for each unicode character set used to create the background design of the application and sets  the custom css properties named --deg, --colorbg, and colortx to these divs. These properties are used in the external CSS towards the background linear-gradient created and set on each div. */
class Div {
    constructor() {
        this.element = document.createElement('div')
        this.element.setAttribute('class', 'char-div')
        this.element.textContent = getChar();
        this.element.style.setProperty('--deg', range(75, 230) + 'deg');
        let color = pickColor(getRandomColor());
        this.element.style.setProperty('--colorbg', color);
        this.element.style.setProperty('--ciolortx', color)
    }
}

export default Div