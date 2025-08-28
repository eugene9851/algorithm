let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const [c, n] = input[0].split(' ').map(Number);
const chickens = input.slice(1, c + 1).map(Number).sort((a, b) => a - b);
const cows = input.slice(c + 1, c + n + 1).map((v) => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
console.log(chickens, cows);

function solution(chickens, cows) {
    let count = 0;
    let cowIndex = 0;
    let array = [];

    for (let chicken of chickens) {
        while (cowIndex < n && cows[cowIndex][0] <= chicken) {
            array.push(cows[cowIndex][1]);
            cowIndex++;
        }

        array.sort((a, b) => b - a);
        while (array.length && array[array.length - 1] < chicken) {
            array.pop();
        }

        if (array.length) {
            array.pop();
            count++;
        }
    }

    return count;
}

console.log(solution(chickens, cows));