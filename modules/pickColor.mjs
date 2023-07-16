import range from './range.mjs';

/* background related code */

/* sets a range of colors inside an array with the help of teh JS arguments object, the value inside of [] being the values representing the range of degrees passed to the function inside the Div Class constructor() method below. */
function pickColor() {
    return arguments[range(0, arguments.length - 1)];
}

export default pickColor