let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, c] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number).sort((a, b) => a - b)

function binarySearch(arr, c) {
    let left = 1;
    let right = arr[n - 1] - arr[0]
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 1;
        let last = arr[0];

        for (let j = 1; j < n; j++) {
            if (arr[j] - last >= mid) {
                count++;
                last = arr[j]
            }
        }

        if (count >= c) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}

console.log(binarySearch(arr, c))
