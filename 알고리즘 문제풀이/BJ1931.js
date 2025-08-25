let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const times = input.slice(1).map(v => v.split(' ').map(Number));

times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
});

function solution(times) {
    let count = 0;
    let endTime = 0;

    for (let [start, end] of times) {
        if (start >= endTime) {
            count++;
            endTime = end;
        }
    }
    return count;
}

console.log(solution(times));