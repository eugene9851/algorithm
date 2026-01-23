let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
let index = 0

while(index<input.length) {
  const n = Number(input[index])
  let sum = 0
  const coins = []

  for(let i=index+1; i<index+n+1; i++) {
    const [coin, count] = input[i].split(' ').map(Number)
    sum += coin * count
    coins.push([coin, count])
  }

  if (sum%2 === 1) {
    console.log(0)
    index += n+1
    continue
  }

  const total = Number(sum/2)

  console.log(findPossible(coins, total, n))

  index += n+1
}

function findPossible(coins, total) {
  let dp = Array(total+1).fill(false)
  dp[0] = true

  for(const [coin, count] of coins) {
    for(let t=total; t>=0; t--) {
      if (!dp[t]) continue
      for(let c=1; c<=count; c++) {
        if (t + coin*c > total) break
        dp[t+coin*c] = true
      }
    }
  }
  return dp[total] ? 1 : 0
}
