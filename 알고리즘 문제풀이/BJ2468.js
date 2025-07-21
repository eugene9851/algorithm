let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map(v => v.split(' ').map(Number));

function solution(n, graph) {
    let answer = 1;
    const maxHeight = Math.max(...graph.flat());
    for (let h = 1; h <= maxHeight; h++) {
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        let count = 0

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][j] > h && !visited[i][j]) {
                    bfs(i, j, h, visited, graph, n);
                    count++
                }
            }
        }
        answer = Math.max(answer, count)
    }
    return answer;
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs(x, y, h, visited, graph, n) {
    const queue = [[x, y]];
    let head = 0;
    visited[x][y] = true;

    while (head < queue.length) {
        const [x, y] = queue[head++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] > h && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}

console.log(solution(n, graph))