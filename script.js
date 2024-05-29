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
    return newColor;
}

// Function - 2 loops - one for row of divs - one for divs inside rows to create cell vertically.
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

// If/else for color mode - button function added at bottom - default is black when page is loaded.
        column.addEventListener('mouseover', () => {
        if (colorMode === 'black') {
            column.style.backgroundColor = 'black';
        } else if (colorMode === 'rainbow') {
            column.style.backgroundColor = randomColor();
        } else if (colorMode === 'white') {
            column.style.backgroundColor = 'white';
        }
     });
    }
    }   
}
// Function to change size of grid asking for prompt.
function changeSize() {
    const gridSize = prompt('Enter a number between 1 and 100 for grid size. e.g "6" would be 6x6');
    if (gridSize > 100 || gridSize < 1) {
        alert('Hey dumbass, come on');
    } else {
        createGrid(gridSize);
    }
}
// function to reset grid to original state.
function resetGrid() {
    createGrid(16);
}

// Call function to create initial 16x16 grid.
createGrid(size);

//Set colorMode to black when window is loaded initially.
window.onload = (colorMode = 'black');

// Set colorMode to black when black-btn is clicked.
document.getElementById('black-btn').addEventListener('click', () => {
    colorMode = 'black';
});

//Set colorMode to rainbow when rainbow-btn is clicked.
document.getElementById('rainbow-btn').addEventListener('click', () => {
    colorMode = 'rainbow';
});
//Set colorMode to white when eraser-btn is clicked.
document.getElementById('eraser-btn').addEventListener('click', () => {
    colorMode = 'white';
})
//Calls changeSize function when btn is clicked.
const gridChange = document.getElementById('grid-size-btn');
gridChange.addEventListener('click', changeSize);

// Calls resetGrid when btn is clicked.
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetGrid);
});


