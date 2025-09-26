// 2hr
let input = require('fs').readFileSync('./example.txt').toString().trim().split('\n');

const [row, col, m] = input[0].split(' ').map(Number);
let graph = new Array(row + 1).fill(null).map(() => new Array(col + 1).fill(0));

for (let i = 1; i <= m; i++) {
    const [r, c, speed, direction, size] = input[i].split(' ').map(Number);
    graph[r][c] = [speed, direction, size];
}

const dx = [0, -1, 1, 0, 0];
const dy = [0, 0, 0, 1, -1];

function moveShark(x, y, speed, direction) {
    if (direction === 1 || direction === 2) {
        let cycle = (row - 1) * 2;
        let move = cycle === 0 ? 0 : speed % cycle;

        for (let i = 0; i < move; i++) {
            if (x === 1 && direction === 1) direction = 2;
            else if (x === row && direction === 2) direction = 1;

            x += dx[direction];
        }
    } else {
        let cycle = (col - 1) * 2;
        let move = cycle === 0 ? 0 : speed % cycle;

        for (let i = 0; i < move; i++) {
            if (y === 1 && direction === 4) direction = 3;
            else if (y === col && direction === 3) direction = 4;

            y += dy[direction];
        }
    }
    return [x, y, direction];
}

function updateGraph(graph) {
    const newGraph = new Array(row + 1).fill(null).map(() => new Array(col + 1).fill(0));

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (graph[i][j] !== 0) {
                const [speed, direction, size] = graph[i][j];
                const [nx, ny, dir] = moveShark(i, j, speed, direction);

                if (newGraph[nx][ny] === 0 || newGraph[nx][ny][2] < size) {
                    newGraph[nx][ny] = [speed, dir, size];
                }
            }
        }
    }
    return newGraph;
}

function solution() {
    let result = 0;

    for (let i = 1; i <= col; i++) {
        for (let j = 1; j <= row; j++) {
            if (graph[j][i] !== 0) {
                result += graph[j][i][2];
                graph[j][i] = 0;
                break;
            }
        }
        graph = updateGraph(graph);
    }
    return result;
}

console.log(solution());
