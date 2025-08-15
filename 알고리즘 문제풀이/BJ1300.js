let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const k = Number(input[1])

function binarySearch(n, k) {
    let left = 1;
    let right = n * n;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0;

        for (let i = 1; i <= n; i++) {
            count += Math.min(Math.floor(mid / i), n)
        }

        if (count >= k) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}

console.log(binarySearch(n, k))