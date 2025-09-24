// 45min
let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const n = Number(input[0]);

function solution(n, input) {
    const dp = new Array(n + 2).fill(0);

    for (let i = 1; i <= n; i++) {
        const [time, pay] = input[i].split(' ').map(Number);

        dp[i + 1] = Math.max(dp[i], dp[i + 1]);
        if (i + time <= n + 1) {
            dp[i + time] = Math.max(dp[i + time], dp[i] + pay);
        }
    }
    return Math.max(...dp);
}

console.log(solution(n, input));
