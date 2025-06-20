let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

const sorted = Array.from(new Set(arr)).sort((a, b) => a - b)

const rank = new Map()
sorted.forEach((value, idx) => {
    rank.set(value, idx)
})

console.log(arr.map(value => rank.get(value)).join(' '))