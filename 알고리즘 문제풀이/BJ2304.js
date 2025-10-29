let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const columns = input.slice(1).map(x => x.split(' ').map(Number)).sort((a, b) => a[0] - b[0])

let maxHeight = 0
let maxIdx = 0
for(let i=0; i<n; i++) {
  if (columns[i][1] > maxHeight) {
    maxHeight = columns[i][1]
    maxIdx = i
  }
}


function solution() {
  let result = 0

  let leftMax = columns[0][1]
  let leftPos = columns[0][0]

  for(let i=1; i<=maxIdx; i++) {
    if (columns[i][1] >= leftMax) {
      result += (columns[i][0] - leftPos) * leftMax
      leftMax = columns[i][1]
      leftPos = columns[i][0]
    }
  }

  let rightMax = columns[n-1][1]
  let rightPos = columns[n-1][0]
  for(let i=n-2; i>=maxIdx; i--) {
    if (columns[i][1] >= rightMax) {
      result += (rightPos - columns[i][0]) * rightMax
      rightMax = columns[i][1]
      rightPos = columns[i][0]
    }
  }

  result += maxHeight

  return result
}

console.log(solution(columns))
