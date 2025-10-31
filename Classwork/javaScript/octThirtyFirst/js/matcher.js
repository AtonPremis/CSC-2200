"use strict";

let gameBoard = [];
let flippedTiles = [];
let matchedPairs = 0;
let moveCount = 0;
let boardSize = 4;
let totalPairs = (boardSize * boardSize) / 2;
let useEmojis = true;
let values = [];

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

document.addEventListener("DOMContentLoaded", initializeGame);

function initializeGame() {
    gameBoard = [];
    flippedTiles = [];
    matchedPairs = 0;
    moveCount = 0;
    values = ICONS.concat(ICONS);

    updateStats();
    shuffleArray(values);

    let valuesIndex = 0;

    for (let i = 0; i < boardSize; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < boardSize; j++) {
            gameBoard[i][j] = {
                value: values[valuesIndex++],
                flipped: false,
                matched: false
            };
        }
    }
    renderBoard();
}

function updateStats() {
    document.getElementById("moves").textContent = moveCount;
    document.getElementById("matches").textContent = matchedPairs;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.tabIndex = 0;
            tile.setAttribute("role", "button");
            tile.dataset.row = i;
            tile.dataset.col = j;

            if (gameBoard[i][j].flipped) {tile.classList.add("flipped");}
            if (gameBoard[i][j].matched) {tile.classList.add("matched");}

            document.getElementById("gameBoard").appendChild(tile);
        }
    }
}