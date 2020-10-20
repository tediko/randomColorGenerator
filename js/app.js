const container = document.querySelector('.generator__container');
const list = document.querySelector('.generator__list');
let colorList = [];
let hexList = [];
let r, g, b;

function randomNumber(min, max) { // return random number between min and max
    return Math.round(Math.random() * (max - min) + min);
}

function randomColor() { // return object with random r, g, b color values
    r = randomNumber(0, 255);
    g = randomNumber(0, 255);
    b = randomNumber(0, 255);
    return `${r}, ${g}, ${b}`;
}

function hexConverter(r, g, b) { //convert rgb color code to hex value.
    const rgb = [r, g, b];
    const hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    const hexColor = ['#'];

    rgb.forEach(color => {
        // Each r g b value return two digits of the 6-digit hex code.
        // Take color value and divide it by 16, 
        // which means that is the first digit of the 6-digit hex color.
        // Then take remainder of the first digit and multiply it by 16,
        // which means that is second digit of the hex color.
        // Looping it for each color returns 6-digit hex code. 
        let firstDigit = Math.floor(color / 16);
        let reminder = (color / 16) - firstDigit;
        let secondDigit = reminder * 16;
        
        hexColor.push(hexadecimal[firstDigit], hexadecimal[secondDigit]);
    })

    return hexColor.join('');
}

function removeItems(parent) { //remove all items
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function listLength(list, length) { // remove first item when list is X length
    if (list.length >= length) {
        list.shift();
    }
}

function addColor() { // add new color to colorList and display it
        colorList.push(randomColor());
        hexList.push(hexConverter(r, g, b));
        displayColors();
}

function displayColors() { // function to display new items
    const documentFragment = new DocumentFragment();
    const length = 6; //amount of items you want to display
    removeItems(list);
    listLength(colorList, length);
    listLength(hexList, length);

    colorList.forEach((color, idx) => {
        const item = document.createElement('li');
        const colorPreview = document.createElement('span');
        const colorRgb = document.createElement('span');
        const colorHex = document.createElement('span');
        item.classList.add('generator__item');
        colorPreview.classList.add('generator__preview');
        colorRgb.classList.add('generator__type');
        colorHex.classList.add('generator__type');
        
        document.documentElement.style.setProperty(`--clr-random`, `rgb(${color})`);
        colorPreview.style.background = `rgb(${color})`;
        colorRgb.textContent = `RGB ${color}`;
        colorHex.textContent = `HEX ${hexList[idx]}`;
        
        item.appendChild(colorPreview);
        item.appendChild(colorRgb);
        item.appendChild(colorHex);
        documentFragment.appendChild(item);
    })
    list.appendChild(documentFragment);
}

container.addEventListener('click', addColor);