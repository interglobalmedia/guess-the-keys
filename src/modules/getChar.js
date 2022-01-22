import range from './range';

/* background related code */

/* transforms the randomly generated unicode values from the range function into actual characters and returns a string representing the unicode characters. */
function getChar() {
    // 2300 - 23
    return String.fromCharCode(range(2300, 23));
}

export default getChar