/* Set default styles on for div with .keyboard class on load */
function initStyles() {
    const body = document.querySelector('body');
    const heading2 = document.querySelector('h2');
    const keyInput = document.querySelector('#secret');

    heading2.style.margin = '0 auto';
    heading2.style.textAlign = 'center';
    heading2.style.display = 'block';
    heading2.style.color = 'rebeccapurple';

    keyInput.style.display = 'block';
    keyInput.style.backgroundColor = `rgba(254, 111, 117, 1)`;
    keyInput.style.margin = '20px auto';

    body.style.backgroundColor = `#fdf6e3`;
}

export default initStyles