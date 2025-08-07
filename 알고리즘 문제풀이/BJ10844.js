const n = parseInt(require('fs').readFileSync('../example.txt')).toString().trim();

const MOD = 1000000000;

function solution(n) {
    const dp = new Array(n + 1).fill(0).map(() => new Array(10).fill(0));

    dp[1][0] = 0;

    for (let i = 1; i < 10; i++) {
        dp[1][i] = 1
    }

    for (let i = 2; i <= n; i++) {
        dp[i][0] = dp[i - 1][1] % MOD
        dp[i][9] = dp[i - 1][8] % MOD

        for (let j = 1; j < 9; j++) {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD
        }
    }
    return dp[n].reduce((acc, cur) => acc + cur, 0) % MOD;
}

console.log(solution(Number(n)));