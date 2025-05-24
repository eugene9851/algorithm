//36min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map(v => v.split(''));

function countColor(x, y) {
    let countW = 0
    let countB = 0
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            if ((i + j) % 2 === 0) {
                if (board[i][j] !== 'W') countW++
                else countB++
            } else {
                if (board[i][j] !== 'W') countB++
                else countW++
            }
        }
    }
    return Math.min(countW, countB)
}

let result = Infinity
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        result = Math.min(result, countColor(i, j))
    }
}

console.log(result)