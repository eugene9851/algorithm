let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const testCases = input.slice(1).map(v => v.split(' ').map(Number));

const functions = {
    'D': (n) => n * 2 % 10000,
    'S': (n) => n === 0 ? 9999 : n - 1,
    'L': (n) => n % 1000 * 10 + Math.floor(n / 1000),
    'R': (n) => n % 10 * 1000 + Math.floor(n / 10),
}

const functionKeys = Object.keys(functions);

function solution(n, testCases) {
    for (let i = 0; i < n; i++) {
        const [a, b] = testCases[i];
        console.log(bfs(a, b))
    }
}

function bfs(a, b) {
    const queue = [[a, '']];
    let head = 0;
    const visited = Array(10000).fill(false);
    visited[a] = true;

    while (head < queue.length) {
        const [num, path] = queue[head++];
        if (num === b) return path;
        for (let i = 0; i < 4; i++) {
            const next = functions[functionKeys[i]](num);
            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, path + functionKeys[i]]);
            }
        }
    }
}

solution(n, testCases)