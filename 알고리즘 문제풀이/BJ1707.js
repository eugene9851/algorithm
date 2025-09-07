let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const testCase = Number(input[0]);

function bfs(start, visited, graph) {
    const queue = [start];
    visited[start] = 1;

    while (queue.length) {
        const node = queue.shift();
        for (let neighbor of graph[node]) {
            if (visited[neighbor] === 0) {
                visited[neighbor] = -visited[node];
                queue.push(neighbor);
            }
            else if (visited[neighbor] === visited[node]) {
                return false;
            }
        }
    }
    return true;
}

function solution(testCase) {
    let index = 1;
    for (let i = 1; i <= testCase; i++) {
        const [v, e] = input[index].split(' ').map(Number);
        const graph = new Array(v + 1).fill(null).map(() => []);
        const visited = new Array(v + 1).fill(0);
        let isBipartite = true;

        for (let j = 1; j <= e; j++) {
            const [a, b] = input[index + j].split(' ').map(Number);
            graph[a].push(b);
            graph[b].push(a);
        }
        index += e + 1;

        for (let i = 1; i <= v; i++) {
            if (visited[i] === 0) {
                if (!bfs(i, visited, graph)) {
                    isBipartite = false;
                    break;
                }
            }
        }

        console.log(isBipartite ? 'YES' : 'NO');
    }
}

solution(testCase);