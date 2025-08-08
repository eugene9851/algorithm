let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number)

const items = input.slice(1).map(item => item.split(' ').map(Number))

function solution(items, k) {
    const dp = new Array(k + 1).fill(0)

    for (let [weight, value] of items) {
        for (let i = k; i >= weight; i--) {
            dp[i] = Math.max(dp[i], dp[i - weight] + value)
        }
    }

    return dp[k]
}

console.log(solution(items, k))