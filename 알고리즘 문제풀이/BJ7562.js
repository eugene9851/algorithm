let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const totalTestCase = Number(input[0]);

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

function solution(n, startX, startY, endX, endY) {
    const board = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const queue = [[startX, startY]];
    board[startX][startY] = 0;

    while (queue.length) {
        const [x, y] = queue.shift();
        if (x === endX && y === endY) return board[x][y];

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
                board[nx][ny] = board[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

for (let i = 1; i <= totalTestCase; i++) {
    const n = Number(input[i * 3 - 2]);
    const [startX, startY] = input[i * 3 - 1].split(' ').map(Number);
    const [endX, endY] = input[i * 3].split(' ').map(Number);
    console.log(solution(n, startX, startY, endX, endY));
}