// Make a function to create 16x16 grid - This is the default size.

const changeSizeBtn = document.querySelector('#grid-size-btn');
const container = document.querySelector('#container');
let size = 16;

// function creates grid with prompted size.

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

    for (let j = 0; j < size; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column); 
        }
    }
}

createGrid(size);