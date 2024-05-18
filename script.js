// Make a function to create 16x16 grid - This is the default size.

const changeSizeBtn = document.querySelector('#grid-size-btn');
const container = document.querySelector('#container');
let size = 16;

// function creates grid with prompted size.

function createGrid(size) {
    container.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            const divBox = document.createElement('div');
            divBox.classList.add('box');
            row.appendChild(divBox);
        }

        container.appendChild(row);
    }
}

createGrid(size);