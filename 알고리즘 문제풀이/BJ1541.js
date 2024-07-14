//15min
//greedy
//'-'를 최대로 묶기
let input = require('fs').readFileSync('/dev/stdin').toString().split('-');

function solution(input) {
  for(let i = 0; i < input.length; i++) {
    if(input[i].includes('+')) {
      const splitInput = input[i].split('+').map(Number)
      const sum = splitInput.reduce((prev, cur) => prev + cur, 0)
      input[i] = sum
    }
  }
  const mappedInput = input.map(Number)
  return mappedInput.reduce((prev, cur) => prev - cur, mappedInput[0]) + mappedInput[0]
}

console.log(solution(input))