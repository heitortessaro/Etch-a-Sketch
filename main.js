// Constants
const DEFAULT_SIZE = 16

const gridContainer = document.getElementById('gridContainer')
const girdSize = document.getElementById('gridSize');

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
    e.target.style.backgroundColor = '#333333';
    console.log(e);
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