let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, total] = input[0].split(' ').map(Number)

const shorts = input.slice(1).map((line) => line.split(' ').map(Number))
const valid = shorts.filter(([s, e, l]) => e <= total && e - s > l);
valid.sort((a, b) => a[1] - b[1])

function solution() {
  const dp = new Array(total+1).fill(Infinity)
  dp[0] = 0

  let idx = 0
  for(let i=0; i<=total; i++) {
    if (i > 0) dp[i] = Math.min(dp[i-1]+1, dp[i])
    
    while(idx < valid.length && valid[idx][1] === i) {
      const [start, end, dist] = valid[idx]
      dp[end] = Math.min(dp[start] + dist, dp[end])
      idx++
    }
  }

  return dp[total]
}

console.log(solution())
