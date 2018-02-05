const chordPad = document.querySelector('#keyboard');
const button = document.querySelector('#reset');

button.style.backgroundColor = '#caff70';
button.style.color = 'green';
button.style.letterSpacing = '0.1em';
button.style.border = '2px dashed rebeccapurple';
button.style.fontWeight = '300';
button.style.fontSize = '1rem';
button.style.boxShadow = '0 2px 2px #333';

const heading2 = document.querySelector('h2');
heading2.style.margin = '0 auto';
heading2.style.textAlign = 'center';
heading2.style.display = 'block';
heading2.style.color = 'rebeccapurple';

const input = document.querySelector('#secret');
input.style.display = 'block';
input.style.margin = '20px auto';

const body = document.querySelector('body');
body.style.backgroundColor = '#fdf6e3';

// function to create random colors for background and border of #keyboard
function get_random_color() {
    var chars = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += chars[Math.round(Math.random() * 15)];
    }
    return color;
}

// listen for keypress event anywhere on the html document
document.addEventListener('keypress', (e) => {
    const chord = e.keyCode || e.which;
    const chordStr = String.fromCharCode(chord);
    chordPad.innerHTML += ` <div>${chordStr}</div> `;
    if (chordStr === 'm') {
        chordPad.innerText = `oh what a beautiful morning!`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPad.style.color = 'white';
            chordPad.style.backgroundColor = get_random_color();
            chordPad.style.border = '2px dashed';
            chordPad.style.borderColor = get_random_color();
            chordPad.style.padding = '20px 0';
            chordPad.style.margin = '0 auto';
            chordPad.style.fontSize = '20px';
            chordPad.style.display = 'block';
            chordPad.style.textAlign = 'center';
            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `oh what a beautiful morning!`;
        chordPad.textContent = `oh what a beautiful morning!`;
        console.log(chordPad);
    } else if (chordStr === 'a') {
        chordPad.innerText = `don\'t tell me i can\'t stand the pain!`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPad.style.color = 'white';
            chordPad.style.backgroundColor = get_random_color();
            chordPad.style.border = '2px dashed';
            chordPad.style.borderColor = get_random_color();
            chordPad.style.padding = '20px 0';
            chordPad.style.margin = '0 auto';
            chordPad.style.fontSize = '20px';
            chordPad.style.display = 'block';
            chordPad.style.textAlign = 'center';
            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `don\'t tell me i can\'t stand the pain!`;
        chordPad.textContent = `don\'t tell me i can\'t stand the pain!`;
        console.log(chordPad);
    } else if (chordStr === 'r') {
        chordPad.innerText = `tell me when you\'re feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPad.style.color = 'white';
            chordPad.style.backgroundColor = get_random_color();
            chordPad.style.border = '2px dashed';
            chordPad.style.borderColor = get_random_color();
            chordPad.style.padding = '20px 0';
            chordPad.style.margin = '0 auto';
            chordPad.style.fontSize = '20px';
            chordPad.style.display = 'block';
            chordPad.style.textAlign = 'center';
            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `tell me when you\'re  feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        chordPad.textContent = `tell me when you\'re  feelin lonely ... i\'m sure i didn\'t catch your name ...`;
        console.log(chordPad);
    } else if (chordStr === 'i') {
        chordPad.innerText = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        chordPad.innerText.split('').map((chord, i) => {
            chordPad.style.color = 'white';
            chordPad.style.backgroundColor = get_random_color();
            chordPad.style.border = '2px dashed';
            chordPad.style.borderColor = get_random_color();
            chordPad.style.padding = '20px 0';
            chordPad.style.margin = '0 auto';
            chordPad.style.fontSize = '20px';
            chordPad.style.display = 'block';
            chordPad.style.textAlign = 'center';
            chordPad.innerHTML += `<div key="i" class='key'>${chord}</>`;
        })
        chordPad.innerHTML = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        chordPad.textContent = `bela lugosi\'s dead ... the bats have left the bell tower ... bela lugosi\'s dead ...`;
        console.log(chordPad);
    } else if (input.value !== 'maria') {
        chordPad.innerText = 'Wrong input. Try again!';
        heading2.innerText = 'You guessed incorrectly. Try again!';
        chordPad.style.textAlign = 'center';
        chordPad.style.color = 'tomato';
    } else {
        chordPad.innerText = 'Your input is correct!';
        heading2.innerText = 'You guessed correctly. It is maria!';
    }
})

input.addEventListener('change', () => {
    if (input.value !== 'maria') {
        heading2.innerText = 'You guessed incorrectly. Try again!';
        chordPad.innerText = 'Wrong Input. Try again!';
        chordPad.style.textAlign = 'center';
        chordPad.style.color = 'tomato';
    } else {
        heading2.innerHTML = 'You guessed correctly. It is maria!';
        chordPad.innerText = 'Your input is correct!';
        chordPad.style.textAlign = 'center;'
        chordPad.style.color = 'white';
        input.disabled = true;
    }
})

button.addEventListener('click', () => {
    chordPad.innerText = '';
    chordPad.style.backgroundColor = 'transparent';
    chordPad.style.border = 'none';
    chordPad.style.borderColor = 'none';
    chordPad.style.display = 'none'
    heading2.innerHTML = 'Answer:';
    input.value = '';
    window.location.reload();
})