let input = require('fs').readFileSync('../example.txt').toString().trim();

const n = Number(input);
const board = Array.from({ length: n }, () => new Array(n).fill(0));

let count = 0;

function isSafe(x, y) {
    for (let row = 0; row < x; row++) {
        const diff = x - row;

        if (board[row][y] === 1) return false;
        if (y - diff >= 0 && board[row][y - diff] === 1) return false;
        if (y + diff < n && board[row][y + diff] === 1) return false;
    }

    return true;
}

function backtracking(row) {
    if (row === n) {
        count++;
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
            board[row][col] = 1;
            backtracking(row + 1);
            board[row][col] = 0;
        }
    }
}

backtracking(0);
console.log(count);
