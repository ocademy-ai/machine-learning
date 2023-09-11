// DOM
function getElement(id) {
    return document.getElementById(id);
}

// Math
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getMagn(x, y) {
    return Math.sqrt(x * x + y * y);
}

function toRadian(degrees) {
    return degrees * Math.PI / 180;
}

function toDegree(radian) {
    return radian * 180 / Math.PI;
}

// Random 
function randInt(lower, upper) {
    return Math.floor(lower + Math.random() * (upper - lower));
}

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Clean array generation
function new1dArray(length) {
    let array = [];
    for(let i = 0; i < length; i++) {
        array.push(0);
    }
    return array;
}

function new2dArray(num_rows, num_cols) {
    let array_2d= [];
    for(let i = 0; i < num_rows; i++) {
        let array_1d = [];
        for(let j = 0; j < num_cols; j++) {
            array_1d.push(0);
        }
        array_2d.push(array_1d);
    }
    return array_2d;
}

// Array manipulation
function removeElement(array, element) {
    return array.filter(function (dummy) {
        return dummy != element;
    });
}

function shuffleKnuth(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// rgb to hex
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}