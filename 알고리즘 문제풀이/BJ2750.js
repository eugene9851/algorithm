let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map(Number);

function solution(N, arr) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}

console.log(solution(N, arr).join('\n'))