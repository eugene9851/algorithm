let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number).sort((a, b) => b - a);

function solution(n, k, coins) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (k >= coins[i]) {
            count += Math.floor(k / coins[i]);
            k %= coins[i];
        }
    }

    return count;
}

console.log(solution(n, k, coins));