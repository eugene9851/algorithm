// 15min

let input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input)
let count = 0

for (let i = 666; i < Infinity; i++) {
    if (i.toString().includes('666')) count++
    if (count === n) {
        console.log(i)
        break;
    }
}