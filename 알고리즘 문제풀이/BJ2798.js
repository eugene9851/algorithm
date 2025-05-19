//13min

let input = require('fs').readFileSync('/dev/stdin').trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            const sum = cards[i] + cards[j] + cards[k];
            if (sum <= m) {
                answer = Math.max(answer, sum)
            }
        }
    }
}

console.log(answer)