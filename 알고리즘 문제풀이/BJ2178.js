let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = new Array(n).fill(null).map(() => []);

for (let i = 1; i <= n; i++) {
    const row = input[i].split('').map(Number);
    graph[i - 1].push(...row);
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(graph, startX, startY) {
    const queue = [[startX, startY]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
                graph[nx][ny] = graph[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return graph[n - 1][m - 1];
}

console.log(bfs(graph, 0, 0));
