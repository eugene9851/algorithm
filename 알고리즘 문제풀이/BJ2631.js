let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const n = Number(input[0])
const rows = input.slice(1).map(Number)

const dp = new Array(n).fill(1)

for(let i = 1; i < n; i++) {
  for(let j = 0; j < i; j++) {
    if(rows[i] > rows[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

const lis = Math.max(...dp)

console.log(n - lis)