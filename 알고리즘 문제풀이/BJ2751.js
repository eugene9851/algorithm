let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).sort((a, b) => a - b)

console.log(arr.join('\n'))