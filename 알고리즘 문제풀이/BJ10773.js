//10min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const called = input.slice(1).map(Number)

function solution(n, called) {
    const stack = []

    for (let i = 0; i < n; i++) {
        if (called[i] != 0) stack.push(Number(called[i]))
        else stack.pop()
    }

    return stack.reduce((acc, cur) => acc + cur, 0)
}

console.log(solution(n, called))