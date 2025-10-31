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