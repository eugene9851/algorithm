let input = require('fs').readFileSync('../example.txt').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = new Array(n + 1).fill(null).map(() => []);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

const visited = new Array(n + 1).fill(false);

function dfs(graph, visited, start) {
    visited[start] = true
    for (let neighbor of graph[start]) {
        if (!visited[neighbor]) {
            dfs(graph, visited, neighbor);
        }
    }
}

function solution(graph, visited, n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(graph, visited, i)
            count++;
        }
    }
    return count;
}

console.log(solution(graph, visited, n))