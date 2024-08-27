//12min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const room = Number(input[0])

let sum = 1
let count = 1
while(sum < room) {
  sum += 6 * count
  count++
}
console.log(count)