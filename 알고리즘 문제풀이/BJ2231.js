//13min

let input = require('fs').readFileSync('/dev/stdin').toString();

const n = Number(input);

function sum(number) {
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i])
    }
    return sum
}

let answer = 0

for (let i = 0; i < n; i++) {
    if (sum(i.toString()) + i === n) {
        answer = i
        break;
    }
}

console.log(answer)