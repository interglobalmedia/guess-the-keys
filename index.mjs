/* set styles for the chordPad div containing keypress result related messages */
import initStyles from './modules/initStyles.mjs'
import chordPadStyles from './modules/chordPadStyles.mjs'
import getRandomColor from './modules/getRandomColor.mjs'
import createCharDivs from './modules/createCharDivs.mjs'

const chordPad = document.querySelector('#keyboard')
const keyInput = document.querySelector('#secret')

initStyles()
createCharDivs()

/* reset div with .keyboard class to its initial state */
document.addEventListener('keydown', function (e) {
	const heading2 = document.querySelector('h2')
	const chord = e.keyCode || e.which
	if (chord === 8) {
		keyInput.value = ``
		heading2.innerHTML = `Answer:`
		chordPad.innerHTML = ``
		chordPad.style.display = `none`
	}
})

/* listen for keypress event anywhere on the html document */
document.addEventListener('keypress', (e) => {
	const chord = e.keyCode || e.which
	const chordStr = String.fromCharCode(chord)
	const heading2 = document.querySelector('h2')

	chordPad.innerHTML += ` <div>${chordStr}</div> `
	if (chordStr === 'm') {
		chordPad.innerText = `oh what a beautiful morning!`
		chordPad.innerText.split('').map((chord, i) => {
			chordPadStyles()

			chordPad.innerHTML += `<div key="${i}" class='key'>${chord}</div>`
		})
		chordPad.innerHTML = `oh what a beautiful morning!`
		chordPad.textContent = `oh what a beautiful morning!`
	} else if (chordStr === 'a') {
		chordPad.innerText = `don't tell me i can't stand the pain!`
		chordPad.innerText.split('').map((chord, i) => {
			chordPadStyles()

			chordPad.innerHTML += `<div key="${i}" class='key'>${chord}</div>`
		})
		chordPad.innerHTML = `don't tell me i can't stand the pain!`
		chordPad.textContent = `don't tell me i can't stand the pain!`
	} else if (chordStr === 'r') {
		chordPad.innerText = `tell me when you're feelin lonely ... i'm sure i didn't catch your name ...`
		chordPad.innerText.split('').map((chord, i) => {
			chordPadStyles()

			chordPad.innerHTML += `<div key="${i}" class='key'>${chord}</div>`
		})
		chordPad.innerHTML = `tell me when you're  feelin lonely ... i'm sure i didn't catch your name ...`
		chordPad.textContent = `tell me when you're  feelin lonely ... i'm sure i didn't catch your name ...`
	} else if (chordStr === 'i') {
		chordPad.innerText = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`
		chordPad.innerText.split('').map((chord, i) => {
			chordPadStyles()

			chordPad.innerHTML += `<div key="${i}" class='key'>${chord}</div>`
		})
		chordPad.innerHTML = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`
		chordPad.textContent = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`
	} else if (keyInput.value !== 'maria') {
		chordPad.innerText = 'Wrong input!'
		heading2.innerText = 'You guessed incorrectly. Try again!'
		chordPad.style.textAlign = 'center'
		chordPad.style.color = getRandomColor()
	} else {
		chordPad.innerText = 'Your input is correct!'
		heading2.innerText = 'You guessed correctly. It is maria!'
	}
})

/* listens for changes in the input field, but does not fire for every change in the input field. In other words, does not fire on every change. Only when the return key is pressed. */
keyInput.addEventListener('change', () => {
	const heading2 = document.querySelector('h2')
	if (keyInput.value !== 'maria') {
		heading2.innerText = 'You guessed incorrectly. Try again!'
		chordPad.innerText = 'Wrong Input!'
		chordPad.style.textAlign = 'center'
		chordPad.style.color = getRandomColor()
	} else {
		heading2.textContent = 'You guessed correctly. It is maria!'
		chordPad.innerText = 'Your input is correct!'
		chordPad.style.textAlign = 'center;'
		chordPad.style.color = getRandomColor()
	}
})

// animated input related code
const animatedButton = document.querySelector('.form-button')
const animatedInputFormDiv = document.querySelector('.search-form-div')
const keysSearchInput = document.querySelector('[name="secret"]')

/*  event to listen for needs to be click to work. when the search form div (animatedInputFormDiv) is clicked on (the input field and button resides inside), the active class is either added to or removed from the div. This is what either expands or collapses the input field. */
animatedButton.addEventListener('click', function (e) {
	e.preventDefault()
	animatedInputFormDiv.classList.toggle('active')
})

/* When the input element is focused upon, meaning the input field text input cursor or caret appears, the class of .focus is added to the search form div (animatedInputFormDiv). */
keysSearchInput.addEventListener('focus', function () {
	animatedInputFormDiv.classList.add('focus')
})

/* When the value of the input field (keysSearchInput) is not empty (has one or more characters typed inside), the class of focus is added to the input (keysSearchInput). And when the input field (keysSearchInput) is empty, the class of focus is removed. */
keysSearchInput.addEventListener('blur', function () {
	keysSearchInput.value.length !== 0
		? animatedInputFormDiv.classList.add('focus')
		: animatedInputFormDiv.classList.remove('focus')
})
