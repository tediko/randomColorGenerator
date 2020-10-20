const container = document.querySelector('.generator__container');
let colorList = [];

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomColor() {
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    return `${r}, ${g}, ${b}`;
}

function addColor() { 
        colorList.push(randomColor());
}