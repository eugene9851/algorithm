let input = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const [M, N, H] = input[0].split(' ').map(Number);
const box = Array.from({ length: H }, () => Array.from({ length: N }, () => Array.from({ length: M }, () => 0)));
for (let i = 0; i < H; i++) {
    box[i] = input.slice(i * N + 1, i * N + N + 1).map(v => v.split(' ').map(Number));
}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

function solution(M, N, H, box) {
    const queue = [];
    let head = 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                if (box[i][j][k] === 1) {
                    queue.push([i, j, k]);
                }
            }
        }
    }
    while (queue.length > head) {
        const [z, y, x] = queue[head++];
        for (let i = 0; i < 6; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            const nz = z + dz[i];
            if (nx >= 0 && nx < M && ny >= 0 && ny < N && nz >= 0 && nz < H && box[nz][ny][nx] === 0) {
                box[nz][ny][nx] = box[z][y][x] + 1;
                queue.push([nz, ny, nx]);
            }
        }
    }

    let maxDay = 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                if (box[i][j][k] === 0) return -1;
                maxDay = Math.max(maxDay, box[i][j][k]);
            }
        }
    }
    return maxDay - 1;
}

console.log(solution(M, N, H, box));