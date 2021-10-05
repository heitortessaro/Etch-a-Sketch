// Constants
const DEFAULT_SIZE = 16;
let paintColor = 'userSelection';
let userColor = '#EF2929';

//Get elements
const gridContainer = document.getElementById('gridContainer')
const girdSize = document.getElementById('gridSize');
const resetBoard = document.getElementById('resetBoard');
const eraseBtn = document.getElementById('eraser')
const colorBtn = document.getElementById('colorSelect');
const raimbowBtn = document.getElementById('raimbow');
const colorSelector = document.getElementById('inputColor');

//Evet listeners
resetBoard.addEventListener('click', () => resetColor());
eraseBtn.addEventListener('click', function () {
    paintColor = 'erase';
});
colorBtn.addEventListener('click', function () {
     paintColor = 'userSelection';
});
raimbowBtn.addEventListener('click', function () {
    paintColor = 'raimbow';
});
colorSelector.addEventListener('change', function (e) {
    paintColor = 'userSelection';
    userColor = e.target.value;
});

//Function

// alter grid size
girdSize.onchange = function () {
    resetColor();
    createGrid(girdSize.value);
}

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let index = 0; index < size * size; index++) {
        let unitDiv = document.createElement('div');

        unitDiv.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(unitDiv);
    }
}

function changeColor(e) {
    if (paintColor == 'black') {
        e.target.style.backgroundColor = '#000000';
    } else if (paintColor == 'erase') {
        e.target.style.backgroundColor = '#FFFFFF';
    } else if (paintColor == 'raimbow') {
        const randomColor = Math.floor(Math.
            random() * 16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    } else if (paintColor == 'userSelection'){
        e.target.style.backgroundColor = userColor;
    }
}

function resetColor() {
    let cells = gridContainer.querySelectorAll('div');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = '#FFFFFF';
    }

}

window.onload = () => {
    createGrid(DEFAULT_SIZE)
}