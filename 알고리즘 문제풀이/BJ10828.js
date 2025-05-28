//15min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const commands = input.slice(1).map(v => v.split(' '))

function solution(n, commands) {
    const stack = []

    for (let i = 0; i < n; i++) {
        if (commands[i][0] === 'push') {
            stack.push(commands[i][1])
        } else if (commands[i][0] === 'pop') {
            console.log(stack.length === 0 ? -1 : stack.pop())
        } else if (commands[i][0] === 'size') {
            console.log(stack.length)
        } else if (commands[i][0] === 'empty') {
            console.log(stack.length === 0 ? 1 : 0)
        } else if (commands[i][0] === 'top') {
            console.log(stack.length === 0 ? -1 : stack[stack.length - 1])
        }
    }
}

solution(n, commands)