/* background related code */
/* sets the unicode values range to select from as part of the document (body) background */
function range(from, to) {
    return ~~(Math.random() * (to - from + 1) + from);
}

export default range