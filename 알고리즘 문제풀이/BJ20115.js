//20min

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0]
const drinks = input[1].split(' ').map(Number)

function solution(n, drinks) {
  drinks.sort((a, b) => a - b)

  for(let i = 0; i < n - 1; i++) {
    const max = drinks.pop()
    drinks.push(max + drinks.pop() / 2)
  }
  return drinks.pop()
}

console.log(solution(n, drinks))