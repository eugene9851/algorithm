let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

function solution(arr, s) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = Infinity;

    while (true) {
        if (sum >= s) {
            minLength = Math.min(minLength, right - left)
            sum -= arr[left]
            left++
        } else if (right === n) {
            break
        } else {
            sum += arr[right]
            right++
        }
    }

    return minLength === Infinity ? 0 : minLength
}

console.log(solution(arr, s))