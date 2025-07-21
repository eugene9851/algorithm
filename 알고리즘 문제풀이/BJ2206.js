let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(v => v.split('').map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(x, y) {
    const visited = Array.from({ length: n }, () => Array.from({ length: k }, () => [false, false]));
    const queue = [[x, y, 0, 1]];
    visited[x][y][0] = true;
    let head = 0;

    while (head < queue.length) {
        const [x, y, isCrashed, dist] = queue[head++];
        if (x === n - 1 && y === k - 1) return dist;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < k && graph[nx][ny] === 0 && !visited[nx][ny][isCrashed]) {
                visited[nx][ny][isCrashed] = true;
                queue.push([nx, ny, isCrashed, dist + 1]);
            } else if (nx >= 0 && nx < n && ny >= 0 && ny < k && graph[nx][ny] === 1 && !isCrashed && !visited[nx][ny][1]) {
                visited[nx][ny][1] = true;
                queue.push([nx, ny, 1, dist + 1]);
            }
        }
    }
    return -1;
}

console.log(bfs(0, 0))