const container = document.querySelector('.generator__container');
const list = document.querySelector('.generator__list');
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
        displayColors();
}

function displayColors() {
    const documentFragment = new DocumentFragment();

    colorList.forEach(color => {
        const item = document.createElement('li');
        const colorRgb = document.createElement('span');
        item.classList.add('generator__item');
        colorRgb.classList.add('generator__type');
        
        document.documentElement.style.setProperty(`--clr-random`, `rgb(${color})`);
        colorRgb.textContent = `RGB ${color}`
        
        item.appendChild(colorRgb);
        documentFragment.appendChild(item);
    })
    list.appendChild(documentFragment);
}