let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const n = Number(input[0]);
const graph = new Array(n).fill(null).map(() => []);

for (let i = 1; i <= n; i++) {
  const row = input[i].split('').map(Number);
  graph[i - 1].push(...row);
}

const visited = new Array(n).fill(null).map(() => new Array(n).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(graph, visited, x, y) {
  visited[x][y] = true;
  count++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny] && graph[nx][ny] === 1) {
      dfs(graph, visited, nx, ny);
    }
  }
}

let count = 0;
const result = [];

function solution(graph, visited, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        dfs(graph, visited, i, j);
        result.push(count);
        count = 0;
      }
    }
  }
  return result.sort((a, b) => a - b);
}

solution(graph, visited, n);
console.log(result.length);
console.log(result.join('\n'));