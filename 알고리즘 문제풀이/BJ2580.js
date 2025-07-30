let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const board = Array.from({ length: 9 }, (_, i) => input[i].split(' ').map(Number));

const rowSet = Array.from({ length: 9 }, () => new Set());
const colSet = Array.from({ length: 9 }, () => new Set());
const boxSet = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const num = board[i][j];
        if (num !== 0) {
            rowSet[i].add(num);
            colSet[j].add(num);
            boxSet[Math.floor(i / 3)][Math.floor(j / 3)].add(num);
        }
    }
}

function backtracking() {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                const boxRow = Math.floor(row / 3);
                const boxCol = Math.floor(col / 3);
                const possibleNumbers = [];

                for (let num = 1; num <= 9; num++) {
                    if (!rowSet[row].has(num) && !colSet[col].has(num) && !boxSet[boxRow][boxCol].has(num)) {
                        possibleNumbers.push(num);
                    }
                }

                for (let num of possibleNumbers) {
                    board[row][col] = num;
                    rowSet[row].add(num);
                    colSet[col].add(num);
                    boxSet[boxRow][boxCol].add(num);

                    if (backtracking()) return true;

                    board[row][col] = 0;
                    rowSet[row].delete(num);
                    colSet[col].delete(num);
                    boxSet[boxRow][boxCol].delete(num);
                }
                return false;
            }
        }
    }
    console.log(board.map(row => row.join(' ')).join('\n'));
    return true;
}

backtracking();