const maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, "P", 1, "G", 1],
    [1, 1, 1, 1, 1],
];

let playerPosition = {row: 3, col: 1};

function drawBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = "";

    maze.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            let square = document.createElement("div");
            square.classList.add("cell");
            if (cell === 1) {
                square.classList.add("wall");
            } else if (cell === "P") {
                square.classList.add("player");
                square.textContent = "😊";
            } else if (cell === "G") {
                square.classList.add("goal");
                square.textContent = "🏁";
            }

            gameBoard.appendChild(square);
        })
    })
}

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        alert("up we go");
    }
    if (event.key === "ArrowDown") {
        alert("down we go");
    }
    if (event.key === "ArrowLeft") {
        alert("left we go");
    }
    if (event.key === "ArrowRight") {
        alert("right we go");
    }

})