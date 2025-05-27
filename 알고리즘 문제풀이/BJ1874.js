//47min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const numbers = input.slice(1).map(Number)
let currentIdx = 0

function isPop(stack, numbers, answer) {
    if (stack[stack.length - 1] !== numbers[currentIdx]) return
    if (stack.length === 0) return

    stack.pop()
    answer.push('-')
    currentIdx++
    isPop(stack, numbers, answer)
}

function solution(n, numbers) {
    const stack = []
    const answer = []

    for (let i = 1; i <= n; i++) {
        stack.push(i)
        answer.push('+')
        isPop(stack, numbers, answer)
    }
    return currentIdx === n ? answer.join('\n') : 'NO'
}

console.log(solution(n, numbers))