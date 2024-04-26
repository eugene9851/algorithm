//1hr

function fibonacci(number) {
  const dp = new Array(number + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i <= number; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
  }
  return dp[number]
}

function solution(number) {
  return fibonacci(number)
}

number = 4
console.log(solution(number))