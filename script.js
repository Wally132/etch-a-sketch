//Start with DOMContentLoaded to make sure the script runs after the DOM is fully loaded.
//Make function for 16x16 sqaures inside container.
// 

// DOMContentLoaded allows function to be called after DOM is loaded.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container')
//Creating variable 'size' is 16 to start.
    let size = 16;

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = 'rgb(' + r + "," + g + "," + b +')';
    console.log(newColor);
}

randomColor();


// Function - 2 loops
function createGrid(size) {
    container.innerHTML = ''; // Apparently this clears the previous grid.
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div'); // Creates divs inside container.
        row.classList.add('row'); // Adds class to rows.
        container.appendChild(row); // Appends row to container.

    for (let j = 0; j < size; j++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column); // Appends column divs to each row div.

    function blackInk() {
        column.style.backgroundColor = '#000000';
    }

   

    column.addEventListener('mouseover', blackInk);
    }
    }
}

function changeSize() {
    const gridSize = prompt('1-100');
    if (gridSize > 100 || gridSize < 1) {
        alert('Hey Dumbass');
    } else {
        createGrid(gridSize);
    }
}

function resetGrid() {
    createGrid(16);
}


createGrid(size);

const gridChange = document.getElementById('grid-size-btn');
gridChange.addEventListener('click', changeSize);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetGrid);
});


