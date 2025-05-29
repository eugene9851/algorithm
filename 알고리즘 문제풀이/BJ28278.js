//10min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const commands = input.slice(1).map(v => v.split(' '))

function solution(n, commands) {
    const stack = []
    const result = []

    for (let i = 0; i < n; i++) {
        if (commands[i][0] === '1') {
            stack.push(commands[i][1])
        } else if (commands[i][0] === '2') {
            stack.length === 0 ? result.push(-1) : result.push(stack.pop())
        } else if (commands[i][0] === '3') {
            result.push(stack.length)
        } else if (commands[i][0] === '4') {
            stack.length === 0 ? result.push(1) : result.push(0)
        } else if (commands[i][0] === '5') {
            stack.length === 0 ? result.push(-1) : result.push(stack[stack.length - 1])
        }
    }

    return result.join('\n')
}

console.log(solution(n, commands))