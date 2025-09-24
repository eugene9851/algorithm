// 25min
let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

function division(a, b) {
    if (a < 0) {
        return -Math.floor((-a) / b);
    }
    return Math.floor(a / b);
}

function solution(n, numbers, operators) {
    let max = -Infinity;
    let min = Infinity;

    function dfs(depth, result, plus, minus, multiply, divide) {
        if (depth === n) {
            max = Math.max(max, result);
            min = Math.min(min, result);
            return;
        }
        if (plus > 0) dfs(depth + 1, result + numbers[depth], plus - 1, minus, multiply, divide);
        if (minus > 0) dfs(depth + 1, result - numbers[depth], plus, minus - 1, multiply, divide);
        if (multiply > 0) dfs(depth + 1, result * numbers[depth], plus, minus, multiply - 1, divide);
        if (divide > 0) dfs(depth + 1, division(result, numbers[depth]), plus, minus, multiply, divide - 1);
    }

    dfs(1, numbers[0], ...operators);
    return [max, min];
}

console.log(solution(n, numbers, operators).join('\n'));
