function voirCoord() {
    let x = event.clientX;
    let y = event.clientY;
    let coord = `x: ${x}<br> y: ${y}`

document.getElementById('position').innerHTML = coord;
}