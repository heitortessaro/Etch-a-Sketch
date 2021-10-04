// Constants
const DEFAULT_SIZE = 16

const gridContainer = document.getElementById('gridContainer')
// mainContainer.appendChild(unitDiv);

let size = 16

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let index = 0; index < size * size; index++) {
        let unitDiv = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(unitDiv);
    }
}




window.onload = () => {
    createGrid(DEFAULT_SIZE)
}