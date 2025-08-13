let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(Number)

const binarySearch = (arr, n) => {
    let left = 1;
    let right = Math.max(...arr);
    let sum = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            count += Math.floor(arr[i] / mid)
        }

        if (count >= n) {
            sum = mid;
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }

    return sum;
}

console.log(binarySearch(arr, n))