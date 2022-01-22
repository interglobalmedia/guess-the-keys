import getRandomColor from './getRandomColor';

/* set styles for the chordPad div containing keypress result related messages */
function chordPadStyles() {
    const chordPad = document.querySelector('#keyboard');
    
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

export default chordPadStyles