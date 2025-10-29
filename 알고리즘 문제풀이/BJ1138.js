let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const info = input[1].split(' ').map(Number)

const result = new Array(n).fill(0)

function solution() {
  for(let i=n-1; i>=0; i--) {
    if (result[info[i]] === 0) {
      result[info[i]] = i+1
    }
    else {
      result.splice(info[i], 0, i+1)
      result.pop()
    }
  }
  return result
}


console.log(solution().join(' '))
