;(function () {
	let e = document.createElement(`link`).relList
	if (e && e.supports && e.supports(`modulepreload`)) return
	for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e)
	new MutationObserver((e) => {
		for (let t of e)
			if (t.type === `childList`)
				for (let e of t.addedNodes)
					e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
	}).observe(document, { childList: !0, subtree: !0 })
	function t(e) {
		let t = {}
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			(t.credentials =
				e.crossOrigin === `use-credentials`
					? `include`
					: e.crossOrigin === `anonymous`
					? `omit`
					: `same-origin`),
			t
		)
	}
	function n(e) {
		if (e.ep) return
		e.ep = !0
		let n = t(e)
		fetch(e.href, n)
	}
})()
function e() {
	let e = document.querySelector(`body`),
		t = document.querySelector(`h2`),
		n = document.querySelector(`#secret`)
	;(t.style.margin = `0 auto`),
		(t.style.textAlign = `center`),
		(t.style.display = `block`),
		(t.style.color = `rebeccapurple`),
		(n.style.display = `block`),
		(n.style.backgroundColor = `rgba(254, 111, 117, 1)`),
		(n.style.margin = `20px auto`),
		(e.style.backgroundColor = `#fdf6e3`)
}
function t() {
	let e = `0123456789ABCDEF`.split(``),
		t = `#`
	for (let n = 0; n < 6; n++) t += e[Math.round(Math.random() * 15)]
	return t
}
function n() {
	let e = document.querySelector(`#keyboard`)
	;(e.style.color = t()),
		(e.style.backgroundColor = t()),
		(e.style.border = `2px dashed`),
		(e.style.borderColor = t()),
		(e.style.padding = `10px`),
		(e.style.margin = `0 auto`),
		(e.style.fontSize = `20px`),
		(e.style.display = `block`),
		(e.style.textAlign = `center`)
}
function r(e, t) {
	return ~~(Math.random() * (t - e + 1) + e)
}
function i() {
	return arguments[r(0, arguments.length - 1)]
}
function a() {
	return String.fromCharCode(r(2300, 23))
}
var o = class {
	constructor() {
		;(this.element = document.createElement(`div`)),
			this.element.setAttribute(`class`, `char-div`),
			(this.element.textContent = a()),
			this.element.style.setProperty(`--deg`, r(75, 230) + `deg`)
		let e = i(t())
		this.element.style.setProperty(`--colorbg`, e),
			this.element.style.setProperty(`--ciolortx`, e)
	}
}
function s() {
	let e = document.createDocumentFragment(),
		t = document.querySelector(`body`)
	for (let t = 0; t < 511; t++) {
		let t = new o()
		e.appendChild(t.element)
	}
	t.appendChild(e)
}
var c = document.querySelector(`#keyboard`)
document.querySelector(`.key`)
var l = document.querySelector(`#secret`)
e(),
	s(),
	document.addEventListener(`keydown`, function (e) {
		let t = document.querySelector(`h2`)
		;(e.keyCode || e.which) === 8 &&
			((l.value = ``),
			(t.innerHTML = `Answer:`),
			(c.innerHTML = ``),
			(c.style.display = `none`))
	}),
	document.addEventListener(`keypress`, (e) => {
		let r = e.keyCode || e.which,
			i = String.fromCharCode(r),
			a = document.querySelector(`h2`)
		;(c.innerHTML += ` <div>${i}</div> `),
			i === `m`
				? ((c.innerText = `oh what a beautiful morning!`),
				  c.innerText.split(``).map((e, t) => {
						n(), (c.innerHTML += `<div key="i" class='key'>${e}</>`)
				  }),
				  (c.innerHTML = `oh what a beautiful morning!`),
				  (c.textContent = `oh what a beautiful morning!`),
				  console.log(c))
				: i === `a`
				? ((c.innerText = `don't tell me i can't stand the pain!`),
				  c.innerText.split(``).map((e, t) => {
						n(), (c.innerHTML += `<div key="i" class='key'>${e}</>`)
				  }),
				  (c.innerHTML = `don't tell me i can't stand the pain!`),
				  (c.textContent = `don't tell me i can't stand the pain!`),
				  console.log(c))
				: i === `r`
				? ((c.innerText = `tell me when you're feelin lonely ... i'm sure i didn't catch your name ...`),
				  c.innerText.split(``).map((e, t) => {
						n(), (c.innerHTML += `<div key="i" class='key'>${e}</>`)
				  }),
				  (c.innerHTML = `tell me when you're  feelin lonely ... i'm sure i didn't catch your name ...`),
				  (c.textContent = `tell me when you're  feelin lonely ... i'm sure i didn't catch your name ...`),
				  console.log(c))
				: i === `i`
				? ((c.innerText = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`),
				  c.innerText.split(``).map((e, t) => {
						n(), (c.innerHTML += `<div key="i" class='key'>${e}</>`)
				  }),
				  (c.innerHTML = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`),
				  (c.textContent = `bela lugosi's dead ... the bats have left the bell tower ... bela lugosi's dead ...`),
				  console.log(c))
				: l.value === `maria`
				? ((c.innerText = `Your input is correct!`),
				  (a.innerText = `You guessed correctly. It is maria!`))
				: ((c.innerText = `Wrong input!`),
				  (a.innerText = `You guessed incorrectly. Try again!`),
				  (c.style.textAlign = `center`),
				  (c.style.color = t()))
	}),
	l.addEventListener(`change`, () => {
		let e = document.querySelector(`h2`)
		l.value === `maria`
			? ((e.textContent = `You guessed correctly. It is maria!`),
			  (c.innerText = `Your input is correct!`),
			  (c.style.textAlign = `center;`),
			  (c.style.color = t()))
			: ((e.innerText = `You guessed incorrectly. Try again!`),
			  (c.innerText = `Wrong Input!`),
			  (c.style.textAlign = `center`),
			  (c.style.color = t()))
	})
var u = document.querySelector(`.form-button`),
	d = document.querySelector(`.search-form-div`),
	f = document.querySelector(`[name="secret"]`)
u.addEventListener(`click`, function (e) {
	e.preventDefault(), d.classList.toggle(`active`)
}),
	f.addEventListener(`focus`, function (e) {
		d.classList.add(`focus`)
	}),
	f.addEventListener(`blur`, function (e) {
		f.value.length === 0
			? d.classList.remove(`focus`)
			: d.classList.add(`focus`)
	})
