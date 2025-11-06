let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const buildings = [0].concat(input[1].split(' ').map(Number))

function solution() {
  let answer = 0
  for(let i = 1; i <= n; i++) {
    let left = 0
    let right = 0
    let leftMinSlope = Infinity
    let rightMaxSlope = -Infinity

    for(let j = i; j >= 1; j--) {
      if(i === j) continue
      const slope = (buildings[j] - buildings[i]) / (j - i)
      if(slope < leftMinSlope) {
        leftMinSlope = slope
        left++
      }
    }

    for(let k = i; k <= n; k++) {
      if(k === i) continue
      const slope = (buildings[k] - buildings[i]) / (k - i)
      if(slope > rightMaxSlope) {
        rightMaxSlope = slope
        right++
      }
    }

    answer = Math.max(answer, left + right)
  }
  return answer
}

console.log(solution())
