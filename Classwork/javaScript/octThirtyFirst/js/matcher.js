let gameBoard = [];
let flippedTiles = [];
let matchedPairs = 0;
let moveCount = 0;
const boardSize = 4;
const totalPairs = (boardSize * boardSize) / 2;

let useEmojis = true;

const ICONS = [
    "\u{1F680}", // 🚀
    "\u{1F47E}", // 👾
    "\u{1F916}", // 🤖
    "\u{1F3AE}", // 🎮
    "\u{1F525}", // 🔥
    "\u{1F4A1}", // 💡
    "\u{1F48E}", // 💎
    "\u{1F3C6}"  // 🏆
];
window.addEventListener("load", () => {
    initGame();
})
function initGame() {
    gameBoard = [];
    flippedTiles = [];
    matchedPairs = 0;
    moveCount = 0;
    updateStats();
    showBanner("");
    let values;
    if (useEmojis) {
        values = ICONS.concat(ICONS);
    } else {
        values = generateNumberPairs();
    }

    shuffleArray(values);

    let index = 0;
    for (let i = 0; i < boardSize; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < boardSize; j++) {
            gameBoard[i][j] = {
                value: values[index++],
                flipped: false,
                matched: false
            };
        }
    }
    renderBoard();
}
function generateNumberPairs() {
    const nums = [];
    for (let i = 1; i <= totalPairs; i++) {
        nums.push(i);
        nums.push(i);
    }
    return nums;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderBoard() {
    const boardElement = document.getElementById("gameBoard");
    boardElement.innerHTML = "";

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.tabIndex = 0;
            tile.setAttribute("role", "button");
            tile.dataset.row = i;
            tile.dataset.col = j;

            if (gameBoard[i][j].flipped) tile.classList.add("flipped");
            if (gameBoard[i][j].matched) tile.classList.add("matched");

            const content = document.createElement("div");
            content.className = "tile-content";
            content.textContent = gameBoard[i][j].value;
            tile.appendChild(content);

            tile.addEventListener("click", handleTileClick);
            tile.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") handleTileClick({ currentTarget: tile });
            });

            boardElement.appendChild(tile);
        }
    }
}

function handleTileClick(event) {
    const row = parseInt(event.currentTarget.dataset.row);
    const col = parseInt(event.currentTarget.dataset.col);

    if (gameBoard[row][col].flipped || gameBoard[row][col].matched) return;
    if (flippedTiles.length >= 2) return;

    gameBoard[row][col].flipped = true;
    flippedTiles.push({ row, col });
    renderBoard();

    if (flippedTiles.length === 2) {
        moveCount++;
        updateStats();

        const [first, second] = flippedTiles;
        const match =
            gameBoard[first.row][first.col].value === gameBoard[second.row][second.col].value;

        if (match) {
            gameBoard[first.row][first.col].matched = true;
            gameBoard[second.row][second.col].matched = true;
            matchedPairs++;
            flippedTiles = [];
            updateStats();

            if (matchedPairs === totalPairs) {
                setTimeout(() => showBanner(`🏁 You won in ${moveCount} moves! 🎉`), 400);
            }
        } else {
            setTimeout(() => {
                gameBoard[first.row][first.col].flipped = false;
                gameBoard[second.row][second.col].flipped = false;
                flippedTiles = [];
                renderBoard();
            }, 1000);
        }
    }
}

function updateStats() {
    document.getElementById("moves").textContent = moveCount;
    document.getElementById("matches").textContent = matchedPairs;
}

function showBanner(msg) {
    const banner = document.getElementById("banner");
    banner.textContent = msg;
}

document.getElementById("resetButton").addEventListener("click", initGame);
document.getElementById("toggleMode").addEventListener("click", () => {
    useEmojis = !useEmojis;
    document.getElementById("toggleMode").textContent =
        useEmojis ? "Switch to Numbers" : "Switch to Emojis";
    initGame();
});