// Constants
const DEFAULT_SIZE = 68

const gridContainer = document.getElementById('gridContainer')
const girdSize = document.getElementById('gridSize');

girdSize.onchange = function() {
    createGrid(girdSize.value);
}
// addEventListener()
// mainContainer.appendChild(unitDiv);



function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let index = 0; index < size * size; index++) {
        let unitDiv = document.createElement('div');
        unitDiv.addEventListener('mouseover', changeColor)
        gridContainer.appendChild(unitDiv);
    }
}

function changeColor(e){
    e.target.style.backgroundColor = '#333333';
    console.log(e);
}

window.onload = () => {
    createGrid(DEFAULT_SIZE)
}