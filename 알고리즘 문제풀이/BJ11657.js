let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];

for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    edges.push({ from: a, to: b, time: c });
}

function solution() {
    const distance = new Array(n + 1).fill(Infinity);
    distance[1] = 0;

    for (let i = 1; i < n; i++) {
        for (const { from, to, time } of edges) {
            if (distance[from] !== Infinity && distance[to] > distance[from] + time) {
                distance[to] = distance[from] + time;
            }
        }
    }

    for (const { from, to, time } of edges) {
        if (distance[from] !== Infinity && distance[to] > distance[from] + time) {
            return [-1];
        }
    }

    return distance.slice(2).map((time) => (time === Infinity ? -1 : time));
}

console.log(solution().join('\n'));
