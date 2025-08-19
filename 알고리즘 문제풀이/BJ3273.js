let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0])
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const x = Number(input[2])

let count = 0

function solution(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right]

        if (sum === x) {
            count++
        }

        if (sum < x) {
            left++
        } else {
            right--
        }
    }

    return count
}

console.log(solution(arr, x))