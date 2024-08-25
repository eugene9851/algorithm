//7min

let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [row, col, spaceRow, spaceCol] = input[0].split(' ').map(Number)

const ableRow = Math.floor((row - 1) / (spaceRow + 1)) + 1
const ableCol = Math.floor((col - 1) / (spaceCol + 1)) + 1

console.log(ableRow * ableCol)