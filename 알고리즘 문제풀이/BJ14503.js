//65min

let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const [startX, startY, direction] = input[1].split(' ').map(Number);
const graph = input.slice(2).map(v => v.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution(n, m, startX, startY, direction, graph) {
    let count = 0;
    const queue = [[startX, startY, direction]];
    let head = 0;

    while (queue.length > head) {
        const [x, y, originalDir] = queue[head++];
        let dir = originalDir;

        if (graph[x][y] === 0) {
            graph[x][y] = 2;
            count++;
        }
        let isMoved = false;

        for (let i = 0; i < 4; i++) {
            dir = (dir + 3) % 4;
            const nx = x + dx[dir];
            const ny = y + dy[dir];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 0) {
                isMoved = true;
                queue.push([nx, ny, dir]);
                break;
            }
        }

        if (!isMoved) {
            const backDir = (dir + 2) % 4;
            if (graph[x + dx[backDir]][y + dy[backDir]] === 1) {
                break;
            }
            queue.push([x + dx[backDir], y + dy[backDir], dir]);
        }
    }
    return count;
}

console.log(solution(n, m, startX, startY, direction, graph));
