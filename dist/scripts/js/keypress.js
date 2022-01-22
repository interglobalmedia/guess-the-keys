/* keyboard related global variables */
const chordPad = document.querySelector('#keyboard');
const key = document.querySelector('.key');
const keyInput = document.querySelector('#secret');

window.onload = initStyles();

/* Set default styles on for div with .keyboard class on load */
function initStyles() {
    const body = document.querySelector('body');
    const heading2 = document.querySelector('h2');

    heading2.style.margin = '0 auto';
    heading2.style.textAlign = 'center';
    heading2.style.display = 'block';
    heading2.style.color = 'rebeccapurple';

    keyInput.style.display = 'block';
    keyInput.style.backgroundColor = `rgba(254, 111, 117, 1)`;
    keyInput.style.margin = '20px auto';

    body.style.backgroundColor = `#fdf6e3`;
}

/* set styles for the chordPad div containing keypress result related messages */
function chordPadStyles() {
    chordPad.style.color = getRandomColor();
    chordPad.style.backgroundColor = getRandomColor();
    chordPad.style.border = '2px dashed';
    chordPad.style.borderColor = getRandomColor();
    chordPad.style.padding = '10px';
    chordPad.style.margin = '0 auto';
    chordPad.style.fontSize = '20px';
    chordPad.style.display = 'block';
    chordPad.style.textAlign = 'center';
}

/* function to create random colors for background and border of #keyboard */
function getRandomColor() {
    const chars = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.round(Math.random() * 15)];
    }
    return color;
}

/* reset div with .keyboard class to its initial state */
document.addEventListener('keydown', function (e) {
    const heading2 = document.querySelector('h2');
    const chord = e.keyCode || e.which;
    if (chord === 8) {
        keyInput.value = ``;
        heading2.innerHTML = `Answer:`;
        chordPad.innerHTML = ``;
        chordPad.style.display = `none`;
    }
});

/* listen for keypress event anywhere on the html document */
document.addEventListener('keypress', (e) => {
    const chord = e.keyCode || e.which;
    const chordStr = String.fromCharCode(chord);
    const heading2 = document.querySelector('h2');

    chordPad.innerHTML += ` <div>${chordStr}</div> `;
    if (chordStr === 'm') {
        chordPad.innerText = `oh what a beautiful morning!`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPadStyles();

            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `oh what a beautiful morning!`;
        chordPad.textContent = `oh what a beautiful morning!`;
        console.log(chordPad);
    } else if (chordStr === 'a') {
        chordPad.innerText = `don\'t tell me i can\'t stand the pain!`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPadStyles();

            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `don\'t tell me i can\'t stand the pain!`;
        chordPad.textContent = `don\'t tell me i can\'t stand the pain!`;
        console.log(chordPad);
    } else if (chordStr === 'r') {
        chordPad.innerText = `tell me when you\'re feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPadStyles();

            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `tell me when you\'re  feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        chordPad.textContent = `tell me when you\'re  feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        console.log(chordPad);
    } else if (chordStr === 'i') {
        chordPad.innerText = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPadStyles();
            
            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        chordPad.textContent = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        console.log(chordPad);
    } else if (keyInput.value !== ('maria')) {
        chordPad.innerText = 'Wrong input!';
        heading2.innerText = 'You guessed incorrectly. Try again!';
        chordPad.style.textAlign = 'center';
        chordPad.style.color = getRandomColor();
    } else {
        chordPad.innerText = 'Your input is correct!';
        heading2.innerText = 'You guessed correctly. It is maria!';
    }
})

/* listens for changes in the input field, but does not fire for every change in the input field. In other words, does not fire on every change. Only when the return key is pressed. */
keyInput.addEventListener('change', () => {
    const heading2 = document.querySelector('h2');
    if (keyInput.value !== 'maria') {
        heading2.innerText = 'You guessed incorrectly. Try again!';
        chordPad.innerText = 'Wrong Input!';
        chordPad.style.textAlign = 'center';
        chordPad.style.color = getRandomColor();
    } else {
        heading2.textContent = 'You guessed correctly. It is maria!';
        chordPad.innerText = 'Your input is correct!';
        chordPad.style.textAlign = 'center;'
        chordPad.style.color = getRandomColor();
    }
})

/* background related code */
/* sets the unicode values range to select from as part of the document (body) background */
function range(from, to) {
    return ~~(Math.random() * (to - from + 1) + from);
}

/* transforms the randomly generated unicode values from the range function into actual characters and returns a string representing the unicode characters. */
function getChar() {
    // 2300 - 23
    return String.fromCharCode(range(2300, 23));
}

/* sets a range of colors inside an array with the help of teh JS arguments object, the value inside of [] being the values representing the range of degrees passed to the function inside the Div Class constructor() method below. */
function pickColor() {
    return arguments[range(0, arguments.length - 1)];
}

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

createCharDivs();

// animated input related code
const animatedButton = document.querySelector('.form-button');
const animatedInputFormDiv = document.querySelector('.search-form-div');
const keysSearchInput = document.querySelector('[name="secret"]');

/*  event to listen for needs to be click to work. when the search form div (animatedInputFormDiv) is clicked on (the input field and button resides inside), the active class is either added to or removed from the div. This is what either expands or collapses the input field. */
animatedButton.addEventListener('click', function (e) {
    e.preventDefault();
    animatedInputFormDiv.classList.toggle('active');
})

/* When the input element is focused upon, meaning the input field text input cursor or caret appears, the class of .focus is added to the search form div (animatedInputFormDiv). */
keysSearchInput.addEventListener('focus', function (e) {
    animatedInputFormDiv.classList.add('focus');
})

/* When the value of the input field (keysSearchInput) is not empty (has one or more characters typed inside), the class of focus is added to the input (keysSearchInput). And when the input field (keysSearchInput) is empty, the class of focus is removed. */
keysSearchInput.addEventListener('blur', function (e) {
    keysSearchInput.value.length !== 0 ? animatedInputFormDiv.classList.add('focus') : animatedInputFormDiv.classList.remove('focus');
})
