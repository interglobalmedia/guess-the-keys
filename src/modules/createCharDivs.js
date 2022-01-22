import Div from './Div';

/* background related code */

/* creates an empty documentFragment into which the newly created divs generated from new instances of the Div class can be appended. And then that documentFragment is appended to the actual DOM body element. */
function createCharDivs() {
    let root = document.createDocumentFragment();
    const body = document.querySelector('body');
    for (let i = 0; i < 511; i++) {
        let div = new Div();
        root.appendChild(div.element);
    }
    body.appendChild(root);
}

export default createCharDivs