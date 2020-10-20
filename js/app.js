const container = document.querySelector('.generator__container');
const list = document.querySelector('.generator__list');
let colorList = [];

function randomNumber(min, max) { // return random number between min and max
    return Math.round(Math.random() * (max - min) + min);
}

function randomColor() { // return object with random r, g, b color values
    let r = randomNumber(0, 255);
    let g = randomNumber(0, 255);
    let b = randomNumber(0, 255);
    return `${r}, ${g}, ${b}`;
}

function removeItems(parent) { //remove all items
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function listLength(length) { // remove first item when list is X length
    if (colorList.length >= length) {
        colorList.shift();
    }
}

function addColor() { // add new color to colorList and display it
        colorList.push(randomColor());
        displayColors();
}

function displayColors() { // function to display new items
    const documentFragment = new DocumentFragment();
    const length = 6; //amount of items you want to display
    removeItems(list);
    listLength(length);

    colorList.forEach(color => {
        const item = document.createElement('li');
        const colorPreview = document.createElement('span');
        const colorRgb = document.createElement('span');
        item.classList.add('generator__item');
        colorPreview.classList.add('generator__preview');
        colorRgb.classList.add('generator__type');
        
        document.documentElement.style.setProperty(`--clr-random`, `rgb(${color})`);
        colorPreview.style.background = `rgb(${color})`;
        colorRgb.textContent = `RGB ${color}`
        
        item.appendChild(colorPreview);
        item.appendChild(colorRgb);
        documentFragment.appendChild(item);
    })
    list.appendChild(documentFragment);
}

container.addEventListener('click', addColor);