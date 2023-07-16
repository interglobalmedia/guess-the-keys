/* function to create random colors for background and border of #keyboard */
function getRandomColor() {
    const chars = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.round(Math.random() * 15)];
    }
    return color;
}

export default getRandomColor