const n = parseInt(require('fs').readFileSync('../example.txt')).toString().trim();

function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }
    }
    return dp[n];
}

console.log(solution(Number(n)));