let maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, "P", 1, "G", 1],
    [1, 1, 1, 1, 1],
];

let playerPosition = {row: 3, col: 1};
let goalPosition = {row: 3, col: 3};
let won = false;

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

function movePlayer(rowOffset, columnOffset) {
    let newRow = playerPosition.row + rowOffset;
    let newColumn = playerPosition.col + columnOffset;
    if (maze[newRow][newColumn] === 1 || won) {
        return;
    }

    maze[playerPosition.row][playerPosition.col] = 0;
    playerPosition.row = newRow;
    playerPosition.col = newColumn;
    maze[newRow][newColumn] = "P";
    drawBoard();

    if (playerPosition.row === goalPosition.row && playerPosition.col === goalPosition.col) {
        won = true;
        document.getElementById("restartButton").style.display = "inline";
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowUp") {
        movePlayer(-1, 0);
    }
    if (event.key === "ArrowDown") {
        movePlayer(1, 0);
    }
    if (event.key === "ArrowLeft") {
        movePlayer(0, -1);
    }
    if (event.key === "ArrowRight") {
        movePlayer(0, 1);
    }
})

document.addEventListener("click", () => {
    playerPosition = {row: 3, col: 1};
    goalPosition = {row: 3, col: 3};
    won = false;
    maze = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, "P", 1, "G", 1],
        [1, 1, 1, 1, 1],
    ];
    drawBoard();
    document.getElementById("restartButton").style.display = "none";
})