let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = new Array(n + 1).fill(null).map(() => []);
const indegree = new Array(n + 1).fill(0);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    indegree[b]++;
}

function solution() {
    const queue = [];
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const node = queue.shift();
        result.push(node)
        for (let i = 0; i < graph[node].length; i++) {
            const next = graph[node][i];
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    return result.join(' ');
}

console.log(solution());