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

function addColor() { // add new color to colorList and display it
        colorList.push(randomColor());
        displayColors();
}

function displayColors() { // function to display new items
    const documentFragment = new DocumentFragment();
    removeItems(list);

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

container.addEventListener('click', addColor);