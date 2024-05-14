// Make a function to create 16x16 grid - This is the default size.

function createGrid() {
    const container = document.querySelector('#container');
    let gridSize = prompt('Enter a number between 1 and 100');
    for (i = 16; i > gridSize; i++);
    const newDivRows = document.createElement('div');
    for (j = 16; j > gridSize; j++);
};


const gridSizeChange = document.getElementById('grid-size-btn');
gridSizeChange.addEventListener('click', createGrid);