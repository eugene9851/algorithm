let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const testCases = Number(input[0])
const tests = input.slice(1).map(Number)

function solution() {
  const max = Math.max(...tests)
  const dp = [0, 1, 2, 3]

  for(let i=4; i<=max; i++) {
    dp[i] = 1 + Math.floor(i/2) + dp[i-3]
  }

  for(let i=0; i<testCases; i++) {
    const n = tests[i]
    console.log(dp[n])
  }
}

solution()
